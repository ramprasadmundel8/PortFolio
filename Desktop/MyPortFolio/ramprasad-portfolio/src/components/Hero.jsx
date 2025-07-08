// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center text-center bg-blue-50 pt-20" id="home">
//       <div>
//         <h1 className="text-4xl md:text-6xl font-bold">Hi 👋, I'm Ramprasad Mundel</h1>
//         <p className="mt-4 text-lg md:text-xl">
//           A passionate Java Full Stack Developer and AI/ML Enthusiast from India.
//         </p>
//         <p className="text-sm text-gray-600 mt-2">Software Engineering Intern @ Target</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Hi 👋, I'm <span className="highlight">Ramprasad Mundel</span></h1>
        <p className="hero-subtitle">
          A passionate <span className="highlight">Java Full Stack Developer</span> and <span className="highlight">AI/ML Enthusiast</span> from India.
        </p>
        <p className="hero-role">Software Engineering Intern @ Target</p>
        <a href="#contact" className="btn hero-btn">Let's Connect</a>
      </div>
    </section>
  );
};

export default Hero;
