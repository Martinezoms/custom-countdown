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
          />
        ) : "countdown" ? (
          <CountdownView setCurrentPage={setCurrentPage} countdownTitle={countdownTitle} {...time} />
        ) : (
          <CompletedView
            setCurrentPage={setCurrentPage}
            countdownTitle={countdownTitle}
            countdownDate={countdownDate}
          />
        )}
      </div>
    </div>
  );
}

export default App;
