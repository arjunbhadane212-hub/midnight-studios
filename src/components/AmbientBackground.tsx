const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Ambient blue mist layers */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="mist1" cx="30%" cy="40%" r="50%">
            <stop offset="0%" stopColor="hsl(217, 71%, 25%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mist2" cx="70%" cy="60%" r="45%">
            <stop offset="0%" stopColor="hsl(217, 71%, 20%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mist3" cx="50%" cy="80%" r="40%">
            <stop offset="0%" stopColor="hsl(217, 71%, 22%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Animated mist blobs */}
        <ellipse cx="576" cy="432" rx="600" ry="400" fill="url(#mist1)">
          <animate
            attributeName="cx"
            values="576;650;576"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="432;380;432"
            dur="25s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        <ellipse cx="1344" cy="648" rx="550" ry="380" fill="url(#mist2)">
          <animate
            attributeName="cx"
            values="1344;1280;1344"
            dur="22s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="648;700;648"
            dur="18s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        <ellipse cx="960" cy="864" rx="500" ry="350" fill="url(#mist3)">
          <animate
            attributeName="cx"
            values="960;1020;960"
            dur="24s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="864;820;864"
            dur="20s"
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
      
      {/* Subtle wave overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 71%, 30%)" />
            <stop offset="100%" stopColor="hsl(217, 71%, 15%)" />
          </linearGradient>
        </defs>
        
        <path fill="url(#waveGrad)" opacity="0.5">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,540 Q480,440 960,540 T1920,540 L1920,1080 L0,1080 Z;
              M0,540 Q480,640 960,540 T1920,540 L1920,1080 L0,1080 Z;
              M0,540 Q480,440 960,540 T1920,540 L1920,1080 L0,1080 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default AmbientBackground;
