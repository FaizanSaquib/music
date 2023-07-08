import  { useDataLayerValue } from "../DataLayer/Datalayer";

const playingMusic = (dispatch,playing,songUrl) => {
    dispatch({
      type: "SET_SONGURL",
      songUri: songUrl,
    });
    !playing
      ? dispatch({
          type: "SET_PLAYING",
          playing: true,
        })
      : dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
  };
export default playingMusic
