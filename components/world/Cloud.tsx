type CloudProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Cloud({ children, className = "" }: CloudProps) {
  return (
    <div
      className={`relative rounded-full bg-violet-500/50 shadow-[0_20px_80px_rgba(167,139,250,0.35)] ${className}`}
    >
      <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-violet-300/50 blur-sm" />
      <div className="absolute left-10 -top-8 h-32 w-32 rounded-full bg-fuchsia-300/40 blur-sm" />
      <div className="absolute right-8 -top-6 h-28 w-28 rounded-full bg-purple-400/50 blur-sm" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
