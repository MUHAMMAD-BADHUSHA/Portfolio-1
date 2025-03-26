import React from "react";
import { motion } from "framer-motion";
import about from '../assets/about.mp4'
import AnimatedComponent from "./Animated/AnimatedComponent";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      <Navbar/>
      <div
        ref={ref}
        id="about"
        className="container  d-flex flex-wrap   pt-5"
        style={{
          marginTop: "100px",
          borderTop: "1px solid rgba(48, 47, 47, 0.86)",
          borderRadius: "30px",
          borderBottom: "1px solid rgba(48, 47, 47, 0.86)",
        }}
      >
        <div className="col-12 col-sm-12 col-md-6 col-xl-6 ">
          <motion.h2
            style={{
              color: "rgb(78, 73, 73)",
              fontWeight: "lighter",
            }}
            
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 }:{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            WHO AM I
          </motion.h2>
          <motion.h4
            className="text-light"
            
            initial={{ opacity: 0, y: -10 }}
            animate={inView?{ opacity: 1, y: 0 }:{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            My name is Muhammad Badhusha ,<br />
            <span
              style={{
                color: "rgba(40, 230, 22, 0.81)",
                fontWeight: "lighter",
              }}
            >
              Full Stack Developer,Web Devolper,MERN Stack Developer
            </span>
          </motion.h4>
          <AnimatedComponent />
          <motion.button
           
            initial={{ opacity: 0, y: +300 }}
            animate={inView?{ opacity: 1, y: 0 }:{ opacity: 0, y: +300 }}
            transition={{ duration: 1 }}
            className="btn"
            style={{ backgroundColor: "#39CD14" }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "lighter",
              }}
              to={"https://github.com/MUHAMMAD-BADHUSHA"}
            >
              See My GitHub
            </Link>{" "}
          </motion.button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-xl-5 d-flex justify-content-center ">
          <div className="video-container">
            <video autoPlay muted>
              <source src={about} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
