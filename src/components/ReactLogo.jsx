// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes['React-Logo_Material002_0'].geometry}
//           material={materials['Material.002']}
//           position={[0, 7.935, 18.102]}
//           rotation={[0, 0, -Math.PI / 2]}
//           scale={[39.166, 39.166, 52.734]}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/scene.gltf')





// import { Float, useGLTF } from "@react-three/drei";

// const ReactLogo = (props) => {
//   const { nodes, materials } = useGLTF("models/react.glb");

//   return (
//     <Float floatIntensity={1}>
//       <group position={[8, 8, 0]} scale={0.4} {...props} dispose={null}>
//         <mesh
//           geometry={nodes["React-Logo_Material002_0"].geometry}
//           material={materials["Material.002"]}
//           position={[0, 0.079, 0.181]}
//           rotation={[0, 0, -Math.PI / 2]}
//           scale={[0.392, 0.392, 0.527]}
//         />
//       </group>
//     </Float>
//   );
// };

// useGLTF.preload("models/react.glb");

// export default ReactLogo;



import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  // "/models/react.glb" → leading slash = looks in public/models/
  const { nodes, materials } = useGLTF("/models/react.glb");

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.4} {...props} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

// preload also needs the leading slash
useGLTF.preload("/models/react.glb");

export default ReactLogo;
