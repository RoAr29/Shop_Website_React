function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <nav className="max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24 py-8 flex items-center justify-between">

        {/* Logo */}

        <div className="leading-none">

          <h1 className="text-[48px] text-[#7E2F2F] font-semibold">
            Rahul
          </h1>

          <p className="uppercase tracking-[0.35em] text-[12px] text-[#6B625D] mt-1">
            The Beauty Concept
          </p>

        </div>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center gap-14 uppercase text-[13px] tracking-[0.25em] text-[#4A433F]">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Our World</a>
          </li>

          <li>
            <a href="#">Story</a>
          </li>

          <li>
            <a href="#">Visit</a>
          </li>

          <li>
            <a href="#">Instagram</a>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;