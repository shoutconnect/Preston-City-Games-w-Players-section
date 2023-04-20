// Design and images
// Libraries
import Image from "next/image";
// Components
// Outside data

/////////////////////////////

export default function Navbar() {
  return (
    <div className="py-6 max-sm:py-4">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex justify-between">
        <Image
          src="/favicon.ico"
          width={35}
          height={35}
          className="hover:scale-110"
        />
        <div className="flex gap-8">
          <a
            href="#about"
            className="text-neutral-50 hover:text-amber-200 font-bold"
          >
            About
          </a>
          <a
            href="#register"
            className="text-neutral-50 hover:text-amber-200 font-bold"
          >
            Register
          </a>
          <a
            href="#venue"
            className="text-neutral-50 hover:text-amber-200 font-bold"
          >
            Venues
          </a>
        </div>
      </div>
    </div>
  );
}
