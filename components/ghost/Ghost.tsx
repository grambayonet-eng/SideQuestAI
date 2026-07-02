type GhostProps = {
  mood?: "happy" | "thinking";
};

export function Ghost({ mood = "happy" }: GhostProps) {
  return (
    <div className="animate-[ghost-breathe_4s_ease-in-out_infinite]">
      <svg
        width="300"
        height="360"
        viewBox="0 0 300 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Ghost, the SideQuestAI mascot"
      >
        <ellipse
          cx="150"
          cy="330"
          rx="82"
          ry="16"
          fill="rgba(30, 27, 75, 0.35)"
        />

        <path
          d="
            M150 34
            C96 34 62 78 62 139
            V250
            C62 292 94 320 150 320
            C206 320 238 292 238 250
            V139
            C238 78 204 34 150 34Z

            M62 238
            C78 250 88 250 104 238
            C119 258 135 258 150 238
            C165 258 181 258 196 238
            C212 250 222 250 238 238
          "
          fill="url(#ghostBody)"
        />

        <path
          d="M65 152 C38 160 38 205 68 210 C82 192 82 169 65 152Z"
          fill="url(#ghostBody)"
        />

        <path
          d="M235 152 C262 160 262 205 232 210 C218 192 218 169 235 152Z"
          fill="url(#ghostBody)"
        />

        <ellipse cx="117" cy="145" rx="12" ry="20" fill="#1E1B4B" />
        <ellipse cx="183" cy="145" rx="12" ry="20" fill="#1E1B4B" />

        <circle cx="121" cy="137" r="4" fill="white" opacity="0.85" />
        <circle cx="187" cy="137" r="4" fill="white" opacity="0.85" />

        <circle cx="101" cy="180" r="12" fill="#FDA4AF" opacity="0.55" />
        <circle cx="199" cy="180" r="12" fill="#FDA4AF" opacity="0.55" />

        {mood === "happy" ? (
          <path
            d="M130 185 C137 197 163 197 170 185"
            stroke="#1E1B4B"
            strokeWidth="7"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M132 190 H168"
            stroke="#1E1B4B"
            strokeWidth="7"
            strokeLinecap="round"
          />
        )}

        <rect
          x="106"
          y="218"
          width="88"
          height="68"
          rx="18"
          fill="url(#satchel)"
        />
        <path
          d="M124 218 C132 203 168 203 176 218"
          stroke="#C4B5FD"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M150 236 L157 250 L172 252 L161 263 L164 278 L150 271 L136 278 L139 263 L128 252 L143 250 Z"
          fill="#FBBF24"
        />

        <defs>
          <linearGradient id="ghostBody" x1="90" y1="48" x2="218" y2="313">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.55" stopColor="#F5F3FF" />
            <stop offset="1" stopColor="#D8B4FE" />
          </linearGradient>

          <linearGradient id="satchel" x1="106" y1="218" x2="194" y2="286">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
