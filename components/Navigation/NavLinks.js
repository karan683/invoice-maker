import React from "react";
import Link from "next/link";

export const NavLinks = (props) => {
  const ulClasses = props.desktop
    ? "flex flex-row justify-center items-center"
    : "flex flex-col justify-center items-center";
  return (
    <ul className={`w-full h-full list-none ${ulClasses}`}>
      <li className="m-4 text-xl font-bold">
        <a className="text-blue-900 hover:text-purple-900">
          <Link href="/signup">SIGN UP</Link>
        </a>
      </li>
      <li className="m-4 text-xl font-bold">
        <a className="text-blue-900 hover:text-purple-900">
          <Link href="/login">LOGIN</Link>
        </a>
      </li>
      <li className="m-4 text-xl font-bold">
        <a className="text-blue-900 hover:text-purple-900">
          <Link href="/mydashboard">DASHBOARD</Link>
        </a>
      </li>
      <li className="m-4 text-xl font-bold">
        <a className="text-blue-900 hover:text-purple-900">
          <Link href="/logout">LOGOUT</Link>
        </a>
      </li>
    </ul>
  );
};
