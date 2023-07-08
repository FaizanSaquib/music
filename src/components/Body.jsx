import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  artistDetail,
  country,
  songByCountry,
  songDetail,
  worldChart,
} from "../../Data/_api";
import { useDataLayerValue } from "../../DataLayer/Datalayer";
import AllSongs from "./AllSongs";
import AroundYou from "./AroundYou";
import Discover from "./Discover";
import Search from "./Search";
import SongDetail from "./SongDetail";

function Body() {
  const [songData, setSongData] = useState(null);
  const [countrySong, setCountrySong] = useState(null);
  const [{ songId, artistId }] = useDataLayerValue();
  const [data, setData] = useState("");
  const [artistData, setArtistData] = useState("");
  useEffect(() => {
    if (songId) {
      songDetail(songId).then((result) =>
        !result.detail ? setData(result) : ""
      );
    }
  }, [songId]);
  useEffect(() => {
    if (artistId) {
      artistDetail(artistId).then((result) =>
        !result.detail ? setArtistData(result) : ""
      );
    }
  }, [artistId]);
  useEffect(() => {
    country().then((result) =>
      songByCountry(result?.location.country).then((data) =>
        setCountrySong(data)
      )
    );
  }, []);

  useEffect(() => {
    worldChart().then((data) => setSongData(data));
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Discover songData={songData} />} />
        <Route
          path={`/song/${songId}`}
          element={<SongDetail title="song" data={data} />}
        />
        <Route
          path="/discover/all"
          element={<AllSongs title="Top Charts" songData={songData} />}
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/search/all"
          element={<AllSongs title="Serched Result" />}
        />
        <Route
          path="/around-you"
          element={<AroundYou countryData={countrySong} />}
        />
      </Routes>
    </div>
  );
}

export default Body;
