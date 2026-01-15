export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="font-semibold tracking-tight">
          LA Traffic School Online
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a href="#how" className="hover:underline">
            How it works
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-black px-3 py-2 text-white hover:opacity-90"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
