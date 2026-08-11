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
    variantNote:
      "This calculator covers the standard barbell hip thrust off a bench. Single-leg and dumbbell hip thrusts load very differently — expect roughly half the weight for a single-leg variation at the same relative difficulty.",
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
        q: "What's a good hip thrust for beginners?",
        a: "If you're new to the movement, focus on hitting bodyweight for 8 clean reps before adding much load. Most beginners can add weight quickly here compared to squats or deadlifts, since the range of motion is shorter and there's less to coordinate.",
      },
      {
        q: "Hip thrust vs glute bridge — what's the difference?",
        a: "Glute bridge is the floor version with a shorter range of motion and less loading potential. Hip thrust, with your upper back elevated on a bench, lets you go through a full range and load it much heavier. If you're maxing out glute bridge weight, hip thrust is the natural next step.",
      },
      {
        q: "How much should I single leg hip thrust?",
        a: "Expect roughly 40-50% of your two-leg hip thrust weight per side. It's a stability-heavy variation, so don't be surprised if the number feels low relative to your barbell number at first.",
      },
      {
        q: "How do I improve my hip thrust?",
        a: "Pause for a full second at the top on your working sets — it's tempting to bounce through lockout once the weight gets heavy, and that's where most of the false progress comes from. Also check your foot placement; too far forward or back changes the leverage more than people expect.",
      },
      {
        q: "What's the average hip thrust for women?",
        a: "Using the calculator above with the women's toggle gives a more accurate number than a flat average, since bodyweight ratio matters more here than almost any other lift — hip thrust standards scale differently by gender than something like bench press.",
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
    variantNote:
      "Sled weight varies a lot by machine and by brand — some hack squat sleds start at 30lb empty, others closer to 100lb. Total weight moved (sled + plates) is what the calculator above expects, not just the plates you loaded.",
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
      {
        q: "Hack squat vs leg press, which is better?",
        a: "Hack squat keeps you more upright and involves more knee-dominant mechanics, closer to a real squat pattern. Leg press lets you go heavier with less technical demand but trains a slightly different angle. Neither replaces the other — a lot of serious lifters use both.",
      },
      {
        q: "What's a good hack squat weight for beginners?",
        a: "If you're new to the machine, start light and nail your depth and foot placement before adding weight — hack squat lets you hide bad habits behind heavy loading more easily than a free-weight squat would.",
      },
      {
        q: "Can I hack squat with a barbell?",
        a: "Yes, the barbell hack squat is an older variation, bar held behind your legs rather than on a machine. It's a different (and harder) movement pattern than the machine version, and the weights aren't directly comparable.",
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
    variantNote:
      "High-bar and low-bar back squat use slightly different mechanics and often produce slightly different maxes for the same lifter. This calculator treats them as one number — pick whichever style you actually trained the set with.",
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
      {
        q: "Low bar vs high bar squat — does it change my max?",
        a: "Usually yes, slightly. Low bar shifts more work to the hips and hamstrings and typically allows a bit more weight; high bar is more upright and quad-focused. Neither is 'cheating' — just be consistent about which one you're testing.",
      },
      {
        q: "Is my back squat good for a beginner?",
        a: "Hitting bodyweight for a full-depth single within your first year of consistent squatting is a solid beginner benchmark — plenty of people take longer, and that's fine too.",
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
    variantNote:
      "This calculator is built around conventional deadlift. Romanian deadlift, trap bar deadlift, and stiff-leg deadlift all load differently enough that they deserve their own numbers, not a percentage of this one.",
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
      {
        q: "Trap bar deadlift vs conventional, is it easier?",
        a: "Trap bar tends to be more forgiving on the lower back since the load sits closer to your center of gravity, and most lifters can move more weight on it than a conventional pull. It's a different exercise with its own standards, not a shortcut version of this one.",
      },
      {
        q: "Romanian deadlift vs regular deadlift — same weight?",
        a: "No, expect noticeably less on Romanian deadlift. It starts from the top, keeps the legs straighter, and is built more for hamstring loading than raw pulling strength — most lifters use 60-75% of their conventional deadlift for RDLs.",
      },
      {
        q: "How much should I single leg deadlift?",
        a: "Single leg deadlift is a stability and hamstring exercise, not a strength-max lift the way conventional deadlift is — most people use light dumbbells or just bodyweight and focus on balance rather than chasing a heavy number.",
      },
    ],
    relatedSlugs: ["sumo-deadlift", "romanian-deadlift"],
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
    variantNote:
      "This calculator is built around flat barbell bench. Incline bench, dumbbell bench, and machine chest press all produce different numbers for the same lifter — usually somewhat lower than a flat barbell max.",
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
      {
        q: "Dumbbell bench press vs barbell — how much less should I lift?",
        a: "Expect roughly 80-90% of your barbell number per hand combined, since stabilizing two independent weights is harder than a fixed bar. Don't be discouraged if your dumbbell total looks lower.",
      },
      {
        q: "Incline bench press vs flat bench, how much difference?",
        a: "Most lifters incline press somewhere around 80-85% of their flat bench weight — the more upright angle shifts load to the upper chest and shoulders, which usually aren't as strong as the pure horizontal pressing muscles.",
      },
      {
        q: "What's a good bench press for a beginner?",
        a: "Getting to bodyweight for a single clean rep within your first year of consistent training is a solid beginner target — plenty of people take longer, especially without a base of general upper-body strength going in.",
      },
    ],
    relatedSlugs: ["decline-bench-press", "dumbbell-bench-press"],
  },
  {
    slug: "romanian-deadlift",
    name: "Romanian Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Barbell",
    intro:
      "Romanian deadlift starts from the top, bar at hip height, and lowers with a slight knee bend until you feel a real hamstring stretch. It's a different exercise from a conventional deadlift, not a lighter version of one — the range of motion, the muscles doing the work, and the weight you should expect all differ.",
    muscles: "Hamstrings and glutes, with your lower back working isometrically to keep your spine neutral through the stretch.",
    formNote:
      "The bar should stay in contact with your legs the entire way down. Letting it drift forward turns this into a stiff-leg good morning and puts a lot more strain on your lower back than the exercise is meant to.",
    ratios: {
      men: { beginner: 0.4, novice: 0.6, intermediate: 0.9, advanced: 1.3, elite: 1.7 },
      women: { beginner: 0.3, novice: 0.5, intermediate: 0.75, advanced: 1.05, elite: 1.4 },
    },
    variantNote:
      "Dumbbell, kettlebell, cable, and single-leg Romanian deadlifts are all real variations with their own loading expectations — usually lighter and more stability-focused than the barbell version this calculator is built around.",
    variations: [
      { name: "Dumbbell RDL", note: "Lighter than barbell, grip usually gives out before your hamstrings do." },
      { name: "Kettlebell RDL", note: "Common home-gym substitute — lighter loads, same hip hinge pattern." },
      { name: "Cable RDL", note: "Constant tension through the whole range, popular for higher-rep glute work." },
      { name: "Single-leg RDL", note: "A balance and unilateral-strength drill more than a load test." },
      { name: "Landmine RDL", note: "Bar anchored at one end — shorter arc, often gentler on the lower back." },
      { name: "Banded / resistance-band RDL", note: "A common bodyweight-at-home version when there's no bar available." },
    ],
    faqs: [
      {
        q: "How much should I Romanian deadlift?",
        a: "Most lifters use somewhere around 60-75% of their conventional deadlift weight for Romanian deadlift, since the range of motion and muscle emphasis are different. Use your own bodyweight and a real working set above rather than back-calculating from your conventional pull.",
      },
      {
        q: "Romanian deadlift vs regular deadlift, what's the difference?",
        a: "Regular deadlift starts from the floor and is a full-body strength test. Romanian deadlift starts from the top and stays in a narrower range, built specifically to load the hamstrings and glutes under stretch. They're complementary, not interchangeable.",
      },
      {
        q: "Is my Romanian deadlift good?",
        a: "If you can pull close to bodyweight for a controlled set of 8 with good hip hinge mechanics, that's a solid intermediate marker. Chasing heavy singles here isn't really the point — form and range of motion matter more than on almost any other barbell lift.",
      },
      {
        q: "How do I do a Romanian deadlift properly?",
        a: "Start standing with the bar at hip height, push your hips back while keeping a soft knee bend, and lower until you feel a real stretch in your hamstrings — usually around mid-shin to just below the knee, not all the way to the floor. Depth should come from your hip hinge, not from rounding your back.",
      },
      {
        q: "Dumbbell Romanian deadlift vs barbell — same weight?",
        a: "Expect less total weight with dumbbells since you're stabilizing two independent loads and grip tends to give out sooner. It's a fine substitute if you don't have barbell access, just don't expect the numbers to match directly.",
      },
      {
        q: "Single leg Romanian deadlift — how much weight?",
        a: "This is a balance and unilateral-strength exercise more than a load test — most people use a light dumbbell or kettlebell per hand, sometimes just bodyweight, and focus on control rather than chasing a number.",
      },
      {
        q: "Romanian deadlift for glutes — does it actually work them?",
        a: "Yes, meaningfully — the stretched position at the bottom is exactly where glutes and hamstrings do the most work in this lift. It's a common accessory choice specifically for glute development alongside hip thrusts.",
      },
      {
        q: "Can I do Romanian deadlift with a trap bar or hex bar?",
        a: "Yes, and some lifters prefer it — the neutral grip and centered load can feel more comfortable on the lower back than a straight barbell. The movement pattern is the same; just expect the number to differ slightly from a straight-bar RDL.",
      },
      {
        q: "What grip should I use for Romanian deadlift?",
        a: "A double-overhand or mixed grip both work — mixed grip lets you hold more weight before your hands give out, but alternates which side you train unless you switch it set to set. Straps are a reasonable option once grip becomes the limiting factor before your hamstrings.",
      },
      {
        q: "Can I do Romanian deadlift at home with no bar?",
        a: "Yes — dumbbells, kettlebells, or a resistance band all let you train the same hip-hinge pattern without a barbell. You won't move as much weight, but the exercise still works the same muscles through the same range.",
      },
    ],
    relatedSlugs: ["deadlift", "trap-bar-deadlift"],
  },
  {
    slug: "trap-bar-deadlift",
    name: "Trap Bar Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Trap Bar / Hex Bar",
    intro:
      "Trap bar deadlift (also called hex bar deadlift) uses a hexagonal bar you stand inside of, so the load sits closer to your center of gravity than a conventional deadlift. It's generally more back-friendly and lets most lifters move more weight than they can pull conventionally.",
    muscles: "Quads get more involved than in a conventional deadlift, alongside the usual glutes, hamstrings, and back.",
    formNote:
      "Trap bar deadlift sits somewhere between a squat and a deadlift mechanically — a more upright torso than conventional, with more knee bend. Trying to pull it exactly like a straight-bar deadlift usually means you're not using the bar's actual advantage.",
    ratios: {
      men: { beginner: 0.75, novice: 1.05, intermediate: 1.6, advanced: 2.1, elite: 2.6 },
      women: { beginner: 0.6, novice: 0.9, intermediate: 1.4, advanced: 1.85, elite: 2.3 },
    },
    variantNote:
      "Trap bars come in a few handle heights — low-handle versions are closer to a conventional deadlift range of motion, high-handle versions are shorter and typically let you move more weight.",
    variations: [
      { name: "Low-handle trap bar", note: "Deeper range of motion, closer to a conventional deadlift pull." },
      { name: "High-handle trap bar", note: "Shorter range — most lifters move more weight here." },
      { name: "Deficit trap bar deadlift", note: "Standing on a small platform to increase range of motion and difficulty." },
      { name: "Elevated trap bar deadlift", note: "Bar raised on blocks to shorten the range — useful for overload work." },
      { name: "Banded trap bar deadlift", note: "Bands added for extra tension at lockout, common in strength programs." },
      { name: "Trap bar deadlift with dumbbells", note: "A home-gym substitute when no trap bar is available — much lighter loading." },
    ],
    faqs: [
      {
        q: "How much should I trap bar deadlift?",
        a: "Most lifters can move somewhat more on trap bar than conventional deadlift — the calculator above uses ratios that reflect that, but check your own numbers rather than assuming a fixed percentage over your straight-bar pull.",
      },
      {
        q: "Trap bar deadlift vs conventional deadlift, which is easier?",
        a: "Trap bar is generally considered more beginner-friendly since the more upright torso position puts less shear stress on the lower back. That doesn't make it 'easier' exactly — it's a different, often more forgiving, movement pattern.",
      },
      {
        q: "Is my trap bar deadlift good for my bodyweight?",
        a: "Use the calculator above with your own numbers — trap bar standards run a bit higher than conventional deadlift standards for the same lifter, since the leverage is more favorable.",
      },
      {
        q: "Hex bar deadlift vs trap bar deadlift, is it the same thing?",
        a: "Yes, hex bar and trap bar refer to the same piece of equipment and the same lift — the name just varies by gym and by manufacturer.",
      },
      {
        q: "Low handle vs high handle trap bar, does it change the weight?",
        a: "Low handles increase the range of motion closer to a conventional deadlift and typically reduce how much you can lift compared to high handles, which shorten the pull and usually let you load more.",
      },
      {
        q: "Can beginners start with trap bar deadlift instead of conventional?",
        a: "Many coaches recommend exactly that — the more neutral spine position and simpler bar path make it a reasonable entry point before progressing to conventional or sumo deadlift technique.",
      },
      {
        q: "Trap bar deadlift for glutes and legs — does it hit them differently?",
        a: "It brings the quads into play more than a conventional deadlift does, closer to a squat-deadlift hybrid, while still working glutes and hamstrings hard through the hip extension.",
      },
      {
        q: "What's the average trap bar deadlift weight?",
        a: "This varies enormously by training background, so a flat average isn't that useful — use the calculator above with your own bodyweight for a number that actually means something for you.",
      },
    ],
    relatedSlugs: ["deadlift", "romanian-deadlift"],
  },
  {
    slug: "incline-bench-press",
    name: "Incline Bench Press",
    category: "Push",
    equipment: "Barbell",
    intro:
      "Incline bench press is done on a bench angled up, usually somewhere between 15 and 45 degrees, shifting more emphasis onto the upper chest and front delts. It's a staple for anyone who's noticed their flat bench outpacing their upper-chest development.",
    muscles: "Upper chest and front delts take on more of the load compared to flat bench, with triceps still finishing the lockout.",
    formNote:
      "A steeper incline shifts more work to the shoulders and less to the chest — past about 45 degrees, you're closer to an overhead press than a chest exercise. Most gym benches default to a good angle already, usually 30-45 degrees.",
    ratios: {
      men: { beginner: 0.4, novice: 0.6, intermediate: 0.85, advanced: 1.25, elite: 1.7 },
      women: { beginner: 0.25, novice: 0.35, intermediate: 0.55, advanced: 0.8, elite: 1.1 },
    },
    variantNote:
      "Dumbbell incline press, smith machine incline press, and incline machine press all produce different numbers than barbell incline — dumbbells especially, since stabilizing two weights on an angle is genuinely harder than on flat bench.",
    variations: [
      { name: "Dumbbell incline press", note: "Harder to stabilize than barbell — expect a noticeably lower number." },
      { name: "Smith machine incline press", note: "Fixed bar path removes side-to-side stabilization, so numbers run higher." },
      { name: "Cable incline press", note: "Constant tension through the range, popular as an accessory movement." },
      { name: "Hammer strength incline press", note: "Plate-loaded machine version — independent arms, fixed path." },
      { name: "Seated incline press", note: "Often refers to a shoulder-focused machine variant, not the barbell lift." },
    ],
    faqs: [
      {
        q: "How much should I incline bench press?",
        a: "Most lifters incline press somewhere around 80-85% of their flat bench weight. Use the calculator above with your own working set for a number specific to you rather than a flat percentage estimate.",
      },
      {
        q: "Incline bench press vs flat bench, how much difference should there be?",
        a: "A gap of 15-20% lower on incline is normal and expected — if your incline and flat numbers are close to identical, you're either very strong in the upper chest or not pushing your flat bench hard enough.",
      },
      {
        q: "Is my incline bench press good?",
        a: "Compare it to your own flat bench rather than to a stranger's numbers — the ratio between the two tells you more about your balance than either number alone.",
      },
      {
        q: "Dumbbell incline bench press — how much per hand?",
        a: "Expect noticeably less than half your barbell incline number per dumbbell, since stabilizing two independent weights at an angle is harder than a fixed bar. Many lifters find dumbbell incline humbling the first few times they try it heavy.",
      },
      {
        q: "What's the best incline angle for chest growth?",
        a: "Most research and coaching consensus points to somewhere around 30 degrees as a sweet spot — enough to shift emphasis upward without turning the lift into mostly a shoulder exercise.",
      },
      {
        q: "Incline bench press on a smith machine — does it count?",
        a: "It's a valid variation, just don't expect the number to transfer directly to free-weight incline — the fixed bar path removes a lot of the stabilizer demand, so people often move more weight on a smith machine than free bar.",
      },
      {
        q: "Why is my incline bench press so much weaker than flat?",
        a: "Some gap is normal, but a very large one often points to underdeveloped front delts and upper chest relative to your overall pressing strength — worth prioritizing incline work directly if that's the case.",
      },
      {
        q: "What angle should my incline bench be set to?",
        a: "Most gym benches default to somewhere around 30-45 degrees, which is a reasonable range. Steeper angles shift more work to the shoulders; check your bench's setting before comparing your number to anyone else's.",
      },
    ],
    relatedSlugs: ["bench-press", "floor-press"],
  },
  {
    slug: "chest-press-machine",
    name: "Chest Press Machine",
    category: "Push",
    equipment: "Machine",
    intro:
      "Chest press machine covers the seated, fixed-path pressing machines found in most gyms — plate-loaded or selectorized, flat or angled. It's a reliable way to train pressing strength without needing a spotter, and it's often where people who are intimidated by barbell bench start.",
    muscles: "Chest and triceps primarily, with front delts assisting — the machine's fixed path removes most of the stabilizer demand a free barbell requires.",
    formNote:
      "Set the seat height so the handles line up roughly with your mid-chest, not your shoulders or your collarbone. A seat set too high or low changes which part of the chest actually does the work.",
    ratios: {
      men: { beginner: 0.45, novice: 0.7, intermediate: 1.0, advanced: 1.4, elite: 1.8 },
      women: { beginner: 0.3, novice: 0.45, intermediate: 0.65, advanced: 0.9, elite: 1.2 },
    },
    variantNote:
      "Plate-loaded chest press machines and selectorized (pin-stack) machines often feel different at the same listed number due to cam resistance curves — don't be surprised if your max shifts a bit switching between machine brands.",
    variations: [
      { name: "Decline chest press machine", note: "Shifts emphasis to the lower chest, less common than flat or incline." },
      { name: "Standing chest press (cable)", note: "Adds a core-stability demand that seated machines remove entirely." },
      { name: "One-arm chest press", note: "Unilateral version, useful for fixing left-right imbalances." },
      { name: "Wide grip vs narrow grip", note: "Wider grip emphasizes chest more; narrower shifts more to triceps." },
      { name: "Neutral / reverse grip chest press", note: "Easier on the shoulders for lifters managing joint discomfort." },
    ],
    faqs: [
      {
        q: "How much should I chest press on the machine?",
        a: "Machine numbers don't compare directly to barbell bench due to the fixed path removing stabilizer demand — most people move more weight on a chest press machine than they do on barbell bench. Use the calculator above for a number specific to the machine, not a barbell comparison.",
      },
      {
        q: "Is chest press machine as good as bench press?",
        a: "It trains the same primary muscles but skips the stabilizer and balance demands of a free barbell. Good for isolating the chest or training around a barbell limitation, but most serious lifters use it alongside barbell work, not instead of it.",
      },
      {
        q: "Seated chest press machine vs bench press, which builds more strength?",
        a: "Barbell bench generally builds more transferable, real-world pressing strength since it requires stabilization the machine does for you. Machine press is excellent for isolating the chest with less technical demand and less injury risk when training to failure.",
      },
      {
        q: "Cable chest press vs machine chest press, what's the difference?",
        a: "Cable chest press keeps constant tension through the whole range and allows a more natural pressing arc, while a fixed machine follows one set path. Both are valid — cables tend to feel more like dumbbells, machines feel more locked-in.",
      },
      {
        q: "Smith machine chest press — how does it compare?",
        a: "Similar to a fixed machine in that the bar path is locked vertically, removing side-to-side stabilization. Numbers here tend to land between free barbell and a dedicated chest press machine.",
      },
      {
        q: "Incline chest press machine — does it work the same as barbell incline?",
        a: "Same general emphasis on upper chest and front delts, but with the same reduced stabilizer demand as any other machine — expect to move somewhat more weight than free-weight incline bench.",
      },
      {
        q: "What's a good chest press machine weight for beginners?",
        a: "Start light enough to control the full range smoothly for 10-12 reps before adding weight — the fixed path makes it easy to load more than your stabilizers and joints are actually ready for.",
      },
      {
        q: "Does grip width change chest press machine results?",
        a: "Yes — a wider grip puts more emphasis on the chest, while a narrower grip shifts more work to the triceps. Most machines let you adjust handle position for exactly this reason.",
      },
    ],
    relatedSlugs: ["bench-press", "incline-bench-press"],
  },
  {
    slug: "floor-press",
    name: "Floor Press",
    category: "Push",
    equipment: "Barbell",
    intro:
      "Floor press is a bench press done lying on the floor instead of a bench, which cuts the range of motion short the moment your upper arms touch the ground. It takes the legs and lower back out of the lift entirely and puts a hard stop on the bottom of the press.",
    muscles: "Triceps and front delts get more emphasis than on a full-range bench press, since the shortened range reduces chest stretch at the bottom.",
    formNote:
      "The dead stop at the bottom is the whole point — pause briefly with your upper arms on the floor rather than bouncing off it. Bouncing turns this into a different, less useful exercise.",
    ratios: {
      men: { beginner: 0.4, novice: 0.6, intermediate: 0.85, advanced: 1.25, elite: 1.6 },
      women: { beginner: 0.25, novice: 0.35, intermediate: 0.55, advanced: 0.8, elite: 1.05 },
    },
    variantNote:
      "Dumbbell floor press and single-arm floor press are common variations that trade some load capacity for a bit more stabilizer and core demand than the barbell version.",
    variations: [
      { name: "Barbell floor press", note: "The standard version this calculator is built around." },
      { name: "Single-arm dumbbell floor press", note: "Adds a real anti-rotation core demand — go noticeably lighter." },
      { name: "Smith machine floor press", note: "Fixed bar path, removes side-to-side stabilization." },
      { name: "Incline floor press", note: "Less common — done on a wedge or with shoulders slightly elevated." },
      { name: "Decline floor press", note: "Rare variation, shifts a bit more emphasis to the lower chest." },
    ],
    faqs: [
      {
        q: "How much should I floor press?",
        a: "Expect somewhat less than your flat bench press, since the shortened range removes some of the stretch-driven power at the bottom. Use the calculator above with a real working set rather than assuming a fixed percentage of your bench.",
      },
      {
        q: "Floor press vs bench press, what's actually different?",
        a: "Floor press stops the moment your upper arms hit the ground, cutting out the bottom portion of the range and removing leg drive entirely. It shifts more emphasis to triceps and lockout strength, and it's easier on the shoulders for a lot of lifters.",
      },
      {
        q: "Is floor press good for shoulder pain?",
        a: "Many lifters find it more comfortable than full bench press since the shortened range avoids the deepest, most shoulder-stressful part of the movement — though it's worth checking with a physical therapist if you're managing an actual injury rather than just general discomfort.",
      },
      {
        q: "Barbell floor press vs dumbbell floor press?",
        a: "Dumbbells allow a bit more range and independent arm movement, which some lifters find better for symmetry work, while barbell floor press typically allows heavier total loading.",
      },
      {
        q: "Does floor press build tricep strength for bench lockout?",
        a: "Yes, this is one of its most common uses — powerlifters often add floor press specifically to strengthen the lockout portion of their bench press where triceps do most of the work.",
      },
      {
        q: "How do I set up a floor press at home?",
        a: "Lie on the floor under a barbell in a rack low enough to unrack from the ground, or have a partner hand it to you — no bench needed, which is part of why it's a popular home-gym substitute for bench press.",
      },
    ],
    relatedSlugs: ["bench-press", "incline-bench-press"],
  },
  {
    slug: "sumo-deadlift",
    name: "Sumo Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Barbell",
    intro:
      "Sumo deadlift uses a wide stance with your hands gripping inside your knees, keeping your torso more upright than a conventional pull. It shifts more of the work to your quads and hips, and a lot of lifters — especially those with longer arms or a shorter torso — end up pulling more weight sumo than conventional.",
    muscles: "Quads and glutes take on more of the load than in conventional deadlift, with the more upright torso reducing lower-back demand.",
    formNote:
      "Knees track out in line with your toes, not caving in, and your hips should be lower than a conventional setup but still above parallel. The bar path is meant to be nearly vertical — if it's swinging out around your knees, your stance or setup needs adjusting.",
    ratios: {
      men: { beginner: 0.75, novice: 1.05, intermediate: 1.55, advanced: 2.05, elite: 2.55 },
      women: { beginner: 0.6, novice: 0.9, intermediate: 1.4, advanced: 1.8, elite: 2.3 },
    },
    variantNote:
      "Semi-sumo splits the difference between conventional and full sumo stance width, and is common among lifters who don't get much benefit from a maximally wide stance.",
    variations: [
      { name: "Semi-sumo deadlift", note: "Narrower than full sumo, wider than conventional — a common middle ground." },
      { name: "Kettlebell sumo deadlift", note: "Lighter loading, often used as a warm-up pattern or for higher reps." },
      { name: "Smith machine sumo deadlift", note: "Fixed vertical bar path, removes some of the balance demand." },
      { name: "Deficit sumo deadlift", note: "Standing on a platform to increase range of motion — noticeably harder." },
      { name: "Sumo deadlift high pull", note: "A pulling-and-shrug combination movement, common in CrossFit-style training." },
      { name: "Landmine sumo deadlift", note: "Bar anchored at one end, shorter arc, often used as a beginner regression." },
    ],
    faqs: [
      {
        q: "How much should I sumo deadlift?",
        a: "Many lifters pull slightly more sumo than conventional due to the shorter range of motion and more favorable leverage, though this varies a lot by individual build. Use the calculator above with your own numbers rather than assuming a fixed percentage over your conventional pull.",
      },
      {
        q: "Sumo vs conventional deadlift, which is stronger?",
        a: "Neither is universally stronger — it depends on your limb proportions. Lifters with long arms and a shorter torso often pull more sumo; lifters built the opposite way often do better conventional. Try both and see which lets you keep a stable position under more weight.",
      },
      {
        q: "Is my sumo deadlift good for my bodyweight?",
        a: "Check your ratio using the calculator above — sumo standards run close to conventional deadlift standards for most lifters, just shifted slightly given the different mechanics.",
      },
      {
        q: "How do I sumo deadlift with proper form?",
        a: "Take a wide stance with toes turned out, grip inside your knees, and keep your shins nearly vertical as you set up. Push the floor away with your legs rather than just pulling with your back — the leg drive is what separates a good sumo pull from a bad one.",
      },
      {
        q: "Why is my sumo deadlift weaker than conventional?",
        a: "Sumo asks more of your hip mobility and adductor strength — if either is limited, you may not be able to access the leverage advantage sumo is supposed to give you. It's common for lifters new to sumo to be weaker at it initially before their mobility catches up.",
      },
      {
        q: "Sumo deadlift for glutes — does it work them more?",
        a: "Yes, generally more than conventional deadlift, since the wider stance and more upright torso put the glutes and adductors in a stronger mechanical position throughout the pull.",
      },
      {
        q: "What's a good sumo deadlift for beginners?",
        a: "Focus on hip mobility and stance width before chasing weight — sumo technique takes most beginners longer to groove than conventional, even though the eventual number often ends up higher.",
      },
      {
        q: "Can I do sumo deadlift on a smith machine?",
        a: "Yes, though the fixed vertical bar path changes the exercise somewhat by removing some of the balance and bar-path control that free-weight sumo requires.",
      },
    ],
    relatedSlugs: ["deadlift", "stiff-leg-deadlift"],
  },
  {
    slug: "stiff-leg-deadlift",
    name: "Stiff-Leg Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Barbell",
    intro:
      "Stiff-leg deadlift keeps your knees nearly locked throughout the movement, starting from the floor rather than hip height like a Romanian deadlift. That small difference — floor start, straighter legs — makes it a more demanding hamstring stretch and a different exercise from RDLs, even though people often use the names interchangeably.",
    muscles: "Hamstrings and lower back get the most direct load, with glutes assisting through the hip extension at the top.",
    formNote:
      "Keep a very slight bend in your knees — completely locked is unnecessary and increases strain without adding benefit. The movement should come almost entirely from your hips folding forward, not your knees bending.",
    ratios: {
      men: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.15, elite: 1.5 },
      women: { beginner: 0.25, novice: 0.4, intermediate: 0.65, advanced: 0.9, elite: 1.2 },
    },
    variantNote:
      "Stiff-leg deadlift and Romanian deadlift are often used as the same exercise, but technically differ — stiff-leg starts from the floor with straighter knees, RDL starts from hip height with more knee bend. Expect a lower number here than on RDL.",
    variations: [
      { name: "Dumbbell stiff-leg deadlift", note: "Common home-gym substitute — lighter loading than barbell." },
      { name: "Barbell stiff-leg deadlift", note: "The standard version this calculator is built around." },
      { name: "Smith machine stiff-leg deadlift", note: "Fixed bar path, removes some balance demand." },
      { name: "Banded stiff-leg deadlift", note: "Bands add resistance at the top of the movement." },
      { name: "Kettlebell stiff-leg deadlift", note: "Lighter loading, often used for higher-rep hamstring work." },
      { name: "Trap bar stiff-leg deadlift", note: "Neutral grip version, sometimes more comfortable on the lower back." },
    ],
    faqs: [
      {
        q: "How much should I stiff-leg deadlift?",
        a: "Expect a lower number than Romanian deadlift and noticeably lower than conventional deadlift, since the straighter-leg, floor-start position increases the hamstring stretch demand. Use the calculator above with your own working set for an accurate read.",
      },
      {
        q: "Stiff-leg deadlift vs Romanian deadlift, what's the real difference?",
        a: "Stiff-leg starts from the floor with knees nearly locked; Romanian deadlift starts from hip height with more knee bend and typically a shorter range. They train similar muscles but stiff-leg usually feels more demanding on the hamstrings at the bottom.",
      },
      {
        q: "Is my stiff-leg deadlift good?",
        a: "If you can pull around half your bodyweight for a controlled set of 8 with a real hamstring stretch and no lower-back rounding, that's a solid intermediate marker.",
      },
      {
        q: "How do I do a stiff-leg deadlift safely?",
        a: "Keep your knees only very slightly bent, hinge from the hips, and stop the descent once you feel a real hamstring stretch or your lower back starts to round — going lower than your flexibility allows is where this exercise gets risky.",
      },
      {
        q: "Dumbbell stiff-leg deadlift — how much weight?",
        a: "Most people use noticeably less than barbell, since grip and stabilization become limiting factors sooner. It's a fine substitute for home training, just don't expect the same number.",
      },
      {
        q: "Can beginners do stiff-leg deadlift?",
        a: "Yes, but hamstring flexibility is often the limiting factor before strength is — start light and prioritize a full, controlled range over adding weight quickly.",
      },
    ],
    relatedSlugs: ["romanian-deadlift", "sumo-deadlift"],
  },
  {
    slug: "decline-bench-press",
    name: "Decline Bench Press",
    category: "Push",
    equipment: "Barbell",
    intro:
      "Decline bench press is done on a bench angled downward, head lower than hips, shifting emphasis to the lower chest. It's the least common of the three bench angles, but a real strength number in its own right — and for a lot of lifters, it's actually the easiest angle to move the most weight on.",
    muscles: "Lower chest gets the most direct emphasis, with triceps still doing significant work through lockout.",
    formNote:
      "Make sure your feet or legs are properly secured before unracking — the decline angle makes it easier to slide during a heavy set than flat or incline bench.",
    ratios: {
      men: { beginner: 0.55, novice: 0.8, intermediate: 1.1, advanced: 1.6, elite: 2.1 },
      women: { beginner: 0.35, novice: 0.5, intermediate: 0.7, advanced: 1.0, elite: 1.35 },
    },
    variantNote:
      "Decline dumbbell press, decline machine press, and cable decline press all produce different numbers than barbell decline — machines especially, since the fixed path removes stabilizer demand.",
    variations: [
      { name: "Decline dumbbell press", note: "Harder to stabilize than barbell — expect a lower number per hand." },
      { name: "Decline chest press machine", note: "Fixed path removes stabilizer demand, numbers run higher." },
      { name: "Cable decline press", note: "Constant tension through the range, common as an accessory movement." },
      { name: "Decline smith machine press", note: "Vertical fixed path — a middle ground between free weight and machine." },
      { name: "Decline hammer press", note: "Plate-loaded machine version with independent arm movement." },
    ],
    faqs: [
      {
        q: "How much should I decline bench press?",
        a: "Many lifters move slightly more weight on decline than flat bench, since the shorter effective range and more favorable joint angle work in your favor. Use the calculator above with your own numbers rather than assuming a fixed relationship to flat bench.",
      },
      {
        q: "Decline bench press vs flat bench, which is stronger?",
        a: "Decline is often the strongest of the three bench angles for most lifters, since the reduced range of motion and joint positioning favor moving more weight — though the training effect is more focused on the lower chest.",
      },
      {
        q: "Is my decline bench press good?",
        a: "Compare it to your flat bench — if decline is noticeably lower than flat, that's unusual and worth checking your setup and stability rather than assuming it's a strength issue.",
      },
      {
        q: "What's decline bench press good for?",
        a: "It's a solid option for targeting the lower chest specifically, and some lifters find it easier on the shoulders than flat or incline bench due to the joint angle at the bottom of the press.",
      },
      {
        q: "Decline dumbbell press vs barbell decline — how much less?",
        a: "Expect somewhat less than your barbell number, similar to the gap you'd see between flat barbell and flat dumbbell bench, since stabilizing two independent weights is harder than a fixed bar.",
      },
      {
        q: "Is decline bench press safe?",
        a: "It's safe with proper setup — securing your legs or feet under the provided pads matters more here than on flat or incline, since the angle makes it easier to slide during a heavy rep.",
      },
    ],
    relatedSlugs: ["bench-press", "incline-bench-press"],
  },
  {
    slug: "dumbbell-bench-press",
    name: "Dumbbell Bench Press",
    category: "Push",
    equipment: "Dumbbell",
    intro:
      "Flat dumbbell bench press — same lying position as barbell bench, but with two independent weights instead of a fixed bar. The lack of a fixed bar path means your stabilizer muscles do a lot more work, which is exactly why most lifters can't move as much total weight here as they can on barbell.",
    muscles: "Chest, front delts, and triceps, same as barbell bench, with more stabilizer demand from the shoulders and core to control two independent weights.",
    formNote:
      "Let the dumbbells travel slightly wider than a barbell would at the bottom of the rep — trying to force a barbell-style narrow path with dumbbells is a common way people limit their own range of motion unnecessarily.",
    ratios: {
      men: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.2, elite: 1.6 },
      women: { beginner: 0.2, novice: 0.3, intermediate: 0.5, advanced: 0.75, elite: 1.0 },
    },
    variantNote:
      "This number reflects total weight (both dumbbells combined), not weight per hand — a common point of confusion when comparing numbers with someone else.",
    variations: [
      { name: "Flat dumbbell press", note: "The standard version this calculator is built around." },
      { name: "Neutral grip dumbbell press", note: "Palms facing each other — often more comfortable for the shoulders." },
      { name: "Reverse grip dumbbell press", note: "Palms facing your feet — shifts more emphasis to the upper chest." },
      { name: "Floor dumbbell press", note: "Done lying on the floor — shortens the range like a barbell floor press." },
      { name: "Single-arm dumbbell press", note: "Unilateral version, adds a real core anti-rotation demand." },
    ],
    faqs: [
      {
        q: "How much should I dumbbell bench press?",
        a: "Use total combined weight of both dumbbells for the calculator above, not weight per hand. Most lifters move noticeably less on dumbbell bench than barbell bench due to the added stabilizer demand.",
      },
      {
        q: "Dumbbell bench press vs barbell bench press, how much less should I expect?",
        a: "Roughly 80-90% of your barbell total is a common range, though this varies a lot based on how much stabilizer and shoulder strength you've built specifically with dumbbells.",
      },
      {
        q: "Is my dumbbell bench press good?",
        a: "Compare the ratio to your barbell bench rather than judging the number alone — a big gap between the two usually points to underdeveloped stabilizers rather than a chest strength issue.",
      },
      {
        q: "What's a good dumbbell bench press for beginners?",
        a: "Focus on control through the full range before adding weight — dumbbell bench punishes poor stabilization more than barbell does, and it's easy to overestimate what you can safely handle based on your barbell number alone.",
      },
      {
        q: "Neutral grip vs regular grip dumbbell press — does it change the weight?",
        a: "Neutral grip (palms facing each other) is often slightly easier on the shoulders and may allow marginally more weight for lifters with shoulder discomfort in a standard grip.",
      },
      {
        q: "Can I do dumbbell bench press without a bench?",
        a: "Yes — floor dumbbell press is a common substitute when no bench is available, though it shortens your range of motion similar to a barbell floor press.",
      },
      {
        q: "Why can't I lift as much with dumbbells as with a barbell?",
        a: "This is completely normal, not a sign of weakness — a barbell's fixed path does a lot of stabilization work for you that two independent dumbbells require your shoulders and core to do instead.",
      },
    ],
    relatedSlugs: ["bench-press", "decline-bench-press"],
  },
  {
    slug: "snatch-grip-deadlift",
    name: "Snatch-Grip Deadlift",
    category: "Back & Posterior Chain",
    equipment: "Barbell",
    intro:
      "Snatch-grip deadlift uses a much wider grip than conventional deadlift, close to what an Olympic snatch requires. The wider grip increases the range of motion significantly, which makes this a harder pull than conventional deadlift at the same weight — expect a real drop in your numbers the first time you try it.",
    muscles: "Upper back and traps get significantly more work than conventional deadlift, alongside the usual hamstrings, glutes, and grip demand.",
    formNote:
      "The increased range of motion means your hips will start lower than a conventional deadlift setup — treat your first few sessions as technique practice, not a max-weight test.",
    ratios: {
      men: { beginner: 0.4, novice: 0.6, intermediate: 0.9, advanced: 1.3, elite: 1.7 },
      women: { beginner: 0.3, novice: 0.45, intermediate: 0.7, advanced: 1.0, elite: 1.3 },
    },
    variantNote:
      "This is a less common lift with a smaller but genuinely engaged search audience — mostly Olympic weightlifters, CrossFit athletes, and lifters using it as an upper-back accessory movement.",
    variations: [
      { name: "Snatch-grip deadlift from a deficit", note: "Standing on a platform to increase the range even further." },
      { name: "Snatch-grip rack pull", note: "Partial range version, starting from pins in a rack rather than the floor." },
      { name: "Snatch-grip high pull", note: "Adds an explosive pulling and shrugging phase, common in Olympic lifting prep." },
    ],
    faqs: [
      {
        q: "How much should I snatch-grip deadlift?",
        a: "Expect noticeably less than your conventional deadlift — the wider grip and increased range make this a harder pull at the same weight, so don't be discouraged by a lower number here.",
      },
      {
        q: "Snatch-grip deadlift vs conventional deadlift, what's the point?",
        a: "It's commonly used to build upper-back and trap strength that carries over to Olympic lifting and to conventional deadlift lockout, not usually trained as a max-strength lift on its own.",
      },
      {
        q: "How wide should my grip be for snatch-grip deadlift?",
        a: "Wide enough that the bar sits at roughly hip-crease height when you're standing tall holding it — for most lifters that's noticeably wider than snatch-grip width feels like it should be at first.",
      },
      {
        q: "Is snatch-grip deadlift good for building deadlift strength?",
        a: "Yes, particularly for the upper back and lockout portion of a conventional pull — it's a common accessory choice for lifters whose conventional deadlift breaks down at the top.",
      },
    ],
    relatedSlugs: ["deadlift", "sumo-deadlift"],
  },
];

export default exercises;

export function getExerciseBySlug(slug) {
  return exercises.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return exercises.map((e) => e.slug);
}
