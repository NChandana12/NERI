import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getTrainingSessions } from "../firebase/trainingService";
import {
  ArrowRight,
  Flame,
  Activity,
  Brain,
  Clock3,
} from "lucide-react";


function Dashboard() {

  if (window.innerWidth < 768) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2] p-8">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold text-[#114B4B]">NERI</h1>

          <p className="mt-5 text-lg font-medium text-[#1F2A2A]">
            Desktop Experience Recommended
          </p>

          <p className="mt-3 text-stone-600">
            The training dashboard is optimized for desktop and laptop
            screens to provide the best emergency simulation experience.
          </p>
        </div>
      </div>
    );
  }


  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const scenarioTypes = [
  {
    title: "Building Fire",
    difficulty: "Medium",
    icon: "🔥",
  },
  {
    title: "Earthquake",
    difficulty: "Hard",
    icon: "🌍",
  },
  {
    title: "Medical Emergency",
    difficulty: "Easy",
    icon: "🩺",
  },
  {
    title: "Chemical Spill",
    difficulty: "Hard",
    icon: "☣️",
  },
];

const latestSession =
  sessions.length > 0 ? sessions[sessions.length - 1] : null;

const exploreScenarios = scenarioTypes.filter(
  (scenario) => scenario.title !== latestSession?.scenarioType
);
  const stats = [
  {
  title: "Average Training Score",
  value:
    sessions.length === 0
      ? "0%"
      : `${Math.round(
          sessions.reduce((sum, session) => sum + session.accuracy, 0) /
            sessions.length
        )}%`,
  icon: Brain,
  color: "bg-emerald-100 text-emerald-600",
  },
{
  title: "Highest Score",
  value:
    sessions.length === 0
      ? "0%"
      : `${Math.max(...sessions.map((session) => session.accuracy))}%`,
  icon: Clock3,
  color: "bg-orange-100 text-orange-600",
},
  {
    title: "Completed Trainings",
    value: sessions.length,
    icon: Activity,
    color: "bg-teal-100 text-[#114B4B]",
  },
];
  useEffect(() => {
  const fetchSessions = async () => {
    const data = await getTrainingSessions();

    console.log("Training Sessions:", data);

    setSessions(data);
  };

  fetchSessions();
}, []);
  return (
    <div className="flex min-h-screen bg-[#F8F6F2]">
      <Sidebar />

      <main className="flex-1 p-10">

        {/* Header */}

        <div>
          <p className="text-[#66706D]">
            Welcome back 👋
          </p>

          <h1 className="mt-2 text-4xl font-black text-[#1F2A2A]">
            Dashboard
          </h1>
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[#66706D]">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-black text-[#1F2A2A]">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`rounded-2xl p-4 ${item.color}`}>
                    <Icon size={28} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

{/* Last Training */}

<div className="mt-10 rounded-[32px] bg-[#114B4B] p-8 text-white">

  {latestSession ? (

    <div className="flex items-center justify-between">

      <div>

        <p className="uppercase tracking-widest text-white/60">
          Last Training Session
        </p>

        <h2 className="mt-3 text-4xl font-black">
          {latestSession.scenarioType}
        </h2>

        <p className="mt-4 text-white/80">
          Difficulty: {latestSession.difficulty}
        </p>

        <p className="mt-2 text-white/80">
          Last Score: {latestSession.accuracy}%
        </p>

        <p className="mt-2 text-white/60 text-sm">
          {new Date(latestSession.completedAt).toLocaleString()}
        </p>

      </div>

      <button
        onClick={() => navigate("/training")}
        className="rounded-2xl bg-white px-7 py-4 font-semibold text-[#114B4B]"
      >
        Train Again
      </button>

    </div>

  ) : (

    <div>

      <h2 className="text-4xl font-black">
        Start Your First Training
      </h2>

      <p className="mt-4 text-white/80">
        Complete a training session to begin tracking your progress.
      </p>

      <button
        onClick={() => navigate("/training")}
        className="mt-8 rounded-2xl bg-white px-7 py-4 font-semibold text-[#114B4B]"
      >
        Start Training
      </button>

    </div>

  )}

</div>

{/* Explore Other Scenarios */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-[#1F2A2A]">
    Explore Other Scenarios
  </h2>

  <p className="mt-2 text-[#66706D]">
    Strengthen your emergency response skills by trying a different scenario.
  </p>

  <div className="mt-6 grid gap-6 md:grid-cols-3">

    {exploreScenarios.map((scenario) => (

      <div
        key={scenario.title}
        className="rounded-3xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
      >

        <div className="text-5xl">
          {scenario.icon}
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          {scenario.title}
        </h3>

        <p className="mt-2 text-[#66706D]">
          Difficulty: {scenario.difficulty}
        </p>

        <button
          onClick={() => navigate("/training")}
          className="mt-6 w-full rounded-2xl bg-[#B56A3A] py-3 font-semibold text-white hover:bg-[#9d5b31]"
        >
          Start Training
        </button>

      </div>

    ))}

  </div>

</div>
          {/* Recent Training Sessions */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-[#1F2A2A]">
    Recent Training Sessions
  </h2>

  <div className="mt-6 rounded-3xl bg-white shadow">

    {sessions.length === 0 ? (

      <p className="p-8 text-[#66706D]">
        No training sessions yet.
      </p>

    ) : (

      sessions
        .slice()
        .reverse()
        .map((session) => (

          <div
            key={session.id}
            className="flex items-center justify-between border-b p-6 last:border-none"
          >

            <div>

              <h3 className="text-xl font-bold">
                {session.scenarioType}
              </h3>

              <p className="text-[#66706D]">
                {session.difficulty}
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold text-[#114B4B]">
                {session.accuracy}%
              </p>

              <p className="text-sm text-[#66706D]">
                {new Date(session.completedAt).toLocaleDateString()}
              </p>

            </div>

          </div>

        ))

    )}

  </div>

</div>
        

      </main>
    </div>
  );
}

export default Dashboard;