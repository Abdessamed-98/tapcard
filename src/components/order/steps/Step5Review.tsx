"use client";

import { useOrderStore } from "@/store/orderStore";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { SOCIAL_PLATFORMS } from "@/lib/mock-data";
import { MapPin, User, Package, Link as LinkIcon, CheckCircle, Pencil, ExternalLink } from "lucide-react";
import Link from "next/link";

function Section({
  icon: Icon,
  title,
  onEdit,
  children,
}: {
  icon: React.ElementType;
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Icon size={15} className="text-indigo-500" />
          {title}
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
        >
          <Pencil size={11} /> Modifier
        </button>
      </div>
      <div className="px-4 py-3 text-sm text-gray-700">{children}</div>
    </div>
  );
}

export default function Step5Review() {
  const store = useOrderStore();
  const total = store.orderItems.reduce(
    (s, i) => s + i.unitPrice * i.quantity,
    0
  );

  if (store.submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle size={40} className="text-emerald-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Commande confirmée !
          </h2>
          <p className="text-gray-500 mt-2 max-w-sm mx-auto">
            Votre commande <strong className="text-gray-900">{store.orderNumber}</strong> a bien
            été reçue. Vous serez contacté sous peu pour la confirmation.
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 w-full max-w-sm">
          <p className="text-sm text-indigo-700 font-medium mb-3">
            Votre profil public est prêt à être personnalisé !
          </p>
          <Link href="/p/demo" className="block">
            <Button className="w-full" variant="primary">
              <ExternalLink size={15} />
              Voir mon profil
            </Button>
          </Link>
        </div>
        <Button variant="ghost" onClick={store.reset} type="button">
          Passer une nouvelle commande
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Récapitulatif de la commande
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Vérifiez vos informations avant de soumettre.
        </p>
      </div>

      {/* Personal info */}
      <Section
        icon={User}
        title="Informations personnelles"
        onEdit={() => store.setStep(1)}
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
          <div className="text-gray-400 text-xs">Nom</div>
          <div>{store.fullName}</div>
          <div className="text-gray-400 text-xs">Téléphone</div>
          <div>{store.phone}</div>
          {store.email && (
            <>
              <div className="text-gray-400 text-xs">Email</div>
              <div>{store.email}</div>
            </>
          )}
        </div>
      </Section>

      {/* Address */}
      <Section
        icon={MapPin}
        title="Adresse de livraison"
        onEdit={() => store.setStep(1)}
      >
        <div className="flex flex-col gap-0.5">
          <div>
            {store.baladiya}, {store.dairaName} — {store.wilayaName} ({store.wilayaCode})
          </div>
          <div className="text-gray-400">{store.fullAddress}</div>
        </div>
      </Section>

      {/* Profile */}
      <Section
        icon={User}
        title="Profil public"
        onEdit={() => store.setStep(2)}
      >
        {store.skipProfile ? (
          <span className="text-gray-400 italic">Profil ignoré — à configurer plus tard</span>
        ) : (
          <div className="flex items-center gap-3">
            {store.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={store.avatarDataUrl}
                alt=""
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                {(store.displayName || "?")[0].toUpperCase()}
              </div>
            )}
            <div>
              <div className="font-medium">{store.displayName}</div>
              {store.bio && (
                <div className="text-xs text-gray-400 line-clamp-1">{store.bio}</div>
              )}
            </div>
          </div>
        )}
      </Section>

      {/* Social links */}
      <Section
        icon={LinkIcon}
        title="Liens réseaux sociaux"
        onEdit={() => store.setStep(3)}
      >
        {store.skipSocialLinks || store.socialLinks.length === 0 ? (
          <span className="text-gray-400 italic">Aucun lien ajouté</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {store.socialLinks.map((link) => {
              const platform = SOCIAL_PLATFORMS.find((p) => p.id === link.platform);
              return (
                <span
                  key={link.id}
                  className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {platform?.label ?? link.platform}
                </span>
              );
            })}
          </div>
        )}
      </Section>

      {/* Order items */}
      <Section
        icon={Package}
        title="Articles commandés"
        onEdit={() => store.setStep(4)}
      >
        <div className="flex flex-col gap-2">
          {store.orderItems.map((item) => (
            <div key={item.productId} className="flex justify-between text-sm">
              <span>
                {item.productName}{" "}
                <span className="text-gray-400">× {item.quantity}</span>
              </span>
              <span className="font-semibold">
                {formatPrice(item.unitPrice * item.quantity)}
              </span>
            </div>
          ))}
          <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-base">
            <span>Total</span>
            <span className="text-indigo-600">{formatPrice(total)}</span>
          </div>
        </div>
      </Section>

      <div className="flex items-center justify-between pt-2">
        <Button variant="ghost" onClick={store.prevStep} type="button">
          Retour
        </Button>
        <Button
          size="lg"
          loading={store.isSubmitting}
          onClick={store.submitOrder}
          type="button"
        >
          Confirmer la commande
        </Button>
      </div>
    </div>
  );
}
