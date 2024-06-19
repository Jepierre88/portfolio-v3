"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navigate() {
  const pathname = usePathname();
  return (
    <header className="mt-16 max-w-[300px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-black font-extrabold text-4xl tracking-[8px]">
          Jean Ortiz
        </h1>
        <h2 className="tracking-wider font-light text-gray-400 text-md">
          Front Developer
        </h2>
      </div>

      <nav className="my-3">
        <ul className="flex justify-around">
          <li>
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "bg-gray-100" : ""
              } px-5 py-2 rounded-sm`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/work"}
              className={`${
                pathname === "/work" ? "bg-gray-100" : ""
              } px-5 py-2 rounded-sm`}
            >
              Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
