"use client";

import { useState } from "react";
import { DEMO_PROFILE, ProfileData } from "@/lib/mock-data";
import ProfileEditor from "@/components/dashboard/ProfileEditor";
import SocialLinksEditor from "@/components/dashboard/SocialLinksEditor";
import OrderHistory from "@/components/dashboard/OrderHistory";
import CardPreview from "@/components/dashboard/CardPreview";
import Navbar from "@/components/landing/Navbar";
import { LayoutDashboard, User, Link as LinkIcon, Package } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "profile" | "links" | "orders";

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "profile", label: "Profil", icon: User },
  { id: "links", label: "Liens", icon: LinkIcon },
  { id: "orders", label: "Commandes", icon: Package },
];

export default function DashboardPage() {
  const [profile, setProfile] = useState<ProfileData>(DEMO_PROFILE);
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <LayoutDashboard size={20} className="text-indigo-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Mon espace TapCard
                </h1>
                <p className="text-sm text-gray-400">
                  Gérez votre profil et vos commandes
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mt-5 border-b border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors",
                    activeTab === tab.id
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  )}
                >
                  <tab.icon size={15} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {(activeTab === "profile" || activeTab === "links") ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main editor */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {activeTab === "profile" && (
                  <ProfileEditor profile={profile} onUpdate={setProfile} />
                )}
                {activeTab === "links" && (
                  <SocialLinksEditor profile={profile} onUpdate={setProfile} />
                )}
              </div>

              {/* Preview sidebar */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <CardPreview profile={profile} />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <OrderHistory />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
