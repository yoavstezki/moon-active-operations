import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import useEditDialogStore from './editDialogStore';
import { makeStyles } from '@material-ui/core';
import EditForm from './EditForm';

const useStyles = makeStyles({
  paper: {
    width: 350,
  },
  dialogTitle: {
    paddingBottom: 2,
  },
});

const EditDialog = ({ schema, validation, onSubmit }) => {
  const { open, setOpen, row, setRow } = useEditDialogStore();

  const classes = useStyles();

  const onClose = useCallback(() => {
    setOpen(false);
    setRow({});
  }, []);

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.paper }} disableBackdropClick>
      <DialogTitle disableTypography classes={{ root: classes.dialogTitle }}>
        <Typography variant="h6" color="primary">
          Edit Operation
        </Typography>
      </DialogTitle>
      <DialogContent>
        <EditForm data={row} schema={schema} validate={validation} onSubmit={onSubmit} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
