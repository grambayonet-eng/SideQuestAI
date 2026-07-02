export function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[10%] top-[18%] h-1.5 w-1.5 animate-[twinkle_4s_ease-in-out_infinite] rounded-full bg-white" />
      <div className="absolute left-[32%] top-[12%] h-2 w-2 animate-[twinkle_6s_ease-in-out_infinite] rounded-full bg-yellow-100" />
      <div className="absolute right-[22%] top-[24%] h-1.5 w-1.5 animate-[twinkle_5s_ease-in-out_infinite] rounded-full bg-white" />
      <div className="absolute right-[38%] top-[36%] h-1 w-1 animate-[twinkle_7s_ease-in-out_infinite] rounded-full bg-violet-100" />
    </div>
  );
}
