import React, { useState, useEffect } from "react";


function TimeDisplay({ time }) {
  return (
    <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
      {time.toLocaleTimeString()}
    </h2>
  );
}


function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Bài 5: Đồng hồ</h1>
      <TimeDisplay time={time} />
    </div>
  );
}

export default Clock;
