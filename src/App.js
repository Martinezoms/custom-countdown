import { useState } from "react";
import { VideoBackground } from "./components/VideoBackground";
import InputView from "./components/InputView";
import CountdownView from "./components/CountdownView";
import CompletedView from "./components/CompletedView";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [countdownTitle, setCountdownTitle] = useState("");
  const [countdownDate, setCountdownDate] = useState("");
  const [countdownActive, setCountdownActive] = useState("");
  const [time, setTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  });

  return (
    <div className="App">
      <VideoBackground />

      <div className="container">
        {currentPage === "home" ? (
          <InputView
            setCurrentPage={setCurrentPage}
            setCountdownTitle={setCountdownTitle}
            setCountdownDate={setCountdownDate}
            time={time}
            setTime={setTime}
            setCountdownActive={setCountdownActive}
          />
        ) : currentPage === "countdown" ? (
          <CountdownView
            setCurrentPage={setCurrentPage}
            countdownTitle={countdownTitle}
            {...time}
            countdownActive={countdownActive}
            setCountdownTitle={setCountdownTitle}
            setCountdownDate={setCountdownDate}
            setCountdownActive={setCountdownActive}
            setTime={setTime}
          />
        ) : currentPage === "complete" ? (
          <CompletedView
            setCurrentPage={setCurrentPage}
            countdownTitle={countdownTitle}
            setCountdownTitle={setCountdownTitle}
            countdownDate={countdownDate}
            setCountdownDate={setCountdownDate}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
