import Head from "next/head";
import Link from "next/link";

export default function Methodology() {
  return (
    <>
      <Head>
        <title>Methodology | How RepMax Calculates Your Numbers</title>
        <meta
          name="description"
          content="How RepMax estimates your one-rep max and strength tier — the formula, the standards, and their real limitations."
        />
      </Head>

      <Link
        href="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-mute hover:text-flare"
      >
        ← All calculators
      </Link>

      <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
        How these numbers are calculated
      </h1>
      <p className="mt-4 max-w-xl text-sm text-mute sm:text-base">
        We'd rather tell you exactly how this works than let you guess.
        Here's the real formula and where its limitations are.
      </p>

      <section className="mt-8 rounded-card bg-card p-5 shadow-sm sm:p-7">
        <h2 className="font-display text-xl font-bold text-ink">
          Estimating your one-rep max
        </h2>
        <p className="mt-3 text-sm text-ink">
          We use the Epley formula — one of the most widely cited methods for
          estimating a one-rep max from a submaximal set:
        </p>
        <div className="mt-3 rounded-2xl bg-flare/10 px-4 py-3 font-mono text-sm text-ink">
          1RM ≈ weight × (1 + reps ÷ 30)
        </div>
        <p className="mt-3 text-sm text-ink">
          It's an estimate, not a measurement. Epley tends to run slightly
          less accurate above 10-12 reps, which is why we cap the calculator
          at a reasonable rep range — pushing it past that starts to
          overestimate.
        </p>
      </section>

      <section className="mt-8 rounded-card bg-card p-5 shadow-sm sm:p-7">
        <h2 className="font-display text-xl font-bold text-ink">
          Where the strength tiers come from
        </h2>
        <p className="mt-3 text-sm text-ink">
          Each exercise's Beginner-through-Elite tiers are expressed as a
          ratio of your estimated 1RM to your bodyweight. These ratios are
          our own estimates, built from common, broadly consistent patterns
          across published strength-standard resources and typical training
          progressions — not pulled from one single lab study or
          competition dataset.
        </p>
        <p className="mt-3 text-sm text-ink">
          That means they're a reasonable compass, not a certified
          benchmark. Individual factors — limb length, training age, how
          long you've specifically trained that exact lift — can shift where
          you'd "really" fall more than a bodyweight ratio alone can
          capture.
        </p>
      </section>

      <section className="mt-8 rounded-card bg-card p-5 shadow-sm sm:p-7">
        <h2 className="font-display text-xl font-bold text-ink">
          What we don't claim
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          <li>• We're not a coach, a physical therapist, or a substitute for either.</li>
          <li>• These numbers aren't drawn from a single peer-reviewed dataset — treat them as a reasonable estimate, not a certified standard.</li>
          <li>• Comparison ratios between exercises (like deadlift to trap bar deadlift) are general patterns, not a guarantee for your specific build.</li>
        </ul>
      </section>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-flare"
        >
          ← Back to all calculators
        </Link>
      </div>
    </>
  );
}
