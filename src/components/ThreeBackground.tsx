import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

interface StarfieldProps {
  count?: number;
  radius?: number;
}

// Star class for orbital motion
class StarOrbit {
  mesh: THREE.Mesh;
  radius: number;
  speed: number;
  angle: number;
  yOffset: number;
  xAxis: number;
  zAxis: number;

  constructor() {
    // Geometry and material for each star
    const geometry = new THREE.SphereGeometry(
      0.005 + Math.random() * 0.01,
      8,
      8
    );
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        0.8 + Math.random() * 0.2,
        0.8 + Math.random() * 0.2,
        1
      ),
      transparent: true,
      opacity: 0.7 + Math.random() * 0.3,
    });

    this.mesh = new THREE.Mesh(geometry, material);

    // Random orbital parameters
    this.radius = 5 + Math.random() * 25;
    this.speed = 0.0001 + Math.random() * 0.0005;
    this.angle = Math.random() * Math.PI * 2;
    this.yOffset = -10 + Math.random() * 20;

    // Randomize orbit orientation
    this.xAxis = Math.random();
    this.zAxis = 1 - this.xAxis;

    // Set initial position
    this.updatePosition();
  }

  updatePosition() {
    this.angle += this.speed;

    // Elliptical orbit calculation
    this.mesh.position.x = Math.cos(this.angle) * this.radius * this.xAxis;
    this.mesh.position.y = this.yOffset + Math.sin(this.angle * 0.5) * 2;
    this.mesh.position.z = Math.sin(this.angle) * this.radius * this.zAxis;
  }
}

// Component to create and update orbital stars
const OrbitalStars = ({ count = 100 }: StarfieldProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const starsRef = useRef<StarOrbit[]>([]);

  // Initialize stars
  useEffect(() => {
    if (groupRef.current) {
      // Clear previous stars if any
      while (groupRef.current.children.length > 0) {
        groupRef.current.remove(groupRef.current.children[0]);
      }

      starsRef.current = [];

      // Create new stars
      for (let i = 0; i < count; i++) {
        const star = new StarOrbit();
        starsRef.current.push(star);
        groupRef.current.add(star.mesh);
      }
    }

    return () => {
      if (groupRef.current) {
        while (groupRef.current.children.length > 0) {
          groupRef.current.remove(groupRef.current.children[0]);
        }
      }
      starsRef.current = [];
    };
  }, [count]);

  // Update star positions on each frame
  useFrame(() => {
    starsRef.current.forEach((star) => {
      star.updatePosition();
    });
  });

  return <group ref={groupRef} />;
};

// Background component with both fixed and orbital stars
const SpaceBackground = () => {
  return (
    <>
      {/* Fixed stars backdrop */}
      <Stars
        radius={150}
        depth={100}
        count={8000}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      {/* Orbital stars */}
      <OrbitalStars count={3000} />

      {/* Ambient light */}
      <ambientLight intensity={0.3} />
    </>
  );
};

// Main ThreeBackground component
const ThreeBackground: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <color attach="background" args={["#030014"]} />
      <SpaceBackground />
    </Canvas>
  );
};

export default ThreeBackground;
