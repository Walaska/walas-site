import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Kalle aka Walas.<br/>
                        <br className="hidden lg:inline-block" /><span className="font-normal">I'm interested in Software Development, Cloud Computing and AI.</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        The frontend of this website was made with React and it's hosted on AWS. Infrastructure was made using CDK - You can find the source code from my GitHub :-)
                        <a href="https://github.com/Walaska/narhi.dev-infra" target={"_blank"}><i className="devicon-github-original-wordmark text-3xl pl-5"></i></a>
                    </p>
                    
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact me!
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                </div>
            </div>
        </section>
    );
}