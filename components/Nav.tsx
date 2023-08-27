"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="padding-x py-8 w-full sticky top-0 bg-slate-200 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
        <nav className="flex justify-between items-center max-container ">
          <Link href="/">
            <Image
              src="/images/header-logo.svg"
              alt="header-logo"
              width={130}
              height={29}
              className="ml-[1px]"
            />
          </Link>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => {
              return (
                <li key={item.label}>
                  <Link
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* mobile nav */}
          <div className="hidden max-lg:block" onClick={() => setShow(!show)}>
            {show ? (
              <Image
                src="/icons/nav_cross.svg"
                alt="hamburger icon"
                height={25}
                width={25}
              />
            ) : (
              <Image
                src="/icons/hamburger.svg"
                alt="hamburger icon"
                height={25}
                width={25}
              />
            )}
            {show && (
              <div className="bg-slate-200 px-3 pr-8 py-2 rounded-xl absolute right-0 mt-2 mr-8 ">
                <ul className="">
                  {navLinks.map((item) => {
                    return (
                      <li className="mr-1" key={item.label}>
                        <Link
                          className="font-montserrat leading-normal text-lg text-slate-gray"
                          href={item.href}
                          key={item.label}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
