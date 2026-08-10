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

      <section className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-flare">
          Strength standards, personalized
        </div>
        <h1 className="font-display text-4xl uppercase leading-none tracking-tight text-bone sm:text-5xl">
          How strong are you, really?
        </h1>
        <p className="mt-4 max-w-lg text-mute">
          Flat charts tell you nothing about your own bodyweight. Pick a
          lift below, plug in a real set, and get a number that actually
          means something for you.
        </p>
      </section>

      <section>
        <div className="mb-3 text-xs uppercase tracking-wide text-mute">
          Calculators
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/${ex.slug}`}
              className="group rounded border border-line bg-panel p-5 transition-colors hover:border-flare"
            >
              <div className="font-mono text-xs text-mute">
                {ex.equipment} · {ex.category}
              </div>
              <div className="mt-1 font-display text-2xl uppercase tracking-tight text-bone group-hover:text-flare">
                {ex.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
