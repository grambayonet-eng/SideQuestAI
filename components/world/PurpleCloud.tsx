type PurpleCloudProps = {
  children?: React.ReactNode;
};

export function PurpleCloud({ children }: PurpleCloudProps) {
  return (
    <div className="relative h-40 w-[460px]">
      <div className="absolute bottom-0 h-28 w-full rounded-full bg-violet-300/80 shadow-[0_30px_100px_rgba(167,139,250,0.45)]" />
      <div className="absolute left-0 top-12 h-28 w-28 rounded-full bg-fuchsia-300/70" />
      <div className="absolute left-24 top-0 h-40 w-40 rounded-full bg-purple-300/80" />
      <div className="absolute right-24 top-4 h-36 w-36 rounded-full bg-violet-200/80" />
      <div className="absolute right-0 top-12 h-28 w-28 rounded-full bg-indigo-300/60" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
