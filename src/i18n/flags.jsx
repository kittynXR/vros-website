// Inline SVG flags for the locale switcher.
//
// Windows + most desktop browsers do NOT render Unicode regional flag emoji as
// flags — they show plain country codes like "GB" or "JP" — so we ship our own
// flat-color SVGs (~200-500 bytes each). Each viewBox is 24x18 (4:3).
//
// Catalonia (ca) uses the Senyera (yellow with four red horizontal bars), as
// Catalan has no national flag in the Unicode regional set.
//
// For "en" we use the US flag because the US is the primary Steam audience for
// vrOS; swap to GB or a globe icon if your audience leans elsewhere.

import { LOCALES } from "./index.jsx";

function FlagUS(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#fff" />
      <g fill="#b22234">
        <rect y="0" width="24" height="1.385" />
        <rect y="2.77" width="24" height="1.385" />
        <rect y="5.54" width="24" height="1.385" />
        <rect y="8.31" width="24" height="1.385" />
        <rect y="11.08" width="24" height="1.385" />
        <rect y="13.85" width="24" height="1.385" />
        <rect y="16.62" width="24" height="1.38" />
      </g>
      <rect width="9.6" height="9.69" fill="#3c3b6e" />
    </svg>
  );
}

function FlagJP(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#fff" />
      <circle cx="12" cy="9" r="5.4" fill="#bc002d" />
    </svg>
  );
}

function FlagES(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#c60b1e" />
      <rect y="4.5" width="24" height="9" fill="#ffc400" />
    </svg>
  );
}

function FlagFR(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="8" height="18" fill="#002654" />
      <rect x="8" width="8" height="18" fill="#fff" />
      <rect x="16" width="8" height="18" fill="#ed2939" />
    </svg>
  );
}

function FlagDE(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="6" fill="#000" />
      <rect y="6" width="24" height="6" fill="#dd0000" />
      <rect y="12" width="24" height="6" fill="#ffce00" />
    </svg>
  );
}

function FlagIT(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="8" height="18" fill="#009246" />
      <rect x="8" width="8" height="18" fill="#fff" />
      <rect x="16" width="8" height="18" fill="#ce2b37" />
    </svg>
  );
}

function FlagRU(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="6" fill="#fff" />
      <rect y="6" width="24" height="6" fill="#0039a6" />
      <rect y="12" width="24" height="6" fill="#d52b1e" />
    </svg>
  );
}

function FlagKR(props) {
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#fff" />
      <g transform="translate(12 9) rotate(-33)">
        <circle r="3.6" fill="#c60c30" />
        <path d="M -3.6 0 A 3.6 3.6 0 0 1 3.6 0 A 1.8 1.8 0 0 1 0 0 A 1.8 1.8 0 0 0 -3.6 0 Z" fill="#003478" />
      </g>
      <g stroke="#000" strokeWidth="0.4" fill="none" transform="translate(12 9)">
        <g transform="rotate(-33) translate(7.2 0)">
          <line x1="-1.2" y1="-0.9" x2="1.2" y2="-0.9" />
          <line x1="-1.2" y1="0" x2="1.2" y2="0" />
          <line x1="-1.2" y1="0.9" x2="1.2" y2="0.9" />
        </g>
        <g transform="rotate(147) translate(7.2 0)">
          <line x1="-1.2" y1="-0.9" x2="1.2" y2="-0.9" />
          <line x1="-1.2" y1="0" x2="1.2" y2="0" />
          <line x1="-1.2" y1="0.9" x2="1.2" y2="0.9" />
        </g>
      </g>
    </svg>
  );
}

function FlagCN(props) {
  // simplified — large star only; recognizable as PRC flag at small sizes
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#de2910" />
      <polygon
        fill="#ffde00"
        points="5,2.5 5.97,5.48 9.1,5.48 6.57,7.32 7.54,10.3 5,8.46 2.46,10.3 3.43,7.32 0.9,5.48 4.03,5.48"
      />
      <g fill="#ffde00" transform="translate(10 2)">
        <circle r="0.4" />
      </g>
      <g fill="#ffde00" transform="translate(11 4)">
        <circle r="0.4" />
      </g>
      <g fill="#ffde00" transform="translate(11 6)">
        <circle r="0.4" />
      </g>
      <g fill="#ffde00" transform="translate(10 8)">
        <circle r="0.4" />
      </g>
    </svg>
  );
}

function FlagCAT(props) {
  // Senyera (Catalan flag): yellow field, four red horizontal stripes
  return (
    <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="18" fill="#fcdd09" />
      <g fill="#da121a">
        <rect y="2" width="24" height="2" />
        <rect y="6" width="24" height="2" />
        <rect y="10" width="24" height="2" />
        <rect y="14" width="24" height="2" />
      </g>
    </svg>
  );
}

const FLAGS = {
  en: FlagUS,
  ja: FlagJP,
  es: FlagES,
  fr: FlagFR,
  de: FlagDE,
  it: FlagIT,
  ru: FlagRU,
  ko: FlagKR,
  "zh-Hans": FlagCN,
  ca: FlagCAT,
};

export function Flag({ locale, ...rest }) {
  const Component = FLAGS[locale];
  if (!Component) return null;
  const label = LOCALES[locale]?.name || locale;
  return <Component role="img" aria-label={label} {...rest} />;
}
