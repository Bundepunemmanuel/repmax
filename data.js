// All exercise content lives here. Adding exercise #6 onward means adding
// another object to this array — the page template in pages/[slug].js
// handles the rest.

const exercises = [
  {
    slug: "hip-thrust",
    name: "Hip Thrust",
    category: "Legs & Glutes",
    equipment: "Barbell",
    intro:
      "The hip thrust is a barbell glute exercise done with your shoulders on a bench and the bar across your hips. It's the closest thing to a dedicated glute-strength number — most lifters find they can move a lot more weight here than on a squat or deadlift, which throws people off the first time they load the bar.",
    muscles: "Primarily glutes, with hamstrings and adductors doing real supporting work through the lockout.",
    formNote:
      "Lockout comes from the hips, not the lower back. If you feel it in your spine before your glutes, the weight is too heavy for your current setup or your foot placement is off.",
    ratios: {
      men: { beginner: 0.75, novice: 1.0, intermediate: 1.5, advanced: 2.0, elite: 2.5 },
      women: { beginner: 0.6, novice: 0.85, intermediate: 1.25, advanced: 1.75, elite: 2.25 },
    },
    faqs: [
      {
        q: "How much should I hip thrust?",
        a: "As a rough floor, being able to hip thrust your own bodyweight for a clean rep puts you past the beginner stage. Most people who train glutes with any consistency end up in the 1.25–1.75x bodyweight range within a year or two. Use the calculator above with your own bodyweight and working set — it'll give you a tighter number than any flat chart.",
      },
      {
        q: "Is my hip thrust good?",
        a: "Compare it to your squat and deadlift, not to a stranger's numbers. If your hip thrust is noticeably lower than 1.5x your squat, your glutes are probably the limiting factor in both lifts and worth prioritizing for a while.",
      },
      {
        q: "Hip thrust vs glute bridge — what's the difference?",
        a: "Glute bridge is the floor version with a shorter range of motion and less loading potential. Hip thrust, with your upper back elevated on a bench, lets you go through a full range and load it much heavier. If you're maxing out glute bridge weight, hip thrust is the natural next step.",
      },
      {
        q: "How do I improve my hip thrust?",
        a: "Pause for a full second at the top on your working sets — it's tempting to bounce through lockout once the weight gets heavy, and that's where most of the false progress comes from. Also check your foot placement; too far forward or back changes the leverage more than people expect.",
      },
    ],
    relatedSlugs: ["hack-squat", "back-squat"],
  },
  {
    slug: "hack-squat",
    name: "Hack Squat",
    category: "Legs",
    equipment: "Machine",
    intro:
      "Hack squat usually means the angled sled machine, back against the pad, feet on a platform in front of you. It takes your lower back mostly out of the equation, so people who can't squat heavy due to back issues often find they can load the hack squat well past what their back squat suggests.",
    muscles: "Quad-dominant, with glutes and hamstrings assisting depending on foot placement on the platform.",
    formNote:
      "Foot position changes the exercise more than most people realize. Feet low and close hits the quads harder and asks more of your knees; feet higher and wider shifts more load to the glutes and hamstrings.",
    ratios: {
      men: { beginner: 0.5, novice: 0.85, intermediate: 1.3, advanced: 1.8, elite: 2.4 },
      women: { beginner: 0.4, novice: 0.65, intermediate: 1.0, advanced: 1.4, elite: 1.9 },
    },
    faqs: [
      {
        q: "How much should I hack squat?",
        a: "This one varies a lot by machine — sled weight alone can differ by 50+ lbs between gyms, so don't panic if your number looks low on a heavy sled. Use total weight moved (sled + plates) and check your ratio against your own bodyweight rather than comparing raw numbers with someone at a different gym.",
      },
      {
        q: "Is hack squat harder than back squat?",
        a: "Not harder exactly, but it isolates the quads more directly since your back and core aren't stabilizing a bar. Most lifters can hack squat noticeably more than they back squat once they're used to the machine.",
      },
      {
        q: "How much does the hack squat sled weigh?",
        a: "Anywhere from 30 to over 100 lbs depending on the machine — check the base plate on yours, it's usually stamped somewhere on the frame. This matters a lot if you're tracking progress across different gyms.",
      },
    ],
    relatedSlugs: ["back-squat", "hip-thrust"],
  },
  {
    slug: "back-squat",
    name: "Back Squat",
    category: "Legs",
    equipment: "Barbell",
    intro:
      "The back squat is one of the three competition powerlifts, bar on your traps or rear delts, and it's usually the first number people ask about when they want to know if someone lifts seriously. It's also one of the more technical lifts to load heavy safely — depth, bar path, and bracing all matter more here than on most other exercises.",
    muscles: "Quads and glutes primarily, with the entire posterior chain and core working to keep you upright under load.",
    formNote:
      "Depth matters for both the training effect and for any number you're comparing against standards — a quarter-squat max isn't the same lift as a below-parallel max, even at the same weight on the bar.",
    ratios: {
      men: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.75, elite: 2.25 },
      women: { beginner: 0.4, novice: 0.6, intermediate: 1.0, advanced: 1.5, elite: 1.9 },
    },
    faqs: [
      {
        q: "How much should I squat?",
        a: "Bodyweight for a clean, full-depth rep is a reasonable first target if you're new to barbell training. Past that, 1.25x bodyweight is a common marker of a year or two of consistent training, and 1.75x-plus starts to separate people who train squats specifically from people who just train legs generally.",
      },
      {
        q: "What's a good squat for my bodyweight?",
        a: "Use the calculator above rather than a flat number — ratio to bodyweight matters more than raw weight, especially comparing a 140lb lifter to a 220lb lifter. A 300lb squat means something very different depending on who's under the bar.",
      },
      {
        q: "How often should I squat to get stronger?",
        a: "Twice a week tends to be the sweet spot for most people balancing squat progress against everything else in a program — enough frequency to build the skill without burying yourself in fatigue.",
      },
      {
        q: "Front squat vs back squat, which is better for strength?",
        a: "Back squat almost always allows heavier loading since your upper back can brace more weight than your front rack position can hold. Front squat tends to build more direct quad and upper-back strength, but back squat is the better number if you're chasing a pure strength max.",
      },
    ],
    relatedSlugs: ["hack-squat", "deadlift"],
  },
  {
    slug: "deadlift",
    name: "Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Barbell",
    intro:
      "Conventional deadlift, bar on the floor, pulled from a dead stop. It's usually the heaviest number in anyone's lifting log because it recruits nearly everything at once — but that also means fatigue and technique breakdown hit harder here than on any other lift.",
    muscles: "Hamstrings, glutes, and the entire back working together, with grip strength often becoming the real limiter as weight climbs.",
    formNote:
      "Bar should stay close to your shins and thighs the whole way up. The moment it drifts forward, the leverage against your lower back gets ugly fast — that's usually where form breaks down before weight does.",
    ratios: {
      men: { beginner: 0.75, novice: 1.0, intermediate: 1.5, advanced: 2.0, elite: 2.5 },
      women: { beginner: 0.6, novice: 0.85, intermediate: 1.35, advanced: 1.75, elite: 2.25 },
    },
    faqs: [
      {
        q: "How much should I deadlift?",
        a: "Bodyweight for a clean pull is a fair starting marker. Most consistent lifters land somewhere around 1.5x bodyweight within their first couple years, and 2x-plus is where things start looking genuinely strong to most people watching.",
      },
      {
        q: "Is my deadlift good for my bodyweight?",
        a: "Check the ratio, not the raw number — a 400lb pull is very different for a 150lb lifter than a 250lb lifter. Enter your numbers above for a tier that actually accounts for that.",
      },
      {
        q: "Conventional vs sumo deadlift — which pulls more weight?",
        a: "Depends on your build, but generally sumo favors people with longer arms and a more upright torso, letting many lifters pull slightly more than conventional. Neither is objectively 'better' — whichever lets you keep a stable, safe position under heavier weight is the one worth training.",
      },
      {
        q: "How often should I deadlift heavy?",
        a: "Once a week heavy is plenty for most people — deadlift fatigue tends to linger longer than other lifts, and chasing max effort pulls too often is a common way people stall out or get hurt.",
      },
    ],
    relatedSlugs: ["back-squat", "hip-thrust"],
  },
  {
    slug: "bench-press",
    name: "Bench Press",
    category: "Push",
    equipment: "Barbell",
    intro:
      "Flat barbell bench, the default answer to 'how much do you lift' for most people who've never set foot in a powerlifting gym. It's a genuinely useful upper-body strength number, but it's also the lift people most commonly overestimate before they've actually tested it properly.",
    muscles: "Chest, front delts, and triceps, with your upper back and legs providing the stable base you're pressing off of.",
    formNote:
      "A slight arch and shoulder blades pulled back and down gives you a shorter, more stable bar path. Flat-backed benching with shoulders rolled forward is a common way people leave strength on the table and irritate their shoulders in the process.",
    ratios: {
      men: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 2.0 },
      women: { beginner: 0.3, novice: 0.45, intermediate: 0.65, advanced: 0.95, elite: 1.3 },
    },
    faqs: [
      {
        q: "How much should I bench?",
        a: "Bodyweight for a clean rep is the classic marker most people measure themselves against, and it's a fair one — it usually takes a solid year of consistent pressing to get there for most men, longer for people who started with little upper-body strength.",
      },
      {
        q: "Is my bench press good?",
        a: "1x bodyweight is respectable, 1.5x is genuinely strong for most recreational lifters, and 2x-plus is competition-lifter territory. Use the calculator above with your own bodyweight for a more specific read than a flat rule of thumb.",
      },
      {
        q: "Why is my bench not going up?",
        a: "Triceps are the most common bottleneck once the easy beginner progress stops — if your bar speed dies in the top third of the press, that's usually the tell. Grip width and elbow angle are worth checking too before assuming you just need to 'bench more.'",
      },
      {
        q: "How much does the average person bench?",
        a: "Most untrained adult men land somewhere well under bodyweight on a strict first attempt — public perception of 'average bench' skews high because gym anecdotes aren't a representative sample.",
      },
    ],
    relatedSlugs: ["back-squat", "deadlift"],
  },
];

export default exercises;

export function getExerciseBySlug(slug) {
  return exercises.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return exercises.map((e) => e.slug);
}
