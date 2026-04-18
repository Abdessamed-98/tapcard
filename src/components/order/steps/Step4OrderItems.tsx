"use client";

import { useOrderStore } from "@/store/orderStore";
import { PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { CreditCard, LayoutDashboard, KeyRound, Minus, Plus } from "lucide-react";

const icons = {
  NFC_CARD: CreditCard,
  NFC_BOARD: LayoutDashboard,
  NFC_KEYCHAIN: KeyRound,
  BUNDLE: CreditCard,
};

export default function Step4OrderItems() {
  const store = useOrderStore();

  function getQty(productId: string): number {
    return store.orderItems.find((i) => i.productId === productId)?.quantity ?? 0;
  }

  const total = store.orderItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const hasItems = store.orderItems.length > 0 && total > 0;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Votre commande</h2>
        <p className="text-sm text-gray-500 mt-1">
          Choisissez les produits et les quantités souhaités.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PRODUCTS.map((product) => {
          const qty = getQty(product.id);
          const Icon = icons[product.type];

          return (
            <div
              key={product.id}
              className={`rounded-2xl border p-4 flex flex-col gap-3 transition-all ${
                qty > 0
                  ? "border-indigo-300 bg-indigo-50"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    qty > 0
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-400 leading-snug mt-0.5">
                    {product.description}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                <span className="font-bold text-gray-900 text-sm">
                  {formatPrice(product.priceDA)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      store.setOrderItem(
                        product.id,
                        product.name,
                        product.priceDA,
                        Math.max(0, qty - 1)
                      )
                    }
                    className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40"
                    disabled={qty === 0}
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-gray-900">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      store.setOrderItem(
                        product.id,
                        product.name,
                        product.priceDA,
                        qty + 1
                      )
                    }
                    className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {qty > 0 && (
                <div className="text-xs text-indigo-700 font-medium bg-indigo-100 rounded-lg px-3 py-1.5 text-center">
                  Sous-total : {formatPrice(product.priceDA * qty)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Total */}
      {hasItems && (
        <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
          <div>
            <div className="text-sm text-gray-500">Total estimé</div>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(total)}
            </div>
          </div>
          <div className="text-sm text-gray-400">
            {store.orderItems.reduce((s, i) => s + i.quantity, 0)} article(s)
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
          disabled={!hasItems}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}
