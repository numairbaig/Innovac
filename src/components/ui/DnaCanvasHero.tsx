import React, { useEffect, useRef } from 'react';

/**
 * DnaCanvasHero
 * High-performance, lightweight Canvas animation of a rotating 3D DNA double helix
 * accompanied by floating molecular nodes and subtle scientific depth particles.
 * Fully responsive and honors prefers-reduced-motion.
 */
export const DnaCanvasHero: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for molecular atmospheric background
    const particleCount = width < 768 ? 25 : 55;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Helix configuration
    let rotation = 0;
    const basePairsCount = width < 768 ? 24 : 36;
    const helixRadius = width < 768 ? 70 : 120;
    const helixLength = height * 1.15;
    const verticalSpacing = helixLength / basePairsCount;

    // Subtle interactive mouse parallax
    let targetMouseX = 0;
    let currentMouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      targetMouseX = relX * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;

      // 1. Draw atmospheric molecular network particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gba(0, 229, 255, );
        ctx.fill();

        // Connect nearby particles with subtle cyan lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gba(0, 150, 255, );
            ctx.stroke();
          }
        }
      }

      // 2. DNA Double Helix Position
      // Centered on mobile, tilted slightly to the right third on larger desktop displays
      const helixCenterX = width < 1024 ? width * 0.5 : width * 0.72;
      const helixCenterY = height * 0.5;
      const tiltAngle = -0.32 + currentMouseX; // slight 3D tilt

      if (!prefersReducedMotion) {
        rotation += 0.016;
      }

      const pairs: {
        y: number;
        x1: number;
        z1: number;
        x2: number;
        z2: number;
        angle: number;
      }[] = [];

      for (let i = 0; i < basePairsCount; i++) {
        const angle = rotation + i * 0.28;
        const yOffset = (i - basePairsCount / 2) * verticalSpacing;

        // 3D coordinates around Y axis
        const x1 = Math.cos(angle) * helixRadius;
        const z1 = Math.sin(angle) * helixRadius;

        const x2 = Math.cos(angle + Math.PI) * helixRadius;
        const z2 = Math.sin(angle + Math.PI) * helixRadius;

        // Apply 2D tilt in plane
        const cosT = Math.cos(tiltAngle);
        const sinT = Math.sin(tiltAngle);

        const tiltedX1 = x1 * cosT - yOffset * sinT;
        const tiltedY1 = x1 * sinT + yOffset * cosT;

        const tiltedX2 = x2 * cosT - yOffset * sinT;
        const tiltedY2 = x2 * sinT + yOffset * cosT;

        pairs.push({
          y: yOffset,
          x1: helixCenterX + tiltedX1,
          z1: z1,
          x2: helixCenterX + tiltedX2,
          z2: z2,
          angle: angle,
        });
      }

      // Sort points or base pairs by average Z depth so closer elements render over farther ones
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const avgZ = (pair.z1 + pair.z2) / 2;
        const depthAlpha = ((avgZ + helixRadius) / (helixRadius * 2)) * 0.55 + 0.35;

        // Draw connecting base pair rung
        ctx.beginPath();
        ctx.moveTo(pair.x1, helixCenterY + (pair.x1 - helixCenterX) * Math.sin(tiltAngle) + pair.y * Math.cos(tiltAngle));
        
        const y1 = helixCenterY + Math.sin(tiltAngle) * ((pair.x1 - helixCenterX) / Math.cos(tiltAngle)) + pair.y;
        const y2 = helixCenterY + Math.sin(tiltAngle) * ((pair.x2 - helixCenterX) / Math.cos(tiltAngle)) + pair.y;

        // Base-pair ladder gradient (Electric Blue -> Cyan)
        const ladderGrad = ctx.createLinearGradient(pair.x1, y1, pair.x2, y2);
        ladderGrad.addColorStop(0, gba(0, 102, 255, ));
        ladderGrad.addColorStop(0.5, gba(0, 229, 255, ));
        ladderGrad.addColorStop(1, gba(0, 194, 255, ));

        ctx.strokeStyle = ladderGrad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(pair.x1, y1);
        ctx.lineTo(pair.x2, y2);
        ctx.stroke();

        // Strand 1 node (Strand A: Cyan)
        const r1 = Math.max(2, 3.5 + (pair.z1 / helixRadius) * 2.2);
        ctx.beginPath();
        ctx.arc(pair.x1, y1, r1, 0, Math.PI * 2);
        ctx.fillStyle = pair.z1 > 0 ? '#00E5FF' : '#0077B6';
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = pair.z1 > 0 ? 12 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Strand 2 node (Strand B: Royal / Electric Blue)
        const r2 = Math.max(2, 3.5 + (pair.z2 / helixRadius) * 2.2);
        ctx.beginPath();
        ctx.arc(pair.x2, y2, r2, 0, Math.PI * 2);
        ctx.fillStyle = pair.z2 > 0 ? '#00A3FF' : '#033B88';
        ctx.shadowColor = '#0066FF';
        ctx.shadowBlur = pair.z2 > 0 ? 12 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
