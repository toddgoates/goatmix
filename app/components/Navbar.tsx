import { useState } from "react";
import { Link } from "@remix-run/react";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-100">
      <div className="h-4 bg-gradient-to-r from-purple-500 to-orange-500"></div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
          <Link to="/" className="flex gap-4 items-center">
            <img
              src="images/goat-logo.svg"
              className="w-14 h-14"
              alt="A stylistic goat logo"
            />
            <h1 className="text-4xl font-bold text-gray-600">Todd Goates</h1>
          </Link>
          <ul className="text-lg text-gray-600 hidden md:visible md:flex md:gap-8">
            <li className="py-3">
              <Link to="/" className="font-semibold hover:text-purple-500">
                Home
              </Link>
            </li>
            <li className="py-3">
              <Link to="/about" className="font-semibold hover:text-purple-500">
                About
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/projects"
                className="font-semibold hover:text-purple-500"
              >
                Projects
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/contact"
                className="font-semibold hover:text-purple-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon className="text-xl" />
          </button>
        </div>
        <div
          className={`bg-gray-200 p-5 border-b border-gray-300 ${
            isOpen ? "block md:hidden" : "hidden"
          }`}
        >
          <ul className="text-lg text-gray-600">
            <li className="py-3">
              <Link to="/" className="font-semibold hover:text-purple-500">
                Home
              </Link>
            </li>
            <li className="py-3">
              <Link to="/about" className="font-semibold hover:text-purple-500">
                About
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/projects"
                className="font-semibold hover:text-purple-500"
              >
                Projects
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/contact"
                className="font-semibold hover:text-purple-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
