import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDataLayerValue } from "../../../DataLayer/Datalayer";

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Audio from "./Audio";
import { Link } from "react-router-dom";

const Payer = () => {
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [minus, setMinus] = useState(0);
  const [add, setAdd] = useState(0);
  const [{ playing, songUri, songDuration }, dispatch] = useDataLayerValue();
  const [bg, setBg] = useState(null);
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  setInterval(() => {
    setCurrentTime(getTime(songDuration?.current?.currentTime));
  }, 1000);
  useEffect(() => {
    setSeekTime(
      (songDuration?.current?.currentTime / songDuration?.current?.duration) *
        100
    );
  }, [currentTime]);
  useEffect(() => {
    playing
      ? dispatch({
          type: "SET_PLAYING",
          playing: false,
        })
      : dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
    setBg(songUri?.images?.joecolor.slice(34, 40));
  }, [songUri]);

  return (
    <div
      className={`fixed bottom-0 flex items-center justify-between text-white w-full backdrop-blur-3xl bg-[#${bg}]/10 p-2  ${
        !songUri && "hidden"
      } `}
    >
      <div className="flex items-center w-[25vw]  max-sm:min-w-[140px]">
        <div
          className={`md:w-20 md:h-20  min-w-18  min-h-18  overflow-hidden animate-spin rounded-full md:min-h-20 md:min-w-20  max-h-17 max-w-17 ${
            playing && "animate-pulse"
          }`}
        >
          <img
            src={songUri?.images?.coverart}
            alt={songUri?.title}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between items-start">
          <span
            className={` ${
              playing && "animate-pulse"
            } md:text-2xl text-[20px] truncate w-[100px] md:w-[120px] lg:w-[220px]`}
            onClick={() =>
              dispatch({
                type: "SET_SONGID",
                songId: parseInt(songUri?.key),
              })
            }
          >
            <Link to={`/song/${songUri?.key}`}>{songUri?.title}</Link>
          </span>
          <span className="text-[12px] md:text-xl w-[40px] sm:w-[100px] truncate">
            {songUri?.subtitle}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-[55vw]">
        <div className="flex gap-2 items-center w-full justify-center">
          <div>
            <span>{getTime(songDuration?.current?.duration)}</span>
          </div>
          <div className="w-[50vw] max-w-[400px]">
            <input
              type="range"
              value={seekTime}
              min={0}
              onChange={(e) => setSeekTime(e.target.value)}
              max="100"
              className="w-full"
            />
          </div>
          <div>
            <span>
              {songDuration?.current?.currentTime === 0 ? "0:00" : currentTime}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between sm:w-full sm:max-w-[200px]">
          <button
            title="-5"
            onClick={() => (minus ? setMinus(false) : setMinus(true))}
          >
            <RemoveIcon />
          </button>
          <span
            onClick={() =>
              !playing
                ? dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                  })
                : dispatch({
                    type: "SET_PLAYING",
                    playing: false,
                  })
            }
            className="cursor-pointer"
          >
            {!playing ? <PauseIcon /> : <PlayArrowIcon />}
          </span>

          <button
            title="+5"
            onClick={() => (add ? setAdd(false) : setAdd(true))}
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div>
        <div className="flex max-md:hidden items-center justify-center md:flex-col lg:flex-row gap-2">
          <div
            onClick={() => (!volume == 0 ? setVolume(0) : setVolume(50))}
            className=""
          >
            {volume >= 80 ? (
              <VolumeUpIcon />
            ) : volume == 0 ? (
              <VolumeOffIcon />
            ) : (
              <VolumeDownIcon />
            )}
          </div>
          <div className="w-[10vw]">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e?.target?.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <Audio audioVolume={volume} seekTime={seekTime} add={add} minus={minus} />
    </div>
  );
};

export default Payer;
