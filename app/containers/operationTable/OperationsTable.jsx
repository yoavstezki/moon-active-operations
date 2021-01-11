import React, { useCallback, useMemo } from 'react';
import flatten from 'lodash/flatten';
import startCase from 'lodash/startCase';
import { makeStyles } from '@material-ui/core';
import VirtualizedTable from '../../components/virtualizedTable/VirtualizedTable';
import Paper from '@material-ui/core/Paper';
import useOperations from '../../hooks/operaation/useOperaations';
import cellRenderers from '../../components/virtualizedTable/cellRender';
import useDuplicateOperation from '../../hooks/operaation/useDuplicateOperation';
import useDeleteOperation from '../../hooks/operaation/useDeleteOperation';
import useEditOperation from '../../hooks/operaation/useEditOperation';
import ActionsCell from '../../components/virtualizedTable/cellRender/ActionsCell';
import DeleteDialog
  from '../../components/virtualizedTable/dialog/delete/DeleteDialog';
import DisplayHeader from './DisplayHeader';
import EditDialog from '../../components/virtualizedTable/dialog/edit/EditDialog';
import operationValidation from './operationValidation';

const useStyles = makeStyles({
  tableContainer: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 10,
    margin: 10,
  },
});

const OperationsTable = ({ columnsData }) => {
  const classes = useStyles();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetched } = useOperations();
  const duplicateOperation = useDuplicateOperation();
  const deleteOperationMutation = useDeleteOperation();
  const editOperationMutation = useEditOperation();

  const columns = useMemo(() => [
    ...columnsData.map(column => ({
        Header: startCase(column.key),
        accessor: column.key,
        Cell: cellRenderers[column.type],
      }
    )),
    {
      accessor: 'actions',
      width: 35,
      Cell: ({ row }) => (
        <ActionsCell
          row={row}
          duplicateMutation={duplicateOperation}
        />
      ),
    },
  ], [columnsData]);
  const tableData = data ? flatten(data.pages.map(page => page.operations)) : [];

  const onSubmit = useCallback(({ id, ...rest }) => editOperationMutation.mutate({ id, ...rest }), [editOperationMutation]);

  return (
    <div className={classes.container}>

      <DisplayHeader
        displayCount={tableData.length}
        totalCount={data && data.pages[0] && data.pages[0].totalCount}
        isFetched={isFetched}
      />

      <Paper className={classes.tableContainer}>
        <VirtualizedTable
          columns={columns}
          data={tableData}
          isFetched={isFetched}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
        <DeleteDialog deleteMutation={deleteOperationMutation} />
        <EditDialog schema={columnsData} validation={operationValidation} onSubmit={onSubmit}  />
      </Paper>
    </div>
  );
};

export default OperationsTable;
