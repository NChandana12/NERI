import {
  Brain,
  ShieldCheck,
  Activity,
  Clock3,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Decision Support",
    description:
      "Receive intelligent guidance throughout every emergency scenario. Neri adapts to your actions in real time and provides context-aware feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Realistic Emergency Simulations",
    description:
      "Experience immersive scenarios including earthquakes, fires, floods, accidents and medical emergencies in a safe learning environment.",
  },
  {
    icon: Activity,
    title: "Live Performance Tracking",
    description:
      "Monitor every decision, response and action during training with detailed performance metrics generated instantly.",
  },
  {
    icon: Clock3,
    title: "Response Time Analysis",
    description:
      "Improve reaction speed by measuring how quickly you identify hazards and execute the correct emergency procedures.",
  },
  {
    icon: Users,
    title: "Collaborative Team Training",
    description:
      "Practice emergency response individually or with teammates to build communication and coordination under pressure.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your learning journey with detailed dashboards, completion statistics and AI-generated improvement suggestions.",
  },
];

function Features() {
  return (
    <section id="Features"
    className="bg-[#F8F6F2] px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#114B4B]">

            PLATFORM FEATURES

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#1F2A2A]">

            Everything you need to
            <span className="block text-[#114B4B]">
              train with confidence.
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">

            Neri combines artificial intelligence, immersive simulations
            and detailed analytics to prepare individuals and teams for
            real-world emergency situations.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-[#E7E3DB] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#114B4B]/10 transition group-hover:bg-[#114B4B]">

                  <Icon
                    size={30}
                    className="text-[#114B4B] transition group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1F2A2A]">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-[#66706D]">

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
