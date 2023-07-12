// Design and images
// Libraries
// Components
// Outside data
import Image from "next/image";

/////////////////////////////

export default function ThankYouForm() {
  return (
    <div className="relative bg-white overflow-hidden " id="register">
      <div className="absolute top-0  transform -scale-y-100 w-full">
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
      <div className="py-40 max-sm:py-24 px-6 mx-auto max-w-7xl lg:px-8 flex max-lg:flex-col items-center justify-center gap-20">
        <div className="relative w-1/2 max-xl:w-1/3 max-lg:w-full flex flex-col max-lg:flex-col-reverse">
          <h1 className="text-6xl max-xl:text-5xl font-title text-slate-900 tracking-wide mb-20 max-lg:mb-0 max-lg:mt-20 text-center">
            Register your interest for{" "}
            <span className="text-amber-400">Preston City Games 2024</span>
          </h1>
          <div className="relative flex items-center justify-center">
            <div className="flex items-center justify-center space-x-6 lg:space-x-8">
              <div
                data-aos="fade-down"
                className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
              >
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-197-min.jpg"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-201-min.jpg"
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
                    src="/event2023hero/PG0623-354-min.jpg"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-325-min.jpg"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-357-min.jpg"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 max-xl:hidden max-lg:grid"
              >
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-503-min.jpg"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/event2023hero/PG0623-476-min.jpg"
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
        <div className="w-1/2 max-xl:w-2/3 max-lg:w-full">
          {" "}
          <iframe
            src="https://www.cognitoforms.com/f/42nSYhyX7UC-l4nHKMTwuQ/29"
            style={{ border: 0, width: "100%" }}
            className="h-[1000px] max-sm:h-[800px] "
          ></iframe>
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
