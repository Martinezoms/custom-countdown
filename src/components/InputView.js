import { useEffect } from "react";

function InputView({ setCurrentPage, setCountdownTitle, setCountdownDate, setTime, setCountdownActive }) {
  let countdownValue = new Date();
  let active;
  let savedCountdown;

  const today = new Date().toISOString().split("T")[0];

  const updateValues = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    active = setInterval(() => {
      const now = new Date().getTime();

      // calculating needed parameters
      const distance = countdownValue - now;
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      if (distance < 0) {
        clearInterval(active);
        setCurrentPage("complete");
      } else {
        setTime({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds
        });
        setCountdownActive(active);
        setCurrentPage("countdown");
      }
    }, second);
  };

  const startCountdown = (e) => {
    e.preventDefault();
    const newDate = new Date(e.target[1].value).getTime();

    // Take values from input
    setCountdownTitle(e.target[0].value);
    setCountdownDate(e.target[1].value);

    // setting object to be saved on local storage
    savedCountdown = {
      title: e.target[0].value,
      date: e.target[1].value
    };
    localStorage.setItem("countdown", JSON.stringify(savedCountdown));

    // Get number version of current Date
    countdownValue = newDate;

    updateValues();
  };

  const restorePreviousCountdown = () => {
    if (localStorage.getItem("countdown")) {
      savedCountdown = JSON.parse(localStorage.getItem("countdown"));
      setCountdownTitle(savedCountdown.title);
      setCountdownDate(savedCountdown.date);
      countdownValue = new Date(savedCountdown.date).getTime();
      updateValues();
      setCurrentPage("countdown");
    }
  };

  useEffect(() => {
    restorePreviousCountdown();
  });

  return (
    <div className=" relative top-3 h-full flex flex-col items-center sub-container">
      <h1>Create a Custom Countdown!</h1>
      <form className="form m-auto" onSubmit={startCountdown}>
        <ul className="text-left ml-5">
          <li>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="What are you counting down to?" required />
          </li>
          <li>
            <label htmlFor="date-picker">Select a Date</label>
            <input type="date" min={today} id="date-picker" required />
          </li>
        </ul>
        <button className=" hover:brightness-110">Submit</button>
      </form>
    </div>
  );
}

export default InputView;
