import React, { memo, useMemo, useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { areEqual } from 'react-window';
import { makeStyles } from '@material-ui/core';
import RowSkeleton from './skeleton/RowSkeleton';

const selectedBgColor = 'rgba(25, 118, 210, 0.08)';

const useStyles = makeStyles({
  checkbox: {
    marginTop: 5,
  },
  selected: {
    backgroundColor: `${selectedBgColor} !important`,
    '&:hover': {
      backgroundColor: `${selectedBgColor} !important`,
    },
  },
});

const Row = ({ row, style, isScrolling }) => {
  const [selected, setSelected] = useState(false);

  const classes = useStyles();
  const isSelected = selected[row.id];

  const columnsCount = useMemo(() => row.cells.filter(({ value }) => !!value).length, []);

  return (
    <TableRow
      component="div"
      role="checkbox"
      selected={isSelected}
      hover
      {...row.getRowProps({ style })}
      classes={{ selected: classes.selected }}
    >
      {
        isScrolling
          ? <RowSkeleton columnsCount={columnsCount} />
          : (
            <React.Fragment>
              <TableCell component="div" padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isSelected}
                  className={classes.checkbox}
                  onChange={() => setSelected(prevState => !prevState)}
                />
              </TableCell>

              {row.cells.map(cell => {
                return (
                  <TableCell component="div" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </React.Fragment>
          )

      }

    </TableRow>
  );
}

export default memo(Row, areEqual);


