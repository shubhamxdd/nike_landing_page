"use client";
import { navLinks } from "@/constants";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Nav = ({ darkMode, setDarkMode }: NavProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="padding-x py-8 w-full sticky top-0 bg-slate-200 backdrop-filter backdrop-blur-lg bg-opacity-25 z-50">
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
                    className="font-montserrat leading-normal text-lg text-slate-gray dark:text-neutral-400"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <span
              className="-mr-8 font-montserrat leading-normal text-lg text-slate-gray dark:text-neutral-400"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle Dark mode
            </span>
            <div className="flex">
              <li>
                <Switch.Group>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${
                      darkMode ? "bg-dark-coral-red" : "bg-coral-red"
                    }
                  relative inline-flex h-[38px] w-[74px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        darkMode ? "translate-x-9" : "translate-x-0"
                      }
                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </Switch.Group>
              </li>
            </div>
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
                  <span
                    className="-mr-8 font-montserrat leading-normal text-lg text-slate-gray dark:text-neutral-500"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    Toggle Dark mode
                  </span>
                  <li>
                    <Switch.Group>
                      <Switch
                        checked={darkMode}
                        onChange={setDarkMode}
                        className={`${
                          darkMode ? "bg-dark-coral-red" : "bg-coral-red"
                        }
                  relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${
                            darkMode ? "translate-x-9" : "translate-x-0"
                          }
                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </Switch.Group>
                  </li>
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
