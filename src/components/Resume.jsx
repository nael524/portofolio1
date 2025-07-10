import React from "react";
import "../assets/css/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">NURKHALISA RAHMADANI</h1>
      <h2 className="resume-subtitle">Aspiring Fullstack Developer | UI/UX Enthusiast</h2>

      <section className="resume-section">
        <h3>📄 Profile</h3>
        <p>
          I'm Nurkhalisa Rahmadani, 20 years old from Indonesia. I'm passionate about designing and coding.
          Currently focusing on improving my JavaScript and UI/UX skills. I love creating new things that contribute 
          positively to the world and I'm building a strong foundation for my future career in fullstack development.
        </p>
      </section>

      <section className="resume-section">
        <h3>📞 Contact</h3>
        <ul>
          <li><strong>Email:</strong> rahmadainurkhalisa@gmail.com</li>
          <li><strong>Phone:</strong> +62 82162802600</li>
          <li><strong>Location:</strong> Indonesia,Sumataera Utara ,Meadan ,Perbaungan ,Tualang lingkungan 9 jalan sunario</li>
          <li><strong>Freelance:</strong> Available</li>
          <li><strong>GitHub:</strong> github.com/yourusername</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>🎯 Interests & Goals</h3>
        <ul>
          <li>Learning JavaScript & UI/UX design</li>
          <li>Creating useful and innovative web applications</li>
          <li>Building a career as a Fullstack Developer</li>
          <li>Juara 1 Mengikuti Lomba Drumband tingkat Provinsi</li>
          <li>Juara 2 Drumband tingkat kabupaten</li>
          <li>Juara 3 Nahu sharaf </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>🧑‍💻 Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript (in progress)</li>
          <li>Basic UI/UX Design using Figma</li>
          <li>Version control with Git & GitHub</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>🎓 Education</h3>
        <p> SDn 105361 Lubuk cemara</p>
        <p>MTs alwashliya 12 perbaungan</p>
      <p>MA Alwaashliyah 12 Perbaungan</p>
      <p>universitas Satya terra Bhinneka</p>
              </section>

      <section className="resume-section">
        <h3>🌐 Language</h3>
        <p>Bahasa Indonesia (native), English (intermediate)</p>
      </section>
    </div>
  );
};

export default Resume;
