import { useEffect, useState } from "react";
import "./location.css";

const Location = () => {
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const timeOfDay = currentHour > 12 ? "pm" : "am";
  const addZeroToMinute =
    currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`;
  const addZeroToHour = currentHour < 10 ? `0${currentHour}` : `${currentHour}`;

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentHour(hours);
      setCurrentMinute(minutes);
    };
    const interval = setInterval(() => {
      getCurrentTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentMinute, currentHour]);

  return (
    <div className="location-time">
      <span className="country">London, UK</span>
      <span className="time">
        {addZeroToHour}:{addZeroToMinute}
        {timeOfDay}
      </span>
    </div>
  );
};

export default Location;
