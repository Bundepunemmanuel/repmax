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

      <section className="mb-10">
        <div className="mb-3 inline-block rounded-full bg-flare/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-flare">
          Strength standards, personalized
        </div>
        <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          How strong are you, really?
        </h1>
        <p className="mt-4 max-w-md text-sm text-mute sm:text-base">
          Flat charts tell you nothing about your own bodyweight. Pick a
          lift below, plug in a real set, and get a number that actually
          means something for you.
        </p>
      </section>

      <section>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-mute">
          Calculators
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/${ex.slug}`}
              className="group rounded-card bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="font-mono text-xs text-mute">
                {ex.equipment} · {ex.category}
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="font-display text-xl font-bold text-ink group-hover:text-flare">
                  {ex.name}
                </span>
                <span className="text-flare">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
