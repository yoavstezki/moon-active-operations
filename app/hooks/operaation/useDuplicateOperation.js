import { useMutation, useQueryClient } from 'react-query';
import { operations } from '../../apiEndpoints';
import useMessageStore from '../../components/message/messageStore';

const useDuplicateOperation = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useMessageStore();

  return useMutation(operations.duplicateOperation, {
    onSuccess: async () => {
      onSuccess('Duplicate operation successfully');
      await queryClient.invalidateQueries('operations');
    },
    onError: () => onError('Failed to duplicate operation'),
  })

};

export default useDuplicateOperation;


