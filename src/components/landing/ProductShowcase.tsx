import Link from "next/link";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { CreditCard, LayoutDashboard, KeyRound, Check, Star } from "lucide-react";

const icons = {
  NFC_CARD: CreditCard,
  NFC_BOARD: LayoutDashboard,
  NFC_KEYCHAIN: KeyRound,
  BUNDLE: Star,
};

const features: Record<string, string[]> = {
  "prod-1": [
    "Format carte de crédit standard",
    "Compatible tous smartphones",
    "Profil en ligne inclus",
    "Gravure personnalisée",
  ],
  "prod-2": [
    "Format A6 pour bureau ou comptoir",
    "Base magnétique incluse",
    "Idéale pour les commerces",
    "Profil en ligne inclus",
  ],
  "prod-3": [
    "Format porte-clés compact",
    "Métal brossé premium",
    "Résistant à l'eau",
    "Profil en ligne inclus",
  ],
};

export default function ProductShowcase() {
  return (
    <section id="produits" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nos produits
          </h2>
          <p className="mt-3 text-gray-500">
            Choisissez le format qui correspond le mieux à votre style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => {
            const Icon = icons[product.type];
            return (
              <div
                key={product.id}
                className={`relative rounded-2xl border p-6 flex flex-col gap-4 ${
                  product.popular
                    ? "border-indigo-200 bg-gradient-to-b from-indigo-50 to-white shadow-lg shadow-indigo-100"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    product.popular
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {(features[product.id] ?? []).map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-emerald-500"
                        strokeWidth={3}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.priceDA)}
                    </div>
                    <div className="text-xs text-gray-400">par unité</div>
                  </div>
                  <Link href="/order">
                    <Button
                      variant={product.popular ? "primary" : "outline"}
                      size="sm"
                    >
                      Commander
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
