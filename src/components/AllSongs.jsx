import React, { useEffect } from "react";
import Loading from "../../assets/Loading";
import SongCard from "./SongCard";

export default function AllSongs({ songData, title }) {
    if(!songData) return <Loading />;
  return (
    <div className="flex flex-col p-4 absolute top-19">
      <h2 className="sm:text-3xl text-2xl text-cyan-400  transition block">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 p-1 space-x-3">
        {songData?.map((data,i) => (
          <SongCard
            songName={data?.title}
            key={data?.i}
            songId={data?.key}
            songUrl={data}
            songImage={data?.images?.coverart}
            songArtist={data?.artists?.[0]?.alias}
            artistId={data?.artists?.[0]?.adamid}
          />
        ))}
      </div>
    </div>
  );
}
