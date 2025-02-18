"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const NavBlog = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Tout nos articles",
      link: "/blog",
    },
    {
      name: "Consommateur",
      link: "/blog/consommateur",
    },
    {
      name: "Annonceur",
      link: "/blog/annonceur",
    },
    {
      name: "Franchise",
      link: "/blog/franchise",
    },
    {
      name: "On parle de nous",
      link: "/blog/on-parle-de-nous",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="hidden blog-nav md:flex flex-row items-center justify-around mb-5  mt-20">
        {navLinks.map(({ link, name }) => (
          <li key={name}>
            <Link
              className={`${
                pathname == link
                  ? "text-[#3ACCE1] border-b-2 border-b-[#3ACCE1]  "
                  : "text-black"
              } + text-base font-normal  hover:border-b-[#3ACCE1] ease-in-out duration-300 px-3 py-1`}
              href={link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden relative flex flex-col items-center w-full rounded-lg z-10 p-2">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#3ACCE1] text-white p-4 w-full flex items-center justify-between  rounded-lg tracking-wider border"
        >
          Choisire une catégorie
          {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
        </button>
        {isOpen && (
          <div className="bg-[#3ACCE1] absolute top-16 flex flex-col items-start rounded-lg p-1 w-full mx-auto duration-300">
            {navLinks.map(({ link, name }) => (
              <Link
                key={name}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`${
                  pathname == link ? "bg-[#000000] text-black" : "text-white"
                } + my-1 p-2 w-full font-normal hover:text-black hover:bg-[#000000] rounded-lg ease-in-out duration-300`}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBlog;
