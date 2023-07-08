import { useEffect, useState } from "react";
import Loading from "../assets/Loading";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Body from "./components/Body";
import AuthPage from "./components/AuthPage";
import Navbar from "./components/Navbar";
import { useDataLayerValue } from "../DataLayer/Datalayer";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import Player from "./components/MusicPlayer/Payer";
import { useNavigate } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useDataLayerValue();
  const [mobilebar, setMobilebar] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    dispatch({
      type: "SET_PLAYING",
      playing: false,
    });
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="relative app">
      {!user.token || !user.name ? (
        <AuthPage />
      ) : (
        <>
          <div
            className={` p-2 top-0 bg-white ${
              show && "bg-white"
            }  fixed right-10 z-[1000] sm:hidden cursor-pointer`}
            onClick={() =>
              mobilebar ? setMobilebar(false) : setMobilebar(true)
            }
          >
            {mobilebar ? <ClearIcon /> : <DehazeIcon />}
          </div>
          {mobilebar ? (
            <Sidebar setMobilebar={setMobilebar} mobilebar={mobilebar} />
          ) : (
            ""
          )}
          <Navbar show={show} />
          <Body />
          <Player />
        </>
      )}
    </div>
  );
}

export default App;
