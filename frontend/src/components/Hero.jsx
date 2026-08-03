import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Shield,
  Brain,
  ChevronRight,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2]">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-[#0F5B5A]/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D17A3F]/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6B8E73]/10 blur-3xl" />

      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#114B4B 1px, transparent 1px), linear-gradient(90deg,#114B4B 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-36 pb-20">
        {/* LEFT */}

        <div className="w-full lg:w-1/2">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#114B4B]/20 bg-white/80 px-5 py-2 backdrop-blur shadow-md">

            <ShieldCheck size={16} className="text-[#114B4B]" />

            <span className="text-sm font-semibold text-[#114B4B]">

              AI Emergency Response Training

            </span>

          </div>

          {/* Title */}

          <h1 className="mt-8 text-7xl lg:text-8xl font-black leading-none tracking-tight text-[#173232]">

            NERI

          </h1>

          <div className="mt-2 flex items-center gap-3">

<span className="text-5xl font-semibold text-[#114B4B]">
              நெறி

            </span>

            <span className="rounded-full bg-[#D17A3F]/15 px-4 py-2 text-sm font-semibold text-[#8A5525]">

              Path • Principle • Code of Conduct

            </span>

          </div>

          <p className="mt-8 max-w-xl text-2xl font-semibold leading-snug text-[#173232]">

            Prepare.
            <br />
            Respond.
            <br />
            Save Lives.

          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">

            NERI combines AI-generated emergency scenarios with a
            deterministic rules engine grounded in established safety
            guidelines, helping learners build confident decision-making
            skills through realistic emergency simulations.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/dashboard"
              className="group flex items-center gap-3 rounded-full bg-[#114B4B] px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#0C4343]"
            >
              Start Training

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <a
              href="#features"
              className="rounded-full border border-[#114B4B]/20 bg-white/70 px-8 py-4 font-semibold text-[#173232] backdrop-blur transition hover:border-[#114B4B] hover:bg-white"
            >
              Explore Features
            </a>

          </div>

          {/* Quick stats */}

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5">

            <div className="rounded-3xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur">

              <p className="text-3xl font-black text-[#114B4B]">

                4

              </p>

              <p className="mt-1 text-sm text-stone-500">

                Emergency Modules

              </p>

            </div>

            <div className="rounded-3xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur">

              <p className="text-3xl font-black text-[#114B4B]">

                AI

              </p>

              <p className="mt-1 text-sm text-stone-500">

                Scenario Generation

              </p>

            </div>

            <div className="rounded-3xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur">

              <p className="text-3xl font-black text-[#114B4B]">

                33

              </p>

              <p className="mt-1 text-sm text-stone-500">

                Automated Tests

              </p>

            </div>

          </div>

        </div>

{/* RIGHT */}

<div className="relative hidden lg:flex w-1/2 items-center justify-center">

  <div className="relative w-[520px] animate-[float_7s_ease-in-out_infinite]">

    <div className="rounded-[36px] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold text-[#173232]">

                    Emergency Simulation

                  </h3>

                  <p className="text-sm text-stone-500">

                    Building Fire • High Risk

                  </p>

                </div>

                <Sparkles className="text-[#D17A3F]" />

              </div>

              <div className="rounded-2xl bg-[#F5F7F6] p-5">

                <p className="text-sm leading-7 text-stone-700">

                  A fire alarm sounds while smoke begins filling the
                  hallway outside your office...

                </p>

              </div>

              <div className="mt-6 space-y-3">

                <div className="rounded-2xl border border-[#114B4B]/15 bg-[#114B4B]/5 p-4 font-medium text-[#173232]">

                  ✓ Evacuate using the stairwell

                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-stone-500">

                  Use the elevator

                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-stone-500">

                  Wait for instructions

                </div>
                              </div>

              <div className="mt-8 rounded-2xl bg-[#0F5B5A] p-5 text-white">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-wider text-white/70">

                      AI Coach

                    </p>

                    <h4 className="mt-1 text-lg font-bold">

                      Response Evaluated

                    </h4>

                  </div>

                  <Shield size={22} />

                </div>

                <p className="mt-4 text-sm leading-7 text-white/90">

                  The rules engine independently evaluates every response
                  using established emergency-response principles before
                  providing feedback.

                </p>

              </div>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute -left-12 top-16 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur">

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-[#114B4B]/10 p-3">

                  <Brain
                    size={22}
                    className="text-[#114B4B]"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-[#173232]">

                    Gemini AI

                  </h4>

                  <p className="text-sm text-stone-500">

                    Scenario Generation

                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-8 bottom-16 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur">

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-[#D17A3F]/10 p-3">

                  <Shield
                    size={22}
                    className="text-[#D17A3F]"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-[#173232]">

                    Rules Engine

                  </h4>

                  <p className="text-sm text-stone-500">

                    Deterministic Evaluation

                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card 3 */}

            <div className="absolute bottom-[-28px] left-20 rounded-3xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur">

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-[#6B8E73]/15 p-3">

                  <ChevronRight
                    size={20}
                    className="text-[#6B8E73]"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-[#173232]">

                    Transparent Scoring

                  </h4>

                  <p className="text-sm text-stone-500">

                    AI creates the scenario.
                    <br />
                    The rules decide the answer.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;