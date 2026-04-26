import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-8 py-16 sm:px-16 text-center shadow-2xl shadow-indigo-500/30">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-purple-400/20 blur-2xl" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <Zap size={12} fill="white" />
            Livraison partout en Algérie
          </div>

          <h2 className="relative z-10 text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Votre profil, un seul tap.
            <br />
            <span className="text-indigo-200">Commandez dès aujourd&apos;hui.</span>
          </h2>

          <p className="relative z-10 mt-5 text-indigo-200 text-lg max-w-xl mx-auto">
            Rejoignez plus de 10 000 professionnels algériens qui partagent leurs
            coordonnées intelligemment.
          </p>

          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/order">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold shadow-lg gap-2"
              >
                Commander maintenant
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/p/demo">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold"
              >
                Voir un exemple
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
