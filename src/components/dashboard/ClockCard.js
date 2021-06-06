import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const ClockCard = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={new Date()} size={200} />
    </div>
  )
}

export default ClockCard