import { useEffect, useState } from "react";
import { saveTrainingSession } from "../firebase/trainingService";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import { fetchScenarioBatch } from "../services/api";

function Training() {
  const [scenarios, setScenarios] = useState([]);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
const [selectedScenario, setSelectedScenario] = useState(null);

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
  const [current, setCurrent] = useState(1);
  const totalScenarios = 5;
  const scenario = scenarios[current - 1];

  useEffect(() => {
  if (selectedScenario) {
    loadScenario();
  }
}, [selectedScenario]);

  async function loadScenario() {
    setLoading(true);

    try {
      const data = await fetchScenarioBatch(
  selectedScenario.title,
  selectedScenario.difficulty
);
      setScenarios(data);
      setCurrent(1);
      setSelected(null);
      setSubmitted(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (selected === null) return;

    setSubmitted(true);

    if (selected === scenario.correct) {
      setScore((prev) => prev + 20);
    }
  }

 async function nextScenario() {
  if (current >= totalScenarios) {

    const sessionData = {
      scenarioType: selectedScenario.title,
      difficulty: selectedScenario.difficulty,
      score,
      totalQuestions: totalScenarios,
      accuracy: (score / (totalScenarios * 20)) * 100,
      completedAt: new Date().toISOString(),
    };

    await saveTrainingSession(sessionData);

    setFinished(true);
    return;
  }

  setCurrent((prev) => prev + 1);
  setSelected(null);
  setSubmitted(false);
}
  if (!selectedScenario) {
  return (
    <div className="flex min-h-screen bg-[#F8F6F2]">
      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-4xl font-black text-[#1F2A2A]">
          Choose a Training Scenario
        </h1>

        <p className="mt-3 text-[#66706D]">
          Select an emergency situation to begin your AI-powered simulation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {scenarioTypes.map((item) => (

            <div
              key={item.title}
              onClick={() => setSelectedScenario(item)}
              className="cursor-pointer rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-2 text-[#66706D]">
                Difficulty: {item.difficulty}
              </p>

              <button className="mt-8 rounded-2xl bg-[#114B4B] px-6 py-3 font-semibold text-white">
                Start Training
              </button>

            </div>

          ))}

        </div>

      </main>
    </div>
  );
}
  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#F8F6F2]">
        <Sidebar />

        <main className="flex flex-1 items-center justify-center">
          <div className="rounded-3xl bg-white p-10 shadow text-center">
            <h2 className="text-3xl font-bold text-[#114B4B]">
              Generating AI Scenario...
            </h2>

            <p className="mt-4 text-[#66706D]">
              Gemini is preparing your emergency simulation.
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (!scenario) {
    return (
      <div className="flex min-h-screen bg-[#F8F6F2]">
        <Sidebar />

        <main className="flex flex-1 items-center justify-center">
          <h2 className="text-2xl font-bold text-red-500">
            Failed to load scenario.
          </h2>
        </main>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex min-h-screen bg-[#F8F6F2]">
        <Sidebar />

        <main className="flex flex-1 items-center justify-center p-10">
          <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow">

            <h1 className="text-4xl font-black text-[#1F2A2A]">
              🎉 Training Complete
            </h1>

            <p className="mt-8 text-lg text-[#66706D]">
              Final Score
            </p>

            <h2 className="mt-2 text-6xl font-black text-[#114B4B]">
              {score}
            </h2>

            <p className="mt-8 leading-8 text-[#66706D]">
              Great work. Your AI emergency response simulation has ended.
            </p>

            <Link
              to="/dashboard"
              className="mt-10 inline-block rounded-2xl bg-[#114B4B] px-8 py-4 font-semibold text-white"
            >
              Back to Dashboard
            </Link>

          </div>
        </main>
      </div>
    );
  }
    return (
    <div className="flex min-h-screen bg-[#F8F6F2]">
      <Sidebar />

      <main className="flex-1 p-10">

        <Link
          to="/dashboard"
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow"
        >
          <ArrowLeft size={18} />
          Dashboard
        </Link>

        <div className="flex items-center justify-between">

          <div>
            <p className="text-[#66706D]">
              AI Emergency Simulation
            </p>

            <h1 className="mt-2 text-4xl font-black text-[#1F2A2A]">
              Emergency Training
            </h1>
          </div>

          <div className="flex gap-5">

            <div className="rounded-2xl bg-white px-6 py-4 shadow">
              <div className="flex items-center gap-3">

                <Clock3 className="text-[#114B4B]" />

                <div>
                  <p className="text-sm text-[#66706D]">
                    Scenario
                  </p>

                  <h3 className="font-bold">
                    {current}/{totalScenarios}
                  </h3>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-white px-6 py-4 shadow">
              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-600" />

                <div>

                  <p className="text-sm text-[#66706D]">
                    Score
                  </p>

                  <h3 className="font-bold">
                    {score}
                  </h3>

                </div>

              </div>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-3xl font-bold text-[#1F2A2A] leading-relaxed">
            {scenario.scenario}
          </h2>

          <div className="mt-8 space-y-4">

            {scenario.options.map((option, index) => (


              <label
                key={index}
                className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition ${
                  selected === index
                    ? "border-[#114B4B] bg-[#F1F7F6]"
                    : "border-stone-200"
                }`}
              >

                <input
                  type="radio"
                  checked={selected === index}
                  onChange={() => setSelected(index)}
                />

                <span>{option.text}</span>

              </label>

            ))}

          </div>

          {!submitted ? (

            <button
              onClick={handleSubmit}
              className="mt-8 rounded-2xl bg-[#114B4B] px-8 py-4 font-semibold text-white hover:bg-[#0d3d3d]"
            >
              Submit Decision
            </button>

          ) : (

            <>

              <div className="mt-8 rounded-2xl bg-[#F8F6F2] p-6">

                <div className="mb-4 flex items-center gap-3">

                  <Brain className="text-[#114B4B]" />

                  <h3 className="text-xl font-bold">
                    AI Coach
                  </h3>

                </div>

<p
  className={`mb-3 text-lg font-bold ${
    selected === scenario.correct
      ? "text-green-700"
      : "text-red-700"
  }`}
>
  {selected === scenario.correct ? "✅ Correct!" : "❌ Incorrect!"}
</p>

<p className="leading-8 text-[#66706D] whitespace-pre-line">
  {scenario.feedback[selected]}


  {"\n\n"}

  <strong>Explanation</strong>

  {"\n"}

  {scenario.explanation}

</p>
  <p className="mt-4 text-sm font-semibold text-[#114B4B]">
    Guidance Based On: {scenario.source}
  </p>
 </div>

              <button
                onClick={nextScenario}
                className="mt-8 flex items-center gap-3 rounded-2xl bg-[#114B4B] px-8 py-4 font-semibold text-white hover:bg-[#0d3d3d]"
              >

                {current === totalScenarios
                  ? "Finish Training"
                  : "Next Scenario"}

                <ArrowRight size={18} />

              </button>

            </>

          )}

        </div>

        <div className="mt-10">

          <div className="mb-2 flex justify-between text-sm">

            <span>Progress</span>

            <span>
              {Math.round((current / totalScenarios) * 100)}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-stone-200">

            <div
              className="h-3 rounded-full bg-[#114B4B] transition-all duration-500"
              style={{
                width: `${(current / totalScenarios) * 100}%`,
              }}
            />

          </div>

        </div>

      </main>

    </div>
  );
}

export default Training;