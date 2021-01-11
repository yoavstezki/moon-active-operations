import { useMutation, useQueryClient } from 'react-query';
import { operations } from '../../apiEndpoints';
import useMessageStore from '../../components/message/messageStore';

const useEditOperation = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useMessageStore();

  return useMutation(operations.editOperation, {
    onSuccess: async () => {
      onSuccess('Edit operation successfully');
      await queryClient.invalidateQueries('operations');
    },
    onError: () => onError('Failed to edit operation'),
  })
};

export default useEditOperation;


