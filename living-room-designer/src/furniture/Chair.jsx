export default function Chair(){

    return(

        <group position={[2.3,0,2]}>

            <mesh position={[0,0.35,0]}>

                <boxGeometry args={[0.8,0.7,0.8]}/>

                <meshStandardMaterial color="#d28d47"/>

            </mesh>

            <mesh position={[0,0.9,-0.3]}>

                <boxGeometry args={[0.8,0.8,0.15]}/>

                <meshStandardMaterial color="#d28d47"/>

            </mesh>

        </group>

    );

}