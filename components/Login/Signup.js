import React from 'react';
import { FaLock, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Signup = (props) => {

    const login = () => {
        props.onAuthenticate();
    };


    return (
        <>
            <div className="flex justify-center mt-32 mb-20">
                <div className="w-9/12 pb-28 flex justify-center md:justify-between items-center bg-gray-100 shadow-lg
                ">
                    <div>
                        <figure className="hidden md:block">
                            <img src="Signup.svg" alt="Signup image" className="w-3/4 h-80 mt-5 ml-12"></img>
                        </figure>
                    </div>
                    <div div className="w-72 ml-3 mr-3 xl:w-96 lg:mr-5 lg:ml-5 md:mr-10">
                        <h2 className="font-black text-2xl mt-5 mb-8 text-indigo-700 text-center">SIGN UP</h2>
                        <form>
                            <div className="relative">
                                <FaUserCircle className="absolute left-0 top-3 ml-1" />
                                <input type="text" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 mb-3 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Your Name" required ></input>
                            </div>
                            <div className="relative">
                                <MdEmail className="absolute left-0 top-3 ml-1" />
                                <input type="email" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 mb-3 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Your Email" required ></input>
                            </div>
                            <div className="relative">
                                <FaLock className="absolute left-0 top-3 ml-1" />
                                <input type="password" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 mb-3 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600"  placeholder="Your Password" required></input>
                            </div>
                            <div className="relative">
                                <FaLock className="absolute left-0 top-3 ml-1" />
                                <input type="password" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 mb-3 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600"  placeholder="Confirm Password" required></input>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="mt-6 bg-gradient-to-r from-green-500 to-indigo-500 text-white p-1 pl-2 pr-2 rounded-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-indigo-400 uppercase">SIGNUP</button>
                            </div>
                        </form>

                        <div className="flex justify-center">
                            <button href="#" onClick={login} className="mx-auto mt-8 text-indigo-500 hover:text-indigo-800">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}