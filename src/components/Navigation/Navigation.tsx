"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import logo from "../../../public/images/logo/logo.svg";
import logo2 from "../../../public/images/logo/logo-2.png";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const tab = searchParams.get("tab");
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-black z-50 border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img loading="lazy" src={logo.src} className="h-10" alt="the20" />
            {pathname !== "/" ? (
              <img src={logo2.src} loading="lazy" className="h-8 w-40 lg:w-48" alt="The20 Logo" />
            ) : null}
          </Link>
          <button
            type="button"
            onClick={toggleNavbar} // Call toggleNavbar on click
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isOpen} // Use the isOpen state here
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between font-medium  w-full md:flex md:w-auto md:order-1`}
          >
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0
                     md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <Link
                  href="/"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white  ${
                    pathname === "/" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""
                  }
                   rounded  md:hover:bg-transparent
                            md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                             dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/about"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white ${
                    pathname === "/about" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""
                  }
                   			rounded  md:hover:bg-transparent
                            md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white rounded  md:hover:bg-transparent
								${pathname === "/product" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""}
                            md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                              dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white rounded  md:hover:bg-transparent
								${pathname === "/service" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""}
                            md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                              dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  href="/career"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white rounded  md:hover:bg-transparent
								${pathname === "/career" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""}
									 md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
									dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 `}
                >
                  Career
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 text-white rounded  md:hover:bg-transparent
								${pathname === "/contact" ? "underline underline-offset-8 decoration-[#e5c493] decoration-4" : ""}
									 md:hover:text-[#e5c493] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
									dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 `}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="lg:block flex justify-center  w-full md:w-auto">
              <a
                href="mailto:tqh@the20.sg"
                className="text-black mt-5  md:mt-0 ml-5 bg-[#e5c493]  focus:ring-4 focus:outline-none
                             font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 "
              >
                Contact us now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
