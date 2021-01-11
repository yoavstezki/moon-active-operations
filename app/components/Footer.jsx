import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    display: 'flex',
    height: 25,
    borderTop: '1px solid rgba(0, 0, 0, 0.54)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body2" color="textSecondary">
        Powered By Yoov Stezki
      </Typography>
    </div>
  );
};

export default Footer;
