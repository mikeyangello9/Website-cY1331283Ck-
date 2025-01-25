import { OrbitControls, useHelper, useTexture, Html, Stage, AccumulativeShadows, Float, AsciiRenderer } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import { Routes,Route } from 'react-router-dom'

import About from './About'

import Contact from "./Contact"
import Home from './Home'

import Projects from "./Projects"
import Notes from "./Notes"


import * as THREE from 'three'


import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

console.log(useTexture)


export default function Experience()
{

    const { x, y, z } = useControls({ // debugger
        x: 0,
        y: 4.1,
        z: 0
    })

    const model = useLoader(GLTFLoader, './revamp2grunge.glb')
    
    console.log(model.scene.children)
    const screen = model.scene.children[6].position
    console.log(screen)

    const directionalLightRef = useRef()

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 5)



    const children = model.scene.children
    children.map((child) => {
        child.castShadow = true
        child.receiveShadow = true
    })



    useEffect(()=>{

        const reuse = (key, key_title, index, key_pos) => {
            document.addEventListener(key, (e) => {
                if(e.key === key_title){
                    model.scene.children[index].position.y = key_pos
                }
            })
        }


        reuse('keydown', '1', 68, 1.55)
        reuse('keyup', '1', 68, 1.6)
        reuse('keydown', '2', 70, 1.55)
        reuse('keyup', '2', 70, 1.6)
        reuse('keydown', '3', 61, 1.55)
        reuse('keyup', '3', 61, 1.6)
        reuse('keydown', '4', 60, 1.55)
        reuse('keyup', '4', 60, 1.6)
        reuse('keydown', '5', 45, 1.55)
        reuse('keyup', '5', 45, 1.6)
        reuse('keydown', '6', 44, 1.55)
        reuse('keyup', '6', 44, 1.6)
        reuse('keydown', '7', 52, 1.55)
        reuse('keyup', '7', 52, 1.6)
        reuse('keydown', '8', 53, 1.55)
        reuse('keyup', '8', 53, 1.6)
        reuse('keydown', '9', 36, 1.55)
        reuse('keyup', '9', 36, 1.6)
        reuse('keydown', '0', 37, 1.55) 
        reuse('keyup', '0', 37, 1.6)
        reuse('keydown', 'Alt', 29, 1.55)
        reuse('keyup', 'Alt', 29, 1.6)
        reuse('keydown', 'Backspace', 28, 1.55)
        reuse('keyup', 'Backspace', 28, 1.6)

        // second set

        reuse('keydown', 'Tab', 73, 1.55)
        reuse('keyup', 'Tab', 73, 1.59)
        reuse('keydown', 'q', 65, 1.55)
        reuse('keyup', 'q', 65, 1.59)
        reuse('keydown', 'w', 64, 1.55)
        reuse('keyup', 'w', 64, 1.59)
        reuse('keydown', 'e', 57, 1.55)
        reuse('keyup', 'e', 57, 1.59)
        reuse('keydown', 'r', 41, 1.55)
        reuse('keyup', 'r', 41, 1.59)
        reuse('keydown', 'r', 41, 1.55)
        reuse('keyup', 'r', 41, 1.59)
        reuse('keydown', 't', 48, 1.55)
        reuse('keyup', 't', 48, 1.59)
        reuse('keydown', 'y', 49, 1.55)
        reuse('keyup', 'y', 49, 1.59)
        reuse('keydown', 'u', 56, 1.55)
        reuse('keyup', 'u', 56, 1.59)
        reuse('keydown', 'i', 40, 1.55)
        reuse('keyup', 'i', 40, 1.59)
        reuse('keydown', 'o', 33, 1.55)
        reuse('keyup', 'o', 33, 1.59)
        reuse('keydown', 'p', 32, 1.55)
        reuse('keyup', 'p', 32, 1.59)
        reuse('keydown', '/', 25, 1.55)
        reuse('keyup', '/', 25, 1.59)


        reuse('keydown', 'Shift', 72, 1.50)
        reuse('keyup', 'Shift', 72, 1.54)
        reuse('keydown', 'a', 66, 1.50)
        reuse('keyup', 'a', 66, 1.54)
        reuse('keydown', 's', 63, 1.50)
        reuse('keyup', 's', 63, 1.54)
        reuse('keydown', 'd', 58, 1.50)
        reuse('keyup', 'd', 58, 1.54)
        reuse('keydown', 'f', 42, 1.50)
        reuse('keyup', 'f', 42, 1.54)
        reuse('keydown', 'g', 47, 1.50)
        reuse('keyup', 'g', 47, 1.54)
        reuse('keydown', 'h', 50, 1.50)
        reuse('keyup', 'h', 50, 1.54)
        reuse('keydown', 'j', 55, 1.50)
        reuse('keyup', 'j', 55, 1.54)
        reuse('keydown', 'k', 39, 1.50)
        reuse('keyup', 'k', 39, 1.54)
        reuse('keydown', 'l', 34, 1.50)
        reuse('keyup', 'l', 34, 1.54)
        reuse('keydown', '.', 31, 1.50)
        reuse('keyup', '.', 31, 1.54)
        reuse('keydown', 'Enter', 26, 1.50)
        reuse('keyup', 'Enter', 26, 1.54)


        reuse('keydown', 'z', 67, 1.45)
        reuse('keyup', 'z', 67, 1.51)
        reuse('keydown', 'x', 62, 1.45)
        reuse('keyup', 'x', 62, 1.51)
        reuse('keydown', 'c', 59, 1.45)
        reuse('keyup', 'c', 59, 1.51)
        reuse('keydown', 'v', 43, 1.45)
        reuse('keyup', 'v', 43, 1.51)
        reuse('keydown', 'b', 54, 1.45)
        reuse('keyup', 'b', 54, 1.51)
        reuse('keydown', 'n', 46, 1.45)
        reuse('keyup', 'n', 46, 1.51)
        reuse('keydown', 'm', 51, 1.45)
        reuse('keyup', 'm', 51, 1.51)
        reuse('keydown', '<', 38, 1.45)
        reuse('keyup', '<', 38, 1.51)
        reuse('keydown', '>', 35, 1.45)
        reuse('keyup', '>', 35, 1.51)
        reuse('keydown', '-', 30, 1.45)
        reuse('keyup', '-', 30, 1.51)
        reuse('keydown', '+', 27, 1.45)
        reuse('keyup', '+', 27, 1.51)

    }, [])
    
  
    return <>

        <Perf position="bottom-left" />

        <OrbitControls makeDefault enableZoom={false}/>

        <directionalLight  ref={ directionalLightRef } shadow-bias = {-0.003} shadow-normalBias = { 0.015 } castShadow position={ [ -17, 6.1, 3 ] } intensity={ 3 }/>
        
        <ambientLight intensity={ 1 } />

      <Float>
        <Stage>

            <primitive onclick= {console.log('clicked!')} object={ model.scene } scale={ [1.8,1.8,1.8] } rotation={[0, 4.7, 0]} position={[x, -1, 0]}>

                <Html 
                    position={[-0.6, 4.1, -1.088]}
                    transform rotateX={-0.25}
                    distanceFactor={4}
                    wrapperClass='terminal'
                    center
                    occlude
                >
                <iframe className='frame' src="terminal.html" ></iframe>
                </Html>
                

            </primitive>

        </Stage>

        <Routes>
                    {/* <Route path="/About" element={
                    <Html
                        position={[0, 0, -1.088]}
                        transform rotateX={-0.25}
                        distanceFactor={4}
                        wrapperClass='terminal'
                        center>
                        
                        
                    <div><About/></div>
                    </Html>}></Route> */}

                    {/* <Route path="/Projects" element={
                    <Html
                        position={[z, 0, 8]}
                        transform rotateX={-0.25}
                        rotation={[0, -2.30, 0]}
                        distanceFactor={4}
                        // wrapperClass='terminal'
                        center>

                    <div><Projects/></div>
                    
                    </Html>}>
                    </Route> */}

                    <Route path='/' element={
                        <Html
                        position={[2.23, 2, 6]}
                        transform rotateX={-0.25}
                        rotation={[0,-1.6,0]}
                        distanceFactor={4}
                        // wrapperClass='terminal'
                        center
                    
                    >
                        
                        <div><Home/></div>
                    
                    </Html>}>

                       
                    </Route>

                    <Route path="/Contact" element={
                        <Html
                            position={[2.23, 2, 6]}
                            transform rotateX={-0.25}
                            rotation={[0,-1.6,0]}
                            distanceFactor={4}
                            // wrapperClass='terminal'
                            center
                        
                        >
                            
                            <div><Contact/></div>
                        
                        </Html>}>
                    </Route>

                    {/* <Route path="/Notes" element={<Html><Notes/></Html>}></Route> */}
        </Routes>


      </Float>

                
      
       

    </>
}
//style={{width: "50vw", height: "50vh", translate: "50%"}}