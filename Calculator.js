import { useState, useMemo } from "react";
import { epley1RM, getTier, buildTierTable } from "./calc";

export default function Calculator({ exerciseName, ratios }) {
  const [bodyweight, setBodyweight] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("5");
  const [gender, setGender] = useState("men");
  const [unit, setUnit] = useState("lb");

  const bw = parseFloat(bodyweight);
  const w = parseFloat(weight);
  const r = parseInt(reps, 10);

  const estimated1RM = useMemo(() => {
    if (!w || !r || r < 1 || r > 20) return null;
    return Math.round(epley1RM(w, r));
  }, [w, r]);

  const tierInfo = useMemo(() => {
    if (!estimated1RM || !bw) return null;
    return getTier(estimated1RM, bw, ratios[gender]);
  }, [estimated1RM, bw, ratios, gender]);

  const tierTable = useMemo(() => {
    if (!bw) return null;
    return buildTierTable(bw, ratios[gender]);
  }, [bw, ratios, gender]);

  return (
    <div className="overflow-hidden rounded-card bg-card shadow-sm">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
        <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
          {exerciseName} Calculator
        </h2>
        <div className="flex rounded-full bg-peach p-1 font-mono text-xs">
          <button
            onClick={() => setUnit("lb")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              unit === "lb" ? "bg-ink text-white" : "text-mute"
            }`}
          >
            LB
          </button>
          <button
            onClick={() => setUnit("kg")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              unit === "kg" ? "bg-ink text-white" : "text-mute"
            }`}
          >
            KG
          </button>
        </div>
      </div>

      {/* Gender toggle */}
      <div className="px-5 sm:px-7">
        <div className="grid grid-cols-2 gap-2 rounded-full bg-peach p-1">
          <button
            onClick={() => setGender("men")}
            className={`rounded-full py-2 text-sm font-semibold transition-colors ${
              gender === "men" ? "bg-ink text-white" : "text-mute"
            }`}
          >
            Men
          </button>
          <button
            onClick={() => setGender("women")}
            className={`rounded-full py-2 text-sm font-semibold transition-colors ${
              gender === "women" ? "bg-ink text-white" : "text-mute"
            }`}
          >
            Women
          </button>
        </div>
      </div>

      {/* Inputs — stacks on mobile, row on larger screens */}
      <div className="grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-3 sm:px-7">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mute">
            Bodyweight ({unit})
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={bodyweight}
            onChange={(e) => setBodyweight(e.target.value)}
            placeholder="180"
            className="w-full rounded-2xl border border-line bg-peach px-4 py-3 font-display text-lg font-semibold text-ink outline-none focus:border-flare"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mute">
            Weight lifted ({unit})
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="225"
            className="w-full rounded-2xl border border-line bg-peach px-4 py-3 font-display text-lg font-semibold text-ink outline-none focus:border-flare"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mute">
            Reps done
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="5"
            className="w-full rounded-2xl border border-line bg-peach px-4 py-3 font-display text-lg font-semibold text-ink outline-none focus:border-flare"
          />
        </label>
      </div>

      {/* Result */}
      {estimated1RM && (
        <div className="mx-5 mb-5 rounded-2xl bg-gradient-to-br from-flare/10 to-flare2/10 p-5 sm:mx-7 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <div className="text-xs font-medium text-mute">
                Estimated one-rep max
              </div>
              <div className="font-display text-5xl font-extrabold text-flare sm:text-6xl">
                {estimated1RM}
                <span className="ml-1.5 text-lg font-semibold text-mute">
                  {unit}
                </span>
              </div>
            </div>
            {tierInfo && (
              <span className="rounded-full bg-flare px-3.5 py-1.5 text-sm font-bold text-white">
                {tierInfo.tier}
              </span>
            )}
          </div>

          {tierInfo?.nextTier && (
            <div className="mt-3 text-sm text-ink/70">
              {tierInfo.nextTierWeight}
              {unit} gets you to {tierInfo.nextTier}.
            </div>
          )}
          {!bw && (
            <div className="mt-3 text-sm text-ink/70">
              Add your bodyweight above to see your strength tier.
            </div>
          )}
        </div>
      )}

      {/* Tier table */}
      {tierTable && (
        <div className="px-5 pb-5 sm:px-7 sm:pb-7">
          <div className="mb-3 text-xs font-medium text-mute">
            Full tier breakdown at {bw}
            {unit} bodyweight
          </div>
          <div className="space-y-1.5">
            {tierTable.map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm ${
                  tierInfo?.tier === row.label
                    ? "bg-flare text-white"
                    : "bg-peach text-ink"
                }`}
              >
                <span className="font-semibold">{row.label}</span>
                <span className="font-mono">
                  {row.weight} {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
