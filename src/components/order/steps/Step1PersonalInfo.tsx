"use client";

import { useOrderStore } from "@/store/orderStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import LocationSelector from "@/components/order/LocationSelector";
import Textarea from "@/components/ui/Textarea";

const schema = z.object({
  fullName: z.string().min(3, "Nom complet requis (min. 3 caractères)"),
  phone: z
    .string()
    .min(9, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s()-]+$/, "Numéro invalide"),
  email: z.string().email("Email invalide").or(z.literal("")),
  fullAddress: z.string().min(5, "Adresse complète requise"),
});

type FormData = z.infer<typeof schema>;

export default function Step1PersonalInfo() {
  const store = useOrderStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: store.fullName,
      phone: store.phone,
      email: store.email,
      fullAddress: store.fullAddress,
    },
  });

  function onSubmit(data: FormData) {
    if (!store.wilayaCode) return;
    store.setPersonalInfo({
      ...data,
      wilayaCode: store.wilayaCode,
      wilayaName: store.wilayaName,
      dairaName: store.dairaName,
      baladiya: store.baladiya,
    });
    store.nextStep();
  }

  const locationErrors = {
    wilaya: !store.wilayaCode ? "Wilaya requise" : undefined,
    daira: !store.dairaName ? "Daïra requise" : undefined,
    baladiya: !store.baladiya ? "Commune requise" : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Vos informations personnelles
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Ces informations seront utilisées pour la livraison de votre commande.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Nom complet"
          required
          placeholder="ex : Ahmed Benali"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <Input
          label="Numéro de téléphone"
          required
          placeholder="ex : 0555 000 000"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Input
        label="Email"
        placeholder="votre@email.com (optionnel)"
        type="email"
        hint="Pour recevoir la confirmation de votre commande"
        error={errors.email?.message}
        {...register("email")}
      />

      <div>
        <div className="text-sm font-medium text-gray-700 mb-3">
          Adresse de livraison <span className="text-red-500">*</span>
        </div>
        <LocationSelector
          wilayaCode={store.wilayaCode}
          wilayaName={store.wilayaName}
          dairaName={store.dairaName}
          baladiya={store.baladiya}
          onWilayaChange={store.setWilaya}
          onDairaChange={store.setDaira}
          onBaladiyaChange={store.setBaladiya}
          errors={
            store.wilayaCode || store.dairaName || store.baladiya
              ? {}
              : locationErrors
          }
        />
      </div>

      <Textarea
        label="Adresse complète"
        required
        placeholder="Numéro, rue, cité, résidence..."
        rows={3}
        error={errors.fullAddress?.message}
        {...register("fullAddress")}
      />

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={!store.wilayaCode || !store.dairaName || !store.baladiya}
        >
          Continuer
        </Button>
      </div>
    </form>
  );
}
