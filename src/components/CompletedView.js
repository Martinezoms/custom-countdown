function CompletedView({ setCurrentPage }) {
  return (
    <div className=" relative top-3  h-full flex flex-col items-center justify-around">
      <h1 className="complete-title">Countdown Complete!</h1>
      <h1>Countdown finished on 05-05-2022</h1>
      <button className=" hover:brightness-110" onClick={() => setCurrentPage("home")}>
        New Countdown
      </button>
    </div>
  );
}

export default CompletedView;
