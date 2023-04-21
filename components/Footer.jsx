// Design and images
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
// Libraries
// Components
// Outside data

/////////////////////////////

export default function Footer() {
  const year = new Date().getFullYear();
  const navigation = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/prestoncitygames",
      icon: <RiLinkedinFill className="h-6 w-6" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/prestoncitygames",
      icon: <RiFacebookCircleFill className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shoutnetworkofficial/",
      icon: <RiInstagramFill className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pr_citygames",
      icon: <RiTwitterFill className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {year} Shout Connect, ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
