import React, { useEffect, useState } from "react";
import Loading from "../../assets/Loading";
import { searchedData, searchSuggestion } from "../../Data/_api";
import SongCard from "./SongCard";
import Icons from "../../assets/SidebarIcon";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [search, setSearch] = useState(null);
  const [loader, setLoader] = useState(false);

  const [searchData, setSearchData] = useState(null);
  const [suggested, setSuggested] = useState("");

  const getSearchedData = (event) => {
    event.preventDefault();
    searchedData(search).then((data) => setSearchData(data));
    setLoader(true);
  };
  // useEffect(() => {
  //   searchSuggestion(search).then((data) => setSuggested(data?.hints));
  // }, [search]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="flex items-center  justify-center  absolute top-20 w-full">
        <div className="w-[60vw]  max-w-[400px] flex flex-col gap-2 bg-gray-900 rounded-lg">
          <form onSubmit={(e) => getSearchedData(e)} className="flex items-center  overflow-hidden p-1">
            <button className="text-gray-400" type="submit" title="Search">
              <SearchIcon />
            </button>
            <input
              type="search"
              className="w-full sm:text-2xl text-xl bg-transparent text-[#096c86] p-1 outline-none border-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Search"}
            />
          </form>
          {/* <div
            className={`w-full h-[40vh] bg-gray-900 rounded-lg p-3 sm:text-2xl flex flex-col align-middle gap-2 overflow-scroll text-white ${
              !search && "hidden"
            } transition`}
          >
            {!suggested ? <Loading /> : ""}
            {suggested
              ? suggested.map((data) => (
                  <div className="hover:text-white/30" key={data?.term}>
                    <p
                      onClick={(e) => getSearchedData(e)}
                      onMouseEnter={() => setSearch(data.term)}
                    >
                      {data?.term}
                    </p>
                    <hr className="border border-gray-500" />
                  </div>
                ))
              : ""}
          </div> */}
        </div>
        <div className="text-white text-2xl sm:text-3xl absolute top-[50px]">
          <span>
            {!searchData
              ? "Search your favourate songs"
              : `Search result for ${search}`}
          </span>
        </div>
      </div>
      <div className=" flex flex-wrap absolute top-[200px] items-center w-full justify-center gap-4">
        {!searchData && loader ? (
          <Loading />
        ) : (
          searchData?.tracks?.hits.map((data,id) => (
            <SongCard
              songName={data.track?.title}
              key={data.i}
              songId={data?.track?.key}
              songUrl={data.track}
              songImage={data.track?.images?.coverart}
              songArtist={data.track?.artists?.[0]?.alias}
              artistIds={data.track?.artists?.[0]?.adamid}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
