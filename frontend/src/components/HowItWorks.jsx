import {
  Search,
  Brain,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose a Scenario",
    description:
      "Select from realistic emergency situations such as fires, earthquakes, floods, road accidents, or medical emergencies based on your learning goals.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Train with AI Guidance",
    description:
      "Make decisions as the scenario unfolds while Neri analyzes your actions, provides contextual guidance, and adapts the simulation in real time.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Receive Instant Feedback",
    description:
      "Every response is evaluated against emergency response best practices, highlighting strengths and areas that need improvement.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Improve Over Time",
    description:
      "Track your progress through detailed analytics, performance trends, and personalized recommendations after every training session.",
  },
];

function HowItWorks() {
  return (
    <section id="Training"
    className="bg-white px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#114B4B]">
            HOW IT WORKS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#1F2A2A]">

            Learn faster with
            <span className="block text-[#114B4B]">
              AI-driven emergency training.
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">

            Neri simplifies emergency preparedness into an interactive,
            intelligent learning experience designed to build confidence,
            improve response time, and reinforce life-saving decisions.

          </p>

        </div>

        <div className="relative mt-24">

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#E8E3DA] lg:block"></div>

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center gap-10 lg:flex-row ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  <div className="flex-1">

                    <div className="rounded-3xl border border-[#E8E3DA] bg-[#F8F6F2] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                      <div className="flex items-center justify-between">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#114B4B]">

                          <Icon
                            size={30}
                            className="text-white"
                          />

                        </div>

                        <span className="text-5xl font-black text-[#114B4B]/15">

                          {step.number}

                        </span>

                      </div>

                      <h3 className="mt-8 text-3xl font-bold text-[#1F2A2A]">

                        {step.title}

                      </h3>

                      <p className="mt-5 leading-8 text-[#66706D]">

                        {step.description}

                      </p>

                    </div>

                  </div>

                  <div className="relative z-10 hidden h-8 w-8 rounded-full border-8 border-[#F8F6F2] bg-[#B56A3A] lg:block"></div>

                  <div className="hidden flex-1 lg:block"></div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;