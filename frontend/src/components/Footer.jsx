function Footer() {
  return (
    <footer
      id="about"
      className="bg-[#114B4B] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* About */}

          <div>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8D7C4]">
              ABOUT NERI
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              AI with Principles,
              <span className="block text-[#E8D7C4]">
                Not Just Predictions.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              <strong>NERI (நெறி)</strong> is named after the Tamil word
              meaning <em>path</em>, <em>principle</em>, or
              <em> code of conduct</em>. The platform combines AI-generated
              emergency scenarios with a deterministic rules engine grounded
              in trusted guidance from organizations such as FEMA, NFPA,
              OSHA, and the American Red Cross, ensuring every decision is
              evaluated transparently and consistently.
            </p>

          </div>

          {/* Project Info */}

          <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="text-3xl font-bold">
              NERI
            </h3>

            <p className="mt-3 text-white/70">
              Neural Emergency Response Intelligence
            </p>

            <div className="mt-8 space-y-4 text-white/80">

              <div>
                🌲 Deterministic Rules Engine
              </div>

              <div>
                🧠 Google Gemini Integration
              </div>

              <div>
                🔥 React • Express • Firebase
              </div>

              <div>
                📍 Built for transparent emergency-response training
              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">

          © 2026 NERI • Built with React, Express, Firebase & Gemini

        </div>

      </div>
    </footer>
  );
}

export default Footer;