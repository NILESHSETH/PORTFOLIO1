// const Footer = () => {
//   return (
//     <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3">
//         <div className="social-icon">
//           <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
//         </div>
//       </div>

//       <p className="text-white-500">© 2026 Nilesh Seth. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/NILESHSETH',
    icon: '/assets/github.svg',
  },
  {
    name: 'twitter',
    url: 'https://x.com/Nilesh_Kr_Seth',
    icon: '/assets/twitter.svg',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/nilesh_seth0077',
    icon: '/assets/instagram.svg',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nileshseth/',
    icon: '/assets/linkedin.svg',
  },
];

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map(({ name, url, icon }) => (
          <a key={name} href={url} target="_blank" rel="noreferrer" className="social-icon">
            <img src={icon} alt={name} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p className="text-white-500">© 2026 Nilesh Seth. All rights reserved.</p>
    </footer>
  );
};

export default Footer;