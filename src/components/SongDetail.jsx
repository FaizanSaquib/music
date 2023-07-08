import React, { useEffect, useState } from "react";
import Loading from "../../assets/Loading";
import { relatedSongs } from "../../Data/_api";

import { useDataLayerValue } from "../../DataLayer/Datalayer";
import Banner from "./Banner";
import RelatedSongs from "./RelatedSongs";

const SongDetail = ({ data }) => {
  const [{ songId }] = useDataLayerValue();
  const [relatedData, setRelatedData] = useState(null);
  useEffect(() => {
    if (songId) {
      relatedSongs(songId).then((result) => setRelatedData(result));
    }
  }, [songId]);
  return (
    <>
      <Banner image={data?.images?.coverart} title={data?.title} url={data} />
      <div className="text-gray-400 p-4 flex flex-col gap-3">
        <div>
          <h3>Released on {data?.releasedate}</h3>
        </div>
        <div className="text-white flex flex-col items-start gap-2">
          <div className="text-3xl sm:text-4xl">
            <h2>Lyrics:</h2>
          </div>
          <div className="text-white/40 text-xl sm:text-2xl">
            {data?.sections?.[1]?.text ? (
              data?.sections?.[1]?.text?.map((text) => <p>{text}</p>)
            ) : (
              <p>No lyrics found !</p>
            )}
          </div>
          <div className="text-white flex flex-col gap-3 items-start">
            <div className="">
              <h2 className="text-3xl sm:text-4xl">Related Songs</h2>
            </div>
            <div className="w-[350px] sm:w-[380px] md:w-[400px] lg:w-[440px] flex flex-col gap-4">
              {relatedData === null ? (
                <h2>No Related Songs</h2>
              ) : relatedData != '' ? (
                relatedData?.map((data) => (
                  <RelatedSongs
                    image={data?.images?.coverart}
                    title={data?.title}
                    artistTitle={data?.subtitle}
                    data={data}
                  />
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongDetail;
