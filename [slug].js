import Head from "next/head";
import Link from "next/link";
import exercises, { getExerciseBySlug, getAllSlugs } from "../data";
import Calculator from "../Calculator";

export async function getStaticPaths() {
  return {
    paths: getAllSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const exercise = getExerciseBySlug(params.slug);
  if (!exercise) return { notFound: true };
  return { props: { exercise } };
}

export default function ExercisePage({ exercise }) {
  const related = exercise.relatedSlugs
    .map((slug) => exercises.find((e) => e.slug === slug))
    .filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: exercise.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const title = `${exercise.name} Calculator — 1RM & Strength Standards | RepMax`;
  const description = `Calculate your ${exercise.name.toLowerCase()} one-rep max and see where you rank by bodyweight, from beginner to elite.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-flare">
        {exercise.equipment} · {exercise.category}
      </div>
      <h1 className="font-display text-4xl uppercase leading-none tracking-tight text-bone sm:text-5xl">
        {exercise.name} Calculator
      </h1>
      <p className="mt-4 max-w-lg text-mute">{exercise.intro}</p>

      <div className="mt-8">
        <Calculator exerciseName={exercise.name} ratios={exercise.ratios} />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl uppercase tracking-tight text-bone">
          About this lift
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wide text-mute">
              Muscles worked
            </dt>
            <dd className="mt-1 text-bone">{exercise.muscles}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wide text-mute">
              Form note
            </dt>
            <dd className="mt-1 text-bone">{exercise.formNote}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl uppercase tracking-tight text-bone">
          Questions people actually ask
        </h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {exercise.faqs.map((f) => (
            <div key={f.q} className="py-4">
              <div className="font-medium text-bone">{f.q}</div>
              <div className="mt-2 text-sm text-mute">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl uppercase tracking-tight text-bone">
            Related lifts
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded border border-line px-4 py-2 text-sm text-bone hover:border-flare hover:text-flare"
              >
                {r.name} calculator →
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
