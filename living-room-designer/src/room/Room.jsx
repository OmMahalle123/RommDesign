import Floor from "./Floor";
import Walls from "./Walls";
import Ceiling from "./Ceiling";
import Door from "./Door";
import Window from "./Window";

import Sofa from "../furniture/Sofa";
import CoffeeTable from "../furniture/CoffeeTable";
import TVUnit from "../furniture/TVUnit";
import Plant from "../furniture/Plant";
import Rug from "../furniture/Rug";
import Chair from "../furniture/Chair";
import Shelf from "../furniture/Shelf";
import Painting from "../furniture/Painting";

export default function Room(){

    return(

        <>

            <Floor/>
            <Walls/>
            <Ceiling/>

            <Door/>
            <Window/>

            <Rug/>
            <Sofa/>
            <CoffeeTable/>
            <TVUnit/>
            <Plant/>
            <Chair/>
            <Shelf/>
            <Painting/>

        </>

    );

}