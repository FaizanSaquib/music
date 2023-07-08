import React from "react";
import Loading from "../../assets/Loading";
import Banner from "./Banner";
import SongCard from "./SongCard";

const AroundYou = ({ countryData }) => {
  if (!countryData) return <Loading />;
  return (
    <>
      <Banner
        image={countryData?.[0]?.images?.background}
        title={countryData?.[0]?.title}
        url={countryData?.[0]}
      />
      <div className="sm:text-3xl text-2xl text-cyan-400  transition p-4 flex flex-col gap-2 items-start ">
        <div>
          <h2>Around You {}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {countryData?.map((data, i) => (
            <SongCard
              songName={data?.title}
              key={data?.i}
              songUrl={data}
              songId={data.key}
              songImage={data?.images?.coverart}
              songArtist={data?.artists?.[0]?.alias}
              artistId={data?.artists?.[0]?.adamid}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AroundYou;
