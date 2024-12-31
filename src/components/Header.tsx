import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 self-end">
      <nav>
        <ul className="flex space-x-4 gap-4">
          <li>
            <Link href="#home" className="text-black hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-black hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-black hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-black hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
