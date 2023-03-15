// inspo: https://www.copycat.dev/blog/react-three-fiber/
import React, { useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";

function SphereMesh(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += props.xRota));
  // useFrame((state, delta) => (ref.current.rotation.y += props.yRota));
  // useFrame((state, delta) => (ref.current.rotation.z += props.zRota));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={props.argus} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "#41b883" : "#61dafb"}
      />
    </mesh>
  )
}

function TorusMesh(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += props.xRota));
  // useFrame((state, delta) => (ref.current.rotation.y += props.yRota));
  // useFrame((state, delta) => (ref.current.rotation.z += props.zRota));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      position={props.transform ? props.transform : 0}
      rotation={props.offset ? props.offset : 0}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <torusGeometry args={props.argus} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "#41b883" : "#61dafb"}
      />
    </mesh>
  )
}
 
function Logo(props) {
  return (
    <div style={{
      width: "50vw",
      height: "50vh"
    }}>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={.5} />
        <SphereMesh argus={[1, 32, 32]} />
        <TorusMesh
          argus={[2.5, 0.2, 32, 32]}
          xRota={0.01}
          yRota={0.02}
          zRota={0.03}
          offset={new THREE.Euler(Math.PI / -3, Math.PI, Math.PI)}
          stopAnimation={true}
        />
        <TorusMesh
          argus={[2.5, 0.2, 32, 32]}
          xRota={0.03}
          yRota={0.02}
          zRota={0.01}
          // transform = {new THREE.Vector3(0.9, 0, 0)}
          offset={new THREE.Euler(Math.PI / -3, Math.PI / -4, Math.PI)}
          // offset={new THREE.Euler(Math.PI / -2, Math.PI / -4, Math.PI)}
          stopAnimation={true}
        />
        <TorusMesh
          argus={[2.5, 0.2, 32, 32]}
          xRota={0.02}
          yRota={0.01}
          zRota={0.03}
          // transform = {new THREE.Vector3(-0.9, 0, 0)}
          offset={new THREE.Euler(Math.PI / -3, Math.PI / 4, Math.PI)}
          // offset={new THREE.Euler(Math.PI / -2, Math.PI / 4, Math.PI)}
          stopAnimation={true}
        />
      </Canvas>
    </div>
  );
}
 
export default Logo;