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
    <div className="rounded-lg border border-line bg-panel p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl uppercase tracking-tight text-bone">
          {exerciseName} Calculator
        </h2>
        <div className="flex gap-1 rounded border border-line p-1 text-xs">
          <button
            onClick={() => setUnit("lb")}
            className={`rounded px-2 py-1 font-mono ${
              unit === "lb" ? "bg-flare text-ink" : "text-mute"
            }`}
          >
            LB
          </button>
          <button
            onClick={() => setUnit("kg")}
            className={`rounded px-2 py-1 font-mono ${
              unit === "kg" ? "bg-flare text-ink" : "text-mute"
            }`}
          >
            KG
          </button>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setGender("men")}
          className={`flex-1 rounded border py-2 text-sm font-medium ${
            gender === "men"
              ? "border-flare bg-flare/10 text-flare"
              : "border-line text-mute"
          }`}
        >
          Men's standards
        </button>
        <button
          onClick={() => setGender("women")}
          className={`flex-1 rounded border py-2 text-sm font-medium ${
            gender === "women"
              ? "border-flare bg-flare/10 text-flare"
              : "border-line text-mute"
          }`}
        >
          Women's standards
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wide text-mute">
            Bodyweight ({unit})
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={bodyweight}
            onChange={(e) => setBodyweight(e.target.value)}
            placeholder="180"
            className="w-full rounded border border-line bg-ink px-3 py-2 font-mono text-bone outline-none focus:border-flare"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wide text-mute">
            Weight lifted ({unit})
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="225"
            className="w-full rounded border border-line bg-ink px-3 py-2 font-mono text-bone outline-none focus:border-flare"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wide text-mute">
            Reps done
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="5"
            className="w-full rounded border border-line bg-ink px-3 py-2 font-mono text-bone outline-none focus:border-flare"
          />
        </label>
      </div>

      {estimated1RM && (
        <div className="mt-6 rounded border border-flare/30 bg-flare/5 p-5">
          <div className="text-xs uppercase tracking-wide text-mute">
            Estimated 1-rep max
          </div>
          <div className="font-display text-4xl text-bone">
            {estimated1RM}
            <span className="ml-1 text-lg text-mute">{unit}</span>
          </div>

          {tierInfo && (
            <div className="mt-3 border-t border-line pt-3 text-sm">
              <div className="text-bone">
                That puts you at{" "}
                <span className="font-semibold text-flare">
                  {tierInfo.tier}
                </span>{" "}
                for your bodyweight.
              </div>
              {tierInfo.nextTier && (
                <div className="mt-1 text-mute">
                  {tierInfo.nextTierWeight}
                  {unit} gets you to {tierInfo.nextTier}.
                </div>
              )}
            </div>
          )}
          {!bw && (
            <div className="mt-3 border-t border-line pt-3 text-sm text-mute">
              Add your bodyweight above to see your strength tier.
            </div>
          )}
        </div>
      )}

      {tierTable && (
        <div className="mt-6">
          <div className="mb-2 text-xs uppercase tracking-wide text-mute">
            Full tier breakdown at {bw}
            {unit} bodyweight
          </div>
          <div className="overflow-hidden rounded border border-line">
            {tierTable.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 py-2 text-sm ${
                  i % 2 === 0 ? "bg-ink" : "bg-panel"
                } ${
                  tierInfo?.tier === row.label
                    ? "ring-1 ring-inset ring-flare"
                    : ""
                }`}
              >
                <span className="text-bone">{row.label}</span>
                <span className="font-mono text-mute">
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
