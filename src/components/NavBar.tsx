import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Menu from "../assets/Menu";
import X from "../assets/X";

function NavBar() {
    const [dropDown, setDropDown] = useState(false);

    // Function to close the dropdown
    const closeDropdown = () => setDropDown(false);

    return (
        <div className="md:flex md:flex-row md:justify-around flex-col justify-center items-center bg-black/25 p-4 md:p-6">
            <div className="flex justify-between">
                <h1 className="text-lg md:text-xl lg:text-2xl text-center">joonashkra.github.io</h1>
                <button className="md:hidden" onClick={() => setDropDown(!dropDown)}>
                    {dropDown ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <nav
                className={`transition-all duration-300 overflow-hidden md:overflow-visible ${
                    dropDown ? "mt-6 mb-2" : "hidden"
                } md:flex md:m-2`}
            >
                <ul className="justify-around items-center text-center flex flex-row md:gap-8 lg:gap-14 text-md sm:text-lg lg:text-xl">
                    <Link
                        smooth
                        className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2"
                        to="#home"
                        onClick={closeDropdown}
                    >
                        Home
                    </Link>
                    <Link
                        smooth
                        className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2"
                        to="#about"
                        onClick={closeDropdown}
                    >
                        About
                    </Link>
                    <Link
                        smooth
                        className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2"
                        to="#skills"
                        onClick={closeDropdown}
                    >
                        Skills
                    </Link>
                    <Link
                        smooth
                        className="hover:underline hover:decoration-blue hover:decoration-2 underline-offset-2"
                        to="#contact"
                        onClick={closeDropdown}
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
