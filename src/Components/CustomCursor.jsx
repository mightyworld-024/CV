import { useEffect, useRef, useState } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, [data-cursor]"
      );

      if (target) {
        setHovering(true);
        setHoverText(target.dataset.cursor || "");
      } else {
        setHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrame;

    const animate = () => {
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.12;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[9998]
          flex items-center justify-center
          rounded-full
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out
          ${
            hovering
              ? "h-24 w-24 border border-white/60 bg-white/10"
              : "h-12 w-12 border border-white/30 bg-white/5"
          }
        `}
      >
        {hovering && hoverText && (
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white">
            {hoverText}
          </span>
        )}
      </div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="
          pointer-events-none fixed left-0 top-0 z-[9999]
          h-2 w-2
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_12px_rgba(255,255,255,0.8)]
        "
      />
    </>
  );
}

export default Cursor;