import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import config from "../config";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date(config.date).getTime()
  );
  const changeCountdownDate = (event) => {
    const { name, value } = event.target;
    setCountdownDate({
      ...countdownDate,
      [name]: value
    });
  };
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000).toFixed(
        2
      );

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  };

  return (
    <div className="countdown-wrapper">
      <Box name="days" value={state.days}></Box>
      <Divider />
      <Box name="hours" value={state.hours}></Box>
      <Divider />
      <Box name="minutes" value={state.minutes}></Box>
    </div>
  );
};

const Divider = () => (
  <div className="time-section">
    <div className="time">:</div>
  </div>
);

const Box = ({ name, value }) => (
  <div
    className="time-section"
    data-aos="flip-down"
    data-aos-delay="500"
    data-aos-duration="2000"
  >
    <div className="time">{value || "0"}</div>
    <small className="time-text">
      <FormattedMessage id={`label.${name}`} />
    </small>
  </div>
);

export default Countdown;
