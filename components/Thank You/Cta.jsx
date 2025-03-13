// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";
import { FaCalendarCheck, FaCity, FaClock } from "react-icons/fa";

/////////////////////////////

export default function ThankYouCta() {
  return (
    <div className="relative bg-white">
      <div className="absolute z-[99] top-0 transform -scale-y-100 w-full">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 16 100 38"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(15,23,42,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(15,23,42,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(15,23,42,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(15,23,42)" />
          </g>
        </svg>
      </div>
      <section className="pt-40 px-6 mx-auto max-w-7xl lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 text-slate-500 w-full justify-center text-center">
        <div className="text-xl font-semibold lg:border-r lg:border-white/20 w-full flex flex-col  gap-8 items-center">
          <div className="bg-amber-400/20 p-6 rounded-full">
            <FaCalendarCheck className="text-xl text-amber-400" />
          </div>
          Friday, <br />
          20th June 2025
        </div>{" "}
        <div className="text-xl font-semibold lg:border-r lg:border-white/20 w-full flex flex-col  gap-8 items-center">
          <div className="bg-amber-400/20 p-6 rounded-full">
            <FaClock className="text-xl text-amber-400" />{" "}
          </div>
          Event times to be confirmed
        </div>{" "}
        <div className="text-xl font-semibold w-full flex flex-col  gap-8 items-center">
          <div className="bg-amber-400/20 p-6 rounded-full">
            {" "}
            <FaCity className="text-xl text-amber-400" />{" "}
          </div>
          UCLAN Sports Arena, <br />
          Tom Benson Way, Preston
        </div>
      </section>
      <div className="py-24 max-sm:py-16">
        <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
          <div className="flex max-lg:flex-col-reverse items-center gap-8 max-lg:gap-14">
            <div
              data-aos="zoom-out"
              className="w-1/2 max-lg:w-full flex flex-col gap-8 max-lg:text-center items-start max-lg:items-center"
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-500/80 font-semibold ring-1 ring-slate-900/20 hover:ring-slate-900/40">
                Don’t miss out on our games!{" "}
              </div>
              <h1 className=" max-lg:m-auto text-7xl max-xl:text-6xl max-md:text-5xl max-xl:leading-[65px] font-title text-slate-900 tracking-wide leading-[75px]">
                Get your kit on!
              </h1>
              <h1 className="text-4xl font-title text-slate-900 tracking-wide w-3/4">
                Unleash your teams for a{" "}
                <span className="text-amber-400">
                  day of outdoor competitive sport
                </span>
              </h1>
              {/* <p className="text-slate-500 text-lg font-normal w-[80%] max-lg:w-[90%]">
                To participate in this year's games, just click on the button
                below, select your preferred sport, fill out the form and we
                will contact you.
              </p> */}{" "}
              <p className="text-slate-500 text-lg font-normal w-[80%] max-lg:w-[90%] max-sm:mb-16">
                <span className="font-bold">
                  Our 2024 event was truly amazing.{" "}
                </span>
                If you're keen to participate in the Preston City Games in 2025,
                taking place on Friday, 20th June 2025, from 12pm to 4:30pm at
                UCLAN Sports Arena, then we'd love to hear from you! <br />
                <br />
                <span className="font-bold">
                  Please complete the expression of interest form below
                </span>{" "}
                and if you have any questions, please get in touch with our team{" "}
                <span className="font-bold">info@shoutconnect.co.uk</span>. We
                look forward to hearing from you!
              </p>
              {/* <a
                href="#register"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-amber-400 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-300 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register now</span>
              </a> */}
            </div>
            <div className="relative w-1/2 max-lg:w-full">
              <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                <div
                  data-aos="fade-down"
                  className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                >
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/FJ5WxyJ/PG0623-112-min.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/C1MYqR4/PCG-1.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                >
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/025BNCj/PCG-5.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/X7mQzKF/PCG-4.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/7RwQ9Hf/PG0623-363-min.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                >
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/yd3LqqQ/PCG-7.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                    <Image
                      src="https://i.ibb.co/HVGcmFy/PCG-32.jpg"
                      alt="People practicing sports"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 m-auto h-[400px] w-[400px] bg-teal-300/30 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>

        <div className="pb-24 max-sm:pb-16 px-6 mx-auto max-w-7xl lg:px-8">
          <iframe
            src="https://www.cognitoforms.com/f/42nSYhyX7UC-l4nHKMTwuQ/92"
            allow="payment"
            height="1209"
            className="w-full"
          ></iframe>
          <script src="https://www.cognitoforms.com/f/iframe.js"></script>
        </div>
      </div>
      <div className="absolute bottom-0  transform -scale-y-100 w-full rotate-180">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 16 100 38"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(15,23,42,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(15,23,42,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(15,23,42,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(15,23,42)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
