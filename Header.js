import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="RepMax" width={32} height={21} priority />
          <span className="font-display text-lg uppercase tracking-tight text-bone">
            RepMax
          </span>
        </Link>
        <span className="font-mono text-xs text-mute">
          strength standards
        </span>
      </div>
    </header>
  );
}
