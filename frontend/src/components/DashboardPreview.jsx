import {
  LayoutDashboard,
  Trophy,
  Clock3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section id="experience" className="bg-[#F8F6F2] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#114B4B]">
            EXPERIENCE
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#173232]">
            Experience
<span className="block text-[#114B4B]">
  NERI in Action
</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">
            Review previous simulations, monitor your progress, and continue
            improving your emergency decision-making with every session.
          </p>

        </div>

<div className="mt-20 overflow-hidden rounded-[32px] border border-[#E7E3DB] bg-white shadow-2xl transition-all duration-500 hover:scale-[1.01] animate-[pulseGlow_8s_ease-in-out_infinite]">

          {/* Browser */}

          <div className="flex items-center gap-2 border-b bg-stone-100 px-6 py-4">

            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>

            <div className="ml-6 rounded-full bg-white px-5 py-1 text-xs text-stone-400">
              neri-ai.netlify.app/dashboard
            </div>

          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[240px_1fr]">

            {/* Sidebar */}

            <div className="rounded-3xl bg-[#114B4B] p-6 text-white">

              <h3 className="text-2xl font-bold">
                NERI
              </h3>

              <p className="text-sm text-white/70">
                Emergency Training
              </p>

              <div className="mt-8 space-y-3">

                {[
                  "Home",
                  "Training",
                  "Dashboard",
                  
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl px-4 py-3 hover:bg-white/10"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Content */}

            <div>

              <div className="grid gap-5 md:grid-cols-3">

                {[
                  {
                    icon: Trophy,
                    value: "92%",
                    title: "Best Score",
                  },
                  {
                    icon: Clock3,
                    value: "18s",
                    title: "Avg Response",
                  },
                  {
                    icon: ShieldCheck,
                    value: "12",
                    title: "Completed",
                  },
                ].map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-3xl bg-[#F8F6F2] p-6"
                    >
                      <Icon
                        className="text-[#C9793B]"
                        size={28}
                      />

                      <h3 className="mt-6 text-4xl font-black text-[#173232]">
                        {card.value}
                      </h3>

                      <p className="mt-2 text-[#66706D]">
                        {card.title}
                      </p>

                    </div>
                  );
                })}

              </div>

              <div className="mt-8 rounded-3xl bg-[#F8F6F2] p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-[#66706D]">
                      Last Training Session
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#173232]">
                      Building Fire
                    </h3>

                    <p className="mt-2 text-[#66706D]">
                      Score: 92% • High Difficulty
                    </p>

                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-[#114B4B] px-5 py-3 font-semibold text-white transition hover:bg-[#0C4343]">

                    Train Again

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;