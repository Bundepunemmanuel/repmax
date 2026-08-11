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

      <Link
        href="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-mute hover:text-flare"
      >
        ← All calculators
      </Link>

      <div className="mb-3 inline-block rounded-full bg-flare/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-flare">
        {exercise.equipment} · {exercise.category}
      </div>
      <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
        {exercise.name} Calculator
      </h1>
      <p className="mt-4 max-w-md text-sm text-mute sm:text-base">
        {exercise.intro}
      </p>

      <div className="mt-8">
        <Calculator exerciseName={exercise.name} ratios={exercise.ratios} />
      </div>

      <section className="mt-12 rounded-card bg-card p-5 shadow-sm sm:p-7">
        <h2 className="font-display text-xl font-bold text-ink">
          About this lift
        </h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
              Muscles worked
            </dt>
            <dd className="mt-1.5 text-ink">{exercise.muscles}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
              Form note
            </dt>
            <dd className="mt-1.5 text-ink">{exercise.formNote}</dd>
          </div>
          {exercise.variantNote && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-mute">
                About variations
              </dt>
              <dd className="mt-1.5 text-ink">{exercise.variantNote}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-display text-xl font-bold text-ink">
          Questions people actually ask
        </h2>
        <div className="space-y-3">
          {exercise.faqs.map((f) => (
            <div key={f.q} className="rounded-card bg-card p-5 shadow-sm">
              <div className="font-semibold text-ink">{f.q}</div>
              <div className="mt-2 text-sm text-mute">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-xl font-bold text-ink">
            Related lifts
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-full bg-card px-4 py-2.5 text-sm font-medium text-ink shadow-sm hover:text-flare"
              >
                {r.name} calculator →
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 border-t border-line pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-mute hover:text-flare"
        >
          ← Back to all calculators
        </Link>
      </div>
    </>
  );
}
