import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number; // 1-based
  className?: string;
}

export default function StepIndicator({
  steps,
  currentStep,
  className,
}: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isDone = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={index} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  isDone && "bg-indigo-600 text-white",
                  isCurrent &&
                    "bg-indigo-600 text-white ring-4 ring-indigo-100",
                  !isDone && !isCurrent && "bg-gray-100 text-gray-400"
                )}
              >
                {isDone ? <Check size={14} strokeWidth={3} /> : stepNum}
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden sm:block whitespace-nowrap",
                  isCurrent && "text-indigo-600",
                  isDone && "text-gray-500",
                  !isDone && !isCurrent && "text-gray-300"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 mx-2 mb-5 sm:mb-5 transition-all duration-300",
                  isDone ? "bg-indigo-600" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
