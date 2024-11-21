import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ showMenu }) {
  return (
    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
      <ul className="flex gap-10">
        <li className="px-2 py-2   ">
          <a
            href=""
            className="text-white  hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent"
          >
            Home
          </a>
        </li>
        <li className="px-2 py-2 ">
          <a
            href=""
            className="text-white  hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent"
          >
            About
          </a>
        </li>
        <li className="px-2 py-2 ">
          <a
            href=""
            className="text-white  hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent"
          >
            Skills
          </a>
        </li>
        <li className="px-2 py-2 ">
          <a
            href=""
            className="text-white  hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
