export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <div className="rounded-2xl border p-8 shadow-sm">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          Online Traffic School for Los Angeles Drivers
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Fast, self-paced, and mobile-friendly. Enroll in minutes and complete
          the course from home—on your schedule.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-black px-5 py-3 text-center text-white hover:opacity-90"
          >
            Enroll Now
          </a>
          <a
            href="#faq"
            className="rounded-xl border px-5 py-3 text-center hover:bg-neutral-50"
          >
            Check Eligibility
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Note: Eligibility and acceptance can vary by court/county. We’ll help
          you confirm before you enroll.
        </p>
      </div>
    </section>
  );
}
