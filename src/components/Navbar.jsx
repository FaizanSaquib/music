import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../assets/SidebarIcon";

export default function Navbar({show}) {
  return (
    <header
      className={` transition ${
        show
          ? "p-5 z-10 fixed w-full top-2 max-sm:hidden bg-black "
          : "p-5 z-20 fixed w-full top-2 max-sm:hidden"
      }`}
    >
      <nav>
        <div className="text-gray-500 flex place-items-start  w-full h-full  gap-10">
          {Icons.map((icon) => (
            <Link
              to={icon.to}
              key={icon.id}
              className="w-full focus:border-b-4 border-[#096c86] focus:text-[#096c86] text-[20px]"
            >
              <div className="hover:text-white gap-2 flex items-start  w-fullh-9 transition hover:border-b-4 border-[#096c86]">
                <span>
                  <icon.icon />
                </span>
                <span>{icon.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
