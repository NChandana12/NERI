import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
<nav
  className={`mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full border border-[#114B4B]/10 bg-white/75 px-8 transition-all duration-300 ${
    scrolled
      ? "h-14 shadow-2xl backdrop-blur-2xl"
      : "h-16 shadow-xl backdrop-blur-xl"
  }`}
>
        {/* Logo */}

        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#114B4B] text-lg font-bold text-white transition duration-300 group-hover:scale-110 group-hover:rotate-3">

            N

          </div>

          <div className="leading-tight">

            <h1 className="text-lg font-extrabold tracking-tight text-[#173232]">

              NERI

            </h1>

            <p className="text-[11px] tracking-wide text-[#114B4B]/80">

              நெறி

            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#platform"
            className="group relative font-medium text-stone-600 transition duration-300 hover:-translate-y-0.5 hover:text-[#114B4B]"
          >
            Platform

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C9793B] transition-all duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#workflow"
            className="group relative font-medium text-stone-600 transition duration-300 hover:-translate-y-0.5 hover:text-[#114B4B]"
          >
            How NERI Works

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C9793B] transition-all duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#experience"
            className="group relative font-medium text-stone-600 transition duration-300 hover:-translate-y-0.5 hover:text-[#114B4B]"
          >
            
Experience

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C9793B] transition-all duration-300 group-hover:w-full"></span>

          </a>
        <a
  href="#about"
  className="group relative font-medium text-stone-600 transition duration-300 hover:-translate-y-0.5 hover:text-[#114B4B]"
>
  About

  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C9793B] transition-all duration-300 group-hover:w-full"></span>

</a>
        </div>

        {/* CTA */}

        <Link
          to="/dashboard"
          className="group flex items-center gap-2 rounded-full bg-[#114B4B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D4545] hover:shadow-2xl active:scale-95"
        >

          Begin Training

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>

      </nav>
    </header>
  );
}

export default Navbar;