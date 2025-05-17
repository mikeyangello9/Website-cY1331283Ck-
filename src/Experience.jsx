import { OrbitControls, Html, Stage, BakeShadows } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState, useMemo } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import { isMobile } from 'react-device-detect';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import { useTheme } from "./ThemeProvider"



export default function Experience()
{

    const {x, y, z, rotx, roty, rotz } = useControls({ // debugger
        x: 0,
        y: 0,
        z: 0,
        rotx: 0,
        roty: 0,
        rotz: 0
    })
    
    const model = useMemo(() => useLoader(GLTFLoader, './revamp2grunge.glb'), []);
    const children = useMemo(() => model.scene.children, [model]);
    const directionalLightRef = useRef()
    // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 5)
    
    const { camera } = useThree()
    const { theme } = useTheme()
    const cursor = useRef({ posX: 0, posY: 0 });
    const [isMobileDevice, setIsMobileDevice] = useState(isMobile)
    // check if mobile    


    useEffect(() => {
        const handleResize = () => {
            setIsMobileDevice(window.innerWidth < 765)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

   
    useEffect(() => {
        const handleMouseMove = (event) => {
        cursor.current.posX = (event.clientX / window.innerWidth - 0.5) * 2;
        cursor.current.posY = -(event.clientY / window.innerHeight - 0.5) * 2;
        };
        if (!isMobileDevice) {
            window.addEventListener("mousemove", handleMouseMove);
        } else{
                window.removeEventListener("mousemove", handleMouseMove);
                camera.position.z = 20
        }
        

            
       
    }, [isMobileDevice]); // Runs only once
    
    useFrame(() => {
        if(!isMobileDevice){
            camera.position.x += (cursor.current.posX - camera.position.x) * 0.05;
            camera.position.y += (cursor.current.posY - camera.position.y) * 0.05;
            camera.position.z = 6; // Keep depth constant
            camera.lookAt(0, 0, 0);
        }
        
    })

    
    children.forEach((child) => {
        child.castShadow = false;
        child.receiveShadow = false;
    })

    children.forEach((child) => {
        child.frustumCulled = true;
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


        // toggle zoom inscreen
        children

    }, [])
    
  
    return <>
    

        <Perf position="bottom-left" />

        { isMobileDevice && <OrbitControls makeDefault enableZoom={false}/>}

        <directionalLight  ref={ directionalLightRef } shadow-bias = {-0.003} shadow-normalBias = { 0.015 } castShadow position={ [ -17, 6.1, 3 ] } intensity={ 3 } shadow-mapSize-width={512} shadow-mapSize-height={512} />
        
        <ambientLight intensity={ 1 } />

        <BakeShadows />
   
        <Stage>

            <primitive object={ model.scene } scale={ [1.8,1.8,1.8] } rotation={[-0.06, roty, 0.02]} position={[0, -1, 0]}>

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

                <Routes>

                    <Route path='/' element={
                        <Html
                        position={[3.5, 4.1, -1.088]}
                        transform rotateX={-0.25}
                        distanceFactor={4}
                        center
                        scale={[0.8,0.8,0.8]}
                    >
                        
                        <div><Home theme={theme}/></div>
                    
                    </Html>}>

                       
                    </Route>

                    
        </Routes>
                

            </primitive>

        </Stage>

        

        {/* <Html 
            position={[2.23, 6, 0]}
            transform rotateX={-0.25}
            rotation={[0,-1.6,0]}
            distanceFactor={4}>
            <button  style={{fontSize:"100px"}}>zoom</button>
        </Html> */}


      

                
      
       

    </>
}
