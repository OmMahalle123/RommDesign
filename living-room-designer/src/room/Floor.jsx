export default function Floor(){

    return(

        <mesh rotation={[-Math.PI/2,0,0]}>

            <planeGeometry args={[10,8]}/>

            <meshStandardMaterial color="#b98a5d"/>

        </mesh>

    );

}