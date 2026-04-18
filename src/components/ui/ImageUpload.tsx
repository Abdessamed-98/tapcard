"use client";

import { cn } from "@/lib/utils";
import { Upload, X, ImageIcon } from "lucide-react";
import { useRef, useState } from "react";

interface ImageUploadProps {
  value?: string | null;
  onChange: (dataUrl: string | null) => void;
  label?: string;
  hint?: string;
  aspectRatio?: "square" | "banner";
  className?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label,
  hint,
  aspectRatio = "square",
  className,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      onChange(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
      <div
        className={cn(
          "relative rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 overflow-hidden transition-all duration-150 cursor-pointer",
          aspectRatio === "square" && "aspect-square w-full max-w-[160px]",
          aspectRatio === "banner" && "aspect-[3/1] w-full",
          dragging && "border-indigo-400 bg-indigo-50",
          !value && "hover:border-indigo-400 hover:bg-indigo-50"
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
      >
        {value ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
              className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <X size={12} />
            </button>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
            {aspectRatio === "square" ? (
              <>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Upload size={16} />
                </div>
                <span className="text-xs text-center px-2">
                  Cliquez ou glissez
                </span>
              </>
            ) : (
              <>
                <ImageIcon size={24} />
                <span className="text-xs">Photo de couverture</span>
              </>
            )}
          </div>
        )}
      </div>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
