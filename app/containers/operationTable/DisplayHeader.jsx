import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

const DisplayHeader = ({ displayCount, totalCount, isFetched }) => {
  return !isFetched
    ? (<Skeleton variant="text" width={150} height={25}/>)
    : (
      <Typography>
        {
          isFetched && totalCount === 0
            ? 'No data to display'
            : `display ${displayCount}/${totalCount}`
        }
      </Typography>
    );
};

export default DisplayHeader;
