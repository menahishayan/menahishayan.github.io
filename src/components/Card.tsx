import clsx from "clsx";

export function Card({
  title,
  children,
  className,
  ...props
}: { title: string; children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={clsx("card-item", className)} title={title} {...props}>
      {children || title}
    </li>
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
