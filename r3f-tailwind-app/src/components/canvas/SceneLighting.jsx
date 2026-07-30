/**
 * SceneLighting — dynamic lighting system based on light preset.
 *
 * Renders ambient light, directional light with shadows, and
 * environment mapping based on the active preset.
 */
import React, { useMemo } from 'react';
import { Environment } from '@react-three/drei';
import useStore from '../../store/useStore';
import { LIGHT_PRESETS } from '../../constants';

export default function SceneLighting() {
  const lightPreset = useStore((s) => s.lightPreset);

  const config = useMemo(
    () => LIGHT_PRESETS[lightPreset] || LIGHT_PRESETS.day,
    [lightPreset]
  );

  return (
    <>
      {/* Ambient fill light */}
      <ambientLight
        intensity={config.ambient.intensity}
        color={config.ambient.color}
      />

      {/* Primary directional light with shadows */}
      <directionalLight
        position={config.directional.position}
        intensity={config.directional.intensity}
        color={config.directional.color}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.001}
      />

      {/* Secondary fill light */}
      <directionalLight
        position={[-3, 4, -2]}
        intensity={config.ambient.intensity * 0.3}
        color={config.ambient.color}
      />

      {/* Hemisphere light for natural sky/ground color blending */}
      <hemisphereLight
        args={['#b1e1ff', '#b97a20', 0.2]}
      />

      {/* Environment map for reflections + visible sky background */}
      <Environment preset={config.environment} background blur={0.5} />
    </>
  );
}
