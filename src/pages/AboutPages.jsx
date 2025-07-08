import "../assets/css/AboutPages.css";
 import kupu from "../assets/images/kupu.jpg"
 const AboutPages = () => {
  return (
    <div id="about">
      <div className="aboutme">
        About <span className="aboutme1">Me</span>
        <p className="texabout">
          I’m Nurkhalisa Rahmadani  who is 20 y.o.My hobie Designing I'm from Indonesia, I'm
          interested to be a Fullstack developer. I'm currently learning Js and
          UI/UX that also make a new thing of the world, probably the carrer and
          my experience of my future
        </p>
         <img className="lotie" src={kupu} />
      </div>
    </div>
  );
};
export default AboutPages;
