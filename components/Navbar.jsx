// Design and images
// Libraries
import Image from "next/image";
import Link from "next/link";
// Components
// Outside data

/////////////////////////////

export default function Navbar() {
  return (
    <div className="py-6 max-sm:py-4 bg-transparent">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex justify-between items-center">
        <Link href="/">
          {" "}
          <Image
            src="/favicon.ico"
            width={35}
            height={35}
            className="hover:scale-110"
            alt="Preston City Games logo"
          />
        </Link>
        <div className="flex gap-8">
          {/* <a
            href="/registration"
            className="text-neutral-50 hover:text-amber-200 font-semibold"
          >
            Registration
          </a> */}
        </div>
      </div>
    </div>
  );
}
