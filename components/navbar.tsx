import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-6">
      <Link href="/" className="text-xl">
        Portfolio Ryan Houben
      </Link>
      <ul className="flex gap-x-2">
        <li>
          <Link href="/semester-7">Semester 7</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
