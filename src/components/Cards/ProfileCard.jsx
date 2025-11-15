// src/components/ProfileCard.jsx
import React from "react";
import styled from "styled-components";

/**
 * Optimized version — identical UI, better performance and accessibility.
 *
 * New prop:
 *  - avatarSize (number) -> size in px for the avatar container (default: 72)
 *
 * Note: the img's width/height attributes are set to avatarSize * 2 (for high-DPI)
 * and the avatar wrapper receives inline styles so you can request larger images.
 */
export default function ProfileCard({
  name = "John Doe",
  role = "Title / Role",
  avatar = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  bio = "Short profile bio goes here. Keep it to 2–3 lines for best visual balance.",
  socials = {},
  className = "",
  avatarSize = 72, // px (default small). Pass larger e.g. 160 for big cards.
}) {
  const { instagram, twitter, linkedin, whatsapp } = socials || {};
  const imgAttrSize = Math.round(avatarSize * 2); // for retina

  return (
    <StyledWrapper className={className}>
      <div
        className="card"
        role="group"
        aria-label={`${name}, ${role}`}
        tabIndex={0}
      >
        {/* Top section */}
        <div className="top">
          <div
            className="avatarWrap"
            aria-hidden="true"
            style={{
              width: avatarSize + "px",
              height: avatarSize + "px",
              minWidth: avatarSize + "px",
              minHeight: avatarSize + "px",
            }}
          >
            <img
              src={avatar}
              alt={`${name}'s portrait`}
              className="avatar"
              loading="lazy"
              decoding="async"
              width={imgAttrSize}
              height={imgAttrSize}
            />
          </div>
          <div className="identity">
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="bio">{bio}</p>

        {/* Social Links */}
        <div className="socialRow" aria-label="Social links">
          {instagram && (
            <a
              href={instagram}
              className="socialContainer containerOne"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Instagram`}
              title="Instagram"
            >
              <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003z" />
              </svg>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              className="socialContainer containerTwo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Twitter`}
              title="Twitter / X"
            >
              <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218A3.203 3.203 0 0 1 .78 9.45 3.23 3.23 0 0 1 .166 9.393a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              className="socialContainer containerThree"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              title="LinkedIn"
            >
              <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          )}
          {whatsapp && (
            <a
              href={whatsapp}
              className="socialContainer containerFour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with ${name} on WhatsApp`}
              title="WhatsApp"
            >
              <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

/* ----------------------- styled-components ----------------------- */

const StyledWrapper = styled.div`
  --card-bg: mediumturquoise;
  --accent: lightblue;
  --radius: 15px;
  --pad: 20px;
  --text: #0f172a;

  .card {
    position: relative;
    width: 320px;
    min-height: 420px;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 28px;
    color: black;
    overflow: hidden;
    border-radius: var(--radius);
    cursor: default;
    box-shadow: 0 10px 24px rgba(2, 6, 23, 0.18);
    transition: transform 0.45s ease, box-shadow 0.45s ease;
    will-change: transform, box-shadow;
  }

  /* larger card when container forces width via className */
  &.largeCard .card {
    width: 100%;
    min-height: 520px;
  }

  .card:hover {
    transform: translateY(-6px);
   box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);

  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 22%;
    height: 22%;
    background-color:  rgba(0, 0, 0, 0.28);

    transition: all 0.5s ease;
    will-change: width, height, border-radius;
  }
  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 var(--radius) 0 100%;
  }
  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 var(--radius);
  }
  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }

  .top {
    display: flex;
    align-items: center;
    gap: 14px;
    z-index: 1;
  }
  .avatarWrap {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 14px rgba(2, 6, 23, 0.25);
    flex-shrink: 0;
  }
  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .identity {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.1;
    color: black;
    margin: 0;
  }
  .role {
    font-size: 0.9rem;
    font-weight: 600;
    color: black;
    margin: 2px 0 0;
  }

  .bio {
    z-index: 1;
    color: black;
    line-height: 1.5;
    font-size: 0.95rem;
    margin-top: 6px;
  }

  .socialRow {
    z-index: 1;
    margin-top: auto;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(2, 6, 23, 0.25);
    will-change: transform, background-color;
  }

  .socialContainer:active {
    transform: scale(0.9);
  }

  .containerOne:hover { background-color: #d62976; }
  .containerTwo:hover { background-color: #00acee; }
  .containerThree:hover { background-color: #0072b1; }
  .containerFour:hover { background-color: #128c7e; }

  .socialSvg { width: 20px; }
  .socialSvg path { fill: #ffffff; }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 380px) {
    .card {
      width: 100%;
      min-height: 400px;
    }
  }
`;
