export default function Walls(){

    return(

        <>

            <mesh position={[0,1.5,-4]}>

                <boxGeometry args={[10,3,0.2]}/>

                <meshStandardMaterial color="#ececec"/>

            </mesh>

            <mesh position={[0,1.5,4]}>

                <boxGeometry args={[10,3,0.2]}/>

                <meshStandardMaterial color="#ececec"/>

            </mesh>

            <mesh position={[-5,1.5,0]}>

                <boxGeometry args={[0.2,3,8]}/>

                <meshStandardMaterial color="#ececec"/>

            </mesh>

            <mesh position={[5,1.5,0]}>

                <boxGeometry args={[0.2,3,8]}/>

                <meshStandardMaterial color="#ececec"/>

            </mesh>

        </>

    );

}