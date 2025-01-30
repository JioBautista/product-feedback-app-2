"use client";
import Image from "next/image";
import Filters from "../components/Filters";
import Roadmap from "../components/Roadmap";
import Container from "../components/Container";
import { useState } from "react";

export default function NavBar({ data }) {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className="bg-gradient-to-r to-[#E84D70] from-[#28A7ED] via-[#A337F6] relative py-5 z-20">
        <Container>
          <div className="flex items-center justify-between">
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
        </Container>
      </div>
      {isOpen && (
        <>
          <div className="absolute bg-black opacity-25 inset-0 z-10"></div>
          <div className="bg-[#F7F8FD] p-5 absolute right-0 h-screen max-w-[270px] space-y-5 z-10">
            <Filters fn={handleClick} />
            <Roadmap data={data} />
          </div>
        </>
      )}
    </>
  );
}
