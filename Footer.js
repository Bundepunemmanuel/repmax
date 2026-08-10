export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-mute">
        <p className="max-w-md">
          Numbers here are estimates built from bodyweight ratios, not a
          replacement for a coach or a real training log. Use them as a
          rough compass, not gospel.
        </p>
        <p className="mt-4 font-mono text-xs">
          © {new Date().getFullYear()} RepMax
        </p>
      </div>
    </footer>
  );
}
