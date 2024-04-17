"use client";
import useDeviceBreakpoint from "@/hooks/useResponsiveBreakpoint";
import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";
const Cobe: React.FC = () => {
  const { mobile, tablet, desktop, ultrawide } = useDeviceBreakpoint();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 50;
    let width = 0;

    if (canvasRef.current) {
      const offset = mobile ? [500, 500] : [1900, 300];

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 450 * 2,
        height: 450 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 2,
        mapSamples: 16000,
        mapBrightness: 10,
        offset,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [82 / 255, 126 / 255, 249 / 255],
        glowColor: [1, 1, 1],
        markers: [
          { location: [51.50488, -0.122563], size: 0.1 },
          { location: [37.43234, -122.136012], size: 0.1 },
          { location: [-23.556161, -46.637521], size: 0.1 },
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      } as COBEOptions);

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 1,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export default Cobe;
