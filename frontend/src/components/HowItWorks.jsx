import {
  Sparkles,
  MousePointerClick,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    number: "01",
    title: "Generate",
    description:
      "Google Gemini creates a realistic emergency scenario with believable response options tailored to the selected emergency type and difficulty.",
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Respond",
    description:
      "Choose the action you believe is safest. Every decision is recorded without AI deciding whether your answer is correct.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Verify",
    description:
      "NERI's deterministic rules engine independently evaluates your response using trusted guidance from FEMA, NFPA, OSHA, and the American Red Cross.",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Learn",
    description:
      "Receive transparent feedback, review the reasoning behind the correct response, and monitor your progress across multiple training sessions.",
  },
];

function HowItWorks() {
  return (
    <section
      id="workflow"
      className="bg-white px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#114B4B]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#114B4B]">

            HOW NERI WORKS

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#173232]">

            Explainable AI
            <span className="block text-[#114B4B]">

              Every Step of the Way

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-[#66706D]">

            NERI separates AI-generated content from deterministic
            decision evaluation, ensuring every training session remains
            transparent, consistent, and grounded in real emergency-response
            guidance.

          </p>

        </div>

        {/* Steps */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-[#E8E3DA] bg-[#F8F6F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#114B4B]/20 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#114B4B]/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#114B4B]">

                    <Icon
                      size={30}
                      className="text-[#C9793B] transition-all duration-300 group-hover:text-white"
                    />

                  </div>

                  <span className="text-4xl font-black text-[#114B4B]/15">

                    {step.number}

                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#173232]">

                  {step.title}

                </h3>

                <p className="mt-5 leading-8 text-[#66706D]">

                  {step.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;