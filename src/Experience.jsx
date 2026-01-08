import { OrbitControls, BakeShadows, Stage, Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useState } from 'react'
import Model from './Model'
import { useTheme } from './ThemeProvider'
import { isMobile } from 'react-device-detect'
import { useProgress } from '@react-three/drei'


export default function Experience({ onProgress }) {
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile)
  const { theme } = useTheme()
  const { progress } = useProgress()
  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 1025)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

    useEffect(() => {
      if(onProgress) onProgress(progress)
    }, [progress, onProgress])



  return (
    <>
      <BakeShadows />

      <ambientLight intensity={0.15} />

      <directionalLight
        position={[6, 10, 4]}
        intensity={3.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      <Stage environment={null}> 
          <Model/>

      </Stage>
    </>
  )
}
