// import React from "react";
// import StarBackground from './components/StarBackground.jsx';
// import Hero from './sections/Hero.jsx';
// import About from './sections/About.jsx';
// import Footer from './sections/Footer.jsx';
// import Navbar from './sections/Navbar.jsx';
// import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
// import Projects from './sections/Projects.jsx';
// import WorkExperience from './sections/Experience.jsx'; 

// function App() {
//   return (
//     <main className="max-w-7xl mx-auto">
//       <StarBackground /> 
//        <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Clients />
//       <WorkExperience />
//       <Contact />*
//       <Footer />
//     </main>
//   );
// }

// export default App;
import { lazy, Suspense } from 'react';
import StarBackground from './components/StarBackground.jsx';

// Lightweight sections — load normally
import Navbar from './sections/Navbar.jsx';
import About from './sections/About.jsx';
import Clients from './sections/Clients.jsx';
import WorkExperience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

// Heavy 3D sections — load lazily
const Hero = lazy(() => import('./sections/Hero.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <StarBackground />
      <Navbar />
      <Suspense fallback={
        <div style={{ 
          width: '100%', height: '100vh', 
          display: 'flex', alignItems: 'center', 
          justifyContent: 'center', background: '#010103'
        }}>
          <span className="canvas-loader" />
        </div>
      }>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Clients />
        {/* <WorkExperience /> */}
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;