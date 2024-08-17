import React from "react";
import { useQuery } from "react-query";
import Update from "./Update";
import Delete from "./Delete";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import { Toaster } from "react-hot-toast";

const ViewTodaysAppointment = () => {
  const { axiosPrivate } = useAxiosInterceptor();

  const fetchAppointments = async () => {
    const { data } = await axiosPrivate.get(
      "https://sultan-hospital-backend-api.onrender.com/api/form/todays-appointments"
    );
    return data;
  };

  const { data, error, isLoading, refetch } = useQuery(
    "appointments",
    fetchAppointments
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${day}-${month}-${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };
  //tommorrowAppoint && TotalAppointment && ViewTodays-Apt === same UI
  return (
    <>
      <div className="tomorrow-apt__container">
        <Toaster />
        <div className="table-container">
          <h2>Today'S Appointments</h2>
          <table className="table-look">
            <thead>
              <tr>
                <th className="th-column">S.No.</th>
                <th className="th-column">Name</th>
                <th className="th-column">Phone Number</th>
                <th className="th-column">Time Schedule</th>
                <th className="th-column">Date</th>
                <th className="th-column">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((appointment, index) => (
                <tr key={appointment._id}>
                  <td className="td-row">{index + 1}</td>
                  <td className="td-row">{appointment.patientName}</td>
                  <td className="td-row">{appointment.phoneNumber}</td>
                  <td className="td-row">{appointment.timeSchedule}</td>
                  <td className="td-row">{formatDate(appointment.date)}</td>
                  <td className="td-row">
                    <Update appointmentId={appointment._id} refetch={refetch} />
                    <Delete appointmentId={appointment._id} refetch={refetch} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewTodaysAppointment;
