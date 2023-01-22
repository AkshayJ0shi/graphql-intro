import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutation';
import { GET_CLIENTS } from '../queries/clientQueries';
// import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // We have to options here. One is we can refetch all the clients like on the line above or we can update the cache which is preferred route.
    // here we are grabbing clients array by reading cache for the query GET_CLIENTS
    // then we are filtering out the deleted 
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}