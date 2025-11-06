import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlowApplyButton = ({
  text = "Apply Now",
  to = null,        // if link is provided, button becomes Link
  onClick = () => {},
  width = "150px",
  height = "48px",
  bg = "" // default blue
}) => {
  const Btn = (
    <button
      className="button"
      onClick={onClick}
      style={{ width, height, backgroundColor: bg }}
    >
      {text}
      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
      </svg>
    </button>
  );

  return <StyledWrapper>{to ? <Link to={to}>{Btn}</Link> : Btn}</StyledWrapper>;
};

export default GlowApplyButton;

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-inline: 1.25rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
    transition: 0.3s ease;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translateX(4px);
  }

  .button::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255,255,255,0) 30%,
      rgba(255,255,255,0.8),
      rgba(255,255,255,0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }
    60% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`;
