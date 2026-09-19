import React from "react";

interface CornerBracketsProps {
  offset?: number;
  className?: string;
}

export const CornerBrackets: React.FC<CornerBracketsProps> = ({
  offset = 14,
  className = "",
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      {/* Top Left */}
      <svg
        className="absolute"
        style={{ top: `${offset}px`, left: `${offset}px` }}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M21 1H1V21"
          stroke="#141414"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Top Right */}
      <svg
        className="absolute"
        style={{ top: `${offset}px`, right: `${offset}px` }}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M1 1H21V21"
          stroke="#141414"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Bottom Left */}
      <svg
        className="absolute"
        style={{ bottom: `${offset}px`, left: `${offset}px` }}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M21 21H1V1"
          stroke="#141414"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute"
        style={{ bottom: `${offset}px`, right: `${offset}px` }}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M1 21H21V1"
          stroke="#141414"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
};
