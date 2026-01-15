"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-8 rounded-2xl border p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Get started</h2>
          <p className="mt-2 text-neutral-700">
            Share a few details and we’ll respond with next steps.
          </p>
          <div className="mt-4 text-sm text-neutral-700">
            <div>
              <span className="font-semibold">Call/Text:</span> (XXX) XXX-XXXX
            </div>
            <div>
              <span className="font-semibold">Email:</span> hello@yourdomain.com
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Avoid claiming “court approved” until you confirm approvals and
            compliance requirements.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-xl border px-4 py-3"
          />
          <input
            name="phone"
            required
            placeholder="Phone"
            className="w-full rounded-xl border px-4 py-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-3"
          />
          <input
            name="county"
            placeholder="Court / County (optional)"
            className="w-full rounded-xl border px-4 py-3"
          />
          <input
            name="deadline"
            placeholder="Deadline date (optional)"
            className="w-full rounded-xl border px-4 py-3"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl bg-black px-4 py-3 text-white hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Request Info"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-neutral-700">
              Thanks — we’ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
