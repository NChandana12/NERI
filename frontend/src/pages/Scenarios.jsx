import Sidebar from "../components/Sidebar";
import {
  Search,
  Flame,
  HeartPulse,
  Building2,
  Waves,
  Car,
  Zap,
  ArrowRight,
  Clock3,
  ShieldAlert,
} from "lucide-react";

const scenarios = [
  {
    title: "Building Fire",
    icon: Flame,
    difficulty: "Intermediate",
    duration: "15 mins",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Medical Emergency",
    icon: HeartPulse,
    difficulty: "Beginner",
    duration: "20 mins",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Earthquake",
    icon: Building2,
    difficulty: "Advanced",
    duration: "25 mins",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Flood Rescue",
    icon: Waves,
    difficulty: "Intermediate",
    duration: "20 mins",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Road Accident",
    icon: Car,
    difficulty: "Advanced",
    duration: "18 mins",
    color: "bg-slate-100 text-slate-700",
  },
  {
    title: "Electrical Hazard",
    icon: Zap,
    difficulty: "Beginner",
    duration: "12 mins",
    color: "bg-yellow-100 text-yellow-700",
  },
];

function Scenarios() {
  return (
    <div className="flex min-h-screen bg-[#F8F6F2]">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[#66706D]">
              AI Emergency Training
            </p>

            <h1 className="mt-2 text-4xl font-black text-[#1F2A2A]">
              Choose a Scenario
            </h1>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search scenarios..."
              className="outline-none"
            />

          </div>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {scenarios.map((scenario) => {
            const Icon = scenario.icon;

            return (

              <div
                key={scenario.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className={`rounded-2xl p-4 ${scenario.color}`}>

                    <Icon size={30} />

                  </div>

                  <span className="rounded-full bg-[#114B4B]/10 px-4 py-2 text-sm font-semibold text-[#114B4B]">

                    {scenario.difficulty}

                  </span>

                </div>

                <h2 className="mt-7 text-2xl font-bold text-[#1F2A2A]">

                  {scenario.title}

                </h2>

                <p className="mt-4 leading-7 text-[#66706D]">

                  Practice realistic AI-powered emergency response
                  procedures and improve your confidence before facing
                  real-life situations.

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-[#66706D]">

                    <Clock3 size={18} />

                    {scenario.duration}

                  </div>

                  <div className="flex items-center gap-2 text-[#66706D]">

                    <ShieldAlert size={18} />

                    {scenario.difficulty}

                  </div>

                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#114B4B] py-4 font-semibold text-white transition hover:bg-[#0D3E3E]">

                  Start Training

                  <ArrowRight size={20} />

                </button>

              </div>

            );
          })}

        </div>

      </main>

    </div>
  );
}

export default Scenarios;