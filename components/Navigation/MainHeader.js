import React from "react";

export const MainHeader = (props) => {
  return (
    <header className="w-full bg-white shadow-md h-22 absolute left-0 top-0 flex md:justify-between items-center px-0 py-4">
      {props.children}
    </header>
  );
};
