import React from "react";
import Link from "next/link";

export default function Dashboards() {
  return (
    <div>
      <nav class=" font-sans flex sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-[#1A0B2E]  sm:items-baseline w-full fixed  top-0 left-0 right-0 z-40">
        <div class="sm:ml-60 ">
          <a href="/" className=" no-underline text-white hover:text-blue-dark ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 35 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2H35" stroke="white" stroke-width="4" />
              <path d="M0 40.5518H35" stroke="white" stroke-width="4" />
              <path
                d="M21.4375 2L7 20.8276L21.4375 41"
                stroke="white"
                stroke-width="4"
              />
            </svg>
          </a>
        </div>
        <div className="">
          <a
            href="users"
            class="text-lg no-underline text-white hover:text-blue-dark ml-2 "
          >
            Malumot
          </a>
          <a
            href="https://on-time-seven.vercel.app/"
            class="text-lg no-underline text-white hover:text-blue-dark ml-4 sm:ml-20"
          >
            Portfolio
          </a>
          <a
            href="https://t.me/fullstacke_r"
            class="text-lg no-underline text-white hover:text-blue-dark ml-4 sm:ml-20"
          >
            Bog'lanish
          </a>
        </div>
      </nav>
    </div>
  );
}
