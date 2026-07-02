type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
