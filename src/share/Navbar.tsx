import {useState} from "react";
import {NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/all";

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <nav className="relative flex flex-wrap items-center justify-evenly px-2 py-3 bg-orange-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold  inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Digital Ignition
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? "flex" : "hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/users"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span>Usuarios</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/books"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span>Libros</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};