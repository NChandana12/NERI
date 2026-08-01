import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/80 backdrop-blur-md">
      <nav className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-stone-200 bg-white px-8 py-4 shadow-lg">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#114B4B] text-white font-bold">
            N
          </div>

          <div>
            <h1 className="text-lg font-bold text-[#1F2A2A]">
              Neri
            </h1>

            <p className="text-xs text-stone-500">
              Emergency AI
            </p>
          </div>

        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#Features"
            className="text-sm font-medium text-stone-600 hover:text-[#114B4B] transition"
          >
            Features
          </a>

          <a
            href="#Training"
            className="text-sm font-medium text-stone-600 hover:text-[#114B4B] transition"
          >
            Training
          </a>

          <a
            href="#DashboardPreview"
            className="text-sm font-medium text-stone-600 hover:text-[#114B4B] transition"
          >
            Dashboard
          </a>

          <a
            href="#About"
            className="text-sm font-medium text-stone-600 hover:text-[#114B4B] transition"
          >
            About
          </a>

        </div>

        {/* CTA */}
        <Link
          to="/dashboard"
          className="rounded-full bg-[#114B4B] px-6 py-3 font-semibold text-white transition hover:bg-[#0D3F3F]"
        >
          Start Training
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;