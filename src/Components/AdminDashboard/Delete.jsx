import { useMutation, useQueryClient } from "react-query";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import toast from "react-hot-toast";

const Delete = ({ appointmentId, refetch }) => {
  const { axiosPrivate } = useAxiosInterceptor();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      await axiosPrivate.delete(
        `https://sultan-hospital-backend-api.onrender.com/api/form/delete/${appointmentId}`
      );
    },
    {
      onSuccess: () => {
        toast.success("Appointment deleted successfully", {
          duration: 2000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        queryClient.invalidateQueries("todaysAppointments");
        queryClient.invalidateQueries("totalAppointments");
        refetch();
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

  return (
    <>
      <button
        className="form-container_delete-btn"
        onClick={() => {
          if (
            window.confirm("Are you sure you want to delete this appointment?")
          ) {
            mutation.mutate();
          }
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Delete;
