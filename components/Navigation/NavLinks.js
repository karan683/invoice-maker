import React from "react";
import Link from "next/link";

export const NavLinks = (props) => {
  const ulClasses = props.desktop
    ? "flex flex-row justify-center items-center"
    : "flex flex-col justify-center items-center";
  return (
    <ul className={`w-full h-full list-none ${ulClasses}`}>
      <li className="m-3 text-xl font-bold">
        <span className="p-2 text-blue-900 hover:bg-blue-200 rounded">
          <Link href="/signup">SIGN UP</Link>
        </span>
      </li>
      <li className="m-3 text-xl font-bold">
        <span className="p-2 text-blue-900 hover:bg-blue-200 rounded">
          <Link href="/login">LOGIN</Link>
        </span>
      </li>
      <li className="m-3 text-xl font-bold">
        <span className="p-2 text-blue-900 hover:bg-blue-200 rounded">
          <Link href="/dashboard">DASHBOARD</Link>
        </span>
      </li>
      <li className="m-3 text-xl font-bold">
        <span className="p-2 text-blue-900 hover:bg-blue-200 rounded">
          <Link href="/logout">LOGOUT</Link>
        </span>
      </li>
    </ul>
  );
};
