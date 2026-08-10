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

      <div className="max-w-xl">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-brass">
          {exercise.equipment} · {exercise.category}
        </div>
        <h1 className="font-display text-4xl italic leading-[1.05] text-ink sm:text-5xl">
          {exercise.name} Calculator
        </h1>
        <p className="mt-5 text-mute">{exercise.intro}</p>
      </div>

      <div className="mt-10">
        <Calculator exerciseName={exercise.name} ratios={exercise.ratios} />
      </div>

      <section className="mt-14 max-w-xl">
        <h2 className="font-display text-2xl italic text-ink">
          About this lift
        </h2>
        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-mute">
              Muscles worked
            </dt>
            <dd className="mt-1.5 text-ink">{exercise.muscles}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-mute">
              Form note
            </dt>
            <dd className="mt-1.5 text-ink">{exercise.formNote}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-ink">
          Questions people actually ask
        </h2>
        <div className="mt-5 divide-y divide-rule border-y border-rule">
          {exercise.faqs.map((f) => (
            <div key={f.q} className="py-5">
              <div className="font-medium text-ink">{f.q}</div>
              <div className="mt-2 max-w-xl text-sm text-mute">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl italic text-ink">
            Related lifts
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="border border-rule px-4 py-2.5 text-sm text-ink hover:border-brass hover:text-brass"
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
