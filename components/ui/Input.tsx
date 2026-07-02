type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`min-h-14 rounded-2xl border border-white/10 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-violet-100/45 focus:border-violet-300 ${className}`}
      {...props}
    />
  );
}
