
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Menu from "../assets/Menu";
import X from "../assets/X";

function NavBar() {
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className="md:flex md:flex-row md:justify-around flex-col justify-center items-center bg-black/25 p-4 md:p-6">
            <div className="flex justify-between">
                <h1 className="text-lg md:text-xl lg:text-2xl text-center">joonashkra.github.io</h1>
                <button className="md:hidden" onClick={() => setDropDown(!dropDown)}>{ dropDown ? <X size={22}/> : <Menu size={22}/> }</button>
            </div>
            <nav
                className={`transition-all duration-300 overflow-hidden md:overflow-visible ${dropDown ? 'max-h-40 mt-5 mb-1' : 'max-h-0'} md:flex md:m-2`}>
                <ul onClick={() => setDropDown(false)} className="justify-evenly items-center text-center flex flex-row md:gap-8 lg:gap-14 text-md sm:text-lg lg:text-xl">
                    <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2" to="#home">Home</Link>
                    <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2" to="#about">About</Link>
                    <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2" to="#skills">Skills</Link>
                    <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2" to="#contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;