// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

/////////////////////////////

export default function ThankYouHero() {
  return (
    <div className="relative py-24 max-sm:py-16 -mt-10">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex flex-col items-center justify-center">
        <div className="">
          <div
            data-aos="zoom-out"
            className="relative w-full max-lg:w-full flex items-center justify-center"
          >
            <div className="relative">
              <div className="relative z-40 h-[450px] w-[450px] max-lg:h-[300px] max-lg:w-[300px] flex">
                <a
                  href="https://www.linkedin.com/company/prestoncitygames"
                  target="_blank"
                  className="absolute bottom-52 max-lg:bottom-36 -left-12 max-lg:-left-10 z-50 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-sky-500 text-sky-500 hover:text-white rounded-full shadow-md "
                >
                  <RiLinkedinFill className=" text-3xl" />
                </a>
                <a
                  href="https://twitter.com/pr_citygames"
                  target="_blank"
                  className="absolute z-50 bottom-48 max-lg:bottom-28 -right-10 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-cyan-400 text-cyan-400 hover:text-white rounded-full shadow-md "
                >
                  <RiTwitterFill className=" text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/shoutnetworkofficial/"
                  target="_blank"
                  className="absolute z-50 right-14 max-lg:right-6 top-8 max-lg:top-2 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-pink-600 text-pink-600 hover:text-white rounded-full shadow-md "
                >
                  <RiInstagramFill className=" text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/prestoncitygames"
                  target="_blank"
                  className="absolute z-50 top-8 max-lg:top-2 left-20 max-lg:left-14 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow-md "
                >
                  <RiFacebookCircleFill className=" text-3xl" />
                </a>
                <Image
                  src="/imgs/Preston City Games Logo SVG.svg"
                  fill
                  alt="Preston City Games logo"
                  className=""
                  priority
                />
              </div>
              <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 bottom-32 left-0 bg-teal-400 rounded-full blur-2xl animate-pulse" />
              <div className="absolute z-20 h-80 max-lg:h-60 w-80 max-lg:w-60 bottom-0 left-0 bg-slate-700 rounded-full blur-3xl" />
              <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 top-32 right-4 bg-teal-400 rounded-full blur-2xl animate-pulse" />
              <div className="absolute z-20 h-80 max-lg:h-72 w-80 max-lg:w-72 top-0 right-0 bg-slate-700 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
        <h1
          data-aos="zoom-out"
          className="text-7xl max-xl:text-6xl max-md:text-5xl font-title tracking-wide text-white text-center mt-10"
        >
          Preston City Games 2024 was a success!
          <br />
        </h1>
        <p
          data-aos="zoom-out"
          className="font-bold text-lg text-white text-center mt-5 w-[80%]"
        >
          Thank you to everyone who participated in the event. We hope to see
          you again next year!
        </p>
      </div>
    </div>
  );
}
