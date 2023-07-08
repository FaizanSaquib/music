import { Link } from "react-router-dom";
import React from "react";
import SongCard from "./SongCard";

const SongRow = ({ title, songData }) => {
  return (
    <div className=" flex flex-col items-start p-4 gap-3 sm:gap-4 relative">
      <div className="flex items-center justify-between w-full relative">
        <h3 className="sm:text-3xl text-2xl text-cyan-400  transition block">
          {title}
        </h3>
        <Link className="text-white  absolute right-[0] " to={"/discover/all"}>
          <span>See more</span>
        </Link>
      </div>
      <div className="overflow-scroll  flex gap-3">
        {songData?.map((data, i) => (
          <SongCard
            songName={data?.title}
            key={data?.i}
            songUrl={data}
            songId={data.key}
            songImage={data?.images?.coverart}
            songArtist={data?.subtitle}
            artistIds={data?.artists?.[0]?.adamid}
          />
        ))}
      </div>
    </div>
  );
};

export default SongRow;
