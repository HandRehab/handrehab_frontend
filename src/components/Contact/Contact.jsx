import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../NavBar/NavBar";



const Contact = () => {
    const persons = [
      {
        name: "Adithiya Suresh",
        photo: "",
        email: "aditiyasuresh@gmail.com",
        phone: "7306972412",
        github: "",
        linkedin: "",
      },
      {
        name: "Akshara Kalathil",
        photo: "",
        email: "aksharakalathil@gmail.com",
        phone: "8590283644",
        github: "",
        linkedin: "",
      },
      {
        name: "Amal B Palackal",
        photo: "/images/amal.jpg",
        email: "amalbpalackal@gmail.com",
        phone: "9846846237",
        github: "",
        linkedin: "",
      },
      {
        name: "Athul Saji",
        photo: "",
        email: "athulsaji2024@cs.sjcetpalai.ac.in",
        phone: "7558860887",
        github: "",
        linkedin: "",
      },
    ];
  
    return (
        <div>
      <Navbar />
      <div className="about-us-page">
        <h1 className="cont">Contact Us</h1>
        <div className="person-boxes">
          {persons.map((person, index) => (
            <motion.div
              className="person-box"
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 500,
              }}
            >
              <img src={person.photo} alt={person.name} />
              <h2>{person.name}</h2>
              <p>Email: {person.email}</p>
              <p>Phone: {person.phone}</p>
              <div className="social-icons">
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    );
  };
  
  export default Contact;