"use client";

import { create } from "zustand";

export interface OrderItem {
  id: string;           // unique per line (uuid-lite)
  productId: string;
  productName: string;
  platform: string;     // e.g. "instagram"
  platformLabel: string;
  profileUrl: string;   // the user's link for this card
  quantity: number;
  unitPrice: number;
}

export interface SocialLinkEntry {
  id: string;
  platform: string;
  url: string;
}

export interface OrderFormState {
  step: number;
  // Step 1 — Personal Info
  fullName: string;
  phone: string;
  email: string;
  wilayaCode: string;
  wilayaName: string;
  dairaName: string;
  baladiya: string;
  fullAddress: string;
  // Step 2 — Profile Setup
  skipProfile: boolean;
  displayName: string;
  bio: string;
  avatarDataUrl: string | null;
  coverDataUrl: string | null;
  // Step 3 — Social Links
  skipSocialLinks: boolean;
  socialLinks: SocialLinkEntry[];
  // Step 4 — Order Items
  orderItems: OrderItem[];
  // Step 5 — Submission
  isSubmitting: boolean;
  orderNumber: string | null;
  submitted: boolean;
}

interface OrderFormActions {
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  // Step 1
  setPersonalInfo: (
    data: Pick<
      OrderFormState,
      | "fullName"
      | "phone"
      | "email"
      | "wilayaCode"
      | "wilayaName"
      | "dairaName"
      | "baladiya"
      | "fullAddress"
    >
  ) => void;
  setWilaya: (code: string, name: string) => void;
  setDaira: (name: string) => void;
  setBaladiya: (name: string) => void;
  // Step 2
  setProfileSetup: (
    data: Pick<
      OrderFormState,
      "skipProfile" | "displayName" | "bio" | "avatarDataUrl" | "coverDataUrl"
    >
  ) => void;
  // Step 3
  setSocialLinks: (
    data: Pick<OrderFormState, "skipSocialLinks" | "socialLinks">
  ) => void;
  // Step 4
  addOrderItem: (item: Omit<OrderItem, "id">) => void;
  removeOrderItem: (id: string) => void;
  // Step 5
  submitOrder: () => Promise<void>;
  reset: () => void;
}

const initialState: OrderFormState = {
  step: 1,
  fullName: "",
  phone: "",
  email: "",
  wilayaCode: "",
  wilayaName: "",
  dairaName: "",
  baladiya: "",
  fullAddress: "",
  skipProfile: false,
  displayName: "",
  bio: "",
  avatarDataUrl: null,
  coverDataUrl: null,
  skipSocialLinks: false,
  socialLinks: [],
  orderItems: [],
  isSubmitting: false,
  orderNumber: null,
  submitted: false,
};

export const useOrderStore = create<OrderFormState & OrderFormActions>(
  (set, get) => ({
    ...initialState,

    setStep: (step) => set({ step }),
    nextStep: () => set((s) => ({ step: s.step + 1 })),
    prevStep: () => set((s) => ({ step: Math.max(1, s.step - 1) })),

    setPersonalInfo: (data) => set(data),

    setWilaya: (code, name) => set({ wilayaCode: code, wilayaName: name, dairaName: "" }),
    setDaira: (name) => set({ dairaName: name }),
    setBaladiya: (name) => set({ baladiya: name }),

    setProfileSetup: (data) => set(data),

    setSocialLinks: (data) => set(data),

    addOrderItem: (item) =>
      set((s) => ({
        orderItems: [
          ...s.orderItems,
          { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` },
        ],
      })),

    removeOrderItem: (id) =>
      set((s) => ({ orderItems: s.orderItems.filter((i) => i.id !== id) })),

    submitOrder: async () => {
      set({ isSubmitting: true });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const year = new Date().getFullYear();
      const rand = Math.floor(10000 + Math.random() * 90000);
      set({
        isSubmitting: false,
        orderNumber: `TC-${year}-${rand}`,
        submitted: true,
      });
    },

    reset: () => set(initialState),
  })
);
