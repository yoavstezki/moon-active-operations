import React, { memo } from 'react';
import Actions from '../menu/Actions'

const ActionsCell = ({ row, duplicateMutation }) => {
  return (
    <Actions row={row} duplicateMutation={duplicateMutation} />
  )
}

export default memo(ActionsCell);
