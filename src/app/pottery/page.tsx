"use client";
import { Canvas } from "@react-three/fiber";
import { Skull } from "../models/skull";

export default function Pottery() {
  return (
    <Canvas style={{ height: "90vh", width: "100vw" }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Skull />
    </Canvas>
  );
}
