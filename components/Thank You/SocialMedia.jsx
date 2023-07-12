// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function ThankYouSocialMedia() {
  return (
    <div className="py-24 max-sm:py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 text-white flex max-md:flex-col max-md:gap-20 max-md:items-center max-md:justify-center justify-between">
        <div
          className="flex flex-col w-2/3 max-md:w-full max-md:text-center"
          data-aos="fade-right"
        >
          <h1 className="text-6xl max-xl:text-5xl font-title tracking-wide">
            Check out our
            <span className="text-amber-400"> Social Media</span>
          </h1>
          <p className="text-lg mt-10">
            Do you want to stay informed with all the news, updates, and
            announcements about Preston City Games? Follow us today to stay up
            to date!
          </p>
        </div>
        <div
          className="w-1/3 max-md:w-full flex justify-end max-md:justify-center"
          data-aos="fade-left"
        >
          <Image
            src="/Preston_City_Games_LinkedIn_.png"
            width={300}
            height={300}
            alt="QR Code"
            className="h-40 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
