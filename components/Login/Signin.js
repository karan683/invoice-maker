import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Signin = (props) => {

    const createAccount = () => {
        props.onCreateAccount();
    };

    return (
        <>
            <div className="flex justify-center mt-32 mb-20">
                <div className="flex justify-center md:justify-between w-9/12 pb-28 bg-gray-100 shadow-lg">
                    <div>
                        <figure className="hidden md:block">
                            <img src="SignIn.svg" className="w-3/4 h-80 mt-5 ml-12 " alt="Signin image"></img>
                        </figure>
                    </div>
                    <div className="w-72 xl:w-96 lg:mr-5 ml-5 mr-5 md:mr-10">
                        <h2 className="font-black text-2xl mt-5 mb-8 text-indigo-700 text-center">Sign In</h2>
                        <form>
                            <div className="relative">
                                <MdEmail className="absolute left-0 top-3 ml-1" />
                                <input type="email" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 mb-2 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Your Email" required={true}></input>
                            </div>
                            <div className="relative mt-2">
                                <FaLock className="absolute left-0 top-3 ml-1" />
                                <input type="password" className=" text-gray-700 w-full h-10 rounded-md p-1 pl-8 shadow-md focus:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Password" required={true}></input>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="mt-6 bg-gradient-to-r from-green-500 to-indigo-500 text-white p-1 pl-2 pr-2 rounded-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-indigo-400">Login In</button>
                            </div>
                        </form>

                        <div className="mt-8 ">
                            <h3 className="text-gray-500 font-semibold mb-2">Or login with</h3>
                            <a href="#" className="text-2xl"><FcGoogle /></a>
                        </div>

                        <div className="flex justify-center">
                            <button href="#" onClick={createAccount} className="mx-auto mt-5 text-indigo-500 hover:text-indigo-800">Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};