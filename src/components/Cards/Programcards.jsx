// src/components/UI/Card.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Reusable Card component
 *
 * Props:
 * - title: string (card title)
 * - desc: string (short description)
 * - href: string (link for the whole card or CTA)
 * - image: string (image URL shown at top)
 * - ctaText: string (text for action button)
 * - imageHeight: string (CSS height for image area, default "150px")
 * - onClick: func (optional click handler)
 * - target: string ("_self" | "_blank")
 * - className: string (for styled-component composition / extra classes)
 * - bg: string (background color for image area fallback)
 */
export default function Card({
  title = "Card title",
  desc = "Short description goes here.",
  href = "#",
  image = "",
  ctaText = "Find out more",
  imageHeight = "150px",
  onClick,
  target = "_self",
  className = "",
  bg = "rgb(239, 205, 255)",
  ariaLabel,
}) {
  const isLink = Boolean(href && href !== "#");

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
    // otherwise let the link navigate naturally
  };

  return (
    <StyledWrapper className={className}>
      <article className="card" role="article" aria-label={ariaLabel || title}>
        <a
          className="cardLink"
          href={href}
          onClick={isLink ? handleClick : undefined}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          aria-hidden={!isLink}
        >
          <div
            className="image"
            role="img"
            aria-label={title}
            style={{
              backgroundImage: image ? `url(${image})` : undefined,
              backgroundColor: image ? undefined : bg,
              height: imageHeight,
            }}
          />
        </a>

        <div className="content">
          <a className="titleLink" href={href} onClick={isLink ? handleClick : undefined} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
            <span className="title">{title}</span>
          </a>

          <p className="desc">{desc}</p>

          <div className="actionRow">
            <a
              className="action"
              href={href}
              onClick={isLink ? handleClick : undefined}
              target={target}
              rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
              <span className="actionText">{ctaText}</span>
              <span aria-hidden="true" className="actionArrow">
                →
              </span>
            </a>
          </div>
        </div>
      </article>
    </StyledWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  imageHeight: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf(["_self", "_blank"]),
  className: PropTypes.string,
  bg: PropTypes.string,
  ariaLabel: PropTypes.string,
};

const StyledWrapper = styled.div`
  .card {
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .cardLink,
  .titleLink {
    text-decoration: none;
    color: inherit;
  }

  .content {
    padding: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: rgb(239, 205, 255);
    background-position: center;
    background-size: cover;
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .desc {
    margin-top: 0.25rem;
    color: #6b7280;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    flex: 1 1 auto;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .actionRow {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.25rem;
  }

  .action {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    background-color: #2563eb;
    padding: 6px 10px;
    border-radius: 6px;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.12);
  }

  .action:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.18);
    background-color: #1e40af;
  }

  .actionArrow {
    transition: transform 260ms ease;
    display: inline-block;
  }

  .action:hover .actionArrow {
    transform: translateX(6px);
  }

  /* small accessibility / focus states */
  .card :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.14);
    border-color: rgba(37, 99, 235, 0.14);
  }

  /* responsive tweak */
  @media (max-width: 420px) {
    .card {
      max-width: 100%;
    }
    .image {
      height: 140px;
    }
  }
`;
