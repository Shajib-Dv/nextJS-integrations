/** @format */

import Link from "next/link";
import ThemeChanger from "../themeChanger/ThemeChanger";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Contacts", url: "/contacts" },
  { id: 5, title: "Blog", url: "/blog" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white bg-[rgb(0,0,0,0.5)] px-10 h-24">
      <div className="text-5xl">
        <Link href="/" className="text-green-800">
          NextRush
        </Link>
      </div>
      <div className="hidden md:flex gap-6">
        <ThemeChanger />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-green-700">
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
