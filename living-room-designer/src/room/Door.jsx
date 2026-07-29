export default function Door() {
    return (
        <group position={[-4.9,0,2]}>

            <mesh position={[0.05,1,0]}>
                <boxGeometry args={[0.1,2,1]} />
                <meshStandardMaterial color="#6f4e37" />
            </mesh>

            <mesh position={[0.12,1,0.35]}>
                <sphereGeometry args={[0.04,16,16]} />
                <meshStandardMaterial color="gold" />
            </mesh>

        </group>
    );
}