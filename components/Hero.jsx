// Design and images
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function Hero() {
  return (
    <div className="py-24 max-sm:py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex">
          <div className="flex-1 flex flex-col items-start justify-center gap-6">
            <h1 className="text-7xl font-title text-white tracking-wide leading-[75px]">
              Are you a{" "}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-amber-400">
                business
              </span>{" "}
              or{" "}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-amber-400 ">
                charity team
              </span>{" "}
              with a competitive edge?
            </h1>
            <p className="text-lg text-white w-3/4">
              Entries are now open to compete in Preston's one day sport
              tournament, Preston City Games.
            </p>
            <div className="flex gap-3">
              <a
                href="#_"
                class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold transition-all bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-amber-400 rounded-xl hover:bg-white group"
              >
                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-950">
                  Register now
                </span>
              </a>
              <button>Register now</button>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            <div className="z-50 relative">
              <a
                href="/"
                target="_blank"
                className="absolute top-40 -left-10 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-sky-500 text-sky-500 hover:text-white rounded-full shadow-md "
              >
                <RiLinkedinFill className=" text-3xl" />
              </a>
              <a
                href="/"
                target="_blank"
                className="absolute top-2 right-14 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-pink-600 text-pink-600 hover:text-white rounded-full shadow-md "
              >
                <RiInstagramFill className=" text-3xl" />
              </a>
              <a
                href="/"
                target="_blank"
                className="absolute bottom-36 -right-6 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow-md "
              >
                <RiFacebookCircleFill className=" text-3xl" />
              </a>
              <Image
                src="/imgs/Preston City Games Logo SVG.svg"
                width={1540}
                height={980}
                alt="Preston City Games logo"
                className="h-96 w-auto"
              />
            </div>
            <div className="absolute z-30 h-52 w-52 bottom-32 left-20 bg-teal-400 rounded-full blur-2xl animate-pulse" />
            <div className="absolute z-20 h-80 w-80 bottom-0 left-24 bg-slate-700 rounded-full blur-3xl" />

            <div className="absolute z-30 h-44 w-44 top-36 right-20 bg-teal-400 rounded-full blur-2xl animate-pulse" />
            <div className="absolute z-20 h-80 w-80 top-0 right-24 bg-slate-700 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
