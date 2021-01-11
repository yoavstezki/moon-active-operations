import React, { useMemo } from 'react';
import noop from 'lodash/noop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FixedSizeList } from 'react-window';
import { useFlexLayout, useTable } from 'react-table';
import InfiniteLoader from 'react-window-infinite-loader';
import Row from './Row';
import TableSkeleton from './skeleton/TableSkeleton';

const VirtualizedTable = ({ columns, data, hasNextPage, isFetchingNextPage, fetchNextPage, isFetched }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFlexLayout);

  const RenderRow = React.useCallback(
    ({ isScrolling, index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return <Row row={row} style={style} isScrolling={isScrolling} />;
    },
    [prepareRow, rows],
  );

  const columnsCount = useMemo(() => columns.filter(col => !!col.Header).length, [columns])

  return (
    <InfiniteLoader
      isItemLoaded={index => !hasNextPage || index < data.length}
      itemCount={hasNextPage ? data.length + 1 : data.length}
      loadMoreItems={isFetchingNextPage ? noop : fetchNextPage}
    >
      {({ onItemsRendered, ref }) => (
        <Table component="div" {...getTableProps()}>
          <TableHead component="div">
            {headerGroups.map(headerGroup => (
              <TableRow
                component="div" {...headerGroup.getHeaderGroupProps()}>
                <React.Fragment>
                  <TableCell component="div" padding="checkbox" />
                  {headerGroup.headers.map(column => (
                    <TableCell component="div" {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </TableCell>
                  ))}
                </React.Fragment>
              </TableRow>
            ))}
          </TableHead>

          <TableBody component="div" {...getTableBodyProps()}>
            {
              !isFetched
                ? <TableSkeleton columnsCount={columnsCount} />
                : (
                  <FixedSizeList
                    ref={ref}
                    height={550}
                    itemCount={rows.length}
                    onItemsRendered={onItemsRendered}
                    itemSize={53}
                    useIsScrolling
                  >
                    {RenderRow}
                  </FixedSizeList>
                )
            }
          </TableBody>
        </Table>
      )}
    </InfiniteLoader>
  );
};

export default VirtualizedTable;
