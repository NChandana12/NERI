import {
  Activity,
  Brain,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    title: "Training Score",
    value: "92%",
    color: "text-emerald-600",
    icon: CheckCircle2,
  },
  {
    title: "Response Time",
    value: "18 sec",
    color: "text-[#114B4B]",
    icon: Activity,
  },
  {
    title: "AI Accuracy",
    value: "97%",
    color: "text-[#B56A3A]",
    icon: Brain,
  },
];

const scenarios = [
  {
    title: "Earthquake Response",
    status: "Completed",
    progress: "100%",
  },
  {
    title: "Building Fire",
    status: "In Progress",
    progress: "74%",
  },
  {
    title: "Medical Emergency",
    status: "Upcoming",
    progress: "0%",
  },
];

function DashboardPreview() {
  return (
    <section id="DashboardPreview"
    className="bg-[#F8F6F2] px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#114B4B]">
            DASHBOARD PREVIEW
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#1F2A2A]">

            Your emergency
            <span className="block text-[#114B4B]">
              training command center.
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">

            Track progress, review AI feedback, monitor performance,
            and continue improving through personalized emergency
            response training.

          </p>

        </div>

        <div className="mt-20 rounded-[36px] border border-[#E7E3DB] bg-white p-8 shadow-2xl">

          <div className="flex flex-col gap-8 lg:flex-row">

            {/* Sidebar */}

            <div className="w-full rounded-3xl bg-[#114B4B] p-6 text-white lg:w-72">

              <h3 className="text-2xl font-bold">
                NERI
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Emergency Training Platform
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Dashboard",
                  "Training",
                  "Scenarios",
                  "Analytics",
                  "Progress",
                  "Settings",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* Main */}

            <div className="flex-1">

              <div className="grid gap-6 md:grid-cols-3">

                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (

                    <div
                      key={metric.title}
                      className="rounded-3xl bg-[#F8F6F2] p-6"
                    >

                      <div className="flex items-center justify-between">

                        <Icon
                          size={28}
                          className={metric.color}
                        />

                        <TrendingUp
                          size={20}
                          className="text-emerald-500"
                        />

                      </div>

                      <h3 className="mt-6 text-4xl font-black text-[#1F2A2A]">
                        {metric.value}
                      </h3>

                      <p className="mt-2 text-[#66706D]">
                        {metric.title}
                      </p>

                    </div>

                  );
                })}

              </div>

              <div className="mt-8 rounded-3xl bg-[#F8F6F2] p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-[#1F2A2A]">
                      Current Scenario
                    </h3>

                    <p className="mt-2 text-[#66706D]">
                      Building Fire Evacuation
                    </p>

                  </div>

                  <div className="rounded-full bg-[#114B4B]/10 p-4">

                    <ShieldCheck
                      size={30}
                      className="text-[#114B4B]"
                    />

                  </div>

                </div>

                <div className="mt-8">

                  <div className="flex justify-between text-sm font-medium">

                    <span>Scenario Progress</span>

                    <span>74%</span>

                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#DDD8CF]">

                    <div className="h-full w-[74%] rounded-full bg-[#114B4B]"></div>

                  </div>

                </div>

              </div>

              <div className="mt-8 rounded-3xl bg-[#F8F6F2] p-8">

                <div className="mb-6 flex items-center gap-3">

                  <AlertTriangle
                    className="text-[#B56A3A]"
                    size={24}
                  />

                  <h3 className="text-2xl font-bold text-[#1F2A2A]">
                    Scenario Progress
                  </h3>

                </div>

                <div className="space-y-5">

                  {scenarios.map((scenario) => (

                    <div
                      key={scenario.title}
                      className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
                    >

                      <div>

                        <h4 className="font-semibold text-[#1F2A2A]">
                          {scenario.title}
                        </h4>

                        <p className="mt-1 text-sm text-[#66706D]">
                          {scenario.status}
                        </p>

                      </div>

                      <span className="rounded-full bg-[#114B4B]/10 px-4 py-2 font-semibold text-[#114B4B]">
                        {scenario.progress}
                      </span>

                    </div>

                  ))}

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