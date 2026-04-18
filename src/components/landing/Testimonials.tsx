import { Star } from "lucide-react";
import Avatar from "@/components/ui/Avatar";

const testimonials = [
  {
    name: "Karim Merzougui",
    role: "Développeur freelance, Alger",
    text: "J'ai reçu ma carte en moins de 48h. Maintenant je partage mon portfolio d'un simple tap lors des réunions. Bluffant !",
    rating: 5,
  },
  {
    name: "Sara Benhamida",
    role: "Consultante RH, Oran",
    text: "Fini les cartes de visite en papier qu'on perd. Mon profil TapCard contient tout : LinkedIn, CV, numéro. Pratique et pro.",
    rating: 5,
  },
  {
    name: "Mourad Taghit",
    role: "Gérant de commerce, Constantine",
    text: "J'ai pris la plaque NFC pour mon magasin. Les clients scannent et tombent directement sur ma page Facebook et WhatsApp.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ce qu&apos;ils en pensent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <Avatar name={t.name} size="sm" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
