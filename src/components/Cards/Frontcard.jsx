// src/components/GlowBorderCard.jsx
import React from "react";
import styled from "styled-components";

const GlowBorderCard = ({
  children,
  width = "220px",
  height = "280px",
  radius = "18px",
  bg = "#07182E",
  glowFrom = "rgb(0,183,255)",
  glowTo = "rgb(255,48,255)"
}) => {
  return (
    <StyledWrapper
      style={{ "--w": width, "--h": height, "--r": radius, "--bg": bg, "--c1": glowFrom, "--c2": glowTo }}
    >
      <div className="glow-card">
        <div className="inner">{children}</div>
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
  }

  .glow-card::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 150%;
    background-image: linear-gradient(180deg, var(--c1), var(--c2));
    animation: rotateGlow 3s linear infinite;
  }

  .glow-card::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: var(--bg);
    border-radius: calc(var(--r) - 5px);
    z-index: 1;
  }

  @keyframes rotateGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
