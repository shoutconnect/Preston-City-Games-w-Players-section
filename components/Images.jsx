// Design and images
// Libraries
import Image from "next/image";
// Components
// Outside data

/////////////////////////////

export default function Images() {
  return (
    <div className="py-24 max-sm:py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex max-lg:flex-col-reverse items-center gap-8 max-lg:gap-14">
          <div
            data-aos="zoom-out"
            className="w-1/2 max-lg:w-full flex flex-col gap-8 max-lg:text-center "
          >
            <h1 className=" max-lg:m-auto text-7xl max-xl:text-6xl max-md:text-5xl max-xl:leading-[65px] font-title text-white tracking-wide leading-[75px]">
              Unleash your teams for a{" "}
              <span className="text-amber-400">
                day of outdoor competitive sport!
              </span>
            </h1>
            <p className="text-white text-lg">
              Not only will your teams have great fun competing against other
              businesses and charities, taking part in outdoor activity also
              enhances wellbeing and mental health.
            </p>
            <span className="font-bold text-amber-100 w-2/3 max-lg:m-auto">
              ⚠️ Each participating business or charity can enter as many teams
              as they wish.
            </span>
          </div>
          <div className="relative w-1/2 max-lg:w-full">
            <div className="flex items-center justify-center space-x-6 lg:space-x-8">
              <div
                data-aos="fade-down"
                className="z-20 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
              >
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/imgs/6.png"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/imgs/4.png"
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
                    src="/imgs/7.png"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/imgs/8.png"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/imgs/3.png"
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
                    src="/imgs/5.png"
                    alt="People practicing sports"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-44 w-44 max-xl:h-36 max-xl:w-36 max-lg:w-64 overflow-hidden rounded-lg hover:scale-105">
                  <Image
                    src="/imgs/9.png"
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
    </div>
  );
}
