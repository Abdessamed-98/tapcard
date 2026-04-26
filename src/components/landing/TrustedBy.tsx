// Trusted-by logo strip — placed between Hero and HowItWorks

const LOGOS = [
  {
    name: "Djezzy",
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="26" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="-1">djezzy</text>
      </svg>
    ),
  },
  {
    name: "Ooredoo",
    svg: (
      <svg viewBox="0 0 130 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="24" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0">Ooredoo</text>
      </svg>
    ),
  },
  {
    name: "Mobilis",
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="25" fontWeight="700" fontFamily="Arial, sans-serif">mobilis</text>
      </svg>
    ),
  },
  {
    name: "Cevital",
    svg: (
      <svg viewBox="0 0 110 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="29" fontSize="25" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">CEVITAL</text>
      </svg>
    ),
  },
  {
    name: "Condor",
    svg: (
      <svg viewBox="0 0 110 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="29" fontSize="25" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="0.5">CONDOR</text>
      </svg>
    ),
  },
  {
    name: "Yassir",
    svg: (
      <svg viewBox="0 0 100 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="26" fontWeight="700" fontFamily="Arial, sans-serif">Yassir</text>
      </svg>
    ),
  },
  {
    name: "Biocodex",
    svg: (
      <svg viewBox="0 0 130 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="29" fontSize="23" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.5">Biocodex</text>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  // Duplicate for seamless infinite scroll
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-gray-100 bg-white py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
        Ils nous font confiance
      </p>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex animate-marquee gap-16 w-max">
          {items.map((logo, i) => (
            <div
              key={i}
              className="text-gray-300 hover:text-gray-400 transition-colors duration-300 select-none shrink-0"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
