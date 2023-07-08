import React, { useEffect, useState } from "react";
import playingMusic from "../../assets/playingState";
import "./Banner.css";
import { worldChart } from "../../Data/_api";
import Audio from "./MusicPlayer/Audio";
import { useDataLayerValue } from "../../DataLayer/Datalayer";
import Loading from "../../assets/Loading";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
export default function Banner({ image, url, title }) {
  const [{ playing, songUri }, dispatch] = useDataLayerValue();
  if (!image || !url || !title) return <Loading />;
  return (
    <div className="h-[80vh] overflow-hidden w-screen relative lg:h-[80vh] ">
      <img
        src={image}
        alt=""
        className={`absolute h-[full] object-fit w-full self-center ${
          image && "lg:top-[-250px]"
        } transition 
  `}
      />
      <div
        className="bg-black h-[80vh] w-screen absolute bottom-[0]"
        style={{ background: "linear-gradient(180deg, transparent,#000)" }}
      />
      <div
        className="absolute  sm:bottom-10 
        sm:left-10 bottom-10 max-sm:right-10 transition truncate flex flex-col items-start gap-3"
      >
        <div
          className="text-2xl sm:text-4xl xl:text-5xl text-[#096c86] 
          border-gray-400 hover:border-b-4 hover:cursor-pointer truncate w-[150px] sm:w-[250px] md:w-[300px] lg:w-[600px]"
        >
          {title}
        </div>
        {url === "hide" ? (
          ""
        ) : (
          <button
            className="p-2 px-6 bg-[#096c86] text-xl text-gray-800 rounded-full hover:text-white 
          border-[#096c86]"
            onClick={() => playingMusic(dispatch, playing, url)}
          >
            {!playing || !songUri ? (
              <div className="flex" title="Play">
                <PlayCircleIcon />
              </div>
            ) : (
              <div className="flex" title="Pause">
                <PauseCircleIcon />
              </div>
            )}
          </button>
        )}
      </div>
      <Audio audioSrc={songUri} playing={playing} />
    </div>
  );
}
