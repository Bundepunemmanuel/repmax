// Estimated 1-rep max from a submaximal set.
// Epley is the default shown to users — it's the most commonly cited formula
// and matches what most lifters expect to see.
export function epley1RM(weight, reps) {
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

export function brzycki1RM(weight, reps) {
  if (reps === 1) return weight;
  if (reps >= 37) return weight; // formula breaks down at high rep counts
  return weight * (36 / (37 - reps));
}

const TIER_ORDER = ["beginner", "novice", "intermediate", "advanced", "elite"];

const TIER_LABELS = {
  beginner: "Beginner",
  novice: "Novice",
  intermediate: "Intermediate",
  advanced: "Advanced",
  elite: "Elite",
};

// Given an estimated 1RM, bodyweight, and the exercise's ratio table for a
// gender, returns which tier the lift falls in and the numbers needed for
// the next tier up.
export function getTier(estimated1RM, bodyweight, ratios) {
  if (!bodyweight || bodyweight <= 0) return null;

  const currentRatio = estimated1RM / bodyweight;
  let tier = null;
  let nextTier = null;
  let nextTierWeight = null;

  for (let i = 0; i < TIER_ORDER.length; i++) {
    const key = TIER_ORDER[i];
    if (currentRatio >= ratios[key]) {
      tier = key;
    } else {
      nextTier = key;
      nextTierWeight = Math.round(ratios[key] * bodyweight);
      break;
    }
  }

  return {
    tier: tier ? TIER_LABELS[tier] : "Untrained",
    ratio: currentRatio,
    nextTier: nextTier ? TIER_LABELS[nextTier] : null,
    nextTierWeight,
  };
}

export function buildTierTable(bodyweight, ratios) {
  return TIER_ORDER.map((key) => ({
    label: TIER_LABELS[key],
    weight: Math.round(ratios[key] * bodyweight),
    ratio: ratios[key],
  }));
}

// Unit conversion for challenge links — a challenge created in kg needs to
// compare correctly against a friend calculating in lb, and vice versa.
export function lbToKg(lb) {
  return lb / 2.20462;
}

export function kgToLb(kg) {
  return kg * 2.20462;
}
