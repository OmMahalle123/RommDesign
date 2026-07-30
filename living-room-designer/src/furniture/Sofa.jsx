export default function Sofa() {
    return (
        <group>

            <mesh position={[-2.3,0.35,2.5]}>
                <boxGeometry args={[3.2,0.7,1]} />
                <meshStandardMaterial color="#4a5568" />
            </mesh>

            <mesh position={[-3.35,0.75,2.5]}>
                <boxGeometry args={[0.2,1.2,1]} />
                <meshStandardMaterial color="#4a5568" />
            </mesh>

            <mesh position={[-2.3,0.75,3]}>
                <boxGeometry args={[3.2,1.2,0.2]} />
                <meshStandardMaterial color="#4a5568" />
            </mesh>

        </group>
    );
}