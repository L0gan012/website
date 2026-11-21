import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { Mesh } from "three";

export function Donut(props: ThreeElements["mesh"]) {
  // Load in model
  const { nodes, materials } = useGLTF("/Donut/donut.gltf");

  // Model reference to mutate
  const ref = useRef<Mesh>(null!);

  useEffect(() => {
    console.log("donut nodes", nodes);
    console.log("donut materials", materials);
  }, []);

  return (
    <mesh {...props} ref={ref} geometry={(nodes.Donut as Mesh).geometry} />
  );
}
