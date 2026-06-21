"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CanvasSoldier() {
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const fgCanvas = fgCanvasRef.current;
    if (!fgCanvas) return;
    const fgCtx = fgCanvas.getContext("2d", { alpha: true });
    if (!fgCtx) return;

    let width = fgCanvas.width = fgCanvas.offsetWidth;
    let height = fgCanvas.height = fgCanvas.offsetHeight;

    // Load the two full-screen layers
    const compositeImg = new window.Image();
    compositeImg.src = "/futuristic_gurunathan.png"; // Your face on the soldier

    const baseSoldierImg = new window.Image();
    baseSoldierImg.src = "/futuristic_soldier.png"; // Original soldier

    let phase = 0; 
    let alpha = 0;
    let timer = 0;

    const trail: { x: number, y: number, age: number, maxAge: number }[] = [];
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      trail.push({ x: e.clientX, y: e.clientY, age: 0, maxAge: 2.5 }); 
    };

    const onResize = () => {
      width = fgCanvas.width = fgCanvas.offsetWidth;
      height = fgCanvas.height = fgCanvas.offsetHeight;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    let raf: number;
    let lastTime = performance.now();

    const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, a: number = 1) => {
      if (!img.complete || img.naturalWidth === 0) return;
      const sRatio = img.naturalWidth / img.naturalHeight;
      const cRatio = width / height;
      let dw, dh;
      if (sRatio > cRatio) {
        dh = height; dw = dh * sRatio;
      } else {
        dw = width; dh = dw / sRatio;
      }
      const dx = (width - dw) / 2;
      const dy = 0; // Align to top to ensure the head/face is always visible!
      
      ctx.globalAlpha = a;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.globalAlpha = 1.0;
    };

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // 1. Full Screen Fade Machine
      timer += dt;
      if (phase === 0) {
        alpha += dt * 0.4;
        if (alpha >= 1) { alpha = 1; phase = 1; timer = 0; }
      } else if (phase === 1) {
        if (timer >= 5) { phase = 2; timer = 0; } 
      } else if (phase === 2) {
        alpha -= dt * 0.4;
        if (alpha <= 0) { alpha = 0; phase = 3; timer = 0; }
      } else if (phase === 3) {
        if (timer >= 2) { phase = 0; timer = 0; } 
      }

      mouse.x += (mouse.tx - mouse.x) * 0.15;
      mouse.y += (mouse.ty - mouse.y) * 0.15;

      fgCtx.clearRect(0, 0, width, height);

      // 2. Draw Blurred Glassmorphism Soldier
      fgCtx.globalCompositeOperation = "source-over";
      fgCtx.filter = "blur(12px)";
      drawCover(fgCtx, baseSoldierImg);
      fgCtx.filter = "none";
      
      // Apply dark tint
      fgCtx.fillStyle = "rgba(4, 8, 18, 0.7)";
      fgCtx.fillRect(0, 0, width, height);

      // 3. Draw your Composite Face Layer over the entire screen (fading)
      if (alpha > 0) {
        drawCover(fgCtx, compositeImg, alpha);
        // Subtle blue glowing tint to the composite
        fgCtx.globalCompositeOperation = "screen";
        fgCtx.fillStyle = `rgba(0, 217, 255, ${0.1 * alpha})`;
        fgCtx.fillRect(0, 0, width, height);
        fgCtx.globalCompositeOperation = "source-over";
      }

      // 4. Mouse Eraser (cuts through EVERYTHING to reveal the crisp DOM base)
      if (trail.length > 0) {
        fgCtx.globalCompositeOperation = "destination-out";
        
        for (let i = trail.length - 1; i >= 0; i--) {
          const p = trail[i];
          p.age += dt;
          if (p.age > p.maxAge) {
            trail.splice(i, 1);
            continue;
          }

          const life = 1 - (p.age / p.maxAge);
          const radius = 250 * Math.pow(life, 0.5); 
          
          const grad = fgCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
          grad.addColorStop(0, `rgba(0,0,0,${life * 1.0})`);
          grad.addColorStop(0.5, `rgba(0,0,0,${life * 0.5})`);
          grad.addColorStop(1, "rgba(0,0,0,0)");
          
          fgCtx.fillStyle = grad;
          fgCtx.beginPath();
          fgCtx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          fgCtx.fill();
        }
        fgCtx.globalCompositeOperation = "source-over";
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#02040a]">
      {/* BASE HD DOM LAYER - Your clear face, permanently sharp underneath */}
      <Image 
        src="/futuristic_gurunathan.png" 
        alt="Gurunathan HD Composite" 
        fill 
        className="object-cover object-top" 
        priority
        quality={100}
      />
      
      {/* FOREGROUND CANVAS - Glassmorphism, Fades, and Eraser */}
      <canvas 
        ref={fgCanvasRef} 
        className="absolute inset-0 w-full h-full block z-10 pointer-events-none" 
      />

      {/* Global Interactive Parallax Overlay (Affects entire Hero section) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.2) 0%, transparent 80%)`
        }}
      />

      {/* Edge Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/40 to-transparent pointer-events-none z-30" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none z-30" />
    </div>
  );
}
