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
      <div className="bg-gradient-to-r to-[#E84D70] from-[#28A7ED] via-[#A337F6] relative py-5 z-20 md:bg-none">
        <Container>
          <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-3">
            <div className="md:bg-gradient-to-r md:to-[#E84D70] md:from-[#28A7ED] md:via-[#A337F6] md:p-5 md:self-stretch md:rounded-lg md:flex md:flex-col md:justify-end">
              <h1 className="text-white font-bold">Feedback Board</h1>
            </div>

            {/* MOBILE OPEN/CLOSE ICONS */}
            {isOpen ? (
              // CLOSE BUTTON
              <button className="p-2" onClick={() => setOpen(!isOpen)}>
                <Image
                  src="/mobile/icon-close.svg"
                  width={18}
                  height={17}
                  alt="close icon"
                />
              </button>
            ) : (
              // OPEN BUTTON DISPLAY HIDDEN ON MEDIUM MEDIA QUERY
              <button
                className="p-2 block md:hidden"
                onClick={() => setOpen(!isOpen)}
              >
                <Image
                  src="/mobile/icon-hamburger.svg"
                  width={20}
                  height={17}
                  alt="hambuger icon"
                />
              </button>
            )}

            {/* TWO DIVS HIDDEN ON MOBILE MEDIA QUERY */}
            <div className="hidden md:block">
              <Filters />
            </div>
            <div className="hidden md:block">
              <Roadmap data={data} />
            </div>
          </div>
        </Container>
      </div>

      {/* SIDE BAR FOR MOBILE */}
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
