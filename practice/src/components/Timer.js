import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <span>타이머 시작 {time}</span>
    </div>
  );
};
export default Timer;
