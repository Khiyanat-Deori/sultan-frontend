import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import { BASE_URL } from "../../BaseUrl";

const timeOptions = [
  { value: "10:00-11:00", label: "10:00 - 11:00" },
  { value: "11:00-12:00", label: "11:00 - 12:00" },
  { value: "12:00-13:00", label: "12:00 - 13:00" },
  { value: "13:00-14:00", label: "13:00 - 14:00" },
  { value: "14:00-15:00", label: "14:00 - 15:00" },
  { value: "15:00-16:00", label: "15:00 - 16:00" },
];

const Update = ({ appointmentId, refetch }) => {
  const { axiosPrivate } = useAxiosInterceptor();
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = useState({
    patientName: "",
    phoneNumber: "",
    timeSchedule: "",
    date: "",
  });
  const [originalDate, setOriginalDate] = useState(null); // Store the original date and time
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const { data } = await axiosPrivate.get(`${BASE_URL}/api/form/view/${appointmentId}`);
        const appointmentDate = new Date(data.date);
        setFormValues({
          patientName: data.patientName,
          phoneNumber: data.phoneNumber,
          timeSchedule: data.timeSchedule,
          date: appointmentDate.toISOString().split("T")[0], // Only set the date part for the form
        });
        setOriginalDate(appointmentDate); // Store the original date and time
      } catch (error) {
        if (error.response?.status === 404) {
          setFormValues({
            patientName: "",
            phoneNumber: "",
            timeSchedule: "",
            date: "",
          });
          setShowForm(false); // Optionally hide the form if appointment is not found
        } else {
          toast.error(`Error fetching appointment: ${error.response?.data?.message || error.message}`);
        }
      }
    };

    if (appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId, axiosPrivate]);

  const updateMutation = useMutation(
    async (updatedFormValues) => {
      await axiosPrivate.put(`${BASE_URL}/api/form/update/${appointmentId}`, updatedFormValues);
    },
    {
      onSuccess: () => {
        toast.success("Appointment updated successfully", {
          duration: 1200,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        queryClient.invalidateQueries("totalAppointments");
        queryClient.invalidateQueries("todaysAppointments");
        queryClient.invalidateQueries("tomorrowsAppointments");
        refetch();
        setShowForm(false);
      },
      onError: (error) => {
        toast.error(`Error: ${error.response?.data?.message || error.message}`, {
          duration: 2000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (originalDate) {
      // Get the selected date from the form
      const selectedDate = new Date(formValues.date);

      // Merge the selected date with the original time component
      const updatedDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        originalDate.getHours(),
        originalDate.getMinutes(),
        originalDate.getSeconds(),
        originalDate.getMilliseconds()
      );

      const updatedFormValues = {
        ...formValues,
        date: updatedDate, // Set the merged date and time
      };

      updateMutation.mutate(updatedFormValues);
    }
  };

  return (
    <>
      <button
        className="form-container__edit-btn"
        onClick={() => setShowForm(true)}
        disabled={updateMutation.isLoading}
      >
        {updateMutation.isLoading ? "Updating..." : "Edit"}
      </button>
      {showForm && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formValues.patientName}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              maxLength="10"
              required
            />
            <label htmlFor="timeSchedule">Time Schedule:</label>
            <select
              id="timeSchedule"
              name="timeSchedule"
              value={formValues.timeSchedule}
              onChange={handleChange}
              required
            >
              <option value="">Select time</option>
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
              required
            />
            <button className="form-container__edit-btn" type="submit" disabled={updateMutation.isLoading}>
              {updateMutation.isLoading ? "Updating..." : "Update"}
            </button>
            <button
              className="form-container__edit-btn"
              type="button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Update;

