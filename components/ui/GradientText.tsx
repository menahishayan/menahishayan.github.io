interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export function GradientText({
  children,
  className,
  reverse,
}: GradientTextProps) {
  return (
    <span
      className={`${reverse ? "text-gradient-r" : "text-gradient"} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
