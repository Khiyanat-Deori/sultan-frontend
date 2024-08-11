import { useMutation, useQueryClient } from 'react-query';
import useAxiosInterceptor from '../../hooks/useAxiosInterceptor';
import toast from 'react-hot-toast';
import { EditDeleteButton } from './Dashboard-styled';
import { BASE_URL } from '../../BaseUrl';

const Delete = ({ appointmentId, refetch }) => {
  const { axiosPrivate } = useAxiosInterceptor();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      await axiosPrivate.delete(`${BASE_URL}/api/form/delete/${appointmentId}`);
    },
    {
      onSuccess: () => {
        toast.success("Appointment deleted successfully", {
          duration: 2000,
          style: {
            fontSize: '18px',
            minWidth: '350px'
          }
        });
        queryClient.invalidateQueries('todaysAppointments');
        queryClient.invalidateQueries('totalAppointments');
        refetch();
      },
      onError: (error) => {
        toast.error(`Error: ${error.response?.data?.message || error.message}`, {
          duration: 2000,
          style: {
            fontSize: '18px',
            minWidth: '350px'
          }
        });
      },
    }
  );

  return (
    <EditDeleteButton onClick={() => {
      if (window.confirm("Are you sure you want to delete this appointment?")) {
        mutation.mutate();
      }
    }}>
      Delete
    </EditDeleteButton>
  );
};

export default Delete
