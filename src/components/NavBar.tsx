
import { HashLink as Link } from "react-router-hash-link";


function NavBar() {

    return (
        <div className="flex items-center bg-black/25 py-5 justify-center sm:justify-between">
            <h1 className='text-xl sm:text-2xl ml-20'>joonashkra.github.io</h1>
            <nav className="flex lg:gap-20 lg:mr-20 text-xl">
                <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2" to="#home">Home</Link>
                <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2" to="#about">About</Link>
                <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2" to="#projects">Projects</Link>
                <Link smooth className="hover:underline hover:decoration-blue hover:decoration-2" to="#contact">Contact</Link>
            </nav>
        </div>
    );
}

export default NavBar;
