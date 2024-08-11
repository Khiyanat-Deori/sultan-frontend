import React from "react";
import { Container, TableContainer, Table, Th, Td } from "./Dashboard-styled";
import { useQuery } from "react-query";
import Update from "./Update";
import Delete from "./Delete";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../BaseUrl";

const TotalAppointments = () => {
  const { axiosPrivate } = useAxiosInterceptor();

  const fetchAppointments = async () => {
    const { data } = await axiosPrivate.get(
      `${BASE_URL}/api/form/view`
    );
    return data;
  };

  const { data, error, isLoading, refetch } = useQuery("appointments", fetchAppointments);

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

  return (
    <Container>
      <Toaster />
      <TableContainer>
        <h2>ALL APPOINTMENTS</h2>
        <Table>
          <thead>
            <tr>
              <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Time Schedule</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment, index) => (
              <tr key={appointment._id}>
                <Td>{index + 1}</Td>
                <Td>{appointment.patientName}</Td>
                <Td>{appointment.phoneNumber}</Td>
                <Td>{appointment.timeSchedule}</Td>
                <Td>{formatDate(appointment.date)}</Td>
                <Td>
                <Update appointmentId={appointment._id} refetch={refetch} />
                  <Delete appointmentId={appointment._id} refetch={refetch} />
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TotalAppointments;
