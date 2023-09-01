import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import ReactPlayer from "react-player";
import logo from "./logo.svg";
import promovid from "./promovid.mp4";
import "./App.css";

const targetDate = new Date("2023-09-07T20:00:00");

function App() {
  const [video, setVideo] = useState(true);
  const [playing, setPlaying] = useState(false);
  const handleVideoEnd = () => {
    setVideo(false);
    setTimeout(() => {
      const content = document.querySelector(".content");
      if (content) content.classList.add("fade-in");
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setPlaying(true);
    }, 1000);
  }, []);

  return (
    <section className="App">
      <div className="content text-center justify-center items-center flex flex-col w-[100vw] max-w-[100vw] h-[100vh] font-inter bg-black transition-colors duration-700">
        {video ? (
          <ReactPlayer
            height="100vh"
            url={promovid}
            onEnded={handleVideoEnd}
            controls={true}
            playing={playing}
            light={
              <img src="https://example.com/thumbnail.png" alt="Thumbnail" />
            }
          />
        ) : (
          <>
            <img src={logo} className="w-[50vw]" alt="logo" />
            <Countdown className="text-4xl font-bold mt-4 " date={targetDate} />
            <h1 className="text-2xl font-semibold mt-4 tracking-wider">
              9/7 Mac Cafe 8 PM
            </h1>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
