import React, { useEffect, useState } from "react";
import playingMusic from "../../assets/playingState";
import { useDataLayerValue } from "../../DataLayer/Datalayer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Link } from "react-router-dom";
export default function SongCard({
  songName,
  songArtist,
  songUrl,
  songImage,
  artistIds,
  songId,
}) {
  const [{ playing, songUri }, dispatch] = useDataLayerValue();
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    toggle ? setToggle(false) : setToggle(true);
  }, [songUri]);
  return (
    <div className="flex flex-col items-start transition">
      <>
        <div className="sm:w-[200px] w-[150px] md:w-[250px] overflow-hidden hover:scale-110 relative">
          <img src={songImage} alt={songName} className="w-full" />
          <div
            className="absolute  w-full h-full top-[0]  flex items-center justify-center"
            onClick={() => (!toggle ? setToggle(true) : setToggle(false))}
          >
            {!toggle ? (
              <PlayCircleIcon
                className=" text-white text-4xl"
                sx={{ fontSize: "30px" }}
                onClick={() => playingMusic(dispatch, playing, songUrl)}
              />
            ) : (
              <PauseCircleIcon
                className=" text-white text-4xl"
                sx={{ fontSize: "30px" }}
                onClick={() => playingMusic(dispatch, playing, songUrl)}
              />
            )}
          </div>
        </div>
        <div
          className="sm:text-2xl text-white hover:text-[#096c86] truncate sm:w-[200px] w-[100px] cursor-pointer md:w-[150px]"
          onClick={() =>
            dispatch({
              type: "SET_SONGID",
              songId: parseInt(songId),
            })
          }
        >
          <Link to={`/song/${songId}`}>
            <span>{songName}</span>
          </Link>
        </div>
        <div
          className="text-gray-500 hover:text-white border-b-2 border-[#096c86] cursor-pointer hover:border-none truncate max-sm:w-[50px]"
          onClick={() =>
            dispatch({
              type: "SET_ARTISTID",
              artistId: parseInt(artistIds),
            })
          }
        >
          <span>{songArtist}</span>
        </div>
      </>
    </div>
  );
}
