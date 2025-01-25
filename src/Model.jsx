import { useEffect, useRef, useState } from "react"
import Experience from "./Experience"
import Interface from "./Interface"
import { Canvas } from '@react-three/fiber'
import { useControls } from "leva"
import { AsciiRenderer } from "@react-three/drei"

import { ChromaticAberration, EffectComposer, Pixelation } from "@react-three/postprocessing"

export default function Model(){

    // const { x, y, z } = useControls({ // debugger
    // x: 0,
    // y: 4.1,
    // z: 0
    // })


    const offset = useControls({offset_x: 0.003, offset_y: 0.003})
  
    return <>

    {/* <div className="background-text">
        cyberde14
    </div> */}
    

    
    {/* <div className='cyberdeck' style={{width: "100vw", height: "100vh"}}> */}
            <Canvas
                shadows
                camera={{
                    fov: 60,
                    near: 0.1,
                    far: 200,
                    position: [ -12, 10, 0 ]
                }}
                style={{position:"fixed"}}
            >
            
            <EffectComposer>
                <ChromaticAberration offset={[offset.offset_x, offset.offset_y]}/>
            </EffectComposer>
            
        
                <Experience />
                
                
            </Canvas>
    {/* </div> */}

   
        <Interface/>


    </>
}