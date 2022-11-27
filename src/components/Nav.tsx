import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Nav() {
    return(
        <header className="bg-indigo-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                KN
                </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#about" className="mr-5 hover:text-white">
                Terminal
                </a>
                <a href="#terminal" className="mr-5 hover:text-white">
                Skills
                </a>
                <a href="#projects" className="mr-5 hover:text-white">
                Projects
                </a>
            </nav>
            <a
                href="#contact"
                className="inline-flex items-center bg-zinc-900/75 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0">
                Contact me
                <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
            </div>
      </header>
    );
}