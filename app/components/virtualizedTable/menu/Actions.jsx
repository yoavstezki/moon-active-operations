import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import MenuActions from './MenuActions';

const useStyles = makeStyles({
  iconButton: {
    padding: 0,
  },
});

const Actions = ({ row, duplicateMutation }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton classes={{ root: classes.iconButton }} onClick={handleClick}>
        <MoreHoriz />
      </IconButton>
      <MenuActions
        row={row}
        anchorEl={anchorEl}
        handleClose={handleClose}
        duplicateMutation={duplicateMutation}
      />
    </React.Fragment>
  );
};

export default Actions;
