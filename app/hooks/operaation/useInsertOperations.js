import { operations } from '../../apiEndpoints';
import { useMutation, useQueryClient } from 'react-query';
import useMessageStore from '../../components/message/messageStore';

const useInsertOperations = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useMessageStore();

  return useMutation(operations.insertData, {
    onSuccess: async () => {
      onSuccess('Insert operations successfully')
      await queryClient.refetchQueries('operations');
    },
    onError: () => onError('Failed to insert operations'),
  });
}

export default useInsertOperations;
