const faqs = [
  {
    q: "Is this accepted in Los Angeles County?",
    a: "Eligibility and acceptance can vary by court/county. We’ll help you confirm before you enroll.",
  },
  {
    q: "How long does it take?",
    a: "Most drivers finish in 2–4 hours depending on pace.",
  },
  {
    q: "Can I do it on my phone?",
    a: "Yes. The course experience is designed to work on mobile and desktop.",
  },
  {
    q: "Do I have to finish in one sitting?",
    a: "No. You can pause and resume anytime.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-2xl border p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
