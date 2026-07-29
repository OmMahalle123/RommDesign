export default function Shelf(){

    return(

        <group position={[4.8,2,-1]}>

            <mesh>

                <boxGeometry args={[0.2,0.08,2]}/>

                <meshStandardMaterial color="#6b4f3f"/>

            </mesh>

            <mesh position={[-0.1,0.2,-0.6]}>

                <boxGeometry args={[0.18,0.4,0.3]}/>

                <meshStandardMaterial color="#888"/>

            </mesh>

            <mesh position={[-0.1,0.2,0.3]}>

                <boxGeometry args={[0.18,0.4,0.3]}/>

                <meshStandardMaterial color="#999"/>

            </mesh>

        </group>

    );

}