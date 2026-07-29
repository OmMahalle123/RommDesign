import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Room from "../room/Room";
import Lights from "../lights/Lights";

export default function CanvasScene(){

    return(

        <Canvas
           camera={{
    position:[8,5,8],
    fov:50
}}
        >

            <color attach="background" args={["#dddddd"]}/>

            <Lights/>

            <Room/>

            <OrbitControls/>

        </Canvas>

    );

}