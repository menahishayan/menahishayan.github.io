import * as Sections from "@/app/sections";
import Link from "next/link";

const sectionNames = Object.keys(Sections).map((key) => ({
  display: key
    .replace(/^_[0-9]+/, "")
    .replace(/([A-Z])/g, " $1")
    .trim(),
  id: key
    .replace(/([A-Z])/g, "-$1")
    .replace(/^_[0-9]+-/, "")
    .toLowerCase(),
}));

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4 gap-4">
          {sectionNames.map(({ display, id }) => (
            <li key={id}>
              <Link href={`/#${id}`} className="nav-link" replace>
                {display}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
