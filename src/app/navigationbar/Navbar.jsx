"use client";
import Image from "next/image";
import Filters from "../components/Filters";
import Roadmap from "../components/Roadmap";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="p-3 bg-gradient-to-r to-[#E84D70] from-[#28A7ED] via-[#A337F6] flex items-center justify-between relative z-10">
        <h1 className="text-white font-bold">Feedback Board</h1>
        {isOpen ? (
          <button className="p-2" onClick={() => setOpen(!isOpen)}>
            <Image
              src="/mobile/icon-close.svg"
              width={18}
              height={17}
              alt="close icon"
            />
          </button>
        ) : (
          <button className="p-2" onClick={() => setOpen(!isOpen)}>
            <Image
              src="/mobile/icon-hamburger.svg"
              width={20}
              height={17}
              alt="hambuger icon"
            />
          </button>
        )}
      </div>
      {isOpen && (
        <>
          <div className="absolute bg-black opacity-25 inset-0"></div>
          <div className="bg-[#F7F8FD] p-5 absolute right-0 h-screen max-w-[270px] space-y-5">
            <Filters />
            <Roadmap />
          </div>
        </>
      )}
    </>
  );
}
