import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

function NfcWaves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C7 2 3 6 3 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
      <path d="M12 6C9 6 7 8 7 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

// ── Mini floating product graphics ───────────────────────────────────────────

function MiniCard() {
  return (
    <div className="relative w-36 h-22 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-xl shadow-indigo-500/40 p-3.5 flex flex-col justify-between overflow-hidden"
      style={{ height: "88px" }}>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent rounded-2xl" />
      <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-white/10" />
      <div className="flex items-center justify-between relative z-10">
        <div className="w-7 h-5 rounded bg-yellow-300/80" />
        <NfcWaves className="w-4 h-4 text-white" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-0.5">
          <div className="w-3.5 h-3.5 bg-white rounded flex items-center justify-center">
            <Zap size={7} className="text-indigo-600" fill="#4F46E5" />
          </div>
          <span className="text-white font-bold text-[9px]">TapCard</span>
        </div>
        <div className="text-white/40 text-[8px] font-mono tracking-widest">•••• 4297</div>
      </div>
    </div>
  );
}

function MiniPlaque() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-40 h-20 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-xl shadow-slate-900/60 p-3.5 flex flex-col justify-between overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute inset-x-0 h-px bg-white/5" style={{ top: `${i * 16 + 4}px` }} />
        ))}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-3 h-3 bg-indigo-500 rounded flex items-center justify-center">
                <Zap size={6} className="text-white" fill="white" />
              </div>
              <span className="text-white/80 font-bold text-[8px]">TapCard</span>
            </div>
            <div className="text-white/30 text-[7px]">Scannez pour contacter</div>
          </div>
          <NfcWaves className="w-5 h-5 text-indigo-400" />
        </div>
        <div className="relative z-10 flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-[7px] font-bold">AB</div>
          <div className="text-white text-[8px] font-semibold">Ahmed Benali</div>
        </div>
      </div>
      <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
      <div className="w-8 h-1 bg-slate-700 rounded-full" />
    </div>
  );
}

function MiniKeychain() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full border-[2.5px] border-gray-500 -mb-2 z-10" />
      <div className="relative w-16 h-24 rounded-[1.5rem] bg-gradient-to-b from-violet-500 via-purple-600 to-purple-800 shadow-xl shadow-purple-500/40 flex flex-col items-center justify-center gap-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent" />
        <div className="absolute top-3 w-4 h-4 rounded-full bg-purple-400/25 border border-purple-300/20" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 mt-3">
          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
            <NfcWaves className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-0.5">
            <div className="w-3 h-3 bg-white rounded flex items-center justify-center">
              <Zap size={6} className="text-purple-600" fill="#7C3AED" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-16 pb-24 sm:pt-24 sm:pb-32">

      {/* Background: grid + glowing blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          {/* Left: Text + CTA */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-500/20">
              <Sparkles size={14} />
              Livraison partout en Algérie
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Votre identité.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Un seul tap.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed">
              Commandez votre carte NFC personnalisée, configurez votre profil
              et partagez tous vos liens en un seul geste.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link href="/order">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-indigo-600 hover:bg-indigo-500">
                  Commander maintenant
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/p/demo">
                {/* Override outline variant for dark bg: transparent bg + white border/text */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto !bg-transparent !text-white !border-white/25 hover:!bg-white/10 hover:!border-white/40"
                >
                  Voir un exemple
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
              {[
                { value: "500+", label: "Clients satisfaits" },
                { value: "48h", label: "Délai de livraison" },
                { value: "58", label: "Wilayas couvertes" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone + floating elements */}
          <div className="flex-1 flex items-center justify-center relative min-h-[520px] w-full max-w-lg">

            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-indigo-600/25 rounded-full blur-3xl" />
            </div>

            {/* Phone mockup */}
            <div className="relative z-10 animate-float-slow">
              <div className="bg-gray-900 border border-white/10 rounded-[2.5rem] p-3 shadow-2xl shadow-indigo-900/50">
                <div className="bg-white rounded-[2rem] overflow-hidden w-52">
                  <div className="h-24 bg-gradient-to-br from-indigo-500 to-violet-600" />
                  <div className="px-5 pb-5">
                    <div className="flex justify-center -mt-8 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 border-4 border-white flex items-center justify-center text-white font-bold text-xl">AB</div>
                    </div>
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-gray-900 text-sm">Ahmed Benali</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Entrepreneur & Dev 🇩🇿</p>
                    </div>
                    {["Instagram", "LinkedIn", "WhatsApp"].map((link) => (
                      <div key={link} className="w-full py-2 px-3 rounded-xl bg-gray-100 text-xs font-medium text-gray-700 text-center mb-1.5">{link}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-indigo-500/50 animate-bounce">
                Tap ✦
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                Floating elements — distributed like a clock face:
                12: status chip     3: porte-clés
                10: Instagram       5: TikTok
                 8: WhatsApp        2: Carte NFC (card)
                 7: Plaque NFC      6: TapCard.dz
                 11: LinkedIn
            ───────────────────────────────────────────────────────────── */}

            {/* 12 o'clock — status chip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float-delay2 z-20">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg whitespace-nowrap">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                500+ profils actifs
              </div>
            </div>

            {/* 10 o'clock — Instagram */}
            <div className="absolute top-14 left-0 animate-float z-20">
              <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg shadow-pink-500/30 whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                Instagram
              </div>
            </div>

            {/* 2 o'clock — Carte NFC */}
            <div className="absolute top-8 right-0 animate-float-delay z-20 drop-shadow-2xl">
              <MiniCard />
            </div>

            {/* 11 o'clock — LinkedIn */}
            <div className="absolute top-1/3 left-0 animate-float-delay z-20">
              <div className="flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg shadow-blue-500/30 whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </div>
            </div>

            {/* 3 o'clock — Porte-clés */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 animate-float z-20 drop-shadow-2xl">
              <MiniKeychain />
            </div>

            {/* 8 o'clock — WhatsApp */}
            <div className="absolute bottom-1/3 left-0 animate-float-delay2 z-20">
              <div className="flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg shadow-green-500/30 whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </div>
            </div>

            {/* 5 o'clock — TikTok */}
            <div className="absolute bottom-1/3 right-0 animate-float z-20">
              <div className="flex items-center gap-2 bg-gray-900 border border-white/10 text-white text-xs font-semibold px-3 py-2 rounded-2xl shadow-lg whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                TikTok
              </div>
            </div>

            {/* 7 o'clock — Plaque NFC */}
            <div className="absolute bottom-10 left-0 animate-float-delay z-20 drop-shadow-2xl">
              <MiniPlaque />
            </div>

            {/* 6 o'clock — TapCard.dz */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float-delay2 z-20">
              <div className="flex items-center gap-1.5 bg-indigo-600/90 backdrop-blur border border-indigo-500/50 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-indigo-500/30 whitespace-nowrap">
                <Zap size={11} fill="white" />
                TapCard.dz
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
