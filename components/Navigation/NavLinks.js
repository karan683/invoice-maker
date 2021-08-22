import React from "react";
import Link from "next/link";

export const NavLinks = (props) => {
  const ulClasses = props.desktop
    ? "flex flex-row justify-center items-center"
    : "flex flex-col justify-center items-center";
  const liClasses = props.desktop ? "text-blue-800" : "text-blue-800";
  return (
    <ul className={`w-full h-full list-none ${ulClasses}`}>
      <li className={`m-4 text-xl  ${liClasses}  `}>
        <Link href="/sigup">
          <span className="hover:text-blue-300">SIGN UP</span>
        </Link>
      </li>
      <li className={`m-4 text-xl ${liClasses}`}>
        <Link href="/login">LOGIN</Link>
      </li>
      <li className={`m-4 text-xl ${liClasses}`}>
        <Link href="/mydasboard">DASHBOARD</Link>
      </li>
      <li className={`m-4 text-xl ${liClasses}`}>
        <Link href="/logout">LOGOUT</Link>
      </li>
    </ul>
  );
};
