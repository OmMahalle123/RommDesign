export default function Plant() {

    return (

        <group position={[4.2,0,3]}>

            <mesh position={[0,0.2,0]}>

                <cylinderGeometry args={[0.2,0.25,0.4,16]} />

                <meshStandardMaterial color="#8b5a2b" />

            </mesh>

            <mesh position={[0,0.8,0]}>

                <sphereGeometry args={[0.45,20,20]} />

                <meshStandardMaterial color="green" />

            </mesh>

        </group>

    );

}