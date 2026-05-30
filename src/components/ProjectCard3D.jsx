import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard3D = ({ project, position }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Carga la imagen del proyecto como una textura 3D nativa
  const texture = useLoader(TextureLoader, project.imageUrl);

  // Animación interactiva en cada frame
  useFrame((state) => {
    if (!meshRef.current) return;

    // Obtener la posición normalizada del mouse (-1 a 1)
    const { x, y } = state.pointer;

    // Si el mouse está encima, inclina la tarjeta hacia la posición del cursor
    const targetRotX = hovered ? -y * 0.3 : 0;
    const targetRotY = hovered ? x * 0.3 : 0;
    const targetScale = hovered ? 1.05 : 1;
    const targetZ = hovered ? 0.5 : 0;

    // Suavizado elástico (Lerp) para movimientos ultra fluidos
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);
    
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    );
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.1);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => window.open(project.link, '_blank')}
      >
        {/* Geometría de caja plana (estilo tarjeta) */}
        <boxGeometry args={[3.2, 2.2, 0.08]} />

        {/* Material Físico con la textura del proyecto al frente */}
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.5}
          clearcoat={1.0} // Capa de brillo reflectante tipo vidrio
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Título flotante en espacio 3D debajo de la tarjeta */}
      <Text
        position={[0, -1.4, 0.1]}
        fontSize={0.22}
        color="#ffffff"
        font="https://fonts.gstatic.com/s/orbitron/v9/y7NZRnd62C6RNN75idS30g.ttf" // Opcional: Fuente tecnológica
        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>
    </group>
  );
};

export default ProjectCard3D;