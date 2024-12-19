'use client'
import React, { useEffect, useRef, useState } from 'react';

const TAIL_LENGTH = 20;

interface CursorPosition {
  x: number;
  y: number;
}

const FluidMotionCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const cursorHistoryRef = useRef<CursorPosition[]>(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      const cursorHistory = cursorHistoryRef.current;
      cursorHistory.shift();
      cursorHistory.push(mousePosition);

      if (cursorRef.current) {
        const cursorCircles = cursorRef.current.children;

        for (let i = 0; i < TAIL_LENGTH; i++) {
          const current = cursorHistory[i];
          const next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
          current.x += (next.x - current.x) * 0.35;
          current.y += (next.y - current.y) * 0.35;
          const circle = cursorCircles[i] as HTMLDivElement;
          circle.style.transform = `translate(${current.x}px, ${current.y}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(updateCursor);
    };

    animationRef.current = requestAnimationFrame(updateCursor);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none">
      {[...Array(TAIL_LENGTH)].map((_, index) => (
        <div
          key={index}
          className="absolute w-4 h-4 bg-blue-500 rounded-full opacity-70"
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </div>
  );
};

export default FluidMotionCursor;