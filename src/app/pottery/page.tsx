"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Pottery() {
  const Box = ({ scale = 1, ...props }) => {
    const ref = useRef({ rotation: { x: 0, y: 0 } });
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    });
    return (
      <mesh
        {...props}
        ref={ref}
        scale={(clicked ? 1.5 : 1) * scale}
        onClick={() => click(!clicked)}
        onPointerOver={(event) => (event.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Box scale={5} />
    </Canvas>
  );
}
