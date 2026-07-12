export default function FloralBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 bottom-0 overflow-hidden pointer-events-none flex flex-col ${className}`}>
      {/* Tiling the SVG vertically */}
      {[...Array(4)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 100 300"
          className="w-16 h-48 sm:w-20 sm:h-60 opacity-60 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
          style={{ filter: "drop-shadow(0px -1px 1px rgba(0,0,0,0.1)) drop-shadow(0px 1px 1px rgba(255,255,255,1))" }}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main Vine */}
          <path
            d="M 50,0 Q 80,50 50,100 T 50,200 T 50,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Leaves and Flowers */}
          <path
            d="M 50,30 Q 20,20 30,50 Q 50,50 50,30"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 50,80 Q 90,70 70,100 Q 50,110 50,80"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 50,150 Q 20,130 30,170 Q 50,180 50,150"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 50,220 Q 80,210 70,240 Q 50,250 50,220"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* Small buds */}
          <circle cx="35" cy="40" r="4" fill="currentColor" />
          <circle cx="75" cy="90" r="5" fill="currentColor" />
          <circle cx="25" cy="160" r="4" fill="currentColor" />
          <circle cx="65" cy="235" r="5" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
