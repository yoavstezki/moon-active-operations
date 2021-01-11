import React from 'react';
import Typography from '@material-ui/core/Typography';

const TextCell = ({ value }) => {
  return (
    <Typography component="div" noWrap>
      {value}
    </Typography>
  )
}

export default TextCell;
