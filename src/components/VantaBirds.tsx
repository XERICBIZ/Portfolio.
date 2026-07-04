import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/src/vanta.birds';

export default function VantaBirds() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || vantaRef.current) return;

    vantaRef.current = BIRDS({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000000,
      color1: 0xffffff,
      color2: 0x333333,
      colorMode: 'lerp',
      birdSize: 1.1,
      wingSpan: 19,
      separation: 31,
      alignment: 54,
      cohesion: 69,
      quantity: 3,
    });

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}
