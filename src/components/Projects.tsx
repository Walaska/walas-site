import React from "react";
import axios from "axios";
import { projects } from '../misc';

export default function Projects() {
    let serverMembers: number;
    axios.get('https://discord.com/api/v10/guilds/903586180711481385?with_counts=true', {
        withCredentials: true,
        headers: {
            Authorization: 'Bot ' + process.env.REACT_APP_DISCORD_AUTH,
        },
        }).then((res) => {
            console.log(res);
            if (typeof(res) == "number") {
                    serverMembers = res['approximate_member_count'];
            }
        }).catch((err) => {
            console.log(err);
        });

    return(
        <section id="projects">
            <div className="container px-5 py-10 mx-auto bg-gray-900">
                <div className="">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Current Projects
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ml-3">
                        These are the projects I'm currently working on.
                    </p>
                </div>
                <div className="flex flex-wrap sm:mx-auto sm:mb-3 -mx-2 my-10">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <img 
                            className="transition ease-in-out delay-150 hover:-trasnlate-y-1 hover:scale-110 hover:bg-fuchsia-600 duration-300 object-cover object center rounded bg-blue-500"
                            alt="digitalart"
                            src="./jh4RYr01.svg"
                            />
                            <span className="title-font font-medium text-white px-4">
                                Socials Bot
                            </span>
                            <span className="title-font font-small text-white">
                            This is a Discord bot for Digital Art server. 
                            I made multiple different features to this bot using Python. This server is growing community with over
                            </span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <img 
                            className="object-cover object center rounded"
                            alt="aws"
                            src="./aws_badge.png"
                            />
                            <span className="title-font font-medium text-white px-4">
                                AWS Solutions Architect Associate Certificate
                            </span>
                            <span className="title-font font-small text-white">
                            I'm currently studying and doing hands-on work on AWS to prepare myself for this exam. 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}