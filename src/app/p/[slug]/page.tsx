import { getProfileBySlug } from "@/lib/mock-data";
import SocialLinkButton from "@/components/profile/SocialLinkButton";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) return { title: "Profil introuvable — TapCard" };
  return {
    title: `${profile.displayName} — TapCard`,
    description: profile.bio ?? `Profil TapCard de ${profile.displayName}`,
    openGraph: {
      title: `${profile.displayName} — TapCard`,
      description: profile.bio ?? undefined,
      type: "profile",
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-0">
      {/* Profile card — centered, max-width like a phone */}
      <div className="w-full max-w-sm mx-auto bg-white min-h-screen shadow-xl">
        {/* Cover */}
        <div className="relative">
          <div
            className="h-36 w-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600"
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
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
            {profile.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatarUrl}
                alt={profile.displayName}
                className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                {profile.displayName[0].toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="pt-14 px-6 pb-2 text-center">
          <h1 className="text-xl font-bold text-gray-900">{profile.displayName}</h1>
          {profile.bio && (
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Social Links */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {profile.socialLinks.map((link, i) => (
            <SocialLinkButton
              key={i}
              platform={link.platform}
              label={link.label}
              url={link.url}
              bgColor={link.bgColor}
            />
          ))}
        </div>

        {/* Powered by TapCard */}
        <div className="pb-8 pt-4 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            <div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center">
              <Zap size={9} className="text-white" fill="white" />
            </div>
            Propulsé par TapCard
          </Link>
        </div>
      </div>
    </div>
  );
}
