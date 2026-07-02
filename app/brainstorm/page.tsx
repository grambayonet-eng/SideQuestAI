"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Sparkles, WandSparkles } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Input } from "@/components/ui/Input";
import { IconButton } from "@/components/ui/IconButton";

const starterIdeas = [
  {
    title: "Local errand service",
    cost: "$100–$300",
    timeline: "1–2 weeks",
    team: "1–3 people",
    summary:
      "Help busy locals with errands, pickups, returns, and simple household tasks.",
  },
  {
    title: "Short-form content studio",
    cost: "$0–$150",
    timeline: "1 week",
    team: "2–4 people",
    summary:
      "Create edited short videos for small businesses that need social media help.",
  },
  {
    title: "Weekend cleaning crew",
    cost: "$200–$600",
    timeline: "2–3 weeks",
    team: "2–5 people",
    summary:
      "Recruit a small crew and offer apartment, garage, or move-out cleaning.",
  },
];

export default function BrainstormPage() {
  const [input, setInput] = useState("");

  return (
    <main className="min-h-screen bg-[#070816] bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.35),transparent_30%),linear-gradient(180deg,#070816,#15133f)] px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-violet-200 hover:text-white">
          ← Back to home
        </Link>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassPanel>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-sm font-bold text-violet-100">
              <Sparkles className="h-4 w-4" />
              Brainstorm with Ghost
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Tell Ghost what kind of SideQuest you want to build.
            </h1>

            <p className="mt-4 leading-8 text-violet-100/80">
              Start with your budget, skills, free time, interests, or goals.
              Ghost will help turn rough ideas into possible projects.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="font-bold text-violet-100">Ghost asks:</p>
              <p className="mt-2 leading-7 text-violet-100/80">
                “How much time can you spend each week, and are you looking for
                fast cash, long-term income, or a new career path?”
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Example: I have weekends free, $500, and I’m good with people..."
                className="flex-1"
              />

              <IconButton>
                <Send className="h-5 w-5" />
              </IconButton>
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/25">
                <WandSparkles className="h-6 w-6 text-violet-100" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Example ideas</h2>
                <p className="text-sm text-violet-100/65">
                  Static prototype for now. AI comes next.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {starterIdeas.map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <h3 className="text-xl font-bold">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-violet-100/75">
                    {idea.summary}
                  </p>

                  <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-violet-100/50">Cost</p>
                      <p className="font-bold">{idea.cost}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-violet-100/50">Timeline</p>
                      <p className="font-bold">{idea.timeline}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-violet-100/50">Team</p>
                      <p className="font-bold">{idea.team}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </section>
      </div>
    </main>
  );
}
