"use client";

import { useEffect, useRef, useState, useCallback, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_VIDEO = "/media/make_looping_animation_extended_202605100112.mp4";
const SOOH_VIDEO = "/media/Make_it_looping_animated_extended_202605100400.mp4";
const SERVICES_VIDEO = "/media/Influencer_marketing_services_fo…_202605100439.mp4";
const BILLBOARD_VIDEO = "/media/Influencer_talking_about_billboard_202605100112.mp4";

type Phase = "intro" | "manifesto" | "bridge" | "services" | "billboard" | "stats" | "cta";

const TIMELINE: { phase: Phase; start: number; end: number; video?: string }[] = [
  { phase: "intro",     start: 0,    end: 3.0,                       },
  { phase: "manifesto", start: 3.0,  end: 9.5,  video: HERO_VIDEO    },
  { phase: "bridge",    start: 9.5,  end: 14.0,                      },
  { phase: "services",  start: 14.0, end: 21.5, video: SERVICES_VIDEO},
  { phase: "billboard", start: 21.5, end: 28.5, video: BILLBOARD_VIDEO},
  { phase: "stats",     start: 28.5, end: 33.5, video: SOOH_VIDEO    },
  { phase: "cta",       start: 33.5, end: 38.5,                      },
];
const TOTAL = 38.5;

const PLATFORMS = [
  { name: "Instagram", color: "#E1306C", stat: "2.4B" },
  { name: "TikTok",    color: "#ff0050", stat: "1.7B" },
  { name: "YouTube",   color: "#FF0000", stat: "2.7B" },
  { name: "Snapchat",  color: "#f5a623", stat: "750M" },
];

const STATS = [
  { val: 150, suffix: "M+", label: "Total Reach" },
  { val: 3.2, suffix: "×",  label: "Avg. ROI", decimals: 1 },
  { val: 500, suffix: "+",  label: "Campaigns" },
  { val: 98,  suffix: "%",  label: "Retention" },
];

function phaseAt(t: number): Phase {
  for (const seg of TIMELINE) if (t >= seg.start && t < seg.end) return seg.phase;
  return "cta";
}

function localProgress(t: number, phase: Phase) {
  const seg = TIMELINE.find((s) => s.phase === phase)!;
  return Math.max(0, Math.min(1, (t - seg.start) / (seg.end - seg.start)));
}

function easeOut(x: number) { return 1 - Math.pow(1 - x, 3); }

export default function LinkedInReelPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [recordMode, setRecordMode] = useState(false);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const heroRef = useRef<HTMLVideoElement>(null);
  const soohRef = useRef<HTMLVideoElement>(null);
  const servicesRef = useRef<HTMLVideoElement>(null);
  const billboardRef = useRef<HTMLVideoElement>(null);

  const refFor = useCallback((src?: string) => {
    if (src === HERO_VIDEO) return heroRef;
    if (src === SOOH_VIDEO) return soohRef;
    if (src === SERVICES_VIDEO) return servicesRef;
    if (src === BILLBOARD_VIDEO) return billboardRef;
    return null;
  }, []);

  const phase = phaseAt(t);
  const activeVideo = TIMELINE.find((s) => s.phase === phase)?.video;

  useEffect(() => {
    [heroRef, soohRef, servicesRef, billboardRef].forEach((r) => {
      const v = r.current;
      if (!v) return;
      if (refFor(activeVideo) === r) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [activeVideo, refFor]);

  const tick = useCallback((now: number) => {
    const elapsed = (now - startRef.current) / 1000;
    if (elapsed >= TOTAL) {
      setT(TOTAL);
      setPlaying(false);
      return;
    }
    setT(elapsed);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const play = useCallback(() => {
    startRef.current = performance.now() - t * 1000;
    setPlaying(true);
    rafRef.current = requestAnimationFrame(tick);
  }, [t, tick]);

  const pause = useCallback(() => {
    setPlaying(false);
    cancelAnimationFrame(rafRef.current);
  }, []);

  const restart = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setT(0);
    [heroRef, soohRef, servicesRef, billboardRef].forEach((r) => {
      if (r.current) r.current.currentTime = 0;
    });
    startRef.current = performance.now();
    setPlaying(true);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") { e.preventDefault(); playing ? pause() : play(); }
      if (e.key === "r" || e.key === "R") restart();
      if (e.key === "f" || e.key === "F") setRecordMode((m) => !m);
      if (e.key === "Escape") setRecordMode(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing, play, pause, restart]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        background: recordMode ? "#000" : "#0a0a0a",
        cursor: recordMode && playing ? "none" : "auto",
        padding: recordMode ? 0 : "32px 24px",
      }}
    >
      {!recordMode && (
        <div className="w-full max-w-[1100px] mb-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#1535C2" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">
              THINKWAY · LinkedIn Launch Reel · 1080×1080
            </span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 tabular-nums">
            {t.toFixed(1)}s / {TOTAL.toFixed(1)}s
          </div>
        </div>
      )}

      <div
        ref={stageRef}
        className="relative overflow-hidden bg-black shadow-2xl"
        style={{
          width: "min(1080px, 90vmin)",
          aspectRatio: "1 / 1",
          outline: recordMode ? "none" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Videos
          heroRef={heroRef}
          soohRef={soohRef}
          servicesRef={servicesRef}
          billboardRef={billboardRef}
          phase={phase}
          activeVideo={activeVideo}
          t={t}
        />

        <BrandMark t={t} />
        <Timecode t={t} hidden={recordMode && playing} />

        <AnimatePresence>
          {phase === "intro"     && <SceneIntro     key="intro"     t={localProgress(t, "intro")} />}
          {phase === "manifesto" && <SceneManifesto key="manifesto" t={localProgress(t, "manifesto")} />}
          {phase === "bridge"    && <SceneBridge    key="bridge"    t={localProgress(t, "bridge")} />}
          {phase === "services"  && <SceneServices  key="services"  t={localProgress(t, "services")} />}
          {phase === "billboard" && <SceneBillboard key="billboard" t={localProgress(t, "billboard")} />}
          {phase === "stats"     && <SceneStats     key="stats"     t={localProgress(t, "stats")} />}
          {phase === "cta"       && <SceneCTA       key="cta"       t={localProgress(t, "cta")} />}
        </AnimatePresence>

        <ProgressBar t={t} hidden={recordMode} />

        {!playing && t < 0.01 && (
          <button
            onClick={play}
            className="absolute inset-0 flex items-center justify-center group"
            style={{ background: "rgba(0,0,0,0.55)", cursor: "pointer" }}
          >
            <div className="flex flex-col items-center gap-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "#1535C2", boxShadow: "0 0 60px rgba(21,53,194,0.6)" }}
              >
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <path d="M0 0 L22 13 L0 26 Z" fill="#fff" />
                </svg>
              </div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/60">Play Reel</div>
            </div>
          </button>
        )}
      </div>

      {!recordMode && (
        <div className="w-full max-w-[1100px] mt-6 flex flex-col gap-4 text-white">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={playing ? pause : play}
              className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium transition-colors"
              style={{ background: "#1535C2", color: "#fff" }}
            >
              {playing ? "Pause" : t > 0 ? "Resume" : "Play"}
            </button>
            <button
              onClick={restart}
              className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium border border-white/20 hover:border-white/50 transition-colors"
            >
              Restart
            </button>
            <button
              onClick={() => { setRecordMode(true); if (!playing) play(); }}
              className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium border border-white/20 hover:border-white/50 transition-colors"
            >
              Record Mode
            </button>
            <div className="ml-auto text-[10px] tracking-[0.18em] uppercase text-white/40">
              Space · Play/Pause   R · Restart   F · Record Mode
            </div>
          </div>

          <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 leading-[1.8] max-w-[760px]">
            Screen-record the square stage (macOS: ⌘⇧5 → record selection · Windows: Snipping Tool or Xbox Game Bar).
            Press <span className="text-white/70">F</span> for a clean fullscreen recording surface, then{" "}
            <span className="text-white/70">R</span> to restart the reel from frame one. Upload the MP4 native to LinkedIn.
          </div>
        </div>
      )}

      {recordMode && (
        <button
          onClick={() => setRecordMode(false)}
          className="fixed top-4 right-4 px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase text-white/40 hover:text-white/80 border border-white/10 hover:border-white/40 transition-colors"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          Exit Record
        </button>
      )}
    </div>
  );
}

function Videos({
  heroRef, soohRef, servicesRef, billboardRef, phase, activeVideo,
}: {
  heroRef: React.RefObject<HTMLVideoElement | null>;
  soohRef: React.RefObject<HTMLVideoElement | null>;
  servicesRef: React.RefObject<HTMLVideoElement | null>;
  billboardRef: React.RefObject<HTMLVideoElement | null>;
  phase: Phase;
  activeVideo?: string;
  t: number;
}) {
  const opacityFor = (src: string) => {
    if (activeVideo !== src) return 0;
    if (phase === "manifesto") return 0.42;
    if (phase === "services")  return 0.78;
    if (phase === "billboard") return 0.88;
    if (phase === "stats")     return 0.38;
    return 0;
  };
  const videoStyle: CSSProperties = {
    position: "absolute", inset: 0, width: "100%", height: "100%",
    objectFit: "cover", transition: "opacity 800ms ease-in-out",
  };
  return (
    <>
      <video ref={heroRef}      src={HERO_VIDEO}      muted loop playsInline preload="auto" style={{ ...videoStyle, opacity: opacityFor(HERO_VIDEO) }} />
      <video ref={servicesRef}  src={SERVICES_VIDEO}  muted loop playsInline preload="auto" style={{ ...videoStyle, opacity: opacityFor(SERVICES_VIDEO) }} />
      <video ref={billboardRef} src={BILLBOARD_VIDEO} muted loop playsInline preload="auto" style={{ ...videoStyle, opacity: opacityFor(BILLBOARD_VIDEO) }} />
      <video ref={soohRef}      src={SOOH_VIDEO}      muted loop playsInline preload="auto" style={{ ...videoStyle, opacity: opacityFor(SOOH_VIDEO) }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}

function BrandMark({ t }: { t: number }) {
  if (t < 2.4) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute top-8 left-8 flex flex-col z-30"
    >
      <span
        className="leading-none uppercase whitespace-nowrap text-white"
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          fontSize: "18px",
          letterSpacing: "-0.045em",
        }}
      >
        THINKWAY
      </span>
      <div className="flex items-center mt-[5px]">
        <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#1535C2" }} />
        <div className="h-[0.75px] w-[60px] ml-[5px]" style={{ background: "rgba(255,255,255,0.25)" }} />
      </div>
    </motion.div>
  );
}

function Timecode({ t, hidden }: { t: number; hidden: boolean }) {
  if (hidden) return null;
  const phase = phaseAt(t);
  const labels: Record<Phase, string> = {
    intro: "000 · OPEN",
    manifesto: "001 · MANIFESTO",
    bridge: "002 · TRANSITION",
    services: "003 · SERVICES",
    billboard: "004 · IMPACT",
    stats: "005 · NUMBERS",
    cta: "006 · LAUNCH",
  };
  return (
    <div className="absolute top-8 right-8 z-30 text-right">
      <div className="text-[9px] tracking-[0.3em] uppercase text-white/40">{labels[phase]}</div>
    </div>
  );
}

function ProgressBar({ t, hidden }: { t: number; hidden: boolean }) {
  if (hidden) return null;
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30" style={{ background: "rgba(255,255,255,0.08)" }}>
      <div
        className="h-full"
        style={{
          width: `${(t / TOTAL) * 100}%`,
          background: "#1535C2",
          boxShadow: "0 0 12px rgba(21,53,194,0.7)",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}

function SceneIntro({ t }: { t: number }) {
  const dot = easeOut(Math.min(1, t / 0.35));
  const line = easeOut(Math.max(0, Math.min(1, (t - 0.4) / 0.5)));
  const word = Math.max(0, Math.min(1, (t - 0.9) / 0.8));
  const fadeOut = t > 0.85 ? Math.max(0, 1 - (t - 0.85) / 0.15) : 1;
  const letters = "THINKWAY".split("");
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center z-20" style={{ opacity: fadeOut }}>
      <div className="flex flex-col items-center gap-6">
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "#1535C2",
            transform: `scale(${dot})`,
            boxShadow: `0 0 ${40 * dot}px rgba(21,53,194,${0.7 * dot})`,
          }}
        />
        <div
          className="h-[1px]"
          style={{
            width: `${line * 220}px`,
            background: "linear-gradient(90deg, rgba(21,53,194,0.9), rgba(255,255,255,0.0))",
          }}
        />
        <div className="flex">
          {letters.map((l, i) => {
            const lp = Math.max(0, Math.min(1, (word - i * 0.08) * 3));
            return (
              <span
                key={i}
                className="text-white uppercase"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "44px",
                  letterSpacing: "-0.04em",
                  opacity: lp,
                  transform: `translateY(${(1 - lp) * 16}px)`,
                  transition: "none",
                }}
              >
                {l}
              </span>
            );
          })}
        </div>
        <div className="text-[10px] tracking-[0.4em] uppercase text-white/40" style={{ opacity: word }}>
          Influencer Marketing · Global Network
        </div>
      </div>
    </motion.div>
  );
}

function SceneManifesto({ t }: { t: number }) {
  const lines = ["YOUR BRAND", "DESERVES MORE", "THAN ADS."];
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col justify-center px-16"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="mb-8 text-[10px] tracking-[0.4em] uppercase"
        style={{ color: "#1535C2", opacity: easeOut(Math.min(1, t * 4)) }}
      >
        — Manifesto · 001
      </div>
      {lines.map((line, i) => {
        const start = 0.1 + i * 0.18;
        const lp = Math.max(0, Math.min(1, (t - start) / 0.35));
        const fadeAtEnd = t > 0.88 ? Math.max(0, 1 - (t - 0.88) / 0.12) : 1;
        return (
          <div key={i} style={{ overflow: "hidden" }}>
            <div
              className="text-white uppercase"
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 7.5vmin, 92px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                transform: `translateY(${(1 - easeOut(lp)) * 110}%)`,
                opacity: fadeAtEnd,
              }}
            >
              {line === "THAN ADS." ? (
                <>THAN ADS<span style={{ color: "#1535C2" }}>.</span></>
              ) : (
                line
              )}
            </div>
          </div>
        );
      })}
      <div
        className="mt-10 h-[1px]"
        style={{
          width: `${Math.max(0, Math.min(1, (t - 0.65) / 0.25)) * 320}px`,
          background: "linear-gradient(90deg, rgba(21,53,194,1), rgba(21,53,194,0))",
        }}
      />
    </motion.div>
  );
}

function SceneBridge({ t }: { t: number }) {
  const reveal = easeOut(Math.min(1, t * 2));
  const fadeOut = t > 0.8 ? Math.max(0, 1 - (t - 0.8) / 0.2) : 1;
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center px-16 text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "rgba(0,0,0,0.55)", opacity: fadeOut }}
    >
      <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6" style={{ opacity: reveal }}>
        — A different way
      </div>
      <div
        className="text-white uppercase"
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px, 4.6vmin, 56px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          opacity: reveal,
          transform: `translateY(${(1 - reveal) * 24}px)`,
        }}
      >
        So we built something<br />
        the algorithm can&apos;t fake<span style={{ color: "#1535C2" }}>.</span>
      </div>
      <div
        className="mt-8 h-[1px]"
        style={{
          width: `${reveal * 200}px`,
          background: "linear-gradient(90deg, rgba(21,53,194,0), rgba(21,53,194,1), rgba(21,53,194,0))",
        }}
      />
    </motion.div>
  );
}

function SceneServices({ t }: { t: number }) {
  const titleP = easeOut(Math.min(1, t * 2.5));
  const fadeOut = t > 0.88 ? Math.max(0, 1 - (t - 0.88) / 0.12) : 1;
  return (
    <motion.div
      className="absolute inset-0 z-20"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      style={{ opacity: fadeOut }}
    >
      <div className="absolute left-16 bottom-24 max-w-[60%]">
        <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#1535C2", opacity: titleP }}>
          003 · Services
        </div>
        <div
          className="text-white uppercase"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 5.2vmin, 64px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            opacity: titleP,
            transform: `translateY(${(1 - titleP) * 30}px)`,
          }}
        >
          Influencer<br />marketing<span style={{ color: "#1535C2" }}>.</span><br />
          <span style={{ fontWeight: 400, fontSize: "0.4em", letterSpacing: "0.3em", color: "rgba(255,255,255,0.6)" }}>
            Built to perform.
          </span>
        </div>
      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {PLATFORMS.map((p, i) => {
          const start = 0.15 + i * 0.12;
          const lp = Math.max(0, Math.min(1, (t - start) / 0.4));
          return (
            <div
              key={p.name}
              className="flex items-center gap-3"
              style={{
                opacity: lp,
                transform: `translateX(${(1 - lp) * 40}px)`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: p.color, boxShadow: `0 0 10px ${p.color}` }}
              />
              <div className="flex flex-col">
                <span className="text-white text-[13px] font-semibold tracking-wide">{p.name}</span>
                <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase">{p.stat} users</span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SceneBillboard({ t }: { t: number }) {
  const fadeIn = easeOut(Math.min(1, t * 3));
  const titleP = easeOut(Math.max(0, Math.min(1, (t - 0.2) / 0.45)));
  const subP = easeOut(Math.max(0, Math.min(1, (t - 0.45) / 0.45)));
  const fadeOut = t > 0.88 ? Math.max(0, 1 - (t - 0.88) / 0.12) : 1;
  return (
    <motion.div
      className="absolute inset-0 z-20"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      style={{ opacity: fadeOut }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.85) 100%)",
          opacity: fadeIn,
        }}
      />
      <div className="absolute left-16 right-16 bottom-20">
        <div className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#1535C2", opacity: titleP }}>
          004 · Impact
        </div>
        <div
          className="text-white"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 5.4vmin, 68px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            textTransform: "uppercase",
            opacity: titleP,
            transform: `translateY(${(1 - titleP) * 28}px)`,
          }}
        >
          From awareness<br />to conversion<span style={{ color: "#1535C2" }}>.</span>
        </div>
        <div
          className="mt-5 text-white/70 text-[12px] tracking-[0.22em] uppercase"
          style={{ opacity: subP, transform: `translateY(${(1 - subP) * 14}px)` }}
        >
          Campaigns that move people — and metrics.
        </div>
      </div>
    </motion.div>
  );
}

function SceneStats({ t }: { t: number }) {
  const headP = easeOut(Math.min(1, t * 3));
  const fadeOut = t > 0.88 ? Math.max(0, 1 - (t - 0.88) / 0.12) : 1;
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col justify-center px-16"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ opacity: fadeOut, background: "rgba(0,0,0,0.55)" }}
    >
      <div className="text-[10px] tracking-[0.4em] uppercase mb-10" style={{ color: "#1535C2", opacity: headP }}>
        005 · The numbers
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-12">
        {STATS.map((s, i) => {
          const start = 0.1 + i * 0.14;
          const lp = Math.max(0, Math.min(1, (t - start) / 0.5));
          const eased = easeOut(lp);
          const display = s.decimals
            ? (s.val * eased).toFixed(s.decimals)
            : Math.round(s.val * eased).toString();
          return (
            <div key={s.label} style={{ opacity: lp, transform: `translateY(${(1 - lp) * 24}px)` }}>
              <div
                className="text-white tabular-nums"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(56px, 8vmin, 104px)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.9,
                }}
              >
                {display}<span style={{ color: "#1535C2" }}>{s.suffix}</span>
              </div>
              <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-white/50">{s.label}</div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SceneCTA({ t }: { t: number }) {
  const fadeIn = easeOut(Math.min(1, t * 2.5));
  const line1 = easeOut(Math.max(0, Math.min(1, (t - 0.15) / 0.35)));
  const line2 = easeOut(Math.max(0, Math.min(1, (t - 0.4) / 0.35)));
  const sub   = easeOut(Math.max(0, Math.min(1, (t - 0.6) / 0.35)));
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "#000", opacity: fadeIn }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full mb-10"
        style={{ background: "#1535C2", boxShadow: "0 0 40px rgba(21,53,194,0.8)" }}
      />
      <div
        className="text-white uppercase"
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(52px, 7.4vmin, 96px)",
          letterSpacing: "-0.045em",
          lineHeight: 0.95,
          opacity: line1,
          transform: `translateY(${(1 - line1) * 24}px)`,
        }}
      >
        THINKWAY
      </div>
      <div
        className="mt-5 text-white uppercase"
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(22px, 3.2vmin, 38px)",
          letterSpacing: "0.04em",
          opacity: line2,
          transform: `translateY(${(1 - line2) * 18}px)`,
        }}
      >
        Now on LinkedIn<span style={{ color: "#1535C2" }}>.</span>
      </div>
      <div
        className="mt-8 text-white/60 text-[11px] tracking-[0.35em] uppercase max-w-[60%]"
        style={{ opacity: sub, transform: `translateY(${(1 - sub) * 12}px)` }}
      >
        Follow the future of influence.
      </div>
      <div
        className="mt-12 flex items-center gap-3"
        style={{ opacity: sub }}
      >
        <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#1535C2" }} />
        <span className="text-white/70 text-[11px] tracking-[0.28em] uppercase">thinkway.agency</span>
      </div>
    </motion.div>
  );
}
