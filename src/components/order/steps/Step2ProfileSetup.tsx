"use client";

import { useOrderStore } from "@/store/orderStore";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import ImageUpload from "@/components/ui/ImageUpload";
import { useState } from "react";

export default function Step2ProfileSetup() {
  const store = useOrderStore();
  const [displayName, setDisplayName] = useState(
    store.displayName || store.fullName
  );
  const [bio, setBio] = useState(store.bio);
  const [avatarDataUrl, setAvatarDataUrl] = useState<string | null>(
    store.avatarDataUrl
  );
  const [coverDataUrl, setCoverDataUrl] = useState<string | null>(
    store.coverDataUrl
  );

  function handleSkip() {
    store.setProfileSetup({
      skipProfile: true,
      displayName: "",
      bio: "",
      avatarDataUrl: null,
      coverDataUrl: null,
    });
    store.nextStep();
  }

  function handleContinue() {
    store.setProfileSetup({
      skipProfile: false,
      displayName: displayName || store.fullName,
      bio,
      avatarDataUrl,
      coverDataUrl,
    });
    store.nextStep();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Configurez votre profil
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Ces informations apparaîtront sur votre page de profil publique,
          accessible via votre carte NFC. Vous pouvez modifier cela plus tard.
        </p>
      </div>

      {/* Cover photo */}
      <div>
        <span className="text-sm font-medium text-gray-700 block mb-2">
          Photo de couverture
        </span>
        <ImageUpload
          value={coverDataUrl}
          onChange={setCoverDataUrl}
          aspectRatio="banner"
          hint="Format recommandé : 1200 × 400px"
        />
      </div>

      {/* Avatar + name/bio */}
      <div className="flex gap-4 items-start">
        <ImageUpload
          label="Photo de profil"
          value={avatarDataUrl}
          onChange={setAvatarDataUrl}
          aspectRatio="square"
          className="flex-shrink-0"
          hint="Carré recommandé"
        />
        <div className="flex-1 flex flex-col gap-4 pt-5">
          <Input
            label="Nom affiché"
            required
            placeholder="ex : Ahmed Benali"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Textarea
            label="Bio"
            placeholder="Décrivez-vous en quelques mots..."
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            showCount
            maxLength={160}
          />
        </div>
      </div>

      {/* Preview */}
      {(displayName || avatarDataUrl || coverDataUrl) && (
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 text-xs text-gray-400 font-medium">
            Aperçu
          </div>
          <div>
            <div
              className="h-20 bg-gradient-to-br from-indigo-500 to-violet-600"
              style={
                coverDataUrl
                  ? {
                      backgroundImage: `url(${coverDataUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            />
            <div className="px-5 pb-4">
              <div className="flex -mt-6 mb-2">
                {avatarDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatarDataUrl}
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    {(displayName || "?")[0].toUpperCase()}
                  </div>
                )}
              </div>
              <div className="font-bold text-gray-900 text-sm">{displayName}</div>
              {bio && (
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {bio}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

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
