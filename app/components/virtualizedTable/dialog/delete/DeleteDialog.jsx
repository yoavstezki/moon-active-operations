import React, { memo, useCallback } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useDeleteDialogStore from './deleteDialogStore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  dialogTitle: {
    paddingBottom: 2,
  },
});

const DeleteDialog = ({ deleteMutation }) => {
  const { open, setOpen, row, setRow } = useDeleteDialogStore();

  const classes = useStyles();

  const onClose = useCallback(() => {
    setOpen(false);
    setRow({});
  }, []);

  const onDelete = useCallback(() => {
    deleteMutation.mutate({ id: row.original._id });
    onClose();
  }, [row]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle disableTypography classes={{ root: classes.dialogTitle }}>
        <Typography variant="h6" color="primary">
          Delete Operation
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete the operation?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button size="small" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(DeleteDialog)
