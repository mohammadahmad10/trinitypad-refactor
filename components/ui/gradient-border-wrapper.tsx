export function GradientBorderWrapper({
  children,
  className,
  wrapperClassName,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-xl p-0.5 ${
        reverse ? "bg-btn-gradient-reverse" : "bg-btn-gradient"
      } ${wrapperClassName}`}
    >
      <div className={`size-full rounded-xl bg-[#1C1E2C] ${className}`}>
        {children}
      </div>
    </div>
  );
}
