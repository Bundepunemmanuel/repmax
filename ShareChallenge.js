import { useState, useMemo } from "react";
import { lbToKg, kgToLb } from "./calc";

const SITE_NAME = "RepMax";
const SITE_DOMAIN = "repmax.vercel.app"; // update once on a final domain

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawCard({ style, exerciseName, statValue, unit, tierLabel, ratioText }) {
  const size = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const isDark = style === "dark";
  const pad = 72;

  // Background
  if (isDark) {
    ctx.fillStyle = "#201810";
    ctx.fillRect(0, 0, size, size);
    const glow = ctx.createRadialGradient(size * 0.85, size * 0.1, 0, size * 0.85, size * 0.1, 500);
    glow.addColorStop(0, "rgba(255,90,46,0.35)");
    glow.addColorStop(1, "rgba(255,90,46,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, size, size);
  } else {
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#FDF1E5");
    grad.addColorStop(1, "#FCE0C6");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }

  // Exercise tag
  ctx.font = "600 30px monospace";
  ctx.fillStyle = isDark ? "#FFB130" : "#A3792F";
  ctx.textBaseline = "top";
  ctx.fillText(exerciseName.toUpperCase(), pad, pad);

  // Tier badge
  ctx.font = "800 30px sans-serif";
  const badgeText = tierLabel;
  const badgeW = ctx.measureText(badgeText).width + 56;
  const badgeX = size - pad - badgeW;
  const badgeY = pad - 8;
  if (isDark) {
    ctx.strokeStyle = "rgba(255,177,48,0.5)";
    ctx.lineWidth = 2;
    roundRect(ctx, badgeX, badgeY, badgeW, 56, 28);
    ctx.stroke();
    ctx.fillStyle = "#FFB130";
  } else {
    roundRect(ctx, badgeX, badgeY, badgeW, 56, 28);
    ctx.fillStyle = "#FF5A2E";
    ctx.fill();
    ctx.fillStyle = "#ffffff";
  }
  ctx.textAlign = "center";
  ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + 13);
  ctx.textAlign = "left";

  // Big stat
  const statY = size * 0.42;
  if (isDark) {
    const statGrad = ctx.createLinearGradient(pad, 0, pad + 500, 0);
    statGrad.addColorStop(0, "#FFB130");
    statGrad.addColorStop(1, "#FF5A2E");
    ctx.fillStyle = statGrad;
  } else {
    ctx.fillStyle = "#241C18";
  }
  ctx.font = "800 190px sans-serif";
  ctx.fillText(statValue, pad, statY);

  const statWidth = ctx.measureText(statValue).width;
  ctx.font = "600 56px sans-serif";
  ctx.fillStyle = "#948B82";
  ctx.fillText(unit, pad + statWidth + 16, statY + 110);

  // Ratio subtext
  ctx.font = "500 34px sans-serif";
  ctx.fillStyle = isDark ? "#EFE7DA" : "#6b6458";
  ctx.fillText(ratioText, pad, statY + 190);

  // Footer
  const footerY = size - pad - 50;
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad, footerY - 30);
  ctx.lineTo(size - pad, footerY - 30);
  ctx.stroke();

  const logoGrad = ctx.createLinearGradient(pad, footerY, pad + 50, footerY + 50);
  logoGrad.addColorStop(0, "#FF5A2E");
  logoGrad.addColorStop(1, "#FFB130");
  ctx.fillStyle = logoGrad;
  roundRect(ctx, pad, footerY, 50, 50, 14);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 26px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("R", pad + 25, footerY + 27);
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";

  ctx.font = "700 32px sans-serif";
  ctx.fillStyle = isDark ? "#EFE7DA" : "#241C18";
  ctx.fillText(SITE_NAME, pad + 66, footerY + 34);

  ctx.font = "400 24px monospace";
  ctx.fillStyle = "#948B82";
  ctx.textAlign = "right";
  ctx.fillText(SITE_DOMAIN, size - pad, footerY + 32);
  ctx.textAlign = "left";

  return canvas;
}

export default function ShareChallenge({
  exerciseName,
  slug,
  estimated1RM,
  unit,
  tierLabel,
  ratio,
  challenge, // { value, unit, name } if this page was opened via a challenge link
}) {
  const [cardStyle, setCardStyle] = useState("peach");
  const [linkCopied, setLinkCopied] = useState(false);

  const ratioText = ratio ? `That's ${ratio.toFixed(2)}x bodyweight` : "";

  const comparison = useMemo(() => {
    if (!challenge || !estimated1RM) return null;
    const theirValueInMyUnit =
      challenge.unit === unit
        ? challenge.value
        : unit === "kg"
        ? lbToKg(challenge.value)
        : kgToLb(challenge.value);

    const diff = Math.round(estimated1RM - theirValueInMyUnit);
    return {
      name: challenge.name || "Your friend",
      diff,
      won: diff > 0,
      tied: diff === 0,
    };
  }, [challenge, estimated1RM, unit]);

  async function handleShare() {
    const canvas = drawCard({
      style: cardStyle,
      exerciseName,
      statValue: String(estimated1RM),
      unit,
      tierLabel,
      ratioText,
    });

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], `${slug}-repmax.png`, { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: `My ${exerciseName} result on RepMax`,
            text: `${estimated1RM}${unit} on ${exerciseName} — ${tierLabel} tier.`,
          });
        } catch (err) {
          // user cancelled the share sheet — no action needed
        }
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slug}-repmax.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    }, "image/png");
  }

  async function handleChallenge() {
    const name = window.prompt("Your name (shown to whoever you challenge):", "");
    const displayName = name && name.trim() ? name.trim() : "A friend";

    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("c", String(Math.round(estimated1RM)));
    url.searchParams.set("cu", unit);
    url.searchParams.set("cn", displayName);
    const link = url.toString();

    const text = `I just hit ${estimated1RM}${unit} on ${exerciseName} (${tierLabel}) on RepMax. Think you can beat it?`;

    if (navigator.share) {
      try {
        await navigator.share({ title: "RepMax Challenge", text, url: link });
        return;
      } catch (err) {
        // user cancelled — fall through to clipboard copy
      }
    }

    try {
      await navigator.clipboard.writeText(`${text} ${link}`);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    } catch (err) {
      window.prompt("Copy this link to challenge a friend:", link);
    }
  }

  if (!estimated1RM) return null;

  return (
    <div className="mt-4">
      {comparison && (
        <div
          className={`mb-4 rounded-2xl p-4 ${
            comparison.won
              ? "bg-green-50 border border-green-200"
              : comparison.tied
              ? "bg-flare/10 border border-flare/30"
              : "bg-flare/10 border border-flare/30"
          }`}
        >
          {comparison.tied ? (
            <div className="font-bold text-ink">
              You tied {comparison.name}! 🤝
            </div>
          ) : comparison.won ? (
            <div className="font-bold text-green-700">
              You beat {comparison.name} by {Math.abs(comparison.diff)}
              {unit}! 🎉
            </div>
          ) : (
            <div className="font-bold text-ink">
              {comparison.name} is still ahead by {Math.abs(comparison.diff)}
              {unit} 💪
            </div>
          )}
          <div className="mt-1 text-sm text-mute">
            {comparison.won
              ? "Nice work — challenge them back to make it official."
              : "Train up and challenge them back."}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={handleShare}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white"
        >
          ⤴ Share Result
        </button>
        <button
          onClick={handleChallenge}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-flare px-4 py-3 text-sm font-semibold text-flare"
        >
          ⚡ {comparison ? `Challenge ${comparison.name} Back` : "Challenge a Friend"}
        </button>
      </div>

      {linkCopied && (
        <div className="mt-2 text-center text-xs font-medium text-flare">
          Link copied to clipboard!
        </div>
      )}

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-mute">
        <span>Card style:</span>
        <button
          onClick={() => setCardStyle("peach")}
          className={`h-5 w-5 rounded border-2 bg-[#FDF1E5] ${
            cardStyle === "peach" ? "border-flare" : "border-transparent"
          }`}
          aria-label="Peach card style"
        />
        <button
          onClick={() => setCardStyle("dark")}
          className={`h-5 w-5 rounded border-2 bg-[#241C18] ${
            cardStyle === "dark" ? "border-flare" : "border-transparent"
          }`}
          aria-label="Dark card style"
        />
      </div>
    </div>
  );
}
