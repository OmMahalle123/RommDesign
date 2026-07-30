export default function Ceiling(){

    return(

        <mesh

            position={[0,3,0]}

            rotation={[Math.PI/2,0,0]}

        >

            <planeGeometry args={[10,8]}/>

            <meshStandardMaterial color="white"/>

        </mesh>

    );

}