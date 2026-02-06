"use client";

import { useMemo } from "react";
import type { KitTagKey } from "@/lib/kit-tags";
//import { useSubscribe } from "@/useSubscribe";
function IconBlock() {
  return <span className="block h-6 w-6 rounded-md bg-slate-300" />;
}

function Chevron() {
  return <span className="ml-2 inline-block text-lg leading-none">›</span>;
}

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
  // ✅ set per page (or infer from route later)
  //const subscribe = useSubscribe("GENERAL_USERS" satisfies KitTagKey);

  const features = useMemo<FeatureRow[]>(
    () => [
      {
        title: "SCIENCE-BACKED GAMES",
        body: "Every drill is designed with neuroscience and elite coaching. Train focus, reaction, and decision timing for your sport.",
        side: "left"
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

            <SubscribeForm
              variant="hero"
              //email={subscribe.email}
              //onEmailChange={subscribe.setEmail}
              //status={subscribe.status}
              //message={subscribe.message}
              //onSubmit={subscribe.submit}
            />

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <Badge label="Get OnWaitlist" dotClass="bg-blue-500" />
              <Badge label="App Badge" dotClass="bg-neutral-900" />
              <Badge label="Verified" dotClass="bg-emerald-500" />
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <div className="relative w-full max-w-[640px]">
              <div className="mx-auto h-[190px] w-[88%] rounded-2xl bg-black shadow-md sm:h-[240px]" />
              <div className="absolute -bottom-4 left-[10%] h-[80px] w-[120px] -rotate-12 rounded-2xl bg-neutral-900 shadow-md sm:-bottom-6 sm:h-[95px] sm:w-[150px]" />
              <div className="absolute bottom-0 right-[10%] h-[150px] w-[86px] rounded-2xl bg-lime-700 shadow-md ring-4 ring-white sm:h-[180px] sm:w-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-lime-100 to-white p-6 sm:p-8">
            <div className="mx-auto max-w-4xl">
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
                <div className="flex h-full w-full items-center justify-center px-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                      TRAIN YOUR <span className="text-lime-400">BRAIN</span>
                      <br />
                      LIKE YOU TRAIN
                      <br />
                      YOUR <span className="text-lime-400">BODY</span>
                    </div>
                    <div className="mx-auto h-10 w-10 rounded-full bg-red-500/90" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-neutral-500">
                See how Brain 1 turns screen time into measurable brain gains.
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-5">
              <div className="text-xs font-semibold tracking-wide text-neutral-400">
                TRUSTED BY ATHLETES,
              </div>
              <div className="mt-1 text-xs font-semibold tracking-wide text-neutral-400">
                BACKED BY SCIENCE
              </div>

              <div className="mt-5 space-y-3 text-xs leading-relaxed text-neutral-600">
                <p>
                  Athletes benefit from cognitive training—quick decisions, sharper
                  focus, and better performance under pressure.
                </p>
                <p>
                  Science-backed design ensures measurable improvement with repeatable
                  training blocks.
                </p>
                <p>
                  Coaches appreciate structured programs, progress visibility, and
                  consistent habits.
                </p>
              </div>
            </div>

            <div className="sm:col-span-7">
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 sm:pb-14">
          <div className="space-y-10 sm:space-y-12">
            {features.map((f, idx) => (
              <FeatureRowView key={idx} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* LOGO BAND */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-7">
          <div className="text-center text-xs font-semibold text-white/80">
            Backed By The Best German Soccer Leaders
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/60">
            {["SV Pars", "Deutscher Fussball-Bund", "Hoffenheim", "Chip 1 exchange"].map(
              (name) => (
                <div key={name} className="inline-flex items-center gap-2 text-[11px]">
                  <span className="h-4 w-4 rounded bg-white/10" />
                  <span>{name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
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

          <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-700 via-neutral-900 to-neutral-950">
            <div className="grid items-center gap-6 p-6 sm:grid-cols-12 sm:p-8">
              <div className="sm:col-span-5">
                <div className="mx-auto h-[160px] w-[220px] rounded-2xl bg-neutral-200/20 shadow-sm sm:mx-0 sm:h-[200px] sm:w-[260px]" />
              </div>
              <div className="sm:col-span-7">
                <div className="text-base font-extrabold tracking-tight text-white sm:text-xl">
                  Ready To Train?
                </div>
                <div className="mt-2 text-xs text-white/70">
                  Join the team beta today.
                  <br />
                  Get early access + a free year of training.
                </div>
              </div>
            </div>
          </div>

        

          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <div className="inline-flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-white/10" />
                <div className="text-sm font-extrabold text-white">
                  BRAIN1 <span className="font-semibold text-lime-400">lab</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:col-span-8 sm:grid-cols-3">
              <FooterCol
                title="Sites"
                items={[
                  "Brain 1 Lab",
                  "Coaches",
                  "Partners",
                  "SV Pars",
                  "Chip 1 exchange",
                  "Brain1",
                  "Scientific Committee",
                ]}
              />
              <FooterCol
                title="Social"
                items={["Community", "Mighty Networks", "Instagram", "Tiktok"]}
              />
              <FooterCol
                title="Company"
                items={["Account", "Contact", "Privacy Policy", "Media Kit"]}
              />
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-[11px] text-white/50">
            2026 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

/** -----------------------------
 * Components
 * ----------------------------*/
type SubscribeStatus = "idle" | "loading" | "success" | "error";

function SubscribeForm(props: {
  variant: "hero" | "cta";
  email: string;
  onEmailChange: (v: string) => void;
  status: SubscribeStatus;
  message: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const { variant, email, onEmailChange, status, message, onSubmit } = props;

  const buttonLabel =
    status === "loading"
      ? "Subscribing..."
      : variant === "hero"
      ? "PLAY NOW"
      : "Subscribe";

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <div className="flex w-full items-center rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm sm:w-[340px]">
        <input
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder={variant === "hero" ? "Your Email" : "Email Address"}
          className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-lime-400 px-6 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-lime-300 disabled:opacity-60 sm:w-auto"
      >
        {buttonLabel}
      </button>

      {message ? (
        <div
          className={`w-full text-center text-xs sm:text-left ${
            status === "success" ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      ) : null}
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
  const media = (
    <div className="h-[210px] w-full rounded-2xl bg-neutral-200 shadow-sm sm:h-[240px]" />
  );

  const text = (
    <div>
      <h3 className="whitespace-pre-line text-xs font-extrabold tracking-wide text-neutral-900">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral-600">
        {body}
      </p>
    </div>
  );

  return (
    <div className="grid items-center gap-6 sm:grid-cols-12 sm:gap-8">
      {side === "left" ? (
        <>
          <div className="sm:col-span-6">{media}</div>
          <div className="sm:col-span-6">{text}</div>
        </>
      ) : (
        <>
          <div className="sm:col-span-6 sm:order-2">{media}</div>
          <div className="sm:col-span-6 sm:order-1">{text}</div>
        </>
      )}
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold text-lime-400">{title}</div>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="text-[11px] text-white/60 hover:text-white/80">
            <span className="cursor-pointer">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
