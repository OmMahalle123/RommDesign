export default function Window() {

    return (

        <group position={[3,1.6,-3.9]}>

            <mesh>

                <boxGeometry args={[3,1.5,0.05]} />

                <meshPhysicalMaterial
                    transparent
                    opacity={0.5}
                    transmission={1}
                    roughness={0}
                    color="#bde7ff"
                />

            </mesh>

            <mesh>

                <boxGeometry args={[3.05,1.55,0.08]} />

                <meshStandardMaterial
                    wireframe
                    color="#444"
                />

            </mesh>

        </group>

    );

}