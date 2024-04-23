import React,{Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.75} groundColor='black'/>
      <pointLight intensity={3} />
      <spotLight 
        position={[-10,50,10]}
        angle={0.12}
        penubra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile?0.55:0.75}
        position={isMobile?[0,-1.5,-1.5]:[0,-3.25,-1.2]}
      />
    </mesh>
  )
}


const ComputersCanvas= ()=>{

  const [isMobile,setIsMobile] = useState(false);

    useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange =(e)=>{
        setIsMobile(e.matches)
      }
      mediaQuery.addEventListener("change",handleMediaQueryChange)

      return ()=>{mediaQuery.removeEventListener('change',handleMediaQueryChange)}

    },[])


  return(
 
    <Canvas frameloop='demand' 
      shadows
      camera={{position:[20,1,0], fov:27}}
      gl={{preserveDrawingBuffer:true}}
    >
       <Suspense fallback={<CanvasLoader/>}>
         <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2 }
            minPolarAngle={Math.PI / 2}
          />
           <Computers isMobile={isMobile}/>
       </Suspense>

        <Preload all />
    </Canvas>
 

    
  )
}

export default ComputersCanvas