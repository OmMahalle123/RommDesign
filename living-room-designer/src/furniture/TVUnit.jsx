export default function TVUnit() {
    return (

        <group>

            <mesh position={[0,0.4,-3]}>

                <boxGeometry args={[1.5,0.8,0.5]} />

                <meshStandardMaterial color="#5b4636" />

            </mesh>

            <mesh position={[0,1.25,-3]}>

                <boxGeometry args={[1.3,0.8,0.05]} />

                <meshStandardMaterial color="black" />

            </mesh>

        </group>

    );
}