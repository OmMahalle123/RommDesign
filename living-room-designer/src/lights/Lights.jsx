export default function Lights(){

    return(

        <>

            <ambientLight intensity={0.4}/>

            <directionalLight
                position={[-6,7,-2]}
                intensity={3}
                castShadow
            />

            <pointLight
                position={[0,2.8,0]}
                intensity={40}
            />

            <spotLight
                position={[0,2.9,0]}
                angle={0.6}
                intensity={35}
                penumbra={0.5}
            />

        </>

    );

}