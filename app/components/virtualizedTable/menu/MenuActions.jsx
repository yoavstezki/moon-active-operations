import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/edit';
import DuplicateIcon from '@material-ui/icons/fileCopy';
import DeleteIcon from '@material-ui/icons/delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import useDeleteDialogStore from '../dialog/delete/deleteDialogStore';
import useEditDialogStore from '../dialog/edit/editDialogStore';

const useStyles = makeStyles({
  listItemIcon: {
    minWidth: 32,
  },
});

const MenuActions = ({ row, anchorEl, handleClose, duplicateMutation }) => {
  const classes = useStyles();

  const { setOpen: setDeleteDialogOpen, setRow: setRowForDelete } = useDeleteDialogStore();
  const { setOpen: setEditDialogOpen, setRow: setRowForEdit } = useEditDialogStore();

  const openDeleteDialog = () => {
    setRowForDelete(row);
    setDeleteDialogOpen(true);
    handleClose();
  };

  const openEditDialog = () => {
    setRowForEdit(row);
    setEditDialogOpen(true);
    handleClose();
  };

  const duplicateRow = () => {
    duplicateMutation.mutate({ id: row.original._id });
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={openEditDialog}>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <EditIcon fontSize="small" color="action" />
        </ListItemIcon>
        <Typography color="primary">Edit</Typography>
      </MenuItem>
      <MenuItem onClick={duplicateRow}>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <DuplicateIcon fontSize="small" color="action" />
        </ListItemIcon>
        <Typography color="primary">Duplicate</Typography>
      </MenuItem>
      <MenuItem onClick={openDeleteDialog}>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <DeleteIcon fontSize="small" color="action" />
        </ListItemIcon>
        <Typography color="error">Delete</Typography>
      </MenuItem>
    </Menu>
  );
};

export default MenuActions;
