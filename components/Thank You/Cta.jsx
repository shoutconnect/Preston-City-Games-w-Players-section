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
          Date
          <br />
          TBC
        </div>{" "}
        <div className="text-xl font-semibold lg:border-r lg:border-white/20 w-full flex flex-col  gap-8 items-center">
          <div className="bg-amber-400/20 p-6 rounded-full">
            <FaClock className="text-xl text-amber-400" />{" "}
          </div>
          Time <br />
          TBC
          <br />
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
      {/* <section className="pt-10 px-6 mx-auto max-w-7xl lg:px-8 gap-10 lg:gap-20 text-slate-500 w-full justify-center text-center">
        * The competitions will take place throughout the afternoon, from 12pm –
        4.30pm.
        <br className="max-sm:hidden" /> There will also be some football
        competitions during the morning, teams taking part in those fixtures
        will be notified in advance.
      </section> */}
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
              <h1 className="max-lg:m-auto text-7xl max-xl:text-6xl max-md:text-5xl max-xl:leading-[65px] font-title text-slate-900 tracking-wide leading-[75px]">
                Get your kit on!
              </h1>
              <h1 className="text-4xl font-title text-slate-900 tracking-wide w-3/4">
                Unleash your teams for a{" "}
                <span className="text-amber-400">
                  day of outdoor competitive sport
                </span>
              </h1>

              <p className="text-slate-500 text-lg font-normal w-[80%] max-lg:w-[90%] max-sm:mb-16">
                The date for Preston City Games 2026 will be announced soon.
                Please get in touch with our team if you would like any
                information or to register your interest to take part:{" "}
                <a
                  href="mailto:info@shoutconnect.co.uk"
                  className="text-slate-700 font-bold"
                >
                  info@shoutconnect.co.uk
                </a>
                . We look forward to hearing from you!
              </p>
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

        {/* <div className="pb-24 max-sm:pb-16 px-6 mx-auto max-w-7xl lg:px-8">
          <h1 className="text-4xl font-title text-slate-900 tracking-wide py-10">
            ENTRY FORM 2025
          </h1>
          <iframe
            src="https://www.cognitoforms.com/f/42nSYhyX7UC-l4nHKMTwuQ/92"
            allow="payment"
            height="1209"
            className="w-full"
          ></iframe>
          <script src="https://www.cognitoforms.com/f/iframe.js"></script>
        </div> */}
        <div className="pb-24 max-sm:pb-16 px-6 mx-auto max-w-7xl lg:px-8 pt-10 md:pt-20">
          <div className="relative">
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-title text-slate-900 mb-4 tracking-wide">
                  Congratulations to the Winners!
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  A fantastic display of skill, teamwork, and sportsmanship from
                  all participants
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
                {[
                  { sport: "Football", winner: "Preston Strikers" },
                  { sport: "Netball", winner: "Savvytouch UK" },
                  { sport: "Boccia", winner: "Preston City Council" },
                  { sport: "Rounders", winner: "Northern Trust Company" },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-white rounded-lg p-8 border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-slate-50">
                      <div className="text-center">
                        <span className="text-3xl">🏆</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-2 uppercase ">
                          {item.sport}
                        </h4>
                        <p className="text-amber-600 font-bold text-lg">
                          {item.winner}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
