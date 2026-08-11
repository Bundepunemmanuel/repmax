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
        a: "Bodyweight for a clean rep is your first real marker. Past that, most consistent lifters settle into 1.25–1.75x bodyweight within a year or two. Punch your own numbers into the calculator above rather than trusting a flat rule.",
      },
      {
        q: "Is my hip thrust good?",
        a: "Depends what you're comparing it to. Way lower than 1.5x your squat? Your glutes are probably the weak link in both lifts.",
      },
      {
        q: "What's a good hip thrust for beginners?",
        a: "Bodyweight for 8 clean reps, no load. You'll add weight fast here compared to squats — shorter range, less to coordinate.",
      },
      {
        q: "Hip thrust vs glute bridge — what's the difference?",
        a: "Glute bridge is the floor version, short range, capped loading. Hip thrust puts your upper back on a bench and lets you go heavy through a full range. If you've maxed out bridge weight, thrust is next.",
      },
      {
        q: "How much should I single leg hip thrust?",
        a: "Roughly 40-50% of your two-leg number, per side. It's a stability move first — don't be surprised if the number humbles you.",
      },
      {
        q: "How do I improve my hip thrust?",
        a: "Pause a full second at the top. Bouncing through lockout once it gets heavy is where most of the 'progress' on this lift is fake. Foot placement matters more than people expect too.",
      },
      {
        q: "What's the average hip thrust for women?",
        a: "Use the women's toggle above with your real bodyweight — flat averages don't hold up well on this particular lift, ratios shift more than most exercises.",
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
        a: "Sled weight alone can swing 50+ lbs between gyms, so don't panic at a low number on a heavy sled. Total weight moved — sled plus plates — is what matters.",
      },
      {
        q: "Is hack squat harder than back squat?",
        a: "Not harder, just more isolated. No bar to stabilize means most people move noticeably more weight here than on back squat.",
      },
      {
        q: "How much does the hack squat sled weigh?",
        a: "Anywhere from 30 to over 100 lbs. Check the base plate — it's usually stamped somewhere on the frame.",
      },
      {
        q: "Hack squat vs leg press, which is better?",
        a: "Different angles, different goals. Hack squat keeps you upright, closer to a real squat pattern; leg press lets you go heavier with less technical demand. A lot of serious lifters run both.",
      },
      {
        q: "What's a good hack squat weight for beginners?",
        a: "Nail depth and foot placement first. The machine hides bad habits behind heavy loading more easily than free weights do.",
      },
      {
        q: "Can I hack squat with a barbell?",
        a: "Yes — older variation, bar held behind your legs. Harder movement, and the numbers won't transfer to the machine version.",
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
        a: "Bodyweight, full depth, one clean rep — that's a fair first target for a new lifter. 1.25x is a year-or-two marker. 1.75x-plus and you're clearly training squats specifically, not just training legs.",
      },
      {
        q: "What's a good squat for my bodyweight?",
        a: "Ratio beats raw weight. A 300lb squat means something completely different for a 140lb lifter than a 220lb one — use the calculator above instead of a flat number.",
      },
      {
        q: "How often should I squat to get stronger?",
        a: "Twice a week is the sweet spot for most people balancing squat progress against everything else in a program.",
      },
      {
        q: "Front squat vs back squat, which is better for strength?",
        a: "Back squat wins on pure load — your upper back can brace more than a front rack position can hold. Front squat builds more direct quad and upper-back strength.",
      },
      {
        q: "Low bar vs high bar squat — does it change my max?",
        a: "Usually, yes, slightly. Low bar shifts work to the hips and hamstrings and tends to allow a bit more weight. Just be consistent about which one you're testing.",
      },
      {
        q: "Is my back squat good for a beginner?",
        a: "Bodyweight, full depth, single rep, within your first year — solid. Plenty of people take longer, and that's completely fine.",
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
        a: "Bodyweight is a fair starting marker. Most consistent lifters land near 1.5x within a couple years. 2x-plus starts looking genuinely strong to most people watching.",
      },
      {
        q: "Is my deadlift good for my bodyweight?",
        a: "Check the ratio, not the number — a 400lb pull means very different things for a 150lb lifter and a 250lb one. Use your real numbers above.",
      },
      {
        q: "Conventional vs sumo deadlift — which pulls more weight?",
        a: "Depends on your build. Longer arms and an upright torso usually favor sumo. Neither is 'better' — whichever keeps you stable under more weight wins.",
      },
      {
        q: "How often should I deadlift heavy?",
        a: "Once a week is plenty. Deadlift fatigue lingers longer than most lifts, and chasing max singles too often is a common way people stall or get hurt.",
      },
      {
        q: "Trap bar deadlift vs conventional, is it easier?",
        a: "More forgiving on the lower back, since the load sits closer to your center of gravity. Most lifters move more weight on it too — but it's its own lift, not a shortcut version of this one.",
      },
      {
        q: "Romanian deadlift vs regular deadlift — same weight?",
        a: "No. RDL starts from the top, keeps legs straighter, and hits hamstrings harder for less total load — 60-75% of your conventional number is typical.",
      },
      {
        q: "How much should I single leg deadlift?",
        a: "This one's about balance, not a max. Light dumbbells or bodyweight, focus on control — not a lift you should be chasing a big number on.",
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
        a: "Bodyweight, clean rep — the classic marker, and a fair one. Takes most men a solid year of consistent pressing to get there.",
      },
      {
        q: "Is my bench press good?",
        a: "1x bodyweight is respectable. 1.5x is genuinely strong for most recreational lifters. 2x-plus is competition territory.",
      },
      {
        q: "Why is my bench not going up?",
        a: "Triceps are the usual bottleneck once beginner gains stop. If your bar speed dies in the top third, that's the tell — check grip width and elbow angle too.",
      },
      {
        q: "How much does the average person bench?",
        a: "Most untrained men land well under bodyweight on a real first attempt. Gym anecdotes skew the public perception way higher than reality.",
      },
      {
        q: "Dumbbell bench press vs barbell — how much less should I lift?",
        a: "Roughly 80-90% of your barbell total combined. Stabilizing two independent weights is genuinely harder than a fixed bar.",
      },
      {
        q: "Incline bench press vs flat bench, how much difference?",
        a: "Around 80-85% of your flat number is typical. The angle shifts load to muscles that usually aren't as strong.",
      },
      {
        q: "What's a good bench press for a beginner?",
        a: "Bodyweight for a single clean rep within your first year is a solid target. Plenty of people take longer — that's normal.",
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
        a: "60-75% of your conventional deadlift is typical, since the range and emphasis differ. Test a real working set above rather than back-calculating.",
      },
      {
        q: "Romanian deadlift vs regular deadlift, what's the difference?",
        a: "Regular deadlift starts from the floor — full-body strength test. RDL starts from the top, narrower range, built specifically for hamstrings and glutes under stretch.",
      },
      {
        q: "Is my Romanian deadlift good?",
        a: "Close to bodyweight for a controlled set of 8 with real hip-hinge mechanics is solid. Chasing heavy singles here mostly misses the point.",
      },
      {
        q: "How do I do a Romanian deadlift properly?",
        a: "Bar at hip height, push hips back with a soft knee bend, lower until you feel a real hamstring stretch — usually mid-shin. Depth comes from the hinge, not a rounded back.",
      },
      {
        q: "Dumbbell Romanian deadlift vs barbell — same weight?",
        a: "Less total weight — grip tends to give out before your hamstrings do. Fine substitute, just don't expect matching numbers.",
      },
      {
        q: "Single leg Romanian deadlift — how much weight?",
        a: "This is a balance drill, not a load test. Light dumbbell or kettlebell, sometimes just bodyweight — control matters more than the number.",
      },
      {
        q: "Romanian deadlift for glutes — does it actually work them?",
        a: "Yes — the stretched bottom position is exactly where glutes and hamstrings do the most work. Common accessory choice alongside hip thrusts.",
      },
      {
        q: "Can I do Romanian deadlift with a trap bar or hex bar?",
        a: "Yes, and some prefer it. Neutral grip, centered load, often more comfortable on the lower back. Expect a slightly different number than a straight bar.",
      },
      {
        q: "What grip should I use for Romanian deadlift?",
        a: "Double-overhand or mixed both work. Mixed lets you hold more before your hands give out, but alternates which side you train unless you switch sets.",
      },
      {
        q: "Can I do Romanian deadlift at home with no bar?",
        a: "Dumbbells, kettlebells, or a band all train the same hip-hinge pattern. Less weight, same muscles, same range.",
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
        a: "Most lifters move somewhat more here than on conventional deadlift. Check your own numbers above rather than assuming a fixed percentage.",
      },
      {
        q: "Trap bar deadlift vs conventional deadlift, which is easier?",
        a: "Generally considered more beginner-friendly — the upright torso puts less shear stress on the lower back. 'Easier' isn't quite right; it's just a more forgiving pattern.",
      },
      {
        q: "Is my trap bar deadlift good for my bodyweight?",
        a: "Trap bar standards run a bit higher than conventional for the same lifter, given the better leverage. Use your own numbers above.",
      },
      {
        q: "Hex bar deadlift vs trap bar deadlift, is it the same thing?",
        a: "Yes — same equipment, same lift. The name just varies by gym and manufacturer.",
      },
      {
        q: "Low handle vs high handle trap bar, does it change the weight?",
        a: "Low handles mean a deeper range, closer to conventional — usually less weight moved. High handles shorten the pull and typically let you load more.",
      },
      {
        q: "Can beginners start with trap bar deadlift instead of conventional?",
        a: "Many coaches recommend exactly that. Neutral spine, simpler bar path — a reasonable entry point before conventional or sumo technique.",
      },
      {
        q: "Trap bar deadlift for glutes and legs — does it hit them differently?",
        a: "More quad involvement than conventional deadlift, closer to a squat-deadlift hybrid, while still working glutes and hamstrings hard.",
      },
      {
        q: "What's the average trap bar deadlift weight?",
        a: "Varies too much by training background for a flat average to mean much. Use the calculator above with your real bodyweight.",
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
        a: "Around 80-85% of your flat bench weight is typical. Test a real working set above for a number specific to you.",
      },
      {
        q: "Incline bench press vs flat bench, how much difference should there be?",
        a: "A 15-20% gap is normal. If they're nearly identical, either your upper chest is very strong or your flat bench isn't being pushed hard enough.",
      },
      {
        q: "Is my incline bench press good?",
        a: "Compare it to your own flat bench, not a stranger's numbers — the ratio between the two tells you more than either number alone.",
      },
      {
        q: "Dumbbell incline bench press — how much per hand?",
        a: "Noticeably less than half your barbell number. Stabilizing two weights on an angle is genuinely harder than it looks.",
      },
      {
        q: "What's the best incline angle for chest growth?",
        a: "Around 30 degrees is the general sweet spot — enough shift upward without turning it into mostly a shoulder exercise.",
      },
      {
        q: "Incline bench press on a smith machine — does it count?",
        a: "Valid variation, but don't expect it to transfer to free weight — the fixed path removes a lot of stabilizer demand, so the number usually runs higher.",
      },
      {
        q: "Why is my incline bench press so much weaker than flat?",
        a: "Some gap is normal. A big one usually points to underdeveloped front delts and upper chest — worth training incline directly if that's the case.",
      },
      {
        q: "What angle should my incline bench be set to?",
        a: "Most gym benches default to 30-45 degrees, which is reasonable. Steeper shifts more to the shoulders — check your bench before comparing numbers with anyone.",
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
        a: "More than barbell bench, usually — the fixed path removes stabilizer demand. Use the calculator above for a machine-specific number, not a barbell comparison.",
      },
      {
        q: "Is chest press machine as good as bench press?",
        a: "Same primary muscles, none of the balance demand. Good for isolating the chest or working around a barbell limitation — most serious lifters use it alongside barbell work, not instead.",
      },
      {
        q: "Seated chest press machine vs bench press, which builds more strength?",
        a: "Barbell bench builds more transferable strength since it demands stabilization the machine does for you. Machine press is excellent for chest isolation with less injury risk to failure.",
      },
      {
        q: "Cable chest press vs machine chest press, what's the difference?",
        a: "Cables keep constant tension and allow a more natural arc. Machines follow one fixed path. Cables feel more like dumbbells; machines feel more locked in.",
      },
      {
        q: "Smith machine chest press — how does it compare?",
        a: "Vertical bar path, no side-to-side stabilization needed. Numbers usually land somewhere between free barbell and a dedicated chest press machine.",
      },
      {
        q: "Incline chest press machine — does it work the same as barbell incline?",
        a: "Same upper-chest emphasis, same reduced stabilizer demand as any machine — expect to move more weight than free-weight incline.",
      },
      {
        q: "What's a good chest press machine weight for beginners?",
        a: "Light enough to control the full range for 10-12 reps before adding weight. The fixed path makes it easy to overload joints that aren't ready yet.",
      },
      {
        q: "Does grip width change chest press machine results?",
        a: "Yes — wider emphasizes chest, narrower shifts to triceps. Most machines let you adjust for exactly this reason.",
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
        a: "Somewhat less than flat bench — the shortened range cuts out some of the bottom-driven power. Test a real set above rather than assuming a fixed percentage.",
      },
      {
        q: "Floor press vs bench press, what's actually different?",
        a: "Stops the moment your upper arms hit the ground — no leg drive, shorter range, more triceps and lockout emphasis. Easier on the shoulders for a lot of lifters.",
      },
      {
        q: "Is floor press good for shoulder pain?",
        a: "Many find it more comfortable than full bench, since it skips the deepest part of the range. Worth checking with a physical therapist for an actual injury though, not just general discomfort.",
      },
      {
        q: "Barbell floor press vs dumbbell floor press?",
        a: "Dumbbells allow more range and independent arm movement — good for symmetry. Barbell typically allows heavier total loading.",
      },
      {
        q: "Does floor press build tricep strength for bench lockout?",
        a: "Yes — a common powerlifting accessory specifically for strengthening the lockout portion where triceps do most of the work.",
      },
      {
        q: "How do I set up a floor press at home?",
        a: "Lie under a rack low enough to unrack from the ground, or have a partner hand it to you. No bench required — part of why it's a popular home-gym substitute.",
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
        a: "Many lifters pull slightly more sumo than conventional, thanks to the shorter range and better leverage — though it varies a lot by build. Use your own numbers above.",
      },
      {
        q: "Sumo vs conventional deadlift, which is stronger?",
        a: "Depends on you. Long arms and a shorter torso often favor sumo. Try both, see which keeps you stable under more weight.",
      },
      {
        q: "Is my sumo deadlift good for my bodyweight?",
        a: "Sumo standards run close to conventional for most lifters, shifted slightly for the different mechanics. Check your ratio above.",
      },
      {
        q: "How do I sumo deadlift with proper form?",
        a: "Wide stance, toes out, grip inside your knees, shins nearly vertical at setup. Push the floor away with your legs — that leg drive separates a good pull from a bad one.",
      },
      {
        q: "Why is my sumo deadlift weaker than conventional?",
        a: "Sumo demands more hip mobility and adductor strength. If either is limited, you can't access the leverage advantage yet — common for lifters new to the stance.",
      },
      {
        q: "Sumo deadlift for glutes — does it work them more?",
        a: "Generally yes — the wider stance and upright torso put glutes and adductors in a stronger position through the pull.",
      },
      {
        q: "What's a good sumo deadlift for beginners?",
        a: "Mobility and stance width before weight. Sumo technique usually takes longer to groove than conventional, even though the eventual number often ends up higher.",
      },
      {
        q: "Can I do sumo deadlift on a smith machine?",
        a: "Yes, though the fixed vertical path removes some of the balance and bar-path control free-weight sumo actually requires.",
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
        a: "Lower than Romanian deadlift, noticeably lower than conventional — the straighter-leg, floor-start position increases the stretch demand. Test a real set above.",
      },
      {
        q: "Stiff-leg deadlift vs Romanian deadlift, what's the real difference?",
        a: "Stiff-leg starts from the floor, knees nearly locked. RDL starts from hip height, more knee bend, shorter range. Similar muscles, but stiff-leg usually hits the hamstrings harder at the bottom.",
      },
      {
        q: "Is my stiff-leg deadlift good?",
        a: "Around half your bodyweight for a controlled set of 8, no lower-back rounding — solid intermediate marker.",
      },
      {
        q: "How do I do a stiff-leg deadlift safely?",
        a: "Knees only very slightly bent, hinge from the hips, stop once you feel a real stretch or your back starts to round. Going lower than your flexibility allows is where this gets risky.",
      },
      {
        q: "Dumbbell stiff-leg deadlift — how much weight?",
        a: "Noticeably less than barbell — grip and stabilization become limiting factors sooner. Fine for home training, just don't expect the same number.",
      },
      {
        q: "Can beginners do stiff-leg deadlift?",
        a: "Yes, but hamstring flexibility is usually the limiting factor before strength is. Start light, prioritize full range over adding weight.",
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
        a: "Often slightly more than flat bench — shorter effective range, more favorable joint angle. Test your own numbers above.",
      },
      {
        q: "Decline bench press vs flat bench, which is stronger?",
        a: "Decline is often the strongest of the three bench angles for most lifters. The training effect shifts more toward the lower chest though.",
      },
      {
        q: "Is my decline bench press good?",
        a: "Compare it to flat bench. If decline is noticeably lower, that's unusual — worth checking your setup and stability rather than assuming a strength issue.",
      },
      {
        q: "What's decline bench press good for?",
        a: "Targeting the lower chest specifically. Some lifters also find it easier on the shoulders than flat or incline.",
      },
      {
        q: "Decline dumbbell press vs barbell decline — how much less?",
        a: "Similar gap to flat barbell vs flat dumbbell — expect somewhat less, since stabilizing two independent weights is harder than a fixed bar.",
      },
      {
        q: "Is decline bench press safe?",
        a: "Safe with a proper setup. Secure your legs or feet under the pads — the angle makes it easier to slide during a heavy rep than flat or incline.",
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
        a: "Use total combined weight of both dumbbells, not per hand. Most lifters move less here than on barbell, thanks to the added stabilizer demand.",
      },
      {
        q: "Dumbbell bench press vs barbell bench press, how much less should I expect?",
        a: "80-90% of your barbell total is a common range — varies a lot based on how much dumbbell-specific stabilizer strength you've built.",
      },
      {
        q: "Is my dumbbell bench press good?",
        a: "Compare the ratio to your barbell bench, not the number alone. A big gap usually points to underdeveloped stabilizers, not a chest issue.",
      },
      {
        q: "What's a good dumbbell bench press for beginners?",
        a: "Control through the full range before adding weight. Dumbbell bench punishes poor stabilization more than barbell does — easy to overestimate what you can handle.",
      },
      {
        q: "Neutral grip vs regular grip dumbbell press — does it change the weight?",
        a: "Neutral grip is often slightly easier on the shoulders and may allow marginally more weight if you're managing shoulder discomfort.",
      },
      {
        q: "Can I do dumbbell bench press without a bench?",
        a: "Yes — floor dumbbell press is a common substitute, though it shortens your range similar to a barbell floor press.",
      },
      {
        q: "Why can't I lift as much with dumbbells as with a barbell?",
        a: "Completely normal. A barbell's fixed path does stabilization work for you that two independent dumbbells force your shoulders and core to do instead.",
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
        a: "Noticeably less than conventional deadlift — the wider grip and longer range make this a harder pull at the same weight. Don't be discouraged by the lower number.",
      },
      {
        q: "Snatch-grip deadlift vs conventional deadlift, what's the point?",
        a: "Builds upper-back and trap strength that carries over to Olympic lifting and conventional lockout. Not usually trained as a max-strength lift on its own.",
      },
      {
        q: "How wide should my grip be for snatch-grip deadlift?",
        a: "Wide enough that the bar sits at roughly hip-crease height standing tall — for most lifters that's wider than it feels like it should be at first.",
      },
      {
        q: "Is snatch-grip deadlift good for building deadlift strength?",
        a: "Yes, particularly the upper back and lockout — common accessory for lifters whose conventional pull breaks down at the top.",
      },

    ],
    relatedSlugs: ["deadlift", "sumo-deadlift"],
  },
  {
    slug: "shoulder-press",
    name: "Shoulder Press",
    category: "Push",
    equipment: "Barbell / Dumbbell",
    intro:
      "Shoulder press — also called overhead press — means pressing weight straight overhead, either standing or seated, with a barbell or dumbbells. It's one of the clearest tests of raw shoulder and triceps strength there is, and unlike bench press, there's no bench or leg drive to help you cheat the number.",
    muscles: "Front and side delts do most of the work, with triceps finishing the lockout and your core and upper back stabilizing the weight overhead.",
    formNote:
      "Standing overhead press asks a lot of your core to keep the weight from pulling you backward — if you're arching hard through your lower back to get the bar up, the weight is ahead of what your strict form can handle yet.",
    ratios: {
      men: { beginner: 0.35, novice: 0.5, intermediate: 0.75, advanced: 1.1, elite: 1.4 },
      women: { beginner: 0.2, novice: 0.3, intermediate: 0.45, advanced: 0.65, elite: 0.85 },
    },
    variantNote:
      "Standing barbell press, seated barbell press, and dumbbell press all produce different numbers for the same lifter — seated versions remove some core/leg stabilization, and dumbbells add independent-arm demand.",
    variations: [
      { name: "Standing barbell overhead press", note: "The strictest version — no bench, no leg drive, full-body stability required." },
      { name: "Seated barbell shoulder press", note: "Removes leg and lower-back stabilization, isolating the shoulders more." },
      { name: "Standing dumbbell shoulder press", note: "Independent arms add stabilizer demand — expect a lower number than barbell." },
      { name: "Seated dumbbell shoulder press", note: "A common gym default — controlled, less core demand than standing." },
      { name: "Push press", note: "Uses leg drive to help launch the weight — a different, more explosive movement." },
    ],
    faqs: [
      {
        q: "How much should I shoulder press?",
        a: "Bodyweight for a clean standing press is a strong benchmark most lifters take years to reach. Use your own numbers above rather than a flat guess.",
      },
      {
        q: "Shoulder press vs overhead press, are they the same thing?",
        a: "Yes — interchangeable names for the same movement. Some gyms use 'overhead press' specifically for the strict standing barbell version.",
      },
      {
        q: "Is my shoulder press good?",
        a: "Half your bodyweight, clean standing press — solid intermediate marker. Harder to build relative strength on than bench, so don't compare the two directly.",
      },
      {
        q: "Standing vs seated shoulder press, which is stronger?",
        a: "Most lifters press somewhat more seated, since the bench removes core and leg stabilization. Neither is 'wrong' — just be consistent about which you're testing.",
      },
      {
        q: "Dumbbell shoulder press vs barbell, how much less?",
        a: "Noticeably less total weight — stabilizing two independent weights overhead is significantly harder than a fixed bar.",
      },
      {
        q: "What muscles does shoulder press work?",
        a: "Front and side deltoids primarily. Triceps handle the lockout; upper back and core work hard just to keep you stable underneath the weight.",
      },
      {
        q: "Why is my shoulder press so much weaker than my bench press?",
        a: "Normal — shoulder press strips away the mechanical advantages bench gives you. Half your bench is a common ratio.",
      },
      {
        q: "What's a good shoulder press for beginners?",
        a: "Strict form and a full lockout before adding weight. Pressing with your lower back instead of your shoulders is the most common — and easiest to hide — beginner mistake.",
      },

    ],
    relatedSlugs: ["bench-press", "incline-bench-press"],
  },
  {
    slug: "pull-up",
    name: "Pull-Up",
    category: "Pull",
    equipment: "Bodyweight / Weighted",
    intro:
      "Pull-up, palms facing away, is one of the purest tests of relative upper-body strength — no machine, no adjustable resistance, just your bodyweight (and any extra weight you add) against gravity. This calculator is built around weighted pull-ups: enter the added weight beyond your bodyweight, not your total bodyweight.",
    muscles: "Lats do most of the pulling, with biceps, rear delts, and grip strength all playing a real supporting role.",
    formNote:
      "A full rep means a true dead hang at the bottom and your chin clearing the bar at the top — partial-range pull-ups inflate the number but don't reflect the same strength standard.",
    ratios: {
      men: { beginner: 0.05, novice: 0.15, intermediate: 0.3, advanced: 0.55, elite: 0.85 },
      women: { beginner: 0.0, novice: 0.05, intermediate: 0.15, advanced: 0.3, elite: 0.5 },
    },
    variantNote:
      "This calculator treats 'weight lifted' as added weight beyond bodyweight, not your total bodyweight — enter 0 if you're not using a weight belt and just training strict bodyweight reps.",
    variations: [
      { name: "Assisted pull-ups", note: "Uses a band or machine to reduce effective bodyweight — a common way to build toward a first strict rep." },
      { name: "Neutral grip pull-up", note: "Palms facing each other — often easier on the shoulders and wrists." },
      { name: "Wide grip pull-up", note: "Emphasizes the lats more, typically the hardest grip variation." },
      { name: "Scapula pull-up", note: "A partial-range drill focused on shoulder blade control, not a strength test." },
      { name: "Australian pull-up (inverted row)", note: "A horizontal, easier bodyweight row — a common beginner regression." },
    ],
    faqs: [
      {
        q: "How much weight should I add to pull-ups?",
        a: "If 8-10 strict bodyweight reps feel comfortable, 10-15% of your bodyweight is a reasonable starting add. Test a real weighted set above once you have one.",
      },
      {
        q: "Is my pull-up strength good?",
        a: "A single strict bodyweight rep already puts you ahead of a large share of gym-goers. 25%+ of bodyweight added for a clean rep is genuinely strong.",
      },
      {
        q: "Chin up vs pull up, what's the difference?",
        a: "Overhand grip, palms away, more lat emphasis for pull-ups. Underhand, palms toward you, more bicep involvement for chin-ups — most people find chin-ups slightly easier.",
      },
      {
        q: "How do I do my first pull-up?",
        a: "Assisted machines, resistance bands over the bar, and slow negatives are the three most common paths to a first strict rep.",
      },
      {
        q: "What's a good number of pull-ups for my bodyweight?",
        a: "This calculator's built for weighted pull-ups specifically. If you're bodyweight-only, aim for 10+ strict reps before adding external weight.",
      },
      {
        q: "Neutral grip vs wide grip pull-ups, which is easier?",
        a: "Neutral (palms facing each other) is easiest on the joints, usually lets people do more reps. Wide grip is typically the hardest and most lat-focused.",
      },
      {
        q: "How do I add weight to pull-ups?",
        a: "A dip belt with a plate on a chain is standard. A weighted vest or a dumbbell between your feet both work too.",
      },

    ],
    relatedSlugs: ["chin-up", "barbell-row"],
  },
  {
    slug: "chin-up",
    name: "Chin-Up",
    category: "Pull",
    equipment: "Bodyweight / Weighted",
    intro:
      "Chin-up uses an underhand grip, palms facing you, which brings the biceps into the movement more than a standard pull-up. Most lifters find chin-ups noticeably easier for the same bodyweight — a real, measurable difference, not just a preference.",
    muscles: "Lats and biceps share the load more evenly here than in a pull-up, with the same rear-delt and grip involvement.",
    formNote:
      "Same standard as pull-ups — full dead hang at the bottom, chin clearly over the bar at the top. It's easy to shorten the range on chin-ups without noticing, since the underhand grip makes partial reps feel deceptively complete.",
    ratios: {
      men: { beginner: 0.05, novice: 0.2, intermediate: 0.35, advanced: 0.6, elite: 0.9 },
      women: { beginner: 0.0, novice: 0.05, intermediate: 0.2, advanced: 0.35, elite: 0.55 },
    },
    variantNote:
      "Like the pull-up calculator, 'weight lifted' here means added weight beyond bodyweight — enter 0 for strict bodyweight reps with no belt.",
    variations: [
      { name: "Close-grip chin-up", note: "Hands closer together — shifts even more emphasis onto the biceps." },
      { name: "Wide-grip chin-up", note: "Less common — brings it closer to a pull-up in muscle emphasis." },
      { name: "Assisted chin-up", note: "Band or machine-assisted version for building toward a first strict rep." },
      { name: "L-sit chin-up", note: "Legs held straight out — adds a real core demand on top of the pull." },
    ],
    faqs: [
      {
        q: "How much should I weighted chin-up?",
        a: "Slightly more added weight than pull-ups typically, since biceps contribute more. Test a real weighted set above.",
      },
      {
        q: "Chin-ups vs pull-ups, which builds more strength?",
        a: "Both excellent. Chin-ups let you handle more weight and reps due to bicep involvement; pull-ups place more isolated demand on the lats.",
      },
      {
        q: "Is my chin-up strength good?",
        a: "10+ strict bodyweight reps is a solid marker most dedicated lifters reach with consistent training. 30%+ of bodyweight added is genuinely strong.",
      },
      {
        q: "How many chin-ups should a beginner be able to do?",
        a: "One or two strict, full-range reps is a fair start. A lot of otherwise-fit people can't do a single strict chin-up without some training first.",
      },
      {
        q: "Why can I do more chin-ups than pull-ups?",
        a: "Completely normal — the underhand grip lets biceps assist the lats more directly. Almost everyone does more reps chin-up style at the same bodyweight.",
      },

    ],
    relatedSlugs: ["pull-up", "barbell-row"],
  },
  {
    slug: "barbell-row",
    name: "Barbell Row",
    category: "Pull",
    equipment: "Barbell",
    intro:
      "Barbell row, bent over at the hips, pulling the bar to your torso — a foundational back-thickness exercise and one of the best barbell tests of pulling strength that isn't a deadlift. Form matters more here than almost any other row variation, since a bad hip hinge under load is a common way people tweak their lower back.",
    muscles: "Lats and upper back do the primary pulling, with biceps, rear delts, and grip assisting throughout.",
    formNote:
      "Keep your hips hinged and torso angle steady through the set — using your legs to heave the bar up (turning it into a mini deadlift) is a common way lifters inflate the number without actually rowing more weight.",
    ratios: {
      men: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.4, elite: 1.8 },
      women: { beginner: 0.3, novice: 0.45, intermediate: 0.65, advanced: 0.9, elite: 1.2 },
    },
    variantNote:
      "Pendlay rows (dead-stop from the floor each rep) and standard bent-over rows (continuous tension) are different enough in style that numbers between the two aren't directly comparable.",
    variations: [
      { name: "Pendlay row", note: "Bar returns to the floor each rep — more explosive, no stretch reflex to rely on." },
      { name: "Yates row", note: "More upright torso, underhand grip — shifts emphasis toward the lower lats and biceps." },
      { name: "Reverse grip barbell row", note: "Underhand grip, similar to Yates row — often allows slightly more weight." },
      { name: "Smith machine barbell row", note: "Fixed vertical path, removes some balance demand." },
      { name: "Chest-supported row", note: "A bench removes lower-back involvement entirely — different exercise, different standards." },
    ],
    faqs: [
      {
        q: "How much should I barbell row?",
        a: "Bodyweight for a clean set of 8 with good hip-hinge form is a solid intermediate marker. Use the calculator above for a more precise read.",
      },
      {
        q: "Is my barbell row good?",
        a: "Compare it to your deadlift — somewhere around 50-65% is a well-balanced ratio for most lifters.",
      },
      {
        q: "What's proper barbell row form?",
        a: "Hinge at the hips, flat back, bar hangs at arm's length, pull to your lower ribs without your torso swinging up to help. Keep the torso angle roughly constant.",
      },
      {
        q: "Barbell row muscles worked — what does it actually train?",
        a: "Primarily lats and upper/mid back, with real secondary work for biceps, rear delts, and grip.",
      },
      {
        q: "Pendlay row vs regular barbell row, what's the difference?",
        a: "Pendlay resets to the floor every rep, no momentum. Regular bent-over rows keep continuous tension and typically move slightly more total weight.",
      },
      {
        q: "What grip should I use for barbell row — overhand or underhand?",
        a: "Overhand emphasizes the upper back more. Underhand (Yates-style) brings in more biceps and often allows a bit more weight. Both valid — many lifters rotate.",
      },
      {
        q: "Barbell row on a Smith machine — does it work as well?",
        a: "Removes some balance and core demand, which some lifters actually prefer if lower-back fatigue is limiting their rowing weight otherwise.",
      },

    ],
    relatedSlugs: ["deadlift", "lat-pulldown"],
  },
  {
    slug: "lat-pulldown",
    name: "Lat Pulldown",
    category: "Pull",
    equipment: "Machine",
    intro:
      "Lat pulldown is the seated cable machine version of a pull-up — same pulling pattern, but you're pulling the bar down to you instead of pulling your bodyweight up. It's the standard entry point for building pulling strength before attempting real pull-ups, and it stays useful even for lifters who can already do weighted pull-ups.",
    muscles: "Lats are the primary target, with biceps, rear delts, and mid-back assisting through the pull.",
    formNote:
      "Lean back only slightly, and pull with your elbows driving down and back rather than just curling the bar toward your face — this is the most common way people turn a lat exercise into an arm exercise without meaning to.",
    ratios: {
      men: { beginner: 0.5, novice: 0.8, intermediate: 1.1, advanced: 1.5, elite: 1.9 },
      women: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.1, elite: 1.4 },
    },
    variantNote:
      "Wide grip, neutral grip, and single-arm lat pulldown all shift the emphasis and the number slightly — wide grip is usually the hardest, neutral grip often allows the most weight.",
    variations: [
      { name: "Wide grip lat pulldown", note: "Emphasizes the outer lats more — typically the hardest grip to move weight on." },
      { name: "Neutral grip lat pulldown", note: "Palms facing each other — often the strongest and most shoulder-friendly grip." },
      { name: "Single-arm lat pulldown", note: "Unilateral version, useful for fixing left-right imbalances." },
      { name: "Straight-arm pulldown", note: "Arms stay nearly straight — isolates the lats without much bicep involvement, different exercise entirely." },
      { name: "Close-grip lat pulldown", note: "Hands closer together on a V-bar attachment — more bicep and lower-lat emphasis." },
    ],
    faqs: [
      {
        q: "How much should I lat pulldown?",
        a: "Bodyweight on the stack for a clean set of 8-10 is a solid intermediate marker. Machine calibration varies enough between gyms that flat benchmarks aren't that reliable.",
      },
      {
        q: "Is my lat pulldown weight good compared to my pull-ups?",
        a: "Pulling down noticeably more than bodyweight while still not managing a strict pull-up is common and normal — the pulldown trains the muscles without needing your full bodyweight yet.",
      },
      {
        q: "Wide grip vs close grip lat pulldown — which is better?",
        a: "Wide emphasizes the outer lats, usually harder to load heavy. Close or neutral grip typically allows more weight and brings in more biceps. Neither is strictly better.",
      },
      {
        q: "Lat pulldown vs pull up, which should I do?",
        a: "Pulldown builds volume and strength toward pull-ups, especially if you can't yet do a strict rep. Once you can, both stay useful — pulldown for volume, pull-ups for the harder test.",
      },
      {
        q: "What's a good lat pulldown weight for beginners?",
        a: "Light enough to control the full range and actually feel your lats — one of the easiest machines to overload with momentum.",
      },
      {
        q: "Straight arm pulldown — is it the same exercise?",
        a: "No — arms stay nearly locked, pulling from the shoulder, isolating the lats without much bicep help. Different, lighter-loaded exercise.",
      },

    ],
    relatedSlugs: ["barbell-row", "pull-up"],
  },
];

export default exercises;

export function getExerciseBySlug(slug) {
  return exercises.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return exercises.map((e) => e.slug);
}
