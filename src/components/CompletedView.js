function CompletedView({ setCurrentPage, countdownTitle, setCountdownTitle, countdownDate, setCountdownDate }) {
  const resetForNewCountdown = () => {
    setCountdownDate("");
    setCountdownTitle("");
    localStorage.removeItem("countdown");
    setCurrentPage("home");
  };
  return (
    <div className=" relative top-3  h-full flex flex-col items-center justify-around">
      <h1 className="complete-title">Countdown Complete!</h1>
      <h1>
        {countdownTitle} countdown finished on {countdownDate}
      </h1>
      <button className=" hover:brightness-110" onClick={resetForNewCountdown}>
        New Countdown
      </button>
    </div>
  );
}

export default CompletedView;
