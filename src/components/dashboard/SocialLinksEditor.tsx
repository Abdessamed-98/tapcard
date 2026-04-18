"use client";

import { useState } from "react";
import { ProfileData, SocialLink, SOCIAL_PLATFORMS } from "@/lib/mock-data";
import SocialLinkRow from "@/components/order/SocialLinkRow";
import Button from "@/components/ui/Button";
import { Plus, Check } from "lucide-react";

let nextId = 100;
function newId() {
  return `link-${nextId++}`;
}

interface SocialLinksEditorProps {
  profile: ProfileData;
  onUpdate: (updated: ProfileData) => void;
}

export default function SocialLinksEditor({
  profile,
  onUpdate,
}: SocialLinksEditorProps) {
  const [links, setLinks] = useState<(SocialLink & { id: string })[]>(
    profile.socialLinks.map((l, i) => ({
      ...l,
      id: `existing-${i}`,
    }))
  );
  const [saved, setSaved] = useState(false);

  function addLink() {
    setLinks((prev) => [
      ...prev,
      {
        id: newId(),
        platform: "instagram",
        label: "Instagram",
        url: "",
        color: "",
        bgColor: "",
      },
    ]);
  }

  function updateLink(id: string, field: "platform" | "url", value: string) {
    setLinks((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        if (field === "platform") {
          const p = SOCIAL_PLATFORMS.find((pl) => pl.id === value);
          return {
            ...l,
            platform: value,
            label: p?.label ?? value,
            color: p?.color ?? "",
            bgColor: p?.bgColor ?? "",
          };
        }
        return { ...l, url: value };
      })
    );
  }

  function removeLink(id: string) {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }

  function handleSave() {
    const validLinks = links.filter((l) => l.platform && l.url.trim());
    onUpdate({ ...profile, socialLinks: validLinks });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-gray-900">Liens réseaux sociaux</h3>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <SocialLinkRow
            key={link.id}
            id={link.id}
            platform={link.platform}
            url={link.url}
            onPlatformChange={(v) => updateLink(link.id, "platform", v)}
            onUrlChange={(v) => updateLink(link.id, "url", v)}
            onRemove={() => removeLink(link.id)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        onClick={addLink}
        type="button"
        className="border-dashed"
      >
        <Plus size={15} />
        Ajouter un lien
      </Button>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          variant={saved ? "secondary" : "primary"}
        >
          {saved ? (
            <>
              <Check size={15} className="text-emerald-600" />
              Enregistré
            </>
          ) : (
            "Enregistrer les liens"
          )}
        </Button>
      </div>
    </div>
  );
}
