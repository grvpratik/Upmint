"use client";
import React from "react";
import MarginX from "../margin-container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="w-full text-cletter"
      aria-labelledby="footer-heading "
    >
      <MarginX>
        <div className="grid w-full  grid-cols-8 gap-4 py-4 md:gap-8 md:py-8">
          <div className="col-span-full flex max-w-sm flex-col gap-4 md:col-span-4">
            <span
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* logo */}
              <span className="font-montserrat text-xl font-bold uppercase tracking-wide">
                Upmint
              </span>
            </span>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm font-light  dark:text-violet-200/75">
                Discover upcoming, trending, and daily minted NFTs all in one
                place! Explore the newest drops, trending collections, and fresh
                creations daily on our platform.
              </p>
              <p className="mt-4 flex gap-2 text-sm  dark:text-violet-200/75">
                <Link
                  className="text-gray-700 transition hover:text-blue-400"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <span className=" text-base font-medium">Resources</span>
            <div className="my-3 flex flex-col gap-3 text-sm font-light ">
              <span>
                <Link href="#">Mints</Link>
              </span>
              <span>
                <Link href="#">Posts</Link>
              </span>
              <span>
                <Link href="#">Calendar</Link>
              </span>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <span className=" text-base font-medium">Legal</span>
            <div className="my-3 flex flex-col gap-3 text-sm font-light ">
              <span>
                <Link href="#">Privacy</Link>
              </span>
              <span>
                <Link href="#">Terms &amp; Conditions</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pb-4 pt-5  lg:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2024 alphanfts. All rights reserved.
          </p>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-500 transition-colors duration-300"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-deep-purple-accent-400 text-sm text-gray-500 transition-colors duration-300"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </MarginX>
    </footer>
  );
};
