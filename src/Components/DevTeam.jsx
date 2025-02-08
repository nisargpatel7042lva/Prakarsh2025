import {Rive} from "@rive-app/canvas";
import "../Components/styles/DevTeam.css"
import { useEffect } from "react";

export default function DevTeam(){ 
    console.log("Yaaaa imported;");

    useEffect(()=>{
        const d = new Rive({
            src:'/devphotosfinal.riv',
            canvas: document.getElementById("devContainer"),
            autoplay: true,
            stateMachines: "State Machine 1",
            onLoad: function () {
                d.resizeDrawingSurfaceToCanvas();
            },
        });
    },[])
  
       

  
    return(
        <>
    <div className='devTeam'>
      <div className="boxShadow"></div>
      <canvas id='devContainer'>
      </canvas>
      
    </div>
        </>
    )
}