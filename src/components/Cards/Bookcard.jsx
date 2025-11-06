// Card.jsx
import React from "react";
import styled from "styled-components";

const Card = ({
  frontText = "",
  backTitle = "",
  backBody = "",
  frontImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
}) => {
  return (
    <StyledWrapper>
      <div className="book">
        <div className="book-inner">
          {/* FRONT SIDE */}
          <div
            className="book-front"
            style={{ backgroundImage: `url(${frontImage})` }}
          >
            <div className="overlay">
              <p>{frontText}</p>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="book-back">
            <h3>{backTitle}</h3>
            <p>{backBody}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  perspective: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .book {
    width: 220px;
    height: 300px;
    position: relative;
    border-radius: 12px;
    perspective: 1000px;
  }

  .book-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1); /* slower + smooth */
    transform-style: preserve-3d;
  }

  /* FLIP EFFECT */
  .book:hover .book-inner {
    transform: rotateY(180deg);
  }

  /* FRONT SIDE */
  .book-front,
  .book-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* ensures correct visibility */
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  .book-front {
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  /* FRONT OVERLAY WITH TEXT */
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    color: white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 10px;
  }

  .overlay p {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0;
  }

  /* BACK SIDE */
  .book-back {
    background: #ffffff;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.08);
  }

  .book-back h3 {
    font-size: 28px;
    color: #1e3a8a;
    margin-bottom: 6px;
    font-weight: 800;
  }

  .book-back p {
    font-size: 14px;
    color: #475569;
    margin: 0;
    font-weight: 500;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .book {
      width: 180px;
      height: 240px;
    }
    .overlay p {
      font-size: 18px;
    }
    .book-back h3 {
      font-size: 22px;
    }
  }
`;

export default Card;
