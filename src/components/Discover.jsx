import React, { useEffect, useState } from "react";
import Loading from "../../assets/Loading";
import { worldChart } from "../../Data/_api";
import ArtistCard from "./ArtistCard";
import Banner from "./Banner";
import SongRow from "./songRow";

function Discover({ songData }) {
  if (!songData) return <Loading />;
  return (
    <main className="overflow-scroll">
      <Banner
        image={songData?.[0]?.images?.background}
        title={songData?.[0]?.title}
        url={songData?.[0]}
      />
      <div className="overflow-scroll">
        <SongRow title="World Chart" songData={songData?.slice(0, 10)} />
      </div>
      <div className="flex">
        <ArtistCard title="Top Artist" artistData={songData?.slice(0, 5)} />
      </div>
    </main>
  );
}

export default Discover;
