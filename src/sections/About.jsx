import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    // Change this to your actual email
    navigator.clipboard.writeText('nileshkumarseth@email.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* ── CARD 1 — Introduction ── */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* ✅ leading slash added */}
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Nilesh Kumar Seth</p>
              <p className="grid-subtext">
                I am a Software Development Engineer passionate about building products and brands through clean,
                scalable code and modern web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* ── CARD 2 — Tech Stack ── */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* ✅ leading slash added */}
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in React, Node.js, Three.js and modern tools that allow me to build robust and
                scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* ── CARD 3 — Globe / Location ── */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat: 23.7957,       // ✅ Dhanbad, Jharkhand coordinates
                  lng: 86.4304,
                  text: 'Dhanbad, India',
                  color: 'white',
                  size: 15,
                }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m based in Dhanbad, India and open to remote work worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* ── CARD 4 — Passion for Coding ── */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* ✅ leading slash added */}
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn,t just my
                profession — it's my passion. I enjoy exploring new technologies and constantly
                enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* ── CARD 5 — Contact / Email ── */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            {/* ✅ leading slash added */}
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                {/* ✅ leading slash added */}
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                {/* ✅ Change this to your actual email */}
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  nileshkumarseth@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(' adrian@jsmastery.pro');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Hi, I’m Adrian Hajdin</p>
//               <p className="grid-subtext">
//                 With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
//                 and responsive websites.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                 I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
//                 applications
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-4">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
//               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;