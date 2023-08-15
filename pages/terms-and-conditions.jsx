// Design and images
// Libraries
// Components
// Outside data
import TermsandConditionsText from "@/components/TermsandConditionsText";
import Head from "next/head";
import Image from "next/image";

/////////////////////////////

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>
          Terms and Conditions | Preston City Games | Sporting festival in
          Preston, UK
        </title>
        <meta
          name="description"
          content="Terms and Conditions | Preston City Games is a fun, one day sporting festival that pits teams of businesses and charities against each other in a tournament of rounders, football, netball and golf."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white relative">
        <section className="w-full bg-slate-900">
          <div className="relative w-full max-lg:w-full flex items-center justify-center">
            <div className="relative z-40 h-[100px] w-[100px] flex">
              <Image
                src="/imgs/Preston City Games Logo SVG.svg"
                fill
                alt="Preston City Games logo"
                className=""
                priority
              />
            </div>
          </div>
        </section>
        <div className="transform -scale-y-100 w-full ">
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
        <h1 className="text-4xl font-title text-slate-900 tracking-wide w-full text-center">
          Terms and Conditions
        </h1>
        <div className="pb-10">
          <TermsandConditionsText />
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
      </main>
    </>
  );
}
