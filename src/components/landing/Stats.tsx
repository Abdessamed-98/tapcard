export default function Stats() {
  const stats = [
    { value: "10 000+", label: "Cartes livrées" },
    { value: "58", label: "Wilayas couvertes" },
    { value: "48h", label: "Délai moyen de livraison" },
    { value: "4.9 ★", label: "Satisfaction client" },
  ];

  return (
    <section className="bg-gray-950 py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
