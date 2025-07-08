// const NavBar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 fixed w-full z-10 shadow">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Ramprasad</h1>
//         <ul className="flex space-x-6">
//           <li><a href="#about" className="hover:text-blue-400">About</a></li>
//           <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
//           <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
//           <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
//           <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Ramprasad</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;