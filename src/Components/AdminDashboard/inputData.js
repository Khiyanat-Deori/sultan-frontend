const inputData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/310ac18a98cfaac54eaca7e3246a79307c7c8b0ff2dd0993434fd1a51c35ed3b?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Your Full Name",
    type: "text",
    id: "fullName",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/000a0d85b632aa2390eb0b9fa584bc6ed4d9bd4605b2a5c63913f788fef6b499?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Your Phone Number",
    type: "tel",
    id: "phoneNumber",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e835f99efe92624f7d1d5abe31689d75e2d1a6129fb840db15a4fe1eee5220e?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Select Date",
    type: "date",
    id: "appointmentDate",
    isDate: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fefbe1531046f8a7bb901dc17fd878fd5f3641b1bbc1109ef627456f1336f23?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Appointment Time",
    type: "select",
    id: "appointmentTime",
    options: [
      { value: "10:00-11:00", label: "10:00 - 11:00" },
      { value: "11:00-12:00", label: "11:00 - 12:00" },
      { value: "12:00-13:00", label: "12:00 - 13:00" },
      { value: "13:00-14:00", label: "13:00 - 14:00" },
      { value: "14:00-15:00", label: "14:00 - 15:00" },
      { value: "15:00-16:00", label: "15:00 - 16:00" },
    ],
  },
];
export default inputData;
