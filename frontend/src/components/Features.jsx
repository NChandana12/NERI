import {
  Brain,
  ShieldCheck,
  Globe2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Scenario Generation",
    description:
      "Every training session features realistic emergency scenarios dynamically generated using Google's Gemini API, creating varied and engaging decision-making experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Rules Engine",
    description:
      "Unlike traditional AI applications, NERI evaluates responses using structured emergency-response guidance from FEMA, NFPA, OSHA, and the American Red Cross for transparent, explainable scoring.",
    featured: true,
  },
  {
    icon: Globe2,
    title: "Multiple Emergency Types",
    description:
      "Practice decision-making across building fires, earthquakes, medical emergencies, and chemical spills, with scenario-specific guidance for every situation.",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description:
      "Review previous sessions, monitor performance, and continuously improve emergency-response skills through personalized training history and analytics.",
  },
];

function Features() {
  return (
    <section
      id="platform"
      className="bg-[#F8F6F2] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#114B4B]">

            PLATFORM

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#173232]">

            Built for
            <span className="block text-[#114B4B]">

              Transparent Emergency Training

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">

            AI generates realistic emergency scenarios while NERI's
            deterministic rules engine ensures every decision is evaluated
            against trusted emergency-response guidance.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  feature.featured
                    ? "border-[#114B4B]/20 bg-[#114B4B] text-white"
                    : "border-[#E7E3DB] bg-white"
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-6 ${
                    feature.featured
                      ? "bg-white/15"
                      : "bg-[#114B4B]/10 group-hover:bg-[#114B4B]"
                  }`}
                >
                  <Icon
                    size={30}
                    className={`transition-all duration-300 ${
                      feature.featured
                        ? "text-white"
                        : "text-[#C9793B] group-hover:text-white"
                    }`}
                  />
                </div>

                <h3
                  className={`mt-8 text-2xl font-bold ${
                    feature.featured
                      ? "text-white"
                      : "text-[#173232]"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-5 leading-8 ${
                    feature.featured
                      ? "text-white/80"
                      : "text-[#66706D]"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;