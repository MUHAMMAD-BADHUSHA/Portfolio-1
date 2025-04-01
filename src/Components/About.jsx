import React from "react";
import { motion } from "framer-motion";
import pic2 from '/pic2.png'
import AnimatedComponent from "./Animated/AnimatedComponent";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      <Navbar />
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
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            WHO AM I
          </motion.h2>
          <motion.h4
            className="text-light"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
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
        <motion.div className="col-12 col-sm-12 col-md-6 col-xl-5 d-flex justify-content-center "
        initial={{ opacity: 0, y: +80 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +80 }}
        transition={{ duration: 1 }}
        >
          <img
            src={pic2}
            style={{
              width:'100%',
              maxWidth: "300px",
              minWidth: "150px",
              
            }}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
