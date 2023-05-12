// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function Price() {
  return (
    <div className="" id="register">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex flex-col gap-12">
        <div
          data-aos="zoom-out"
          className=" flex flex-col gap-8 max-lg:text-center "
        >
          <h1 className=" max-lg:m-auto text-7xl max-xl:text-6xl max-md:text-5xl max-xl:leading-[65px] font-title text-white tracking-wide leading-[75px]">
            Register <span className="text-amber-400">your</span>{" "}
            <span className="text-amber-400">interest</span> now
          </h1>
          <p className="text-white text-lg">
            You can enter as a team or an individual and we'll contact you to
            confirm your booking.{" "}
            <span className="font-bold text-amber-100 ">
              Don't worry if you don't have a full team for your chosen sport, a
              member of the team will contact you and add you to an existing
              team.
            </span>
            <br />
            <br />
            Registrations close 23rd of June.
          </p>
        </div>
        <div className=" grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-8 ">
          <div
            data-aos="fade-down"
            id="Football"
            className="  text-center hover:scale-105 max-sm:hover:scale-100 "
          >
            <p className="font-title text-4xl tracking-wide text-neutral-50 mb-2">
              Football
            </p>
            <div className="flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full p-4 text-white bg-green-500">
                <Image
                  src="/imgs/Football SVG.svg"
                  width={500}
                  height={300}
                  alt="Vector of someone playing Golf"
                  className="-mb-16 z-10 w-auto h-48"
                />
              </div>
              <div className="-mt-2 -mb-8 transform -scale-y-100 w-full">
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
                      fill="rgba(34,197,94,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(34,197,94,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(34,197,94,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#22c55e" />
                  </g>
                </svg>
              </div>

              <div className="px-4 text-gray-600 text-center">
                <div className="pb-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-green-500">
                    Date
                  </p>
                  <p>30th June 2023</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-green-500">
                    Venue
                  </p>
                  <p>UCLan Sports Arena</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-green-500">
                    Team Requirements
                  </p>
                  <p>
                    Min. 5 players, Max. 7 players and at least 2 female players
                  </p>
                </div>
                <div className="py-4 mb-6">
                  <p className="uppercase text-xs font-bold text-green-500">
                    Price to enter
                  </p>
                  <p>
                    Football Team (7 players) £100 or individual £15 per person
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mt-5">
              <a
                href="https://www.cognitoforms.com/ShoutConnectLimited/PrestonCityGamesRegistrationForm"
                target="_blank"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            id="Netball"
            className="  text-center hover:scale-105 max-sm:hover:scale-100"
          >
            <p className="font-title text-4xl tracking-wide text-neutral-50 mb-2">
              Netball
            </p>
            <div className="flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(251,146,60)]">
                <Image
                  src="/imgs/Netball SVG.svg"
                  width={500}
                  height={300}
                  alt="Vector of someone playing Netball"
                  className="-mb-16 z-10 w-auto h-48"
                />
              </div>
              <div className="-mt-2 -mb-8 transform -scale-y-100 w-full">
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
                      fill="rgba(251,146,60,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(251,146,60,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(251,146,60,0.3)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="7"
                      fill="rgb(251,146,60)"
                    />
                  </g>
                </svg>
              </div>

              <div className="px-4 text-gray-600 text-center">
                <div className="pb-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-orange-400">
                    Date
                  </p>
                  <p>30th June 2023</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-orange-400">
                    Venue
                  </p>
                  <p>UCLan Sports Arena</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-orange-400">
                    Team Requirements
                  </p>
                  <p>
                    Min. 7 players, Max. 9 players and at least 2 male players
                  </p>
                </div>
                <div className="py-4 mb-6">
                  <p className="uppercase text-xs font-bold text-orange-400">
                    Price to enter
                  </p>
                  <p>
                    Netball Team (9 players) £130 or individual £15 per person
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mt-5">
              <a
                href="https://www.cognitoforms.com/ShoutConnectLimited/PrestonCityGamesRegistrationForm"
                target="_blank"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-orange-300 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-down"
            id="Rounders"
            className="  text-center hover:scale-105 max-sm:hover:scale-100"
          >
            <p className="font-title text-4xl tracking-wide text-neutral-50 mb-2">
              Rounders
            </p>
            <div className="flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(192,132,252)]">
                <Image
                  src="/imgs/Rounders SVG.svg"
                  width={500}
                  height={300}
                  alt="Vector of someone playing Rounders"
                  className="-mb-16 z-10 w-auto h-48"
                />
              </div>
              <div className="-mt-2 -mb-8 transform -scale-y-100 w-full">
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
                      fill="rgba(192,132,252,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(192,132,252,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(192,132,252,0.3)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="7"
                      fill="rgb(192,132,252)"
                    />
                  </g>
                </svg>
              </div>

              <div className="px-4 text-gray-600 text-center">
                <div className="pb-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-purple-400">
                    Date
                  </p>
                  <p>30th June 2023</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-purple-400">
                    Venue
                  </p>
                  <p>UCLan Sports Arena</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-purple-400">
                    Team Requirements
                  </p>
                  <p className="mb-6">Min, 9 players, Max. 11 players</p>
                </div>
                <div className="py-4 mb-6">
                  <p className="uppercase text-xs font-bold text-purple-400">
                    Price to enter
                  </p>
                  <p>
                    Rounders Team (11 players) £150 or individual £15 per person
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mt-5">
              <a
                href="https://www.cognitoforms.com/ShoutConnectLimited/PrestonCityGamesRegistrationForm"
                target="_blank"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-purple-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-300 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            id="Golf"
            className="  text-center hover:scale-105 max-sm:hover:scale-100"
          >
            <p className="font-title text-4xl tracking-wide text-neutral-50 mb-2">
              Golf
            </p>
            <div className=" flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(125,211,252)]">
                <Image
                  src="/imgs/Golf SVG.svg"
                  width={500}
                  height={300}
                  alt="Vector of someone playing Golf"
                  className="-mb-16 z-10 w-auto h-48"
                />
              </div>
              <div className="-mt-2 -mb-8 transform -scale-y-100 w-full">
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
                      fill="rgba(125,211,252,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(125,211,252,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(125,211,252,0.3)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="7"
                      fill="rgb(125,211,252)"
                    />
                  </g>
                </svg>
              </div>

              <div className="px-4 text-gray-600 text-center">
                <div className="pb-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-sky-400">
                    Date
                  </p>
                  <p>7th July 2023</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-sky-400">
                    Venue
                  </p>
                  <p>Ashton & Lea Golf Club</p>
                </div>
                <div className="py-4 border-b-2 border-gray-200/80">
                  <p className="uppercase text-xs font-bold text-sky-400">
                    Team Requirements
                  </p>
                  <p className="mb-6">Teams of 4</p>
                </div>
                <div className="py-4 mb-6">
                  <p className="uppercase text-xs font-bold text-sky-400">
                    Price to enter
                  </p>
                  <p>
                    Golf Team (4 players) £180 or Individual or £45 per person
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mt-5">
              <a
                href="https://www.cognitoforms.com/ShoutConnectLimited/PrestonCityGamesRegistrationForm"
                target="_blank"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-sky-300 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-200 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-sky-300 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register</span>
              </a>
            </div>
          </div>
        </div>
        <p className="font-bold text-neutral-50 text-lg text-center -mt-4">
          Football/Netball/Rounders: Prices include a Preston City Games t-shirt
          for each participant. <br />
          Golf: Prices include tea/coffee and light breakfast.
        </p>
        <p className="text-neutral-50/70 italic text-center text-lg  -mt-4">
          For any businesses or charities keen to participate, early
          registration is recommended as spaces are limited.
        </p>
      </div>
    </div>
  );
}
