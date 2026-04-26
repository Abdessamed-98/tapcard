"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Badge from "@/components/ui/Badge";
import Spinner from "@/components/ui/Spinner";
import Avatar from "@/components/ui/Avatar";
import { Zap, Mail, Lock, Search } from "lucide-react";

// ── Section wrapper ──────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
      {children}
    </section>
  );
}

function Swatch({ bg, label, hex }: { bg: string; label: string; hex: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`h-12 rounded-xl ${bg} border border-black/5`} />
      <div className="text-xs font-medium text-gray-700">{label}</div>
      <div className="text-[10px] font-mono text-gray-400">{hex}</div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
              <Zap size={13} fill="white" className="text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">TapCard</span>
            <span className="text-gray-300 text-sm">/</span>
            <span className="text-gray-400 text-sm">Design System</span>
          </div>
          <span className="text-[10px] font-mono bg-gray-100 text-gray-400 px-2 py-1 rounded-md">
            /x-design
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col gap-16">

        {/* ── Colors ── */}
        <Section title="Colors">
          <div>
            <p className="text-xs text-gray-400 mb-4 font-medium">Brand</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              <Swatch bg="bg-indigo-50"  label="indigo-50"  hex="#EEF2FF" />
              <Swatch bg="bg-indigo-100" label="indigo-100" hex="#E0E7FF" />
              <Swatch bg="bg-indigo-200" label="indigo-200" hex="#C7D2FE" />
              <Swatch bg="bg-indigo-300" label="indigo-300" hex="#A5B4FC" />
              <Swatch bg="bg-indigo-400" label="indigo-400" hex="#818CF8" />
              <Swatch bg="bg-indigo-500" label="indigo-500" hex="#6366F1" />
              <Swatch bg="bg-indigo-600" label="indigo-600" hex="#4F46E5" />
              <Swatch bg="bg-indigo-700" label="indigo-700" hex="#4338CA" />
              <Swatch bg="bg-violet-500" label="violet-500" hex="#8B5CF6" />
              <Swatch bg="bg-purple-600" label="purple-600" hex="#9333EA" />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-4 font-medium">Neutrals</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              <Swatch bg="bg-gray-50"  label="gray-50"  hex="#F9FAFB" />
              <Swatch bg="bg-gray-100" label="gray-100" hex="#F3F4F6" />
              <Swatch bg="bg-gray-200" label="gray-200" hex="#E5E7EB" />
              <Swatch bg="bg-gray-300" label="gray-300" hex="#D1D5DB" />
              <Swatch bg="bg-gray-400" label="gray-400" hex="#9CA3AF" />
              <Swatch bg="bg-gray-500" label="gray-500" hex="#6B7280" />
              <Swatch bg="bg-gray-700" label="gray-700" hex="#374151" />
              <Swatch bg="bg-gray-900" label="gray-900" hex="#111827" />
              <Swatch bg="bg-gray-950" label="gray-950" hex="#030712" />
              <Swatch bg="bg-white border border-gray-200"   label="white"    hex="#FFFFFF" />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-4 font-medium">Semantic</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              <Swatch bg="bg-emerald-100" label="success-lt" hex="#D1FAE5" />
              <Swatch bg="bg-emerald-500" label="success"    hex="#10B981" />
              <Swatch bg="bg-yellow-100"  label="warning-lt" hex="#FEF3C7" />
              <Swatch bg="bg-yellow-500"  label="warning"    hex="#F59E0B" />
              <Swatch bg="bg-red-100"     label="error-lt"   hex="#FEE2E2" />
              <Swatch bg="bg-red-500"     label="error"      hex="#EF4444" />
              <Swatch bg="bg-blue-100"    label="info-lt"    hex="#DBEAFE" />
              <Swatch bg="bg-blue-500"    label="info"       hex="#3B82F6" />
            </div>
          </div>
        </Section>

        {/* ── Typography ── */}
        <Section title="Typography">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-5xl / font-black</p>
              <p className="text-5xl font-black text-gray-900 tracking-tight">Votre identité.</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-4xl / font-bold</p>
              <p className="text-4xl font-bold text-gray-900 tracking-tight">Un seul tap.</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-2xl / font-bold</p>
              <p className="text-2xl font-bold text-gray-900">Commandez votre carte NFC</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-xl / font-semibold</p>
              <p className="text-xl font-semibold text-gray-900">Vos informations personnelles</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-base / font-normal — body</p>
              <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                Commandez votre carte NFC personnalisée, configurez votre profil
                et partagez tous vos liens en un seul geste. Livraison partout
                en Algérie sous 48h.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-sm — secondary</p>
              <p className="text-sm text-gray-400">Ces informations seront utilisées pour la livraison de votre commande.</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">text-xs / tracking-widest / uppercase — label</p>
              <p className="text-xs font-bold tracking-widest text-indigo-500 uppercase">Livraison partout en Algérie</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-1">Gradient text</p>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Un seul tap.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Buttons ── */}
        <Section title="Buttons">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8">
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-4">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-4">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-300 mb-4">States</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button variant="primary" className="gap-2">
                  <Mail size={15} /> With icon
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Form Controls ── */}
        <Section title="Form Controls">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="Default input" placeholder="Placeholder..." />
            <Input label="With hint" placeholder="votre@email.com" hint="Nous ne partagerons jamais votre email." />
            <Input label="With error" placeholder="Numéro de téléphone" error="Numéro invalide" defaultValue="abc" />
            <Input label="With icon" placeholder="Rechercher..." prefix={<Search size={15} className="text-gray-400" />} />
            <Input label="Password" type="password" placeholder="••••••••" prefix={<Lock size={15} className="text-gray-400" />} />
            <Input label="Disabled" placeholder="Non modifiable" disabled />
            <Select
              label="Select"
              placeholder="Choisir une option..."
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
              ]}
            />
            <Select
              label="Select with error"
              placeholder="Sélectionner..."
              options={[{ value: "1", label: "Option 1" }]}
              error="Ce champ est requis"
            />
            <div className="sm:col-span-2">
              <Textarea label="Textarea" placeholder="Décrivez-vous en quelques mots..." rows={3} hint="160 caractères maximum." />
            </div>
          </div>
        </Section>

        {/* ── Badges ── */}
        <Section title="Badges">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Livré</Badge>
            <Badge variant="warning">En cours</Badge>
            <Badge variant="error">Annulé</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="purple">Purple</Badge>
          </div>
        </Section>

        {/* ── Avatar ── */}
        <Section title="Avatar">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="AB" size="sm" />
              <span className="text-[10px] font-mono text-gray-300">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="AB" size="md" />
              <span className="text-[10px] font-mono text-gray-300">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="AB" size="lg" />
              <span className="text-[10px] font-mono text-gray-300">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="AB" size="xl" />
              <span className="text-[10px] font-mono text-gray-300">xl</span>
            </div>
          </div>
        </Section>

        {/* ── Spinner ── */}
        <Section title="Spinner">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-[10px] font-mono text-gray-300">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <span className="text-[10px] font-mono text-gray-300">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-[10px] font-mono text-gray-300">lg</span>
            </div>
          </div>
        </Section>

        {/* ── Radius & Shadows ── */}
        <Section title="Radius & Shadows">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { cls: "rounded-lg shadow-sm",   label: "rounded-lg / shadow-sm" },
              { cls: "rounded-xl shadow-md",   label: "rounded-xl / shadow-md" },
              { cls: "rounded-2xl shadow-lg",  label: "rounded-2xl / shadow-lg" },
              { cls: "rounded-3xl shadow-xl",  label: "rounded-3xl / shadow-xl" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className={`w-full h-16 bg-white border border-gray-100 ${item.cls}`} />
                <span className="text-[10px] font-mono text-gray-400 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Gradients ── */}
        <Section title="Brand Gradients">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { cls: "from-indigo-500 via-violet-500 to-purple-600", label: "Primary gradient" },
              { cls: "from-pink-500 via-rose-500 to-orange-400",     label: "Instagram gradient" },
              { cls: "from-indigo-600 via-violet-600 to-purple-700", label: "CTA gradient" },
            ].map((g) => (
              <div key={g.label} className="flex flex-col gap-2">
                <div className={`h-20 rounded-2xl bg-gradient-to-br ${g.cls}`} />
                <span className="text-[10px] font-mono text-gray-400">{g.label}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 mt-8 py-6 text-center">
        <p className="text-xs text-gray-300 font-mono">TapCard Design System — internal only · /x-design</p>
      </div>
    </div>
  );
}
