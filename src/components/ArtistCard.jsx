import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ArtistCard({ artistData, title }) {
  return (
    <div className="flex flex-col items-start gap-3 p-3">
        <div className="sm:text-3xl text-2xl text-cyan-400  transition block">{title}</div>
      <div className="flex overflow-scroll gap-3">
        {artistData?.map((song, i) => (
          <SwiperSlide
            key={song?.key}
            style={{ width: "25%", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright cursor-pointer"
          >
            <img
              src={song?.images?.background}
              alt="name"
              className="rounded-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
}
