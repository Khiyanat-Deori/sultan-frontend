import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import {
  AppointmentFormStyled,
  InputGroupStyled,
  IconStyled,
  InputLabelStyled,
  SubmitButtonStyled,
  SelectStyled,
  OptionStyled,
  CustomDatePicker,
  ErrorMessageStyled,
  BackButtonStyled,
} from "./style";
import { useNavigate } from "react-router-dom";
import inputData from "./inputData.js";
import { BASE_URL } from "../../BaseUrl.js";

const InputGroup = ({
  icon,
  label,
  type,
  id,
  options,
  isDate,
  value,
  onChange,
  reset,
}) => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsTouched(false);
      setIsPhoneValid(true);
    }
  }, [reset]);

  useEffect(() => {
    if (type === "tel" && isTouched) {
      setIsPhoneValid(value.length === 10 && /^[9876]/.test(value));
    }
  }, [value, type, isTouched]);

  const handleDateChange = (date) => {
    onChange(id, date);
  };

  const handlePhoneChange = (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }
    setIsPhoneValid(newValue.length === 10 && /^[9876]/.test(newValue));
    onChange(id, newValue);
    setIsTouched(true);
  };

  const handleInputChange = (event) => {
    onChange(id, event.target.value);
    if (type === "tel") setIsTouched(true);
  };

  return (
    <div>
      <InputGroupStyled>
        <IconStyled src={icon} alt="" />
        {type === "select" ? (
          <SelectStyled
            id={id}
            aria-label={label}
            required
            onChange={handleInputChange}
            value={value}
          >
            <option value="" disabled>
              {label}
            </option>
            {options.map((option, index) => (
              <OptionStyled key={index} value={option.value}>
                {option.label}
              </OptionStyled>
            ))}
          </SelectStyled>
        ) : isDate ? (
          <CustomDatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            required
          />
        ) : type === "tel" ? (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handlePhoneChange}
            pattern="\d*"
            required
          />
        ) : (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handleInputChange}
            required
          />
        )}
      </InputGroupStyled>
      {type === "tel" && !isPhoneValid && isTouched && (
        <ErrorMessageStyled>
          Please enter a 10 digit number starting with 9, 8, 7, or 6
        </ErrorMessageStyled>
      )}
    </div>
  );
};

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
      axios.post(`${BASE_URL}/api/form/create`, newAppointment),
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
      <BackButtonStyled onClick={() => navigate("/adminDashboard")}>
        Back to Dashboard
      </BackButtonStyled>
      <AppointmentFormStyled onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup
            key={index}
            {...input}
            value={formValues[input.id]}
            onChange={handleInputChange}
            reset={reset}
          />
        ))}
        <SubmitButtonStyled type="submit">
          Create an Appointment
        </SubmitButtonStyled>
      </AppointmentFormStyled>
    </>
  );
};

export default CreateAppointment;
