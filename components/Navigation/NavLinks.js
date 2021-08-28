import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavLinks = (props) => {

  const router = useRouter();



  const ulClasses = props.desktop
    ? "flex flex-row justify-center items-center"
    : "flex flex-col justify-center items-center";
  return (
    <ul className={`w-full h-full list-none ${ulClasses}`}>
      <li className="m-3 text-xl font-bold">
        <a className={`p-2 text-blue-900 hover:bg-blue-200 rounded active:bg-blue-200 ${router.asPath === '/login' ? 'bg-blue-200' : ''}`}>
          <Link href="/login">LOGIN</Link>
        </a>
      </li>
      <li className="m-3 text-xl font-bold">
        <a className={`p-2 text-blue-900 hover:bg-blue-200 rounded active:bg-blue-200 ${router.asPath === '/dashboard' ? 'bg-blue-200' : ''}`}>
          <Link href="/dashboard">DASHBOARD</Link>
        </a>
      </li>
      <li className="m-3 text-xl font-bold">
        <a className="p-2 text-blue-900 hover:bg-blue-200 rounded">
          <Link href="/logout">LOGOUT</Link>
        </a>
      </li>
    </ul>
  );
};


