import { ShoppingCart, Package, Share2 } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Commandez",
    description:
      "Remplissez le formulaire en quelques minutes. Choisissez votre type de carte et configurez votre profil.",
    color: "bg-indigo-100 text-indigo-600",
    step: "01",
  },
  {
    icon: Package,
    title: "Recevez",
    description:
      "Votre carte NFC est produite et livrée chez vous sous 48h, partout en Algérie.",
    color: "bg-violet-100 text-violet-600",
    step: "02",
  },
  {
    icon: Share2,
    title: "Partagez",
    description:
      "Approchez votre carte d'un téléphone. Votre profil s'affiche instantanément — aucune app requise.",
    color: "bg-emerald-100 text-emerald-600",
    step: "03",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="py-20 sm:py-28 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            De la commande à la livraison, le processus est simple et rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
              )}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center h-full flex flex-col items-center">
                <div className="relative mb-5">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}
                  >
                    <step.icon size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-400 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
