import React, { memo } from 'react';
import times from 'lodash/times';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  skeleton: {
    height: 25,
    width: ({ width }) => `${width}%`,
  },
  margin: {
    marginRight: 54,
    marginTop: 12,
    marginBottom: 12,
  },
  checkbox: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  }
});

const RowSkeleton = ({ columnsCount }) => {
  const classes = useStyles({ width: Math.ceil(75 / columnsCount)  });

  return (
    <div className={classes.row}>
      <Skeleton className={classNames(classes.checkbox, classes.margin)} variant="rect" width={20}  />
      {
        times(columnsCount, i => (
            <Skeleton
              className={classNames(classes.skeleton, classes.margin)}
              variant="rect"
              key={i} />
          ),
        )
      }
    </div>
  );

};

export default memo(RowSkeleton);
