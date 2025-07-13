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

      <Stage>
        {isMobileDevice ? (
          <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
            <Model theme={theme} />
          </Float>
        ) : (
          <Model theme={theme} />
        )}
      </Stage>
    </>
  )
}
