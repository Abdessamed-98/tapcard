"use client";

import { useState } from "react";
import { DEMO_PROFILE, ProfileData } from "@/lib/mock-data";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import ImageUpload from "@/components/ui/ImageUpload";
import { Check } from "lucide-react";

interface ProfileEditorProps {
  profile: ProfileData;
  onUpdate: (updated: ProfileData) => void;
}

export default function ProfileEditor({ profile, onUpdate }: ProfileEditorProps) {
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [bio, setBio] = useState(profile.bio);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(profile.avatarUrl);
  const [coverUrl, setCoverUrl] = useState<string | null>(profile.coverUrl);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    onUpdate({ ...profile, displayName, bio, avatarUrl, coverUrl });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const isDirty =
    displayName !== profile.displayName ||
    bio !== profile.bio ||
    avatarUrl !== profile.avatarUrl ||
    coverUrl !== profile.coverUrl;

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-gray-900">Modifier le profil</h3>

      {/* Cover photo */}
      <ImageUpload
        label="Photo de couverture"
        value={coverUrl}
        onChange={setCoverUrl}
        aspectRatio="banner"
        hint="Format recommandé : 1200 × 400px"
      />

      {/* Avatar + fields */}
      <div className="flex gap-4 items-start">
        <ImageUpload
          label="Photo de profil"
          value={avatarUrl}
          onChange={setAvatarUrl}
          aspectRatio="square"
          className="flex-shrink-0"
        />
        <div className="flex-1 flex flex-col gap-3 pt-5">
          <Input
            label="Nom affiché"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Textarea
            label="Bio"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            showCount
            maxLength={160}
          />
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={!isDirty}
          variant={saved ? "secondary" : "primary"}
        >
          {saved ? (
            <>
              <Check size={15} className="text-emerald-600" />
              Enregistré
            </>
          ) : (
            "Enregistrer"
          )}
        </Button>
      </div>
    </div>
  );
}
