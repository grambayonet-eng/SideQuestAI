type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function IconButton({
  children,
  type = "button",
  onClick,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.45)] transition hover:bg-violet-400"
    >
      {children}
    </button>
  );
}
