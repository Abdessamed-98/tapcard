"use client";

import { useOrderStore } from "@/store/orderStore";
import StepIndicator from "@/components/ui/StepIndicator";
import Step1PersonalInfo from "./steps/Step1PersonalInfo";
import Step2ProfileSetup from "./steps/Step2ProfileSetup";
import Step3SocialLinks from "./steps/Step3SocialLinks";
import Step4OrderItems from "./steps/Step4OrderItems";
import Step5Review from "./steps/Step5Review";
import { Zap } from "lucide-react";
import Link from "next/link";

const STEPS = [
  { label: "Infos" },
  { label: "Profil" },
  { label: "Liens" },
  { label: "Articles" },
  { label: "Révision" },
];

export default function OrderFormShell() {
  const { step, submitted } = useOrderStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Minimal header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap size={14} className="text-white" fill="white" />
            </div>
            TapCard
          </Link>
          {!submitted && (
            <span className="text-sm text-gray-400">
              Étape {step} sur {STEPS.length}
            </span>
          )}
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {/* Step indicator */}
          {!submitted && (
            <StepIndicator steps={STEPS} currentStep={step} />
          )}

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            {step === 1 && <Step1PersonalInfo />}
            {step === 2 && <Step2ProfileSetup />}
            {step === 3 && <Step3SocialLinks />}
            {step === 4 && <Step4OrderItems />}
            {step === 5 && <Step5Review />}
          </div>
        </div>
      </main>
    </div>
  );
}
