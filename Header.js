import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-peach/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <Image src="/logo.png" alt="RepMax" width={20} height={13} priority />
          </div>
          <span className="font-display text-lg font-bold text-ink">
            RepMax
          </span>
        </Link>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-mute sm:block">
          Strength Standards
        </span>
      </div>
    </header>
  );
}
