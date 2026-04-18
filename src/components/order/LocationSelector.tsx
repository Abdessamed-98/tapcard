"use client";

import { WILAYAS, getDairas } from "@/lib/mock-data";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";

interface LocationSelectorProps {
  wilayaCode: string;
  wilayaName: string;
  dairaName: string;
  baladiya: string;
  onWilayaChange: (code: string, name: string) => void;
  onDairaChange: (name: string) => void;
  onBaladiyaChange: (name: string) => void;
  errors?: {
    wilaya?: string;
    daira?: string;
    baladiya?: string;
  };
}

export default function LocationSelector({
  wilayaCode,
  dairaName,
  baladiya,
  onWilayaChange,
  onDairaChange,
  onBaladiyaChange,
  errors,
}: LocationSelectorProps) {
  const wilayaOptions = WILAYAS.map((w) => ({
    value: w.code,
    label: `${w.code} - ${w.name}`,
  }));

  const dairaOptions = wilayaCode
    ? getDairas(wilayaCode).map((d) => ({ value: d, label: d }))
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Select
        label="Wilaya"
        required
        placeholder="Sélectionner..."
        options={wilayaOptions}
        value={wilayaCode}
        onChange={(e) => {
          const code = e.target.value;
          const wilaya = WILAYAS.find((w) => w.code === code);
          onWilayaChange(code, wilaya?.name ?? "");
        }}
        error={errors?.wilaya}
      />

      <Select
        label="Daïra"
        required
        placeholder={wilayaCode ? "Sélectionner..." : "Choisir une wilaya d'abord"}
        options={dairaOptions}
        value={dairaName}
        onChange={(e) => onDairaChange(e.target.value)}
        disabled={!wilayaCode}
        error={errors?.daira}
      />

      <Input
        label="Commune (Baladiya)"
        required
        placeholder="ex : Ben Aknoun"
        value={baladiya}
        onChange={(e) => onBaladiyaChange(e.target.value)}
        error={errors?.baladiya}
      />
    </div>
  );
}
