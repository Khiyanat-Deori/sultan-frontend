import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import inputData from "./inputData.js";
import InputGroup from "./InputGroup.jsx";

const CreateAppointment = () => {
  const navigate = useNavigate();
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) =>
      axios.post(
        "https://sultan-hospital-backend-api.onrender.com/api/form/create",
        newAppointment
      ),
    {
      onSuccess: () => {
        toast.success("Appointment created successfully!", {
          duration: 1000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        setFormValues(initialFormValues);
        setReset(true);
        setTimeout(() => setReset(false), 0);
        setTimeout(() => navigate("/adminDashboard"), 3000);
      },
      onError: (error) => {
        toast.error(
          `Failed to create appointment: ${error.response?.data?.message || error.message}`,
          {
            duration: 3000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = formValues;
    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error(
        "Please enter a valid 10 digit phone number starting with 9, 8, 7, or 6",
        {
          duration: 3000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        }
      );
      return;
    }
    const appointmentData = {
      patientName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      date: formValues.appointmentDate.toISOString(),
      timeSchedule: formValues.appointmentTime,
    };
    mutation.mutate(appointmentData);
  };

  return (
    <>
      <Toaster />
      <button
        className="create-apt__back-btn"
        onClick={() => navigate("/adminDashboard")}
      >
        Back to Dashboard
      </button>
      <div className="create-apt__form" onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup
            key={index}
            {...input}
            value={formValues[input.id]}
            onChange={handleInputChange}
            reset={reset}
          />
        ))}
        <button className="create-apt__submit-btn" type="submit">
          Create an Appointment
        </button>
      </div>
    </>
  );
};

export default CreateAppointment;
