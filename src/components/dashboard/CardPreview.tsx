"use client";

import { ProfileData } from "@/lib/mock-data";
import SocialLinkButton from "@/components/profile/SocialLinkButton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface CardPreviewProps {
  profile: ProfileData;
}

export default function CardPreview({ profile }: CardPreviewProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Aperçu de votre profil</h3>
        <Link
          href={`/p/${profile.slug}`}
          target="_blank"
          className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
        >
          <ExternalLink size={12} />
          Ouvrir
        </Link>
      </div>

      {/* Phone frame */}
      <div className="flex justify-center">
        <div className="bg-gray-900 rounded-[2rem] p-2.5 shadow-xl w-56">
          <div className="bg-white rounded-[1.6rem] overflow-hidden">
            {/* Cover */}
            <div
              className="h-20 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600"
              style={
                profile.coverUrl
                  ? {
                      backgroundImage: `url(${profile.coverUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            />
            {/* Avatar */}
            <div className="flex justify-center -mt-7 mb-2">
              {profile.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatarUrl}
                  alt=""
                  className="w-14 h-14 rounded-full border-3 border-white object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full border-3 border-white bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                  {profile.displayName[0].toUpperCase()}
                </div>
              )}
            </div>
            <div className="px-3 pb-1 text-center">
              <div className="font-bold text-gray-900 text-xs leading-tight">
                {profile.displayName}
              </div>
              {profile.bio && (
                <p className="text-gray-400 text-[10px] mt-0.5 leading-snug line-clamp-2">
                  {profile.bio}
                </p>
              )}
            </div>
            {/* Links preview */}
            <div className="px-3 pb-3 flex flex-col gap-1.5 mt-1">
              {profile.socialLinks.slice(0, 4).map((link, i) => (
                <div
                  key={i}
                  className="text-[10px] py-1.5 px-2 rounded-xl text-white text-center font-semibold truncate"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                >
                  {link.label}
                </div>
              ))}
              {profile.socialLinks.length > 4 && (
                <div className="text-[9px] text-gray-400 text-center">
                  +{profile.socialLinks.length - 4} autres
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        URL :{" "}
        <span className="text-indigo-600 font-mono">
          tapcard.dz/p/{profile.slug}
        </span>
      </p>
    </div>
  );
}
