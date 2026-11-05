import { AbsoluteFill, Composition, interpolate, registerRoot, useCurrentFrame } from "raea";

// One draft goes through the writing room: Claude drafts, the checker flags a line,
// the writer rewrites it, and the edit joins the rules. 8 seconds, loops.
const C = { bg: "#f5f2ec", card: "#ffffff", line: "#e5e0d6", soft: "#efebe3", ink: "#1f1d1a", muted: "#6f6a62", accent: "#ff6719", accentInk: "#c2450a", tint: "#fff2ea" };
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ease = (t: number) => t * t * (3 - 2 * t);
const at = (f: number, a: number, b: number) => ease(interpolate(f, [a, b], [0, 1], clamp));

const draft = [
  "Pricing is one of the most important decisions you will make.",
  "In today's fast-moving world, every dollar counts.",
  "Start with what the client already pays.",
];
const rules = ["Say the number first", "No filler openers", "Talk to one client, not the world"];

function Step({ f, n, label, on }: { f: number; n: number; label: string; on: [number, number] }) {
  const lit = at(f, on[0], on[0] + 8) * (1 - at(f, on[1], on[1] + 8));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: 0.4 + lit * 0.6 }}>
      <span style={{ width: 40, height: 40, borderRadius: 20, background: lit > 0.5 ? C.accent : C.soft, color: lit > 0.5 ? "#fff" : C.muted, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Lora", fontWeight: 700, fontSize: 22 }}>{n}</span>
      <span style={{ fontFamily: "Lora", fontWeight: 700, fontSize: 30, color: C.ink }}>{label}</span>
    </div>
  );
}

const fonts = `
@font-face { font-family: "Lora"; font-weight: 700; src: url("/media/fonts/Lora.ttf"); }
@font-face { font-family: "Spectral"; font-weight: 400; src: url("/media/fonts/Spectral-Regular.ttf"); }
@font-face { font-family: "Spectral"; font-weight: 600; src: url("/media/fonts/Spectral-SemiBold.ttf"); }
@font-face { font-family: "Inter"; font-weight: 500; src: url("/media/fonts/Inter.ttf"); }
@font-face { font-family: "Inter"; font-weight: 600; src: url("/media/fonts/Inter.ttf"); }
@font-face { font-family: "Inter"; font-weight: 700; src: url("/media/fonts/Inter.ttf"); }
`;

function Loop() {
  const f = useCurrentFrame();
  // timeline (frames at 30 fps)
  const out = at(f, 222, 240); // fade everything for a clean loop
  const flag = at(f, 70, 82);
  const strike = at(f, 112, 124);
  const rewrite = at(f, 126, 140);
  const rule = at(f, 160, 176);

  return (
    <AbsoluteFill style={{ background: C.bg, padding: 90, flexDirection: "row", gap: 70, alignItems: "center", opacity: 1 - out }}>
      <style>{fonts}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 26, width: 360 }}>
        <Step f={f} n={1} label="Claude drafts" on={[0, 66]} />
        <Step f={f} n={2} label="Claude checks" on={[66, 108]} />
        <Step f={f} n={3} label="You edit" on={[108, 152]} />
        <Step f={f} n={4} label="New rule" on={[152, 260]} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ background: C.card, border: `2px solid ${C.line}`, borderRadius: 18, padding: "34px 40px", display: "flex", flexDirection: "column", gap: 18, boxShadow: "0 10px 30px rgba(31,29,26,.07)" }}>
          {draft.map((line, i) => {
            const shown = Math.round(line.length * at(f, 6 + i * 18, 22 + i * 18));
            const hit = i === 1;
            return (
              <div key={i} style={{ position: "relative", fontFamily: "Spectral", fontSize: 31, lineHeight: 1.35, color: C.ink, padding: "4px 14px", borderRadius: 8, background: hit ? `rgba(255,242,234,${flag})` : "transparent", borderLeft: `5px solid ${hit ? `rgba(255,103,25,${flag})` : "transparent"}` }}>
                {hit ? (
                  <>
                    <span style={{ opacity: 1 - rewrite * 0.55, textDecoration: strike > 0.5 ? "line-through" : "none", textDecorationColor: C.accent }}>{line.slice(0, shown)}<span style={{ opacity: 0 }}>{line.slice(shown)}</span></span>
                    <div style={{ height: rewrite * 52, overflow: "hidden", opacity: rewrite, fontWeight: 600 }}>Your client already knows what they pay.</div>
                  </>
                ) : <>{line.slice(0, shown)}<span style={{ opacity: 0 }}>{line.slice(shown)}</span></>}
              </div>
            );
          })}
          <div style={{ alignSelf: "flex-start", opacity: flag * (1 - strike), transform: `translateY(${(1 - flag) * 10}px)`, fontFamily: "Inter", fontWeight: 600, fontSize: 22, color: C.accentInk, border: "2px solid #f4b48f", borderRadius: 30, padding: "6px 18px" }}>
            Breaks rule 2: no filler openers
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {rules.map((r, i) => {
            const isNew = i === rules.length - 1;
            const show = isNew ? rule : 1;
            return (
              <div key={r} style={{ display: "flex", alignItems: "center", gap: 12, background: C.card, border: `2px solid ${isNew ? "#f4b48f" : C.line}`, borderRadius: 14, padding: "12px 20px", opacity: show, transform: `translateY(${(1 - show) * 16}px) scale(${0.94 + show * 0.06})`, fontFamily: "Inter", fontWeight: 500, fontSize: 24, color: C.ink }}>
                <span style={{ width: 30, height: 30, borderRadius: 15, background: isNew ? C.accent : C.soft, color: isNew ? "#fff" : C.muted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{i + 1}</span>
                {r}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
}

registerRoot(() => <Composition id="loop" component={Loop} width={1600} height={900} fps={30} durationInFrames={240} />);
