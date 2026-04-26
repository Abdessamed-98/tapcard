"use client";

import { useState } from "react";
import { useOrderStore } from "@/store/orderStore";
import { PRODUCTS, SOCIAL_PLATFORMS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  CreditCard,
  LayoutDashboard,
  KeyRound,
  Trash2,
  Plus,
  ShoppingCart,
} from "lucide-react";

const PRODUCT_ICONS = {
  NFC_CARD: CreditCard,
  NFC_BOARD: LayoutDashboard,
  NFC_KEYCHAIN: KeyRound,
  BUNDLE: CreditCard,
};

const PLATFORM_COLORS: Record<string, string> = {
  instagram: "bg-gradient-to-r from-pink-500 to-orange-400",
  facebook: "bg-blue-600",
  tiktok: "bg-gray-900",
  linkedin: "bg-blue-700",
  twitter: "bg-gray-800",
  youtube: "bg-red-600",
  whatsapp: "bg-green-500",
  telegram: "bg-sky-500",
  snapchat: "bg-yellow-400",
  website: "bg-indigo-600",
};

const emptyForm = {
  productId: "",
  platform: "",
  profileUrl: "",
  quantity: 1,
};

export default function Step4OrderItems() {
  const store = useOrderStore();
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(store.orderItems.length === 0);
  const [urlError, setUrlError] = useState("");

  const selectedProduct = PRODUCTS.find((p) => p.id === form.productId);
  const selectedPlatform = SOCIAL_PLATFORMS.find((p) => p.id === form.platform);

  const total = store.orderItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  function handleAdd() {
    if (!selectedProduct || !selectedPlatform) return;
    if (!form.profileUrl.trim()) {
      setUrlError("Veuillez saisir votre lien ou identifiant.");
      return;
    }
    setUrlError("");
    store.addOrderItem({
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      platform: selectedPlatform.id,
      platformLabel: selectedPlatform.label,
      profileUrl: form.profileUrl.trim(),
      quantity: form.quantity,
      unitPrice: selectedProduct.priceDA,
    });
    setForm(emptyForm);
    setShowForm(false);
  }

  const canAdd = !!form.productId && !!form.platform && !!form.profileUrl.trim();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Votre commande</h2>
        <p className="text-sm text-gray-500 mt-1">
          Ajoutez chaque article avec le réseau social correspondant.
        </p>
      </div>

      {/* Added items list */}
      {store.orderItems.length > 0 && (
        <div className="flex flex-col gap-2">
          {store.orderItems.map((item) => {
            const colorClass = PLATFORM_COLORS[item.platform] ?? "bg-indigo-600";
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm"
              >
                {/* Platform dot */}
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${colorClass}`} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-gray-900">
                      {item.productName}
                    </span>
                    <span
                      className={`text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}
                    >
                      {item.platformLabel}
                    </span>
                    <span className="text-gray-400 text-xs">× {item.quantity}</span>
                  </div>
                  <div className="text-xs text-gray-400 truncate mt-0.5">
                    {item.profileUrl}
                  </div>
                </div>

                <div className="text-sm font-bold text-gray-900 shrink-0">
                  {formatPrice(item.unitPrice * item.quantity)}
                </div>

                <button
                  type="button"
                  onClick={() => store.removeOrderItem(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Add item form */}
      {showForm ? (
        <div className="border border-indigo-100 rounded-2xl bg-indigo-50/40 p-4 flex flex-col gap-4">
          <div className="text-sm font-semibold text-gray-700">Nouvel article</div>

          {/* Product selection */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-2">Produit</div>
            <div className="grid grid-cols-3 gap-2">
              {PRODUCTS.map((p) => {
                const Icon = PRODUCT_ICONS[p.type];
                const selected = form.productId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, productId: p.id }))}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                      selected
                        ? "border-indigo-500 bg-indigo-600 text-white shadow-sm"
                        : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="leading-tight text-center">{p.name}</span>
                    <span className={`font-bold ${selected ? "text-indigo-200" : "text-gray-400"}`}>
                      {formatPrice(p.priceDA)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Platform selection */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-2">Réseau social</div>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_PLATFORMS.map((p) => {
                const selected = form.platform === p.id;
                const colorClass = PLATFORM_COLORS[p.id] ?? "bg-indigo-600";
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, platform: p.id }))}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      selected
                        ? `${colorClass} text-white border-transparent shadow-sm`
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* URL input */}
          <Input
            label="Votre lien ou identifiant"
            placeholder={selectedPlatform?.placeholder ?? "https://..."}
            value={form.profileUrl}
            onChange={(e) => {
              setForm((f) => ({ ...f, profileUrl: e.target.value }));
              setUrlError("");
            }}
            error={urlError}
          />

          {/* Quantity */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-2">Quantité</div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, quantity: Math.max(1, f.quantity - 1) }))}
                className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                disabled={form.quantity <= 1}
              >
                −
              </button>
              <span className="w-6 text-center font-bold text-gray-900">{form.quantity}</span>
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, quantity: Math.min(10, f.quantity + 1) }))}
                className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
              {selectedProduct && (
                <span className="text-sm text-gray-500 ml-2">
                  = <strong className="text-gray-900">{formatPrice(selectedProduct.priceDA * form.quantity)}</strong>
                </span>
              )}
            </div>
          </div>

          {/* Form actions */}
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              onClick={handleAdd}
              disabled={!canAdd}
              className="flex-1"
            >
              <Plus size={15} /> Ajouter à la commande
            </Button>
            {store.orderItems.length > 0 && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => { setForm(emptyForm); setShowForm(false); }}
              >
                Annuler
              </Button>
            )}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 border-2 border-dashed border-indigo-200 rounded-2xl py-4 text-sm font-medium text-indigo-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
        >
          <Plus size={16} /> Ajouter un article
        </button>
      )}

      {/* Total */}
      {store.orderItems.length > 0 && (
        <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <ShoppingCart size={16} />
            {store.orderItems.reduce((s, i) => s + i.quantity, 0)} article(s)
          </div>
          <div>
            <div className="text-xs text-gray-400 text-right">Total estimé</div>
            <div className="text-xl font-bold text-gray-900">{formatPrice(total)}</div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <Button variant="ghost" onClick={store.prevStep} type="button">
          Retour
        </Button>
        <Button
          onClick={store.nextStep}
          size="lg"
          type="button"
          disabled={store.orderItems.length === 0}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}
