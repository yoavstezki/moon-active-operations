import React from 'react';
import { useQuery } from 'react-query';
import OperationsTable from '../containers/operationTable/OperationsTable';
import { operations } from '../apiEndpoints';
import Loader from '../components/Loader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import useInsertOperations from '../hooks/operaation/useInsertOperations';

const useStyles = makeStyles({
  container: {
    height: '100%',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
});


const OperationsPage = () => {
  const { isLoading, data } = useQuery('operationSchema', operations.getSchema);

  const insertOperations = useInsertOperations();

  const classes = useStyles();

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <Typography variant="h5">
            Operations Table
          </Typography>
          <Button
            color="primary" variant="contained"
            onClick={() => insertOperations.mutate()}>
            Insert More Data
          </Button>
        </div>
        <OperationsTable columnsData={data} />
      </div>
    )
  );
};

export default OperationsPage;
