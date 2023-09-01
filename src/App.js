import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import ReactPlayer from "react-player";
import logo from "./logo.svg";
import promovid from "./promovid.mp4";
import "./App.css";
import { Facebook } from "lucide-react";
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
      <div className="content text-center justify-center items-center flex flex-col w-[100vw] max-w-[100vw] h-[100vh] font-lexend bg-black transition-colors duration-700">
        {video ? (
          <ReactPlayer
            height="100vh"
            url={promovid}
            onEnded={handleVideoEnd}
            controls={true}
            playing={playing}
            light={<h1>Press</h1>}
          />
        ) : (
          <>
            <img src={logo} className="w-[50vw]" alt="logo" />
            <div className="flex flex-row"></div>
            <h1 className="font-lexend text-3xl font-bold mt-5">
              website activates in
            </h1>
            <Countdown
              className="text-6xl font-bold mt-3 ml-2 font-oswald"
              date={targetDate}
            />
            <h1 className="text-2xl font-bold mt-3 tracking-normal font-lexend leading-[2.25rem]">
              9/7/23 mac cafe 8-9pm <br />
              physical fitness, elevated. <br />
              <a
                className="transition-color hover:text-blue-500 transition-colors "
                target="_blank"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NHNxczd0anM1dDBrdjdlMnRpaTNpbGl2NmUgcHJhZHl1bi50YW5kcmFAbQ&amp;tmsrc=pradyun.tandra%40gmail.com">
                <button className="outline rounded-[.6rem] pl-3.5 pr-2 py-1 mt-4">
                  add to calendar
                </button>
              </a>
              <a
                className="transition-color hover:text-blue-500 transition-colors"
                href="https://www.facebook.com/groups/tamsbeast">
                <button className="outline rounded-[.6rem] pl-3.5 pr-2 py-1 mt-4 ml-4">
                  join
                  <Facebook className="inline mb-1" />
                </button>
              </a>
              <br />
            </h1>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
