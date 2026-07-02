type GhostSpeechBubbleProps = {
  title?: string;
  message: string;
};

export function GhostSpeechBubble({
  title = "Hi! I'm Ghost!",
  message,
}: GhostSpeechBubbleProps) {
  return (
    <div className="relative max-w-60 rounded-3xl bg-white px-6 py-5 text-slate-900 shadow-2xl">
      <div className="absolute -left-3 top-12 h-6 w-6 rotate-45 bg-white" />
      <p className="font-bold text-indigo-700">{title}</p>
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
}
