import { useInfiniteQuery } from 'react-query';
import { operations } from '../../apiEndpoints';

const LiMIT = 500;

const useOperations = () => useInfiniteQuery(
  'operations',
  async ({ pageParam = 0 }) => {
    const skip = pageParam * LiMIT;
    const res = await operations.getOperations({ skip, limit: LiMIT });
    return res.data;
  },
  {
    getNextPageParam: (lastPage, allPages) =>
      allPages.length * LiMIT < lastPage.totalCount
        ? allPages.length + 1
        : undefined,
  },
);

export default useOperations;
