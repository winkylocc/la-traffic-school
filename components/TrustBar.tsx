const items = [
  "Self-paced",
  "Phone + laptop friendly",
  "Support available",
  "Proof of completion",
];

export default function TrustBar() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-10">
      <div className="grid gap-3 rounded-2xl border p-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((t) => (
          <div key={t} className="text-sm text-neutral-700">
            <span className="mr-2">✓</span>
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
