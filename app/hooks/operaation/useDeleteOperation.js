import { useMutation, useQueryClient } from 'react-query';
import { operations } from '../../apiEndpoints';
import useMessageStore from '../../components/message/messageStore';

const useDeleteOperation = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useMessageStore();

  return useMutation(operations.deleteOperation, {
    onSuccess: async () => {
      onSuccess('Operation successfully deleted');
      await queryClient.invalidateQueries('operations');
    },
    onError: () => onError('Failed to delete operation'),
  })

};

export default useDeleteOperation;


