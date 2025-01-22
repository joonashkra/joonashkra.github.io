import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Menu from "../assets/Menu";
import X from "../assets/X";

function NavBar() {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="navBar bg-white dark:bg-black/75 shadow-md p-4 md:p-6 flex flex-col md:flex-row md:justify-around md:items-center w-full sticky top-0">
            <div className="navBarTitle flex justify-between items-center w-full md:w-auto">
                <h1 className="text-lg md:text-xl lg:text-2xl">joonashkra.github.io</h1>
                <button
                    className="md:hidden"
                    onClick={() => setDropDown(!dropDown)}
                >
                    {dropDown ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <nav
                className={`${
                    dropDown ? "flex" : "hidden"
                } md:flex flex-col md:flex-row md:gap-10 mt-6 md:mb-0 md:mt-0`}
            >
                <ul className="largeScreenNav flex justify-around items-center gap-6 list-none lg:gap-14 text-md sm:text-lg lg:text-xl">
                    <li>
                        <Link
                            smooth
                            className="relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2"
                            to="#home"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            className="relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2"
                            to="#about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            className="relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2"
                            to="#skills"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth
                            className="relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2"
                            to="#contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
