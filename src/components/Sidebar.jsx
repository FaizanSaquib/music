import React from "react";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { Link } from "react-router-dom";
import Icons from "../../assets/SidebarIcon";

export default function Sidebar({setMobilebar,mobilebar}) {
  return (
    <header className="w-[240px] h-screen  filter p-4  sm:hidden z-20 transition   backdrop-blur-xl bg-[#111727]/30 fixed  top-0 ">
      <div className="text-gray-500 flex place-items-start  w-full h-full flex-col gap-10">
        {Icons.map((icon) => (
          <Link
            to={icon.to}
            key={icon.id}
            className="w-full 
            border-[#096c86]
            focus:border-b-4  focus:text-[#096c86] text-[20px] "
          >
            <div
              className="hover:text-white gap-2 flex items-start  w-full h-9 transition 
            border-[#096c86] hover:border-b-4 active:border-b-4"
            >
              <span>
                <icon.icon />
              </span>
              <span>{icon.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}
