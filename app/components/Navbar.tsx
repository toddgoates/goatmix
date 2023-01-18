import { useState } from "react";
import { NavLink, Link } from "@remix-run/react";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="h-4 bg-gradient-to-r from-purple-500 to-orange-500"></div>
      <Container>
        <>
          <div className="flex items-center justify-between p-5 ">
            <Link to="/" prefetch="intent" className="flex items-center gap-4">
              <img
                src="images/goat-logo.svg"
                className="w-14 h-14"
                alt="A stylistic goat logo"
              />
              <h1 className="text-4xl font-bold text-gray-600">Todd Goates</h1>
            </Link>
            <ul className="hidden text-lg text-gray-600 md:visible md:flex md:gap-8">
              <li className="py-3">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon className="text-2xl" />
            </button>
          </div>
          <div
            className={`bg-gray-200 p-5 border-b border-gray-300 ${
              isOpen ? "block md:hidden" : "hidden"
            }`}
          >
            <ul className="text-lg text-gray-600">
              <li className="py-3">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      </Container>
    </nav>
  );
}
