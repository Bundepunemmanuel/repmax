import Head from "next/head";
import Link from "next/link";
import exercises from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>RepMax — 1-Rep Max Calculators & Strength Standards</title>
        <meta
          name="description"
          content="Free 1-rep max calculators and strength standards for hip thrust, squat, deadlift, bench press, and hack squat. Enter your numbers, see your tier."
        />
      </Head>

      <section className="mb-14 max-w-xl">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-brass">
          Strength standards, personalized
        </div>
        <h1 className="font-display text-4xl italic leading-[1.05] text-ink sm:text-5xl">
          How strong are you, really?
        </h1>
        <p className="mt-5 text-mute">
          Flat charts tell you nothing about your own bodyweight. Pick a
          lift below, plug in a real set, and get a number that actually
          means something for you.
        </p>
      </section>

      <section>
        <div className="mb-4 border-b border-rule pb-2 font-mono text-xs uppercase tracking-wide text-mute">
          Calculators
        </div>
        <div className="divide-y divide-rule border-y border-rule">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/${ex.slug}`}
              className="group flex items-center justify-between py-5 transition-colors hover:bg-card"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-wide text-mute">
                  {ex.equipment} · {ex.category}
                </div>
                <div className="mt-1 font-display text-2xl italic text-ink group-hover:text-brass">
                  {ex.name}
                </div>
              </div>
              <span className="font-mono text-sm text-mute group-hover:text-brass">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
