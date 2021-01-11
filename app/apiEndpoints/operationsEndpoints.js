import axios from 'axios';

export default {
  insertData: () => axios.post('/api/v1/operation/insertData'),
  getOperations: ({ skip, limit }) => axios.get('/api/v1/operation', { params: { skip, limit } }),
  editOperation: ({ id, ...rest }) => axios.put(`/api/v1/operation/${id}`, { ...rest }),
  duplicateOperation: ({ id }) => axios.post(`/api/v1/operation/${id}/duplicate`),
  deleteOperation: ({ id }) => axios.delete(`/api/v1/operation/${id}`),
  getSchema: async () => {
    const { data } = await axios.get('/api/v1/operation/schema');
    return data;
  },
}
