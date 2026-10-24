export default function RobotCharacter({ gaze = { x: 0, y: 0 } }) {
  const eyeX = gaze.x * 3.1;
  const eyeY = gaze.y * 2.4;

  return (
    <svg
      className="roaming-robot-svg"
      viewBox="0 0 200 244"
      role="img"
      aria-label="Animated friendly AI robot"
    >
      <defs>
        <linearGradient id="roboShell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="48%" stopColor="#edf5ff" />
          <stop offset="100%" stopColor="#c4d6eb" />
        </linearGradient>
        <linearGradient id="roboShellSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b4c8df" />
          <stop offset="100%" stopColor="#eaf4ff" />
        </linearGradient>
        <linearGradient id="roboFace" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#203f61" />
          <stop offset="100%" stopColor="#071b30" />
        </linearGradient>
        <linearGradient id="roboEye" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b5f7ff" />
          <stop offset="100%" stopColor="#36b9ee" />
        </linearGradient>
        <linearGradient id="roboAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#72e3ef" />
          <stop offset="100%" stopColor="#4d91ee" />
        </linearGradient>
        <filter id="roboGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
        <filter id="roboSoftShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="231" rx="43" ry="8" fill="#426a91" opacity=".16" filter="url(#roboSoftShadow)" />

      {/* Antenna */}
      <g className="robot-antenna">
        <path d="M100 34 V23" stroke="#8ca8c7" strokeWidth="6" strokeLinecap="round" />
        <path d="M100 31 V23" stroke="#edf8ff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="17" r="9" fill="#4dbde8" opacity=".2" filter="url(#roboGlow)" />
        <circle cx="100" cy="17" r="6" fill="url(#roboAccent)" stroke="#e8fbff" strokeWidth="2" />
        <circle cx="98" cy="15" r="1.7" fill="#fff" />
      </g>

      {/* Arms behind body */}
      <g className="robot-arm robot-arm-left">
        <path d="M59 127 C45 131 39 145 35 157" fill="none" stroke="#8da8c7" strokeWidth="16" strokeLinecap="round" />
        <path d="M59 127 C45 131 39 145 35 157" fill="none" stroke="url(#roboShell)" strokeWidth="11" strokeLinecap="round" />
        <circle cx="36" cy="158" r="9" fill="#a8c0dc" />
        <circle cx="36" cy="158" r="6" fill="url(#roboShell)" />
        <path d="M35 164 L29 172 M36 165 L36 175 M38 164 L44 171" stroke="#a8c0dc" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g className="robot-arm robot-arm-right">
        <path d="M141 127 C154 135 160 146 162 158" fill="none" stroke="#8da8c7" strokeWidth="16" strokeLinecap="round" />
        <path d="M141 127 C154 135 160 146 162 158" fill="none" stroke="url(#roboShell)" strokeWidth="11" strokeLinecap="round" />
        <circle cx="162" cy="159" r="9" fill="#a8c0dc" />
        <circle cx="162" cy="159" r="6" fill="url(#roboShell)" />
      </g>

      {/* Legs and articulated joints */}
      <g className="robot-leg robot-leg-left">
        <path d="M78 183 L73 204" stroke="#8da8c7" strokeWidth="15" strokeLinecap="round" />
        <path d="M78 183 L73 204" stroke="url(#roboShell)" strokeWidth="10" strokeLinecap="round" />
        <rect x="55" y="201" width="35" height="17" rx="8.5" fill="#91aaca" />
        <rect x="57" y="201" width="31" height="13" rx="6.5" fill="url(#roboShell)" />
        <path d="M64 209 H80" stroke="#69bce4" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="robot-leg robot-leg-right">
        <path d="M122 183 L127 204" stroke="#8da8c7" strokeWidth="15" strokeLinecap="round" />
        <path d="M122 183 L127 204" stroke="url(#roboShell)" strokeWidth="10" strokeLinecap="round" />
        <rect x="111" y="201" width="35" height="17" rx="8.5" fill="#91aaca" />
        <rect x="113" y="201" width="31" height="13" rx="6.5" fill="url(#roboShell)" />
        <path d="M120 209 H136" stroke="#69bce4" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Torso */}
      <rect x="57" y="116" width="86" height="75" rx="24" fill="#a8bfd9" />
      <rect x="60" y="113" width="80" height="73" rx="22" fill="url(#roboShell)" stroke="#b4c9e1" strokeWidth="1.6" />
      <path d="M72 124 Q100 116 128 124" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".9" />
      <rect x="76" y="132" width="48" height="34" rx="10" fill="#183a59" stroke="#8db3d6" strokeWidth="1.5" />
      <rect x="81" y="137" width="38" height="24" rx="6" fill="#0b263e" />
      <path d="M86 149 L92 143 L98 150 L105 141 L113 147" fill="none" stroke="#63d9ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="87" cy="174" r="2.8" fill="#4bc6e8" />
      <circle cx="100" cy="174" r="2.8" fill="#7bdce9" />
      <circle cx="113" cy="174" r="2.8" fill="#7caff4" />

      {/* Head shell and side panels */}
      <rect x="35" y="32" width="130" height="105" rx="34" fill="#a7bfd9" />
      <rect x="37" y="29" width="126" height="104" rx="32" fill="url(#roboShell)" stroke="#a9c1dc" strokeWidth="1.8" />
      <path d="M53 42 Q100 23 147 42" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".92" />
      <rect x="47" y="45" width="106" height="69" rx="23" fill="#9eb6d1" />
      <rect x="50" y="43" width="100" height="67" rx="21" fill="url(#roboFace)" stroke="#315a7d" strokeWidth="1.5" />

      {/* Face screen reflection */}
      <path d="M61 48 Q76 44 89 47 L65 78 Q60 82 59 73 Z" fill="#fff" opacity=".055" />

      {/* Eyes track the pointer */}
      <g className="robot-eyes" transform={`translate(${eyeX} ${eyeY})`}>
        <g className="robot-eye">
          <ellipse cx="76" cy="73" rx="13" ry="16" fill="#06182a" stroke="#416887" strokeWidth="1.4" />
          <ellipse cx="76" cy="73" rx="9" ry="11.5" fill="url(#roboEye)" />
          <ellipse cx="76" cy="73" rx="4.5" ry="6.5" fill="#c9fbff" opacity=".62" />
          <circle cx="72.5" cy="68.5" r="2.6" fill="#fff" />
        </g>
        <g className="robot-eye">
          <ellipse cx="124" cy="73" rx="13" ry="16" fill="#06182a" stroke="#416887" strokeWidth="1.4" />
          <ellipse cx="124" cy="73" rx="9" ry="11.5" fill="url(#roboEye)" />
          <ellipse cx="124" cy="73" rx="4.5" ry="6.5" fill="#c9fbff" opacity=".62" />
          <circle cx="120.5" cy="68.5" r="2.6" fill="#fff" />
        </g>
      </g>

      {/* Mouth and status lights */}
      <path d="M87 94 Q100 103 113 94" fill="none" stroke="#8bdff3" strokeWidth="3" strokeLinecap="round" />
      <circle cx="43" cy="83" r="3.5" fill="#57d5ed" />
      <circle cx="157" cy="83" r="3.5" fill="#57d5ed" />
      <circle cx="43" cy="83" r="6" fill="#57d5ed" opacity=".25" filter="url(#roboGlow)" />
      <circle cx="157" cy="83" r="6" fill="#57d5ed" opacity=".25" filter="url(#roboGlow)" />

      {/* Chest status LED */}
      <circle cx="100" cy="122" r="3" fill="#4dbde8" />
    </svg>
  );
}
