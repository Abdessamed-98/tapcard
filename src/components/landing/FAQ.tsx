"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    q: "Est-ce compatible avec tous les téléphones ?",
    a: "Oui. La technologie NFC est intégrée dans la quasi-totalité des smartphones depuis 2018 (iPhone 7+, Android 6+). Aucune application n'est nécessaire — un simple tap sur la carte suffit.",
  },
  {
    q: "Puis-je changer mes liens après la livraison ?",
    a: "Oui, à tout moment via votre tableau de bord. Le NFC stocke une URL unique vers votre profil TapCard. Vous modifiez vos liens en ligne et ils se mettent à jour immédiatement sur toutes vos cartes.",
  },
  {
    q: "Combien de temps dure la livraison ?",
    a: "En moyenne 48h pour les wilayas proches d'Alger, et 3 à 5 jours pour les wilayas plus éloignées. Toutes les 58 wilayas sont couvertes.",
  },
  {
    q: "Que se passe-t-il si je perds ma carte ?",
    a: "Votre profil en ligne reste actif. Il vous suffit de commander une nouvelle carte — elle sera liée à votre profil existant sans rien perdre.",
  },
  {
    q: "Comment fonctionne la personnalisation ?",
    a: "Lors de la commande, vous choisissez le réseau social à graver sur chaque produit et vous saisissez votre lien. La carte est ensuite imprimée avec le design de votre plateforme et le QR code correspondant.",
  },
  {
    q: "Le profil TapCard est-il public ?",
    a: "Oui, votre profil est accessible via l'URL tapcard.dz/p/votre-nom. Il est conçu pour être partagé — c'est son but. Vous pouvez y mettre autant de liens que vous voulez.",
  },
  {
    q: "Puis-je commander plusieurs cartes avec des réseaux différents ?",
    a: "Absolument. Vous pouvez composer votre commande librement : une carte Instagram, une plaque TikTok, un porte-clés WhatsApp — chaque article est configuré indépendamment.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm text-gray-900">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
