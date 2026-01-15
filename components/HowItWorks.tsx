const steps = [
  {
    title: "Enroll in Minutes",
    body: "Quick signup. Start right away from any device.",
  },
  {
    title: "Take the Course Online",
    body: "Self-paced learning. Pause and resume anytime.",
  },
  {
    title: "Get Proof of Completion",
    body: "Receive completion confirmation after finishing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <p className="mt-2 text-neutral-700">
        Simple steps designed for busy drivers.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border p-6">
            <div className="text-sm font-semibold text-neutral-500">
              Step {i + 1}
            </div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <div className="mt-2 text-neutral-700">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
