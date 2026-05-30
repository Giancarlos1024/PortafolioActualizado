import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Fondo3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Escena y Configuración de Cámara
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5; // Posición de cabina de nave

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Crear el Campo de Estrellas del Hiperespacio (Túnel de navegación)
    const starsCount = 3000;
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starSpeeds = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      // Distribución en forma de túnel/cilindro infinito en el eje Z
      starPositions[i * 3] = (Math.random() - 0.5) * 50;  // X
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 50; // Y
      starPositions[i * 3 + 2] = Math.random() * -100;       // Z (Profundidad)
      starSpeeds[i] = Math.random() * 0.5 + 0.2;             // Velocidad individual
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    
    // Material brillante para las estrellas
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // 3. Sistema de Meteoros y Estrellas Fugaces
    const meteorsCount = 20;
    const meteorsGeometry = new THREE.BufferGeometry();
    const meteorPositions = new Float32Array(meteorsCount * 3);
    const meteorVectors = []; // Direcciones de caída

    for (let i = 0; i < meteorsCount; i++) {
      meteorPositions[i * 3] = (Math.random() - 0.5) * 40;
      meteorPositions[i * 3 + 1] = Math.random() * 20 + 10; // Inician arriba
      meteorPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Vector de movimiento: Caen en diagonal hacia abajo y hacia adelante
      meteorVectors.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        -Math.random() * 0.3 - 0.2,
        Math.random() * 0.2 + 0.1
      ));
    }

    meteorsGeometry.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));
    
    const meteorsMaterial = new THREE.PointsMaterial({
      color: 0x11e9af, // Tus meteoros brillan en tu verde tecnológico
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const meteorField = new THREE.Points(meteorsGeometry, meteorsMaterial);
    scene.add(meteorField);

    // 4. Planetas Distantes y Nebulosas (Puntos de gravedad de gas cósmico)
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 500;
    const nebulaPositions = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      // Agrupados en cúmulos gigantes que simulan nubes espaciales o exoplanetas lejanos
      nebulaPositions[i * 3] = (Math.random() - 0.5) * 30 + 15;
      nebulaPositions[i * 3 + 1] = (Math.random() - 0.5) * 30 - 10;
      nebulaPositions[i * 3 + 2] = Math.random() * -60 - 20;
    }

    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    const nebulaMaterial = new THREE.PointsMaterial({
      color: 0x0b132b, // Tono azul/púrpura espacial profundo
      size: 0.4,
      transparent: true,
      opacity: 0.4
    });
    const nebulaField = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebulaField);

    // 5. Interactividad: Navegación con el mouse (Girar la nave/cámara)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let speedMultiplier = 1; // Factor de aceleración warp

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      
      // Si el mouse está en las esquinas, simula una aceleración "Warp" de la nave
      if (Math.abs(mouseX) > 0.3 || Math.abs(mouseY) > 0.3) {
        speedMultiplier = 4;
      } else {
        speedMultiplier = 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Bucle de Animación y Simulación Física
    const animate = () => {
      requestAnimationFrame(animate);

      // --- Animación 1: Movimiento infinito del Hiperespacio (Estrellas viajan al frente)
      const starPosAttr = starField.geometry.attributes.position;
      for (let i = 0; i < starsCount; i++) {
        let z = starPosAttr.getZ(i);
        
        // La estrella se mueve hacia la cámara en el eje Z
        z += starSpeeds[i] * speedMultiplier;
        
        // Si la estrella pasa detrás de la cámara, la reseteamos al fondo infinito
        if (z > 5) {
          z = -100;
          starPosAttr.setX(i, (Math.random() - 0.5) * 50);
          starPosAttr.setY(i, (Math.random() - 0.5) * 50);
        }
        starPosAttr.setZ(i, z);
      }
      starPosAttr.needsUpdate = true;

      // --- Animación 2: Simulación de caída de Meteoros
      const meteorPosAttr = meteorField.geometry.attributes.position;
      for (let i = 0; i < meteorsCount; i++) {
        let x = meteorPosAttr.getX(i);
        let y = meteorPosAttr.getY(i);
        let z = meteorPosAttr.getZ(i);

        // Aplicamos el vector de velocidad
        x += meteorVectors[i].x;
        y += meteorVectors[i].y;
        z += meteorVectors[i].z;

        // Si el meteoro sale del rango visible, lo regeneramos arriba
        if (y < -20 || z > 5) {
          x = (Math.random() - 0.5) * 40;
          y = Math.random() * 20 + 10;
          z = (Math.random() - 0.5) * 50;
        }
        meteorPosAttr.setXYZ(i, x, y, z);
      }
      meteorPosAttr.needsUpdate = true;

      // --- Animación 3: Rotación suave de Nebulosas de fondo
      nebulaField.rotation.z += 0.001;

      // --- Animación 4: Rotación de la cabina (Cámara sigue al mouse suavemente)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.rotation.y = -targetX * 0.5;
      camera.rotation.x = -targetY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Adaptación de pantalla elástica
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="vanta-bg"
      style={{ width: '100vw', height: '100vh', backgroundColor: '#060a13' }}
    />
  );
};

export default Fondo3D;