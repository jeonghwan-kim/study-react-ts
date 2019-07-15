import * as React from 'react';

interface DateStringProps {
  timestamp: number;
}

const DateString: React.FC<DateStringProps> = ({timestamp}) => {
  if (!timestamp) {
    return null;
  }

  const date = new Date(timestamp);
  return <span style={{ color: '#aaa' }}>{date.toLocaleString()}</span>
}

export default DateString;
