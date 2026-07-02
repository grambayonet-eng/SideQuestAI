import { Brain, Users } from "lucide-react";

export function SkyScene() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070816] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sidequest-hero-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-8 py-8">
        <nav className="flex items-center justify-between">
          <div className="h-20 w-[320px]" />

          <div className="hidden items-center gap-10 text-sm font-medium text-white/90 md:flex">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#projects">Projects</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>

          <div className="flex items-center gap-4">
            <a className="rounded-xl border border-white/25 px-7 py-3 text-sm backdrop-blur hover:bg-white/10">
              Log in
            </a>
            <a className="rounded-xl bg-violet-500 px-7 py-3 text-sm font-bold shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:bg-violet-400">
              Get Started
            </a>
          </div>
        </nav>

        <section className="flex flex-1 items-center">
          <div className="max-w-2xl pt-20">
            <div className="mb-6 inline-flex rounded-full border border-violet-300/30 bg-violet-950/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-200 backdrop-blur">
              ✨ AI-powered project launch network
            </div>

            <h1 className="text-6xl font-black leading-[1.04] tracking-tight md:text-7xl">
              Turn side-income ideas into{" "}
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                real projects.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100/90">
              Brainstorm with Ghost, build a launch blueprint, estimate costs,
              and find collaborators who can help turn your free time into
              opportunity.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/brainstorm"
                className="inline-flex items-center rounded-xl bg-violet-500 px-7 py-4 text-sm font-bold shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:bg-violet-400"
              >
                <Brain className="mr-2 h-5 w-5" />
                Brainstorm with Ghost
              </a>

              <a
                href="/projects"
                className="inline-flex items-center rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur hover:bg-white/10"
              >
                <Users className="mr-2 h-5 w-5" />
                Browse Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
