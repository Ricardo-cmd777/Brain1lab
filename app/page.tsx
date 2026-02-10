"use client";

import { useMemo } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import type { KitTagKey } from "@/lib/kit-tags";

/** -----------------------------
 * Types
 * ----------------------------*/
type FeatureRow = {
  title: string;
  body: string;
  side: "left" | "right";
};

type Faq = {
  q: string;
  a: string;
};

/** -----------------------------
 * Page
 * ----------------------------*/
export default function Home() {
  // ✅ Main landing page segment
  const subscribe = useSubscribe("GENERAL_USER" satisfies KitTagKey);

  const features = useMemo<FeatureRow[]>(
    () => [
      {
        title: "SCIENCE-BACKED GAMES",
        body: "Every drill is designed with neuroscience and elite coaching. Train focus, reaction, and decision timing for your sport.",
        side: "left",
      },
      {
        title: "REAL-TIME PROGRESS\nTRACKING",
        body: "Track your Brain Performance Index (BPI) over time. See where you improve, what needs work, and how you stack up.",
        side: "right",
      },
      {
        title: "GAMIFIED MOTIVATION",
        body: "Daily challenges, streaks, and milestone rewards—built to keep training consistent without burning out.",
        side: "left",
      },
      {
        title: "FOR TEAMS & INDIVIDUALS",
        body: "Build a repeatable routine for yourself, or deploy a structured program across your roster. Coaches get a clearer view of progress.",
        side: "right",
      },
    ],
    []
  );

  const faqs = useMemo<Faq[]>(
    () => [
      {
        q: "What is Brain 1?",
        a: "Brain 1 is a science-backed training platform designed to sharpen focus, memory, and decision-making through short, gamified sessions.",
      },
      {
        q: "How does it work?",
        a: "You train with bite-sized drills, track progress over time, and get feedback loops that encourage consistent practice.",
      },
      {
        q: "Who is Brain 1 for?",
        a: "Individuals and teams who want measurable cognitive performance improvements—athletes, students, professionals, and coaches.",
      },
      {
        q: "Is Brain 1 just another brain game?",
        a: "It’s built around structured training blocks, progress tracking, and performance metrics rather than casual play.",
      },
      {
        q: "What's the science behind the games?",
        a: "The games are inspired by cognitive science and performance training principles, focusing on repeatable, trainable skills.",
      },
      {
        q: "What is Brain Performance Index (BPI)?",
        a: "A consolidated score that summarizes training performance across key skill areas, making progress easy to interpret.",
      },
      {
        q: "Do I need to be an athlete to use Brain 1?",
        a: "No—anyone can use it. The training adapts to different goals and experience levels.",
      },
      {
        q: "Can I use Brain 1 with friends or colleagues?",
        a: "Yes—use it solo or as a shared program with a team to compare progress and stay motivated.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full border border-lime-200/60" />
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-lime-200/60" />
          <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full border border-lime-200/60" />
          <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full border border-lime-200/60" />
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="text-center">
            <div className="text-lg font-semibold text-lime-500 sm:text-xl">
              Train Your Brain
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl">
              Elevate Your Game
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500 sm:text-base">
              Science-backed, gamified training to sharpen focus,
              <br className="hidden sm:block" />
              memory, and decision-making.
            </p>

            {/* ✅ Subscribe */}
            <SubscribeForm
              variant="hero"
              email={subscribe.email}
              onEmailChange={subscribe.setEmail}
              status={subscribe.status}
              message={subscribe.message}
              placeholder={subscribe.placeholder}
              onSubmit={subscribe.submit}
            />

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <Badge label="Get On Waitlist" dotClass="bg-blue-500" />
              <Badge label="App Badge" dotClass="bg-neutral-900" />
              <Badge label="Verified" dotClass="bg-emerald-500" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
          <div className="space-y-10 sm:space-y-12">
            {features.map((f, idx) => (
              <FeatureRowView key={idx} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="text-center text-xs font-semibold text-neutral-800">
            FAQs
          </div>

          <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-lime-300/80 p-3 sm:p-4">
            <div className="divide-y divide-lime-200/60">
              {faqs.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
                    <div className="text-[11px] font-semibold text-lime-600">
                      {item.q}
                    </div>
                    <div className="shrink-0 text-lime-600">
                      <span className="hidden group-open:inline">−</span>
                      <span className="group-open:hidden">+</span>
                    </div>
                  </summary>
                  <div className="pb-3 pr-6 text-[11px] leading-relaxed text-neutral-600">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** -----------------------------
 * Components
 * ----------------------------*/
function SubscribeForm(props: {
  variant: "hero" | "cta";
  email: string;
  onEmailChange: (v: string) => void;
  status: "idle" | "loading" | "success" | "error";
  message: string;
  placeholder: string;
  onSubmit: (e?: React.FormEvent) => void;
}) {
  const { variant, email, onEmailChange, status, message, placeholder, onSubmit } = props;

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <div className="flex w-full items-center rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm sm:w-[340px]">
        <input
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-lime-300 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Subscribing…" : variant === "hero" ? "PLAY NOW" : "Subscribe"}
      </button>

      {message && (
        <div
          className={`w-full text-center text-xs sm:text-left ${
            status === "success" ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}

function Badge({ label, dotClass }: { label: string; dotClass: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm ring-1 ring-neutral-200">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
}

function FeatureRowView({ title, body, side }: FeatureRow) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-12 sm:gap-8">
      <div className={`sm:col-span-6 ${side === "right" ? "sm:order-2" : ""}`}>
        <div className="h-[210px] w-full rounded-2xl bg-neutral-200 shadow-sm sm:h-[240px]" />
      </div>
      <div className={`sm:col-span-6 ${side === "right" ? "sm:order-1" : ""}`}>
        <h3 className="whitespace-pre-line text-xs font-extrabold tracking-wide text-neutral-900">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral-600">
          {body}
        </p>
      </div>
    </div>
  );
}
