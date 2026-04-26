import Image from "next/image";

const IMAGES = [
  {
    src: "/imgs/Plaque-NFC-connectee-facebook.jpg",
    alt: "Plaque NFC Facebook",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/imgs/Plaque-NFC-connectee-whatsapp.jpg",
    alt: "Plaque NFC WhatsApp",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/imgs/Plaque-NFC-connectee-site-internet.jpg",
    alt: "Plaque NFC Site internet",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/imgs/plaque_plexiglass_sur-mesure_des_lunite_bord_rond_cardzprinter-2.jpg",
    alt: "Plaque plexiglass sur mesure",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/imgs/Google-Review-Sticker-Epoxy-3M-2026.webp",
    alt: "Sticker NFC Google Review",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/imgs/Screenshot_20260406_132720_Expo Go.jpg",
    alt: "Application TapCard",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/imgs/plaque-avis-google-pvc-noir-photo-2-600x600_cleanup.webp",
    alt: "Plaque avis Google PVC noir",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[220px] gap-3">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`${img.span} relative rounded-3xl overflow-hidden group bg-gray-100`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
