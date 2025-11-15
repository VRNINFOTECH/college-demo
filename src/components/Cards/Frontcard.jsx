// src/components/GlowBorderCard.jsx
import React from "react";
import styled from "styled-components";

/**
 * GlowBorderCard
 *
 * Props:
 *  - children
 *  - width, height, radius, bg, glowFrom, glowTo (same as before)
 *  - video: optional (URL or plain YouTube ID) — used to show a play overlay
 *  - onClick: optional click handler (forwarded to inner clickable area)
 *
 * Note: This component does NOT embed the video itself. It only shows a play hint.
 * Use your modal (VideoModal) to actually render the iframe on click.
 */

function getYouTubeID(input) {
  if (!input) return null;
  const str = String(input).trim();
  if (/^[\w-]{11}$/.test(str)) return str;
  try {
    const u = new URL(str);
    const host = u.hostname.replace("www.", "");
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (/^[\w-]{11}$/.test(id)) return id;
    }
    const v = u.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;
    const parts = u.pathname.split("/").filter(Boolean);
    const possible = parts.find((p) => /^[\w-]{11}$/.test(p));
    if (possible) return possible;
  } catch (e) {}
  const m = str.match(/([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

const GlowBorderCard = ({
  children,
  width = "220px",
  height = "280px",
  radius = "18px",
  bg = "#07182E",
  glowFrom = "rgb(0,183,255)",
  glowTo = "rgb(255,48,255)",
  video = null,
  onClick = undefined,
}) => {
  const videoId = getYouTubeID(video);

  return (
    <StyledWrapper
      style={{
        "--w": width,
        "--h": height,
        "--r": radius,
        "--bg": bg,
        "--c1": glowFrom,
        "--c2": glowTo,
      }}
    >
      <div className="glow-card" role="button" aria-pressed="false">
        {/* clickable inner — attach onClick here so pseudo elements can't block it */}
        <div
          className={`inner ${onClick ? "clickable" : ""}`}
          onClick={(e) => {
            if (typeof onClick === "function") onClick(e);
          }}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && typeof onClick === "function") {
              e.preventDefault();
              onClick(e);
            }
          }}
          tabIndex={onClick ? 0 : -1}
          role={onClick ? "button" : undefined}
        >
          {children}
          {videoId && (
            <div className="play-overlay" aria-hidden>
              <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="white" strokeWidth="0" >
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.45)" />
                <path d="M26 20v24l20-12-20-12z" fill="white" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default GlowBorderCard;

const StyledWrapper = styled.div`
  .glow-card {
    width: var(--w);
    height: var(--h);
    background: var(--bg);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: var(--r);
    cursor: pointer;
  }

  .inner {
    width: calc(var(--w) - 12px);
    height: calc(var(--h) - 12px);
    background: var(--bg);
    border-radius: calc(var(--r) - 4px);
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    color: white;
    overflow: hidden;
  }

  /* ensure clickable semantics */
  .inner.clickable { cursor: pointer; outline: none; }

  /* Play overlay sits above inner content but does not stop pointer events intended for the inner container */
  .play-overlay {
    position: absolute;
    inset: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 6;
    pointer-events: none; /* don't block the click — inner handles it */
  }

  /* glow elements — set pointer-events:none so they don't intercept clicks */
  .glow-card::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 150%;
    background-image: linear-gradient(180deg, var(--c1), var(--c2));
    animation: rotateGlow 3s linear infinite;
    pointer-events: none;
    opacity: 0.95;
    mix-blend-mode: screen;
    left: -20%;
    top: -25%;
    transform-origin: center;
  }

  .glow-card::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: var(--bg);
    border-radius: calc(var(--r) - 5px);
    z-index: 1;
    pointer-events: none;
  }

  @keyframes rotateGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* mobile responsiveness */
  @media (max-width: 640px) {
    .glow-card { width: min(100%, var(--w)); }
    .inner { width: calc(100% - 12px); }
  }
`;
