import { OrbitControls, Html, Stage, BakeShadows, useProgress, Float } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState, useMemo } from 'react'
import { isMobile } from 'react-device-detect';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { applyToon } from './applyToon';
import * as THREE from 'three'


import { useTheme } from "./ThemeProvider"

// Model.jsx (top of file, OUTSIDE the component)
// const outlineMaterial = new THREE.MeshBasicMaterial({
//   color: 'black',
//   side: THREE.BackSide,
//   depthWrite: false,
// });



export default function Model()
{

    // toon

    function createToonGradient() {
      const canvas = document.createElement("canvas");
      canvas.width = 3;
      canvas.height = 1;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 1, 1); 
      ctx.fillStyle = "#777";
      ctx.fillRect(1, 0, 1, 1); 
      ctx.fillStyle = "#fff";
      ctx.fillRect(2, 0, 1, 1); 
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps= false;
      return texture;

    }
    
    const model = useLoader(GLTFLoader, './revamp2grunge.glb');
    const children = useMemo(() => model.scene.children, [model]);
    const gradientMap = useMemo(() => createToonGradient(), []) // memo
    const directionalLightRef = useRef()
    // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 5)
    const today = new Date()
    const { camera } = useThree()
    const { theme } = useTheme()
    const cursor = useRef({ posX: 0, posY: 0 });
    const [isMobileDevice, setIsMobileDevice] = useState(isMobile)
    const [floatMode, setFloatMode] = useState(isMobile)

    const [now, setNow] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        setNow(new Date())
      }, 1000)
      return () => clearInterval(interval)
    }, [])


    useEffect(() => {
        const handleResize = () => {
            const nowMobile = window.innerWidth < 1025
            setIsMobileDevice(nowMobile)
            setFloatMode(nowMobile)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

   
    useEffect(() => {
        const handleMouseMove = (event) => {
        cursor.current.posX = (event.clientX / window.innerWidth - 0.5) * 2;
        cursor.current.posY = -(event.clientY / window.innerHeight - 0.5) * 2;
        };
        if (!floatMode) {
            window.addEventListener("mousemove", handleMouseMove);
        } 
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            camera.position.z = 15
            
        }
        

            
       
    }, [floatMode]);
    
    useFrame(() => {
        if(!floatMode){
            camera.position.x += (cursor.current.posX - camera.position.x) * 0.05;
            camera.position.y += (cursor.current.posY - camera.position.y) * 0.05;
            camera.position.z = 6; 
            camera.lookAt(0, 0, 0);
        } else if (floatMode) {
          // Ensure correct camera angle for float mode
          camera.position.set(0, 0, 20)
          camera.lookAt(0, 0, 0)
        }
        
    })

    
  useEffect(() => {
    children.forEach((child) => {
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = true;
    });
  }, [children]);


  // toon
  useEffect(() => {
    children.forEach((child, index) => {
    console.log({
      mesh: child.name,
      materialName: child.material?.name ?? 'NO NAME',
      materialType: child.material?.type
    });

    })
  }, [children]);

  // toon
  const meshesToStyle = [
  { name: 'caseTop', color: '#f2a141' },
  { name: 'casebottom', color: '#f2a141' },
  { name: 'topPaddingfitting', color: '#374151' },
  { name: 'bottom_padding', color: '#374151' },
  { name: 'sideport', color: '#f2a141' },
  { name: 'gpioport', color: '#f2a141' },
  { name: 'Cylinder001', color: '#f2a141' },
  { name: 'Cylinder002', color: '#374151' },
  { name: 'Cylinder003', color: '#374151' },
  { name: 'Cylinder004', color: '#374151' },
  
];

  useEffect(() => {
    if (!model || !gradientMap) return;

  meshesToStyle.forEach(({ name, color }) => {
    applyToon({
      scene: model.scene,
      meshName: name,
      color,
      gradientMap,
    });
  });
  }, [model. gradientMap])


    




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
    

    const ToggleButton = () =>
    !isMobileDevice && (
      <Html position={[-4, 5.1, -1.088]} transform rotateX={-0.25} distanceFactor={4} center scale={[0.8, 0.8, 0.8]}>
        <button
          onClick={() => setFloatMode(prev => !prev)}
          style={{
            padding: '6px 10px',
            fontSize: '2rem',
            background: theme,
            color: 'white',
            border: '1px solid #444',
            borderRadius: '5px',
            fontFamily: 'monospace',
            cursor: 'pointer'
          }}
        >
          {floatMode ? 'Interact Mode' : 'Float Mode'}
        </button>
      </Html>
    )


    const modelContent = (
    <primitive object={model.scene} scale={[1.8, 1.8, 1.8]} position={[0, -1, 0]}  >
      <Html position={[-0.6, 4.1, -1.088]} transform rotateX={-0.25} distanceFactor={4} wrapperClass="terminal" center occlude>
        <iframe className="frame" src="/iframe-assets/terminal.html" />
      </Html>

      <Html position={[4, 4.1, -1.088]} transform rotateX={-0.25} distanceFactor={4} center scale={[0.8, 0.8, 0.8]}>
        <div>
          <div className="info-board">
            <div className="time">
              {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
            </div>
              
            
            <div className='copyright'>© {now.getFullYear()} Michael Aiwekhoe</div>

            <span>25*c</span>
          </div>
        </div>
      </Html>

      <ToggleButton />
    </primitive>
  )
  
    return floatMode ? (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      {modelContent}
    </Float>
  ) : (
    modelContent
  )
}