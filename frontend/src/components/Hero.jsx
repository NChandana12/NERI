import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="bg-[#F8F6F2]">

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-[#114B4B] shadow-sm">

            <ShieldCheck size={16} />

            AI-Powered Emergency Response Training

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight tracking-tight text-[#1F2A2A]">

            Train for
            <span className="text-[#114B4B]"> Real Emergencies</span>
            <br />
            Before They Happen.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">

            Neri helps students, professionals, and emergency responders
            develop critical decision-making skills through realistic,
            AI-powered emergency simulations with instant feedback and
            performance analytics.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-full bg-[#114B4B] px-8 py-4 font-semibold text-white transition hover:bg-[#0D3F3F]"
            >
              Start Training
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="rounded-full border border-stone-300 px-8 py-4 font-semibold text-[#1F2A2A] transition hover:bg-white"
            >
              Learn More
            </a>

          </div>

          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h2 className="text-3xl font-bold text-[#114B4B]">50+</h2>
              <p className="mt-1 text-sm text-stone-500">
                Emergency Scenarios
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#114B4B]">AI</h2>
              <p className="mt-1 text-sm text-stone-500">
                Real-Time Coaching
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#114B4B]">24/7</h2>
              <p className="mt-1 text-sm text-stone-500">
                Practice Anytime
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;