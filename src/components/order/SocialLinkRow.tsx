"use client";

import { SOCIAL_PLATFORMS } from "@/lib/mock-data";
import { Trash2 } from "lucide-react";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";

interface SocialLinkRowProps {
  id: string;
  platform: string;
  url: string;
  onPlatformChange: (platform: string) => void;
  onUrlChange: (url: string) => void;
  onRemove: () => void;
}

const platformOptions = SOCIAL_PLATFORMS.map((p) => ({
  value: p.id,
  label: p.label,
}));

export default function SocialLinkRow({
  platform,
  url,
  onPlatformChange,
  onUrlChange,
  onRemove,
}: SocialLinkRowProps) {
  const selectedPlatform = SOCIAL_PLATFORMS.find((p) => p.id === platform);

  return (
    <div className="flex gap-2 items-end">
      <div className="w-36 flex-shrink-0">
        <Select
          options={platformOptions}
          placeholder="Plateforme"
          value={platform}
          onChange={(e) => onPlatformChange(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <Input
          placeholder={selectedPlatform?.placeholder ?? "https://..."}
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          type="url"
        />
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
