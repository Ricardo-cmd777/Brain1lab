"use client";

import Link from "next/link";

type Member = {
  name: string;
  title: string;
  org?: string;
  focus: string[];
};

const members: Member[] = [
  {
    name: "Dr. — —",
    title: "Cognitive Neuroscience",
    org: "—",
    focus: ["Attention", "Decision-making", "Cognitive load"],
  },
  {
    name: "Dr. — —",
    title: "Sports Science",
    org: "—",
    focus: ["Performance", "Training design", "Fatigue & recovery"],
  },
  {
    name: "Dr. — —",
    title: "Clinical / Applied Psychology",
    org: "—",
    focus: ["Resilience", "Stress", "Behavior change"],
  },
  {
    name: "Dr. — —",
    title: "Data Science",
    org: "—",
    focus: ["Measurement", "Validation", "Metrics & modeling"],
  },
];

const principles = [
  {
    title: "Evidence-first training",
    body: "Exercises and protocols are designed around established cognitive science and performance training principles.",
  },
  {
    title: "Measurable outcomes",
    body: "We optimize for repeatable improvements you can track—reaction time, accuracy, consistency, and decision speed.",
  },
  {
    title: "Credible metrics",
    body: "BPI (Brain Performance Index) is derived from multiple signals to provide a stable, interpretable score over time.",
  },
  {
    title: "Privacy & ethics",
    body: "We use minimal data, maintain strict privacy controls, and enable anonymized exports for research collaboration.",
  },
];

export default function ScientificCommitteePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900">
              <span className="h-5 w-5 rounded bg-white/90" />
            </div>
            <span className="font-semibold text-slate-900">Brain1Lab</span>
          </div>

          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pb-14 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Scientific Committee
          </div>

          <h1 className="text-4xl font-light tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Built With Rigor.
            <br className="hidden sm:block" />
            Guided By Experts.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Brain1Lab’s Scientific Committee helps ensure our training methods,
            measurement framework, and data practices remain credible, ethical,
            and aligned with evidence-based standards.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-slate-900 px-8 text-base font-medium text-white hover:bg-slate-800"
            >
              Request Research Access <span className="ml-2 text-lg">›</span>
            </Link>
            <Link
              href="/"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 px-8 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Learn About Brain1Lab
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-light text-slate-900 md:text-3xl">
            Committee Focus Areas
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-100 bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <span className="h-6 w-6 rounded-md bg-slate-300" />
                </div>
                <h3 className="text-sm font-medium text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-light text-slate-900 md:text-3xl">
              Committee Members
            </h2>
            <p className="mt-4 text-slate-500">
              Replace placeholder names with your official committee roster.
              Each member profile is structured for quick scanning and credibility.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {members.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-slate-100 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-medium text-slate-900">
                      {m.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {m.title}
                      {m.org ? <span className="text-slate-400"> · {m.org}</span> : null}
                    </div>
                  </div>

                  <div className="h-10 w-10 rounded-xl bg-slate-100" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {m.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-slate-500">
                  Member contribution: protocol review, measurement validation,
                  and guidance on research-grade metrics and ethics.
                </div>
              </div>
            ))}
          </div>

          {/* Add section */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-slate-900">
            <div className="grid items-center gap-6 p-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="text-2xl font-light text-white">
                  Want to collaborate?
                </div>
                <p className="mt-2 text-sm text-white/70">
                  We support anonymized exports for research partnerships and
                  cohort-based studies, with privacy-first defaults.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  Request Access <span className="ml-2 text-lg">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded bg-slate-200" />
            <span className="text-sm text-slate-400">
              © 2026 Brain1Lab. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
            <a href="#" className="hover:text-slate-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
