import { Briefcase, Store, Stethoscope, Smartphone } from "lucide-react";

const CASES = [
  {
    icon: Briefcase,
    color: "bg-indigo-500",
    title: "Entrepreneur",
    description:
      "Partagez vos coordonnées professionnelles, votre portfolio et vos réseaux en un seul tap lors de vos rendez-vous.",
    links: ["LinkedIn", "Site web", "Email pro", "WhatsApp"],
  },
  {
    icon: Store,
    color: "bg-violet-500",
    title: "Commerçant",
    description:
      "Posez une plaque NFC sur votre comptoir. Vos clients scannent et accèdent à votre page Google, menu ou catalogue.",
    links: ["Google Maps", "Facebook", "Menu en ligne", "Numéro"],
  },
  {
    icon: Stethoscope,
    color: "bg-emerald-500",
    title: "Médecin / Pro de santé",
    description:
      "Donnez accès à votre fiche de prise de rendez-vous, votre adresse et vos horaires instantanément.",
    links: ["Doctolib", "Adresse", "Téléphone", "Horaires"],
  },
  {
    icon: Smartphone,
    color: "bg-pink-500",
    title: "Créateur de contenu",
    description:
      "Un porte-clés NFC suffit pour partager tous vos réseaux sociaux d'un coup lors d'événements ou de rencontres.",
    links: ["Instagram", "TikTok", "YouTube", "Snapchat"],
  },
];

export default function UseCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            Pour qui ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            TapCard s&apos;adapte à votre métier
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Que vous soyez indépendant, commerçant ou créateur, TapCard a un
            format fait pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CASES.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-11 h-11 ${c.color} rounded-2xl flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{c.title}</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {c.links.map((link) => (
                    <span
                      key={link}
                      className="text-[11px] font-medium bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
