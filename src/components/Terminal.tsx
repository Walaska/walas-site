import React from "react";
import { MinusIcon } from "@heroicons/react/24/solid";

export default function Terminal() {
    const [input, setInput] = React.useState("");
    const [content, setContent] = React.useState([<p><span className="text-green-400">stranger@stranger:~$ </span>ssh -i 'walaskey.pem' stranger@127.0.0.1 -p 4433<br/>{new Date().toLocaleString()}<br/>Welcome to scuffed Ubuntu 22.04 terminal<br/>You can use this CLI to learn more about me!<br/>Use "commands" to see what you can do here<br /><br/></p>])

    const enterEvent = (e: React.KeyboardEvent) => {
        if (e.key == "Enter") {
            switch(input) {
                case "clear":
                    setContent([<p></p>]);
                    break;
                case "ls":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>ls<br /><span className="text-blue-500">random.txt</span></p>]);
                    break;
                case "cat random.txt":
                    setContent(prev => [...prev, <p><br/><span className="text-green-400">stranger@localhost:~$ </span>cat random.txt<br/>did you really thing there would be something here...&#128563;<br/>well now that you are here, you can contact me using the form below &#129303;</p>]);
                    break;
                case "commands":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>commands<br/>commands<br/>ls<br/>info<br/>git<br/>hello<br/>feedback<br/>contact<br/>echo<br/>cat</p>]);
                    break;
                case "info":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>info<br/>Hey, I don't know what the fuck to write here because neya said im stupid af</p>]);
                    break;
                case "git":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>git<br/>Sorry, you can't commit anything here but you can checkout my GitHub account:<br/>https://github.com/Walaska</p>]);
                    break;
                case "hello":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>hello<br/>Hello world!</p>]);
                    break;
                case "contact":
                    setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>contact<br/>You can contact me using the form below ᕙ(⇀‸↼‶)ᕗ Thanks!</p>]);
                    break;
                default:
                    if (input.substring(0,3) == "cat") {
                        setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>{input}<br/>cat: No such file or directory</p>]);
                        break;
                    }
                    else if (input.substring(0,4) == "echo") {
                        setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>{input}<br/>{input.split("echo ", 2)[1]}</p>]);
                        break;
                    }
                    else {
                        setContent(prev => [...prev, <p><span className="text-green-400">stranger@localhost:~$ </span>{input}<br/>Command "{input}" not found.</p>]);
                        break;
                    }
            }
            setInput("");
        }
    };

    return(
        <section id="terminal">
            <div className="container px-5 py-10 mx-auto items-center flex flex-col justify-center min-h-fit">
                <div className="border border-black rounded-t-lg sm:w-2/3 flex-wrap flex w-full bg-neutral-800">
                    <div className="flex p-1 w-1/10">
                        <img
                        className="object-cover object center rounded mr-1 "
                        alt="minimize"
                        src="./mini.png"
                        />
                        <img
                        className="object-cover object center rounded mr-1"
                        alt="resize"
                        src="./resize.png" 
                        />
                        <img
                        className="object-cover object center rounded "
                        alt="close"
                        src="./close.png" 
                        />
                    </div>
                    <p className="text-center w-4/5 pt-1">stranger@localhost: ~/</p>
                </div>
                <div className="border-x-2 border-black relative flex flex-col h-full items-center bg-cyan-900/20 p-0 sm:w-2/3 w-full h-96 flex-col-reverse overflow-auto">
                    <div className="mx-auto w-full flex flex-col self-end p-1 text-slate-200 whitespace-pre-line p-1 text-slate-200 font-medium items-start">
                        {content.map(paragraph => paragraph)}
                    </div>
                </div>
                <div className="border-x-2 border-b-2 border-black mx-auto w-full flex rounded-b-lg relative sm:w-2/3 bg-cyan-800/50 font-medium">
                    <p className="pr-1 pl-1 text-slate-200"><span className="text-green-400">stranger@localhost:~$</span></p>
                    <input onChange={e=>setInput(e.target.value)} onKeyUp={enterEvent} value={input} id="terminal_text" name="terminal_text" className="text-slate-200 flex-1 border-none bg-transparent outline-none " />
                </div>
            </div>
        </section>
    );
}