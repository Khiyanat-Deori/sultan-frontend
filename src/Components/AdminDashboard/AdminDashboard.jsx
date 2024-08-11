import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  LogoutButton,
  Main,
  CardContainer,
  Card,
  CardContent,
  Count,
  Description,
} from "./Dashboard-styled";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import TotalAppointments from "./TotalAppointments";
import ViewTodaysAppointment from "./ViewTodaysAppointment";
import TomorrowsAppointment from "./TomorrowsAppointment";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { BASE_URL } from "../../BaseUrl";

const fetchTodaysAppointments = async (axiosPrivate) => {
  try {
    const response = await axiosPrivate.get(
      `${BASE_URL}/api/form/todays-appointments`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching appointments");
  }
};

const fetchTotalAppointments = async (axiosPrivate) => {
  try {
    const response = await axiosPrivate.get(
      `${BASE_URL}/api/form/view`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching appointments");
  }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { axiosPrivate } = useAxiosInterceptor();
  const [view, setView] = useState("total");
  const { setAuth } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosPrivate.get(
          `${BASE_URL}/api/admin/adminDashboard`
        );
      } catch (error) {
        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    };
    checkAuth();
  }, [axiosPrivate, navigate]);

  const { data: todaysAppointments, error: todaysAppointmentsError } = useQuery(
    "todaysAppointments",
    () => fetchTodaysAppointments(axiosPrivate)
  );

  const { data: totalAppointments, error: totalAppointmentsError } = useQuery(
    "totalAppointments",
    () => fetchTotalAppointments(axiosPrivate)
  );

  if (todaysAppointmentsError || totalAppointmentsError) {
    return <div>Error loading data</div>;
  }

  const todaysAppointmentsCount =
    (todaysAppointments && todaysAppointments.length) || 0;
  const totalAppointmentsCount =
    (totalAppointments && totalAppointments.length) || 0;

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/admin/logout`,
        {},
        { withCredentials: true }
      );
      setAuth({});
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Logo>
            <img
              src="https://i.ibb.co/pPRBdMz/shrc-logo-new.png"
              alt="Sultan Hospital Logo"
            />
            <h1>Sultan Hospital</h1>
          </Logo>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </Header>
        <Main>
          <div className="welcome-message">
            <h2>Welcome Admin!</h2>
          </div>
        </Main>
        <CardContainer>
          <Card onClick={() => setView("todays")}>
            <CardContent>
              <Count>{todaysAppointmentsCount}</Count>
            </CardContent>
            <Description>Appointments Today</Description>
          </Card>
          <Card onClick={() => setView("tomorrows")}>
            <CardContent>
              <Count>View</Count>
            </CardContent>
            <Description>Tomorrow's Appointments</Description>
          </Card>
          <Card onClick={() => setView("total")}>
            <CardContent>
              <Count>{totalAppointmentsCount}</Count>
            </CardContent>
            <Description>Total Appointments</Description>
          </Card>
          <Card onClick={() => navigate("/create")}>
            <CardContent>
              <Count>Create</Count>
            </CardContent>
            <Description>Appointment</Description>
          </Card>
        </CardContainer>
      </Container>
      {view === "total" && <TotalAppointments />}
      {view === "todays" && <ViewTodaysAppointment />}
      {view === "tomorrows" && <TomorrowsAppointment />}
      <Outlet />
    </>
  );
};

export default AdminDashboard;
