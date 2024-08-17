import styled from "styled-components";
import DatePicker from "react-datepicker"; // Import the date picker library
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentFormStyled = styled.form`
  border-radius: 20px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25),
    2px 4px 8px #fff;
  border: 1px solid #ce4141;
  background-color: #fff;
  display: flex;
  max-width: 400px; /* Increase the width */
  flex-direction: column;
  font-size: 16px; /* Increase the font size */
  color: #000;
  font-weight: 400;
  padding: 30px 60px; /* Increase the padding */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputGroupStyled = styled.div`
  display: flex;
  gap: 12px; /* Increase the gap */
  margin-top: 24px; /* Increase the margin */

  &:first-child {
    margin-top: 0;
  }
`;

export const IconStyled = styled.img`
  aspect-ratio: 0.94;
  object-fit: auto;
  object-position: center;
  width: 24px; /* Increase the width */
  margin: 1px 0 18px 0;
`;

export const InputLabelStyled = styled.input`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 20px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none; /* Remove all borders */
  border-bottom: 2px solid #000000; /* Add bottom border */
  outline: none; /* Remove the default outline on focus */
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141; /* Ensure the bottom border color remains on focus */
  }
`;

export const SubmitButtonStyled = styled.button`
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ce4141;
  align-self: center;
  margin-top: 30px; /* Increase the margin */
  color: #fff;
  justify-content: center;
  padding: 12px 18px; /* Increase the padding */
  font:
    600 16px Open Sans,
    sans-serif; /* Increase the font size */
  border: none;
  cursor: pointer;
`;

export const CustomDatePicker = styled(DatePicker)`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 10px; // Add some space below the error message
`;

export const BackButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;
