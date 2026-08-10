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
    <div className="border border-rule bg-card">
      <div className="flex items-center justify-between border-b border-rule px-6 py-4 sm:px-8">
        <h2 className="font-display text-xl italic text-ink">
          {exerciseName} Calculator
        </h2>
        <div className="flex gap-px overflow-hidden border border-rule font-mono text-xs">
          <button
            onClick={() => setUnit("lb")}
            className={`px-3 py-1.5 ${
              unit === "lb" ? "bg-ink text-card" : "text-mute"
            }`}
          >
            LB
          </button>
          <button
            onClick={() => setUnit("kg")}
            className={`px-3 py-1.5 ${
              unit === "kg" ? "bg-ink text-card" : "text-mute"
            }`}
          >
            KG
          </button>
        </div>
      </div>

      <div className="px-6 pt-6 sm:px-8">
        <div className="mb-6 flex border border-rule text-sm">
          <button
            onClick={() => setGender("men")}
            className={`flex-1 py-2.5 ${
              gender === "men"
                ? "bg-ink text-card"
                : "text-mute hover:text-ink"
            }`}
          >
            Men's standards
          </button>
          <button
            onClick={() => setGender("women")}
            className={`flex-1 border-l border-rule py-2.5 ${
              gender === "women"
                ? "bg-ink text-card"
                : "text-mute hover:text-ink"
            }`}
          >
            Women's standards
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <label className="block">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-mute">
              Bodyweight
            </span>
            <input
              type="number"
              inputMode="decimal"
              value={bodyweight}
              onChange={(e) => setBodyweight(e.target.value)}
              placeholder="180"
              className="w-full border border-rule bg-paper px-3 py-2.5 font-mono text-ink outline-none focus:border-brass"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-mute">
              Weight lifted
            </span>
            <input
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="225"
              className="w-full border border-rule bg-paper px-3 py-2.5 font-mono text-ink outline-none focus:border-brass"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-mute">
              Reps
            </span>
            <input
              type="number"
              inputMode="numeric"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="5"
              className="w-full border border-rule bg-paper px-3 py-2.5 font-mono text-ink outline-none focus:border-brass"
            />
          </label>
        </div>
      </div>

      {estimated1RM && (
        <div className="mx-6 mt-6 border-t border-rule pt-6 sm:mx-8">
          <div className="font-mono text-[11px] uppercase tracking-wide text-mute">
            Estimated one-rep max
          </div>
          <div className="font-display text-6xl italic text-ink">
            {estimated1RM}
            <span className="ml-2 font-body text-xl not-italic text-mute">
              {unit}
            </span>
          </div>

          {tierInfo && (
            <div className="mt-3 text-sm text-ink">
              That puts you at{" "}
              <span className="border-b-2 border-brass font-semibold">
                {tierInfo.tier}
              </span>{" "}
              for your bodyweight.
              {tierInfo.nextTier && (
                <span className="text-mute">
                  {" "}
                  {tierInfo.nextTierWeight}
                  {unit} gets you to {tierInfo.nextTier}.
                </span>
              )}
            </div>
          )}
          {!bw && (
            <div className="mt-3 text-sm text-mute">
              Add your bodyweight above to see your strength tier.
            </div>
          )}
        </div>
      )}

      {tierTable && (
        <div className="mx-6 mb-6 mt-6 sm:mx-8">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wide text-mute">
            Full tier breakdown at {bw}
            {unit} bodyweight
          </div>
          <div className="border border-rule">
            {tierTable.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                  i !== 0 ? "border-t border-rule" : ""
                } ${
                  tierInfo?.tier === row.label ? "bg-brass/10" : ""
                }`}
              >
                <span
                  className={
                    tierInfo?.tier === row.label
                      ? "font-semibold text-ink"
                      : "text-ink"
                  }
                >
                  {row.label}
                </span>
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
