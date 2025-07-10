import React, { useEffect, useRef } from "react";
import "../assets/css/About.css";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { typeText } from "./Typing";
import vidio from "../assets/images/17445-281494056.mp4";
import nur from "../assets/images/nur.jpg" 
const About = () => {
   const typingRef =useRef(null);
   useEffect(()=>{
      if(typingRef.current){
         typeText(typingRef.current," ICEA",80)
      }
   })
  return (
    <div  >
      <div>
        <div className="about">
          <li className="ab1">ABOUT & CONTACT</li>
          <li className="ab3">HI,I'M<span className="col" ref={typingRef}></span> </li>
          <li className="ab2">UI/UX DESIGNER AND WEB DEVELOPER</li>
          <li className="sosmed">
            <a href="https://www.instagram.com/nurkhalisarhmdnii_/" rel="noopener noreferrer">
              <FaInstagram color="rgb(255, 2, 158)"  />
            </a>
            <a href="https://www.facebook.com/aimlisaaa?rdid=BraYzTOng5XKoRoq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ArYhizkwe%2F#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF color="rgb(255, 2, 158)"  />
            </a>
            <a href="https://github.com/Icea02" target="_blank" rel="noopener noreferrer">
              <FaGithub color="rgb(255, 2, 158)" />
            </a>
            <a href="https://x.com/Nurkhalisa29281?t=WBmtB3axNRdLKgfxyh10aw&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter color="rgb(255, 2, 158)"  />
            </a>
          </li>
        </div>
        <div>
          <video
            className="vidio"
            src={vidio}
            autoPlay
            muted
            loop
            playsInline
          />
          <img className="nur" src={nur}/>
        </div>
      </div>
    </div>
  );
};
export default About;
