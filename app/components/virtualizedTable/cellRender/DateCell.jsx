import React from 'react';
import TextCell from './TextCell';

const OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric"
};

export default ({ value }) => <TextCell value={new Date(value).toLocaleString('en', OPTIONS)} />;
