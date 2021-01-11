import React, { memo } from 'react';
import times from 'lodash/times';
import { makeStyles } from '@material-ui/core';
import RowSkeleton from './RowSkeleton';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

const TableSkeleton = ({ columnsCount }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {
        times(10, i => <RowSkeleton key={i} columnsCount={columnsCount} />)
      }
    </div>
  );
}

export default memo(TableSkeleton);
