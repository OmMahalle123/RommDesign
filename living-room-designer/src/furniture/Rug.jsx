export default function Rug() {

    return (

        <mesh
            rotation={[-Math.PI/2,0,0]}
            position={[0,0.01,1]}
        >

            <planeGeometry args={[3,2]} />

            <meshStandardMaterial color="#d9d9d9" />

        </mesh>

    );

}