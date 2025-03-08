import { useEffect, useState } from "react";
import "./location.css";

const Location = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const getLondonTime = () => {
      const londonTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      });
      setCurrentTime(londonTime);
    };

    getLondonTime(); // Set initial time immediately
    const interval = setInterval(getLondonTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="location-time">
      <span className="country">London, UK</span>
      <span className="time">{currentTime}</span>
    </div>
  );
};

export default Location;
