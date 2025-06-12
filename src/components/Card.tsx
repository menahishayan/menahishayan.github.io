import clsx from "clsx";
import Link from "next/link";

export function Card({
  title,
  children,
  className,
  link,
  ...props
}: { title: string; children: React.ReactNode; className?: string; link?: string } & React.HTMLAttributes<HTMLLIElement>) {
  const content = (
    <li className={clsx("card-item", className)} title={title} {...props}>
      {children || title}
    </li>
  );
  return link ? (
    <Link href={link} scroll={false} legacyBehavior>
      {content}
    </Link>
  ) : (
    content
  );
}

export function CardWrapper({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={clsx("flex gap-2 my-10", className)} {...props}>
      {children}
    </ul>
  );
}
