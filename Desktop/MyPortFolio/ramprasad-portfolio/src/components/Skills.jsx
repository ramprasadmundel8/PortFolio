const Skills = () => {
  const skills = [
    'Java', 'Spring Boot', 'React.js', 'JavaScript', 'Python',
    'HTML', 'CSS', 'MySQL', 'MongoDB', 'Postman', 'Git', 'Figma',
    'PyTorch', 'TensorFlow'
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;