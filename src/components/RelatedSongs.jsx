import React, { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer/Datalayer";
import playingMusic from "../../assets/playingState";
export default function RelatedSongs({ image, title, artistTitle, data }) {
  const [{ playing, songUri }, dispatch] = useDataLayerValue();
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    toggle ? setToggle(false) : setToggle(true);
  }, [songUri]);
  return (
    <div className="flex p-3 w-full bg-gray-500 items-center justify-between rounded-lg">
      <div className="flex items-center justify-between gap-2">
        <div className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] overflow-hidden rounded-md">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="flex flex-col w-full justify-between">
          <span className="text-xl md:text-2xl truncate  w-[150px] sm:w-[170px] md:w-[200px]">{title}</span>

          <span className="text-md sm:text-lg truncate  w-[150px] sm:w-[170px] md:w-[200px]">{artistTitle}</span>
        </div>
      </div>
      <div onClick={() => (!toggle ? setToggle(true) : setToggle(false))}>
        {!toggle ? (
          <PlayCircleIcon
            className=" text-white text-4xl"
            sx={{ fontSize: "30px" }}
            onClick={() => playingMusic(dispatch, playing, data)}
          />
        ) : (
          <PauseCircleIcon
            className=" text-white text-4xl"
            sx={{ fontSize: "30px" }}
            onClick={() => playingMusic(dispatch, playing, data)}
          />
        )}
      </div>
    </div>
  );
}
