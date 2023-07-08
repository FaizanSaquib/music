export const initialState = {
  playing: false,
  songUri: null,
  songDuration: NaN,
  songId: NaN,
  artistId: NaN,
  user:{
    name:null,
    token:null
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SONGURL":
      return {
        ...state,
        songUri: action.songUri,
      };
    case "SET_DURATION":
      return {
        ...state,
        songDuration: action.songDuration,
      };
    case "SET_SONGID":
      return {
        ...state,
        songId: action.songId,
      };
    case "SET_ARTISTID":
      return {
        ...state,
        artistId: action.artistId,
      };
    default:
      return { ...state };
  }
};
export default reducer;
