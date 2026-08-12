import { useState, useMemo, useRef } from "react";
import QRCode from "qrcode";
import { lbToKg, kgToLb } from "./calc";

const SITE_NAME = "RepMax";
const SITE_DOMAIN = "repmax-app.vercel.app"; // update once on a final domain

const TIER_ORDER = ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"];

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function drawCard({ style, exerciseName, statValue, unit, tierLabel, ratioText, pageUrl }) {
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

  // Faded logo watermark, bottom-right, drawn before everything else so
  // text and the QR code sit cleanly on top of it.
  try {
    const logo = await loadImage("/logo.png");
    ctx.save();
    ctx.globalAlpha = isDark ? 0.08 : 0.1;
    const wmW = 480;
    const wmH = wmW * (logo.height / logo.width);
    ctx.drawImage(logo, size - wmW + 60, size - wmH + 40, wmW, wmH);
    ctx.restore();
  } catch (err) {
    // watermark is decorative only — skip silently if it fails to load
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
  const statY = size * 0.32;
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

  // Tier progress bar — fills the space below the ratio text, shows all
  // five tiers with the achieved ones highlighted.
  const barY = statY + 260;
  const barW = size - pad * 2;
  const segGap = 10;
  const segW = (barW - segGap * (TIER_ORDER.length - 1)) / TIER_ORDER.length;
  const achievedIndex = TIER_ORDER.indexOf(tierLabel);

  ctx.font = "600 22px monospace";
  TIER_ORDER.forEach((label, i) => {
    const x = pad + i * (segW + segGap);
    const achieved = i <= achievedIndex;

    if (isDark) {
      ctx.fillStyle = achieved ? "#FFB130" : "rgba(255,255,255,0.1)";
    } else {
      ctx.fillStyle = achieved ? "#FF5A2E" : "rgba(0,0,0,0.08)";
    }
    roundRect(ctx, x, barY, segW, 16, 8);
    ctx.fill();

    ctx.fillStyle = i === achievedIndex
      ? (isDark ? "#FFB130" : "#FF5A2E")
      : (isDark ? "rgba(255,255,255,0.4)" : "rgba(36,28,24,0.4)");
    ctx.textAlign = "center";
    ctx.fillText(label.slice(0, 3).toUpperCase(), x + segW / 2, barY + 34);
  });
  ctx.textAlign = "left";

  // QR code — links straight back to this exact calculator, so the card
  // still drives traffic even if it's screenshotted and reshared without
  // the original link.
  if (pageUrl) {
    try {
      const qrDataUrl = await QRCode.toDataURL(pageUrl, {
        width: 260,
        margin: 0,
        color: {
          dark: isDark ? "#241C18" : "#241C18",
          light: "#00000000",
        },
      });
      const qrImg = await loadImage(qrDataUrl);
      const qrSize = 190;
      const qrX = size - pad - qrSize;
      const qrY = barY + 90;

      // white/dark backing so the QR stays scannable over any background
      ctx.fillStyle = isDark ? "#2b2019" : "#ffffff";
      roundRect(ctx, qrX - 18, qrY - 18, qrSize + 36, qrSize + 56, 20);
      ctx.fill();
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      ctx.font = "500 20px sans-serif";
      ctx.fillStyle = isDark ? "#EFE7DA" : "#6b6458";
      ctx.textAlign = "center";
      ctx.fillText("Scan to try it", qrX + qrSize / 2, qrY + qrSize + 30);
      ctx.textAlign = "left";
    } catch (err) {
      // QR generation is a nice-to-have — card still works without it
    }
  }

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

// Small celebratory burst, pure CSS/DOM, no external library.
function ConfettiBurst() {
  const pieces = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${8 + Math.random() * 84}%`,
            animationDelay: `${Math.random() * 0.15}s`,
            background: i % 2 === 0 ? "#FF5A2E" : "#FFB130",
          }}
        />
      ))}
    </div>
  );
}

export default function ShareChallenge({
  exerciseName,
  slug,
  estimated1RM,
  unit,
  tierLabel,
  ratio,
  challenge,
}) {
  const [cardStyle, setCardStyle] = useState("peach");
  const [modalOpen, setModalOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [linkReady, setLinkReady] = useState(null); // { link, copied }
  const [shareStatus, setShareStatus] = useState(null); // 'saved' | 'shared' | null
  const linkInputRef = useRef(null);

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

  const [pendingImage, setPendingImage] = useState(null); // { blob, url } once generated

  async function handleShare() {
    const canvas = await drawCard({
      style: cardStyle,
      exerciseName,
      statValue: String(estimated1RM),
      unit,
      tierLabel,
      ratioText,
      pageUrl: typeof window !== "undefined" ? window.location.origin + window.location.pathname : null,
    });

    canvas.toBlob((blob) => {
      if (!blob) return;

      // Download immediately — this is the reliable path and doesn't
      // depend on any browser permission window. Native share (if
      // available) is offered as a separate, explicit follow-up tap,
      // since calling navigator.share() from inside this async callback
      // can silently fail if the browser already revoked the trusted
      // user-action window by the time the image finished encoding.
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-repmax.png`;
      a.click();

      setPendingImage({ blob, url });
      setShareStatus("saved");
      setTimeout(() => setShareStatus(null), 3000);
    }, "image/png");
  }

  async function shareImageViaApps() {
    if (!pendingImage) return;
    const file = new File([pendingImage.blob], `${slug}-repmax.png`, {
      type: "image/png",
    });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `My ${exerciseName} result on RepMax`,
          text: `${estimated1RM}${unit} on ${exerciseName} — ${tierLabel} tier.`,
        });
        setShareStatus("shared");
        setTimeout(() => setShareStatus(null), 3000);
      } catch (err) {
        // user cancelled the native share sheet — no action needed
      }
    }
  }

  function openChallengeModal() {
    setNameInput("");
    setLinkReady(null);
    setModalOpen(true);
  }

  // This runs directly inside a click handler (the "Create Link" button),
  // so clipboard permission is granted immediately — no async gap before it,
  // and no share-first race that can revoke the browser's trusted-action window.
  async function createAndCopyLink() {
    const displayName = nameInput.trim() || "A friend";

    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("c", String(Math.round(estimated1RM)));
    url.searchParams.set("cu", unit);
    url.searchParams.set("cn", displayName);
    const link = url.toString();
    const text = `I just hit ${estimated1RM}${unit} on ${exerciseName} (${tierLabel}) on RepMax. Think you can beat it?`;

    let copied = false;
    try {
      await navigator.clipboard.writeText(`${text} ${link}`);
      copied = true;
    } catch (err) {
      copied = false;
    }

    setLinkReady({ link, text, copied });
  }

  async function shareViaApps() {
    if (!linkReady) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "RepMax Challenge",
          text: linkReady.text,
          url: linkReady.link,
        });
      } catch (err) {
        // user cancelled the native share sheet — no action needed
      }
    }
  }

  async function manualCopyFallback() {
    try {
      await navigator.clipboard.writeText(linkReady.link);
      setLinkReady((prev) => ({ ...prev, copied: true }));
    } catch (err) {
      // last-resort: select the text so the person can copy it themselves
      if (linkInputRef.current) {
        linkInputRef.current.select();
        linkInputRef.current.setSelectionRange(0, 99999);
      }
    }
  }

  if (!estimated1RM) return null;

  return (
    <div className="relative mt-4">
      {comparison && comparison.won && <ConfettiBurst />}

      {comparison && (
        <div
          className={`mb-4 animate-fade-in-up rounded-2xl border p-4 ${
            comparison.won
              ? "border-green-200 bg-green-50"
              : "border-flare/30 bg-flare/10"
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
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
        >
          ⤴ Share Result
        </button>
        <button
          onClick={openChallengeModal}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-flare px-4 py-3 text-sm font-semibold text-flare transition-transform active:scale-95"
        >
          ⚡ {comparison ? `Challenge ${comparison.name} Back` : "Challenge a Friend"}
        </button>
      </div>

      {shareStatus && (
        <div className="mt-2 animate-fade-in-up text-center text-xs font-medium text-flare">
          {shareStatus === "saved" ? "Image saved!" : "Shared!"}
        </div>
      )}

      {pendingImage &&
        typeof navigator !== "undefined" &&
        navigator.share && (
          <button
            onClick={shareImageViaApps}
            className="mt-2 w-full rounded-2xl border-2 border-flare py-2.5 text-sm font-semibold text-flare transition-transform active:scale-95"
          >
            ⤴ Send saved image via apps
          </button>
        )}

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-mute">
        <span>Card style:</span>
        <button
          onClick={() => setCardStyle("peach")}
          className={`h-5 w-5 rounded border-2 bg-[#FDF1E5] transition-transform active:scale-90 ${
            cardStyle === "peach" ? "border-flare" : "border-transparent"
          }`}
          aria-label="Peach card style"
        />
        <button
          onClick={() => setCardStyle("dark")}
          className={`h-5 w-5 rounded border-2 bg-[#241C18] transition-transform active:scale-90 ${
            cardStyle === "dark" ? "border-flare" : "border-transparent"
          }`}
          aria-label="Dark card style"
        />
      </div>

      {/* Challenge modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="w-full max-w-sm animate-slide-up rounded-t-3xl bg-card p-6 shadow-xl sm:rounded-3xl">
            {!linkReady ? (
              <>
                <div className="mb-1 font-display text-lg font-bold text-ink">
                  Challenge a friend
                </div>
                <div className="mb-4 text-sm text-mute">
                  They'll see your {exerciseName.toLowerCase()} number and a
                  link to beat it.
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-mute">
                    Your name
                  </span>
                  <input
                    autoFocus
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Alex"
                    maxLength={20}
                    className="w-full rounded-2xl border border-line bg-peach px-4 py-3 text-ink outline-none focus:border-flare"
                  />
                </label>
                <div className="mt-5 flex gap-2.5">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="flex-1 rounded-2xl border border-line py-3 text-sm font-semibold text-mute transition-transform active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createAndCopyLink}
                    className="flex-1 rounded-2xl bg-flare py-3 text-sm font-semibold text-white transition-transform active:scale-95"
                  >
                    Create Link
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-1 font-display text-lg font-bold text-ink">
                  {linkReady.copied ? "Copied!" : "Your challenge link"}
                </div>
                <div className="mb-4 text-sm text-mute">
                  {linkReady.copied
                    ? "Paste it anywhere to send the challenge."
                    : "Tap copy, or select the text manually."}
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-line bg-peach px-3 py-2.5">
                  <input
                    ref={linkInputRef}
                    readOnly
                    value={linkReady.link}
                    className="flex-1 truncate bg-transparent font-mono text-xs text-ink outline-none"
                  />
                  <button
                    onClick={manualCopyFallback}
                    className="flex-shrink-0 rounded-xl bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-transform active:scale-95"
                  >
                    {linkReady.copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>

                {typeof navigator !== "undefined" && navigator.share && (
                  <button
                    onClick={shareViaApps}
                    className="mt-3 w-full rounded-2xl border-2 border-flare py-3 text-sm font-semibold text-flare transition-transform active:scale-95"
                  >
                    ⤴ Share via apps
                  </button>
                )}

                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-3 w-full rounded-2xl bg-flare py-3 text-sm font-semibold text-white transition-transform active:scale-95"
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
