export default function Painting(){

    return(

        <group position={[0,1.8,3.89]}>

            <mesh>

                <boxGeometry args={[2,1.2,0.05]}/>

                <meshStandardMaterial color="white"/>

            </mesh>

            <mesh position={[0,0,0.03]}>

                <planeGeometry args={[1.8,1]}/>

                <meshStandardMaterial color="#4ea8de"/>

            </mesh>

        </group>

    );

}