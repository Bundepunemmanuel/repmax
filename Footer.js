export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-mute">
        <p>
          Numbers here are estimates built from bodyweight ratios, not a
          replacement for a coach or a real training log. Use them as a
          rough compass, not gospel.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} RepMax</p>
      </div>
    </footer>
  );
}
