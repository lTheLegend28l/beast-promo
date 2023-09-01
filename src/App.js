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
            light={
              <img src="https://example.com/thumbnail.png" alt="Thumbnail" />
            }
          />
        ) : (
          <>
            <img src={logo} className="w-[50vw]" alt="logo" />
            <Countdown
              className="text-4xl font-bold mt-4 font-oswald"
              date={targetDate}
            />
            <h1 className="text-2xl font-bold mt-4 tracking-normal">
              9/7/23 mac cafe 8-9pm <br />
              <a
                className="hover:text-blue-500 transition-all underline "
                href="https://www.facebook.com/groups/tamsbeast">
                <button className="outline rounded-[.6rem] pl-3.5 pr-2 py-1 mt-3">
                  join
                  <Facebook className="inline mb-1" />
                </button>
              </a>
            </h1>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
