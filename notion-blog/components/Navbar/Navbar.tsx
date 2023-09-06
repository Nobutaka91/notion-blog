import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container mx-auto px-5 lg:px-0 lg:w-2/5">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-medium">
          Kou_Ackerman
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:text-red-500 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/Otamasan8Nob"
                className="block px-4 py-2 hover:text-red-500 transition-all duration-300"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Nobutaka91"
                className="block px-4 py-2 hover:text-red-500 transition-all duration-300"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
