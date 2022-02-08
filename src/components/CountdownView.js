function CountdownView({
  setCurrentPage,
  countdownTitle,
  days,
  hours,
  minutes,
  seconds,
  countdownActive,
  setCountdownTitle,
  setCountdownDate,
  setTime,
  setCountdownActive
}) {
  const resetValues = () => {
    clearInterval(countdownActive);
    setCountdownTitle("");
    setCountdownDate("");
    setCountdownActive("");
    setTime({
      days: "",
      hours: "",
      minutes: "",
      seconds: ""
    });
    setCurrentPage("home");
    localStorage.removeItem("countdown");
  };

  return (
    <div className=" relative top-3 h-full flex flex-col items-center sub-container">
      <h1>{countdownTitle}</h1>
      <div className="form space-y-10 ">
        <ul className=" space-x-5">
          <li className=" inline-block">
            <span>{days}</span>
            Days
          </li>
          <li className=" inline-block">
            <span>{hours}</span>
            Hours
          </li>
          <li className=" inline-block">
            <span>{minutes}</span>
            Minutes
          </li>
          <li className=" inline-block">
            <span>{seconds}</span>
            Seconds
          </li>
        </ul>
        <button className=" hover:brightness-110" onClick={resetValues}>
          reset
        </button>
      </div>
    </div>
  );
}

export default CountdownView;
