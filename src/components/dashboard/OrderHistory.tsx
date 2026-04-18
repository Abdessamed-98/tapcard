"use client";

import { SAMPLE_ORDERS, STATUS_LABELS, STATUS_COLORS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { Package } from "lucide-react";

export default function OrderHistory() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-gray-900">Mes commandes</h3>
      {SAMPLE_ORDERS.length === 0 ? (
        <div className="text-sm text-gray-400 italic py-4 text-center">
          Aucune commande pour l&apos;instant.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {SAMPLE_ORDERS.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Package size={18} className="text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-sm text-gray-900">
                    {order.orderNumber}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      STATUS_COLORS[order.status]
                    }`}
                  >
                    {STATUS_LABELS[order.status]}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {new Date(order.createdAt).toLocaleDateString("fr-DZ", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  ·{" "}
                  {order.items
                    .map((i) => `${i.productName} ×${i.quantity}`)
                    .join(", ")}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900 text-sm">
                  {formatPrice(order.totalDA)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
