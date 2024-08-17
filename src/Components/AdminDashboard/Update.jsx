import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

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
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `https://sultan-hospital-backend-api.onrender.com/api/form/view/${appointmentId}`
        );
        setFormValues({
          patientName: data.patientName,
          phoneNumber: data.phoneNumber,
          timeSchedule: data.timeSchedule,
          date: new Date(data.date).toISOString().split("T")[0],
        });
      } catch (error) {
        toast.error(
          `Error fetching appointment: ${error.response?.data?.message || error.message}`
        );
      }
    };

    if (appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId, axiosPrivate]);

  const updateMutation = useMutation(
    async () => {
      await axiosPrivate.put(
        `https://sultan-hospital-backend-api.onrender.com/api/form/update/${appointmentId}`,
        formValues
      );
    },
    {
      onSuccess: () => {
        toast.success("Appointment updated successfully", {
          duration: 2000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        queryClient.invalidateQueries("totalAppointments");
        queryClient.invalidateQueries("todaysAppointments");
        refetch();
        setShowForm(false);
      },
      onError: (error) => {
        toast.error(
          `Error: ${error.response?.data?.message || error.message}`,
          {
            duration: 2000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate();
  };

  return (
    <>
      <button
        className="form-container__edit-btn"
        onClick={() => setShowForm(true)}
      >
        Edit
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
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              maxLength="10"
            />
            <label htmlFor="timeSchedule">Time Schedule:</label>
            <select
              id="timeSchedule"
              name="timeSchedule"
              value={formValues.timeSchedule}
              onChange={handleChange}
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
            />
            <div className="form-container__edit-btn" type="submit">
              Update
            </div>
            <div
              className="form-container__edit-btn"
              type="button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Update;
