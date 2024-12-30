export function Card({ title }: { title: string }) {
  return <li className="card-item">{title}</li>;
}

export function CardWrapper({ children }: { children: React.ReactNode }) {
  return <ul className="flex gap-2 my-10">{children}</ul>;
}
