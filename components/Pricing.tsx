const tiers = [
  {
    name: "Basic",
    price: "$XX",
    points: ["Course access", "Completion confirmation", "Email support"],
  },
  {
    name: "Fast Track",
    price: "$XX",
    points: ["Everything in Basic", "Priority support", "Faster processing"],
    featured: true,
  },
  {
    name: "Same-Day Option",
    price: "$XX",
    points: ["For deadlines", "Priority handling", "Support included"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <p className="mt-2 text-neutral-700">
        Transparent options. Final details can vary by county requirements.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-2xl border p-6",
              t.featured ? "border-black shadow-sm" : "",
            ].join(" ")}
          >
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="text-2xl font-semibold">{t.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {t.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className={[
                "mt-6 block rounded-xl px-4 py-3 text-center",
                t.featured
                  ? "bg-black text-white hover:opacity-90"
                  : "border hover:bg-neutral-50",
              ].join(" ")}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
