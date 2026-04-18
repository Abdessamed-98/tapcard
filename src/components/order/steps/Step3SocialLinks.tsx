"use client";

import { useOrderStore, SocialLinkEntry } from "@/store/orderStore";
import { useState } from "react";
import Button from "@/components/ui/Button";
import SocialLinkRow from "@/components/order/SocialLinkRow";
import { Plus } from "lucide-react";

let nextId = 1;
function newId() {
  return `sl-${nextId++}`;
}

export default function Step3SocialLinks() {
  const store = useOrderStore();
  const [links, setLinks] = useState<SocialLinkEntry[]>(
    store.socialLinks.length > 0
      ? store.socialLinks
      : [{ id: newId(), platform: "instagram", url: "" }]
  );

  function addLink() {
    setLinks((prev) => [...prev, { id: newId(), platform: "website", url: "" }]);
  }

  function updateLink(id: string, field: "platform" | "url", value: string) {
    setLinks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  }

  function removeLink(id: string) {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }

  function handleSkip() {
    store.setSocialLinks({ skipSocialLinks: true, socialLinks: [] });
    store.nextStep();
  }

  function handleContinue() {
    const validLinks = links.filter((l) => l.platform && l.url.trim());
    store.setSocialLinks({ skipSocialLinks: false, socialLinks: validLinks });
    store.nextStep();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Vos liens réseaux sociaux
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Ces liens apparaîtront sur votre profil public. Vous pouvez en ajouter
          autant que vous voulez et les réorganiser plus tard.
        </p>
      </div>

      <div className="flex flex-col gap-3">
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
        className="w-full border-dashed"
      >
        <Plus size={16} />
        Ajouter un lien
      </Button>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={store.prevStep} type="button">
            Retour
          </Button>
          <Button variant="outline" onClick={handleSkip} type="button">
            Passer cette étape
          </Button>
        </div>
        <Button onClick={handleContinue} size="lg" type="button">
          Continuer
        </Button>
      </div>
    </div>
  );
}
