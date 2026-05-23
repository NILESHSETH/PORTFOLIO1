import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx"; // ← ADD THIS
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/HackerRoom.jsx";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
//     <section className="min-h-screen w-full flex flex-col relative" id="home">
//       {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Nilesh Kumar Seth <span className="waving-hand">👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">
//           Building Products & Brands
//         </p>
//       </div> */}
//       {/* ── TEXT CONTENT ── */}
// <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">

//   {/* Responsive text size: smaller on mobile, larger on desktop */}
//   <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-medium text-white text-center font-generalsans">
//     Hi, I am Nilesh Kumar Seth <span className="waving-hand">👋</span>
//   </p>

//   {/* Responsive hero tag */}
//   <p className="hero_tag text-gray_gradient">
//     Building Products & Brands
//   </p>

// </div>

//       <div className="w-full h-full absolute inset-0">
//         <Canvas className="w-full h-full">
//           <Suspense fallback={<CanvasLoader />}>
//             {/* To hide controller */}
//             {/* { <Leva hidden /> */}
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             <HeroCamera isMobile={isMobile}>
//               <HackerRoom
//                 scale={sizes.deskScale}
//                 position={sizes.deskPosition}
//                 rotation={[0.1, -Math.PI, 0]}
//               />
//             </HeroCamera>

//             {/* <group>
//               <Target position={sizes.targetPosition} />
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Rings position={sizes.ringPosition} />
//               <Cube position={sizes.cubePosition} />
//             </group> */}
//             <group>
//               {/* <Target position={sizes.targetPosition} /> */}
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Rings position={sizes.ringPosition} />
//               <Cube position={sizes.cubePosition} />
//             </group>

//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>

//       <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
//         <a href="#about" className="w-fit">
//           <Button
//             name="Let's work together"
//             isBeam
//             containerClass="sm:w-fit w-full sm:min-w-96"
//           />
//         </a>
//       </div>
//     </section>
<section className="h-screen w-full flex flex-col relative" id="home">

  {/* Text — sits above canvas via z-index */}
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
    <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
      Hi, I am Nilesh Kumar Seth <span className="waving-hand">👋</span>
    </p>
    <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
  </div>

  {/* Canvas — behind text, no pointer interference */}
  <div className="w-full h-full absolute inset-0">
    <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <Leva hidden />
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

        <HeroCamera isMobile={isMobile}>
          <HackerRoom
            scale    = {sizes.deskScale}
            position = {sizes.deskPosition}
            rotation = {[0.1, -Math.PI, 0]}
          />
        </HeroCamera>

        <group>
          <ReactLogo position={sizes.reactLogoPosition} />
          <Rings     position={sizes.ringPosition}      />
          <Cube      position={sizes.cubePosition}      />
        </group>

        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
  </div>

  {/* CTA Button */}
  <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
    <a href="#about" className="w-fit">
      <Button
        name="Let's work together"
        isBeam
        containerClass="sm:w-fit w-full sm:min-w-96"
      />
    </a>
  </div>

</section>
  );
};

export default Hero;
// // ============================================================
// // EXTERNAL LIBRARY IMPORTS
// // ============================================================

// // Leva: a UI panel for tweaking 3D scene values (position, scale, etc.) during development
// import { Leva } from 'leva';

// // Suspense: a React component that shows a fallback (loading screen) while children load
// import { Suspense } from 'react';

// // Canvas: the main 3D rendering container — everything 3D lives inside this
// import { Canvas } from '@react-three/fiber';

// // useMediaQuery: a hook that returns true/false based on screen width breakpoints
// import { useMediaQuery } from 'react-responsive';

// // PerspectiveCamera: sets up how we "see" the 3D scene (like a real camera with depth)
// import { PerspectiveCamera } from '@react-three/drei';

// // ============================================================
// // LOCAL COMPONENT IMPORTS
// // ============================================================

// // Cube: an animated 3D cube floating in the scene
// import Cube from '../components/Cube.jsx';

// // Rings: decorative 3D rings floating in the scene
// import Rings from '../components/Rings.jsx';

// // ReactLogo: the spinning React logo (the atom icon) in 3D
// import ReactLogo from '../components/ReactLogo.jsx';

// // Button: a reusable styled button component (used for "Let's work together")
// import Button from '../components/Button.jsx';

// // Target: a 3D target/crosshair object floating in the scene
// import Target from '../components/Target.jsx';

// // CanvasLoader: the loading spinner shown while 3D models are being downloaded
// import CanvasLoader from '../components/CanvasLoader.jsx';

// // HeroCamera: wraps the scene and handles smooth camera movement on mouse move
// import HeroCamera from '../components/HeroCamera.jsx';

// // calculateSizes: a helper function that returns correct sizes/positions based on screen size
// import { calculateSizes } from '../constants/index.js';

// // HackerRoom: the main 3D room model (desk, monitors, etc.) — the centerpiece of the hero
// import { HackerRoom } from '../components/HackerRoom.jsx';

// // ============================================================
// // HERO SECTION COMPONENT
// // ============================================================

// const Hero = () => {

//   // ── RESPONSIVE BREAKPOINTS ──────────────────────────────
//   // These return true/false depending on the user's screen width
//   const isSmall  = useMediaQuery({ maxWidth: 440 });               // phone (small)
//   const isMobile = useMediaQuery({ maxWidth: 768 });               // phone (all)
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 }); // tablet

//   // Pass breakpoints into calculateSizes to get correct scale/position values for each screen
//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   // ── JSX / RENDER ────────────────────────────────────────
//   return (

//     // Full-screen section that acts as the Hero container
//     <section className="min-h-screen w-full flex flex-col relative" id="home">

//       {/* ── TEXT CONTENT ─────────────────────────────────── */}
//       {/* Sits on top of the 3D canvas via z-index stacking */}
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">

//         {/* Greeting text with a waving hand emoji */}
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Nilesh Kumar Seth <span className="waving-hand">👋</span>
//         </p>

//         {/* Tagline with gradient text styling */}
//         <p className="hero_tag text-gray_gradient">
//           Building Products & Brands
//         </p>

//       </div>

//       {/* ── 3D CANVAS CONTAINER ──────────────────────────── */}
//       {/* absolute inset-0 makes it fill the entire section behind the text */}
//       <div className="w-full h-full absolute inset-0">

//         {/* Canvas is the WebGL rendering surface — all 3D objects go inside here */}
//         <Canvas className="w-full h-full">

//           {/* Suspense shows <CanvasLoader /> spinner until all 3D models finish loading */}
//           <Suspense fallback={<CanvasLoader />}>

//             {/* Leva hidden = hides the dev control panel in production */}
//             <Leva hidden />

//             {/* PerspectiveCamera: positions our viewpoint 30 units away from the scene */}
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             {/* HeroCamera: adds subtle parallax movement as the user moves their mouse */}
//             {/* isMobile disables parallax on phones (too sensitive on touch) */}
//             <HeroCamera isMobile={isMobile}>

//               {/* HackerRoom: the main 3D desk/room model */}
//               {/* scale  → how big the model appears (changes per screen size) */}
//               {/* position → where it sits in the scene (changes per screen size) */}
//               {/* rotation → slightly tilted and flipped to face the camera correctly */}
//               <HackerRoom
//                 scale    = {sizes.deskScale}
//                 position = {sizes.deskPosition}
//                 rotation = {[0.1, -Math.PI, 0]}
//               />

//             </HeroCamera>

//             {/* Floating 3D decorative objects grouped together */}
//             <group>

//               {/* Target icon — positioned based on screen size */}
//               <Target    position={sizes.targetPosition}   />

//               {/* Spinning React logo — positioned based on screen size */}
//               <ReactLogo position={sizes.reactLogoPosition} />

//               {/* Decorative rings — positioned based on screen size */}
//               <Rings     position={sizes.ringPosition}     />

//               {/* Animated cube — positioned based on screen size */}
//               <Cube      position={sizes.cubePosition}     />

//             </group>

//             {/* ── LIGHTING ───────────────────────────────── */}

//             {/* ambientLight: soft light that hits all objects equally (no shadows) */}
//             <ambientLight intensity={1} />

//             {/* directionalLight: like sunlight — comes from one direction, creates depth */}
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />

//           </Suspense>
//         </Canvas>
//       </div>

//       {/* ── CTA BUTTON ───────────────────────────────────── */}
//       {/* Fixed at the bottom of the screen, above the 3D canvas (z-10) */}
//       <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">

//         {/* Clicking scrolls the user down to the #about section */}
//         <a href="#about" className="w-fit">
//           <Button
//             name           = "Let's work together"
//             isBeam                                    // enables the animated beam/glow effect
//             containerClass = "sm:w-fit w-full sm:min-w-96"
//           />
//         </a>

//       </div>

//     </section>
//   );
// };

// export default Hero;
