export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
        <div>© {new Date().getFullYear()} LA Traffic School Online</div>
        <div className="mt-2 text-xs text-neutral-500">
          Disclaimer: This is a demo site concept. Course acceptance/eligibility
          varies by court/county and must be verified.
        </div>
      </div>
    </footer>
  );
}
