import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p className="contact-email">
          <MdEmail style={{ verticalAlign: "middle", marginRight: "8px", fontSize: "1.3em", color: "#6366f1" }} />
          ramprasadmundel8696@gmail.com
        </p>
        <div className="contact-links">
          <a href="https://github.com/ramprasadmundel8/Ramprasad_Mundel" target="_blank" rel="noopener noreferrer" className="contact-link github">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ramprasad-mundel-b0534322a/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/ram_choudhary01/" target="_blank" rel="noopener noreferrer" className="contact-link leetcode">
            LeetCode
          </a>
          <a href="https://www.geeksforgeeks.org/user/ramprasadmundel8696/" target="_blank" rel="noopener noreferrer" className="contact-link gfg">
            GFG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;