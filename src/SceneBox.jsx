import Experience from "./Experience"
import Interface from "./Interface"
import { Canvas } from '@react-three/fiber'
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Notes from "./Notes"
import { Loader as DreiLoader } from '@react-three/drei'

import { ChromaticAberration, EffectComposer, Pixelation } from "@react-three/postprocessing"
import { Suspense, useState } from "react"
import { useProgress } from "@react-three/drei"

export default function SceneBox(){

    // const { x, y, z } = useControls({ // debugger
    // x: 0,
    // y: 4.1,
    // z: 0
    // })
   


    // const offset = useControls({offset_x: 0.003, offset_y: 0.003})
  
    return <>
     
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
            <Suspense fallback={null}>
                <Experience />
            </Suspense>    
                
            </Canvas>
            <Interface/>
        
            <Routes>
                {/* <Route path="/" element={<div className="ui"><Home/></div>}></Route> */}
                <Route path="/about" element={<div style={{ background: "none", border: "none", boxShadow: "none"}} className="ui"><About/></div>}></Route>
                <Route path="/projects" element={<div className="ui"><Projects/></div>}></Route>
                <Route path="/notes" element={<div style={{ background: "none", border: "none", boxShadow: "none"}} className="ui"><Notes/></div>}></Route> 
            </Routes>
            <DreiLoader/>

            
  

   
       


    </>
}