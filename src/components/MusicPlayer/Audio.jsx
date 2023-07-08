import React, { useEffect, useRef, useState } from "react";
import { useDataLayerValue } from "../../../DataLayer/Datalayer";

const Audio = ({ audioVolume = 0.5, seekTime, add, minus }) => {
  const [{ playing, songUri, songDuration }, dispatch] = useDataLayerValue();

  const audioRef = useRef();
  if (audioRef.current) {
    if (!playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    if (audioRef.current.currentTime == audioRef.current.duration) {
      audioRef.current?.pause();
    }
  }

  useEffect(() => {
    audioRef.current.volume = parseInt(audioVolume) / 100;
  }, [audioVolume]);
  useEffect(() => {
    if (seekTime) {
      audioRef.current.currentTime = audioRef.current.currentTime + 5;
    }
  }, [add]);
  useEffect(() => {
    if (seekTime) {
      audioRef.current.currentTime = audioRef.current.currentTime - 5;
    }
  }, [minus]);

  useEffect(() => {
    const currentTimeandDuration = () => {
      dispatch({
        type: "SET_DURATION",
        songDuration: audioRef,
      });
    };
    currentTimeandDuration();
  }, [songUri]);
  return (
    <div>
      <audio
        src={songUri?.hub?.actions?.[1]?.uri}
        ref={audioRef}
      />
    </div>
  );
};
export default Audio;
