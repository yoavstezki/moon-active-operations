import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import useMessageStore from './messageStore';

const Message = () => {
  const { message, open, severity, autoHideDuration, setOpen } = useMessageStore();

  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={() => setOpen(false)}>
      <Alert severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
