/** @format */

import Link from "next/link";

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
    <>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
