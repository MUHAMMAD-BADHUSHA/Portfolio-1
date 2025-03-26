import React from "react";
import AutoTyping from "./AutoType";
import { motion } from "framer-motion";
import {  useInView } from "react-intersection-observer";
import programming from '../assets/Programming.mp4'
import { Link } from "react-router-dom";
function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div ref={ref}>
      <div
        className=" d-flex flex-wrap  "
        style={{ marginTop: "100px" }}
        id="home"
      >
        <div
          className="col-xl-6 col-md-6 col-sm-10 text-light  "
          style={{ marginTop: "70px" }}
        >
          <motion.div
          
            initial={{ opacity: 0, y: -50 }}
            animate={inView?{opacity: 1, y: 0}:{ opacity: 0, y: -50}  }
            transition={{ duration: 1.5 }}
          >
            <h4>Hello,</h4>
            <h3>
              I'm{" "}
              <span style={{ fontWeight: "bolder" }}>Muhammad Badhusha</span>
            </h3>
            <AutoTyping />

            <p>
              My name is Muhammad Badhusha , and I am currently pursuing MERN
              Stack Development at Zoople institute as a self-learner .
            </p>
          </motion.div>

          <motion.button
            
            initial={{ opacity: 0, x: -20 }}
            animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x: -20 }}
            transition={{ duration: 1.5 }}
            className="btn btn-outline-light rounded-4 fw-bold me-3"
            style={{
              border: "1px solid rgb(11, 209, 21)",
              color: "rgb(11, 209, 21",
            }}
          >
            Resume
          </motion.button>
          <motion.button
            
            initial={{ opacity: 0, x: +50 }}
            animate={inView?{ opacity: 1, x: 0 }:{ opacity: 0, x: +50 }}
            transition={{ duration: 1.5 }}
            className="btn rounded-4 fw-bold text-light"
            style={{ backgroundColor: "rgb(11, 209, 21)" }}
          >
           <Link to={'/contact'} className="text-decoration-none text-light">Contact me</Link> 
          </motion.button>
        </div>
        <div className="d-flex pt-5 flex-wrap justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-md-6 col-xl-6">
          <div className="video-container  ">
          <video autoPlay muted >
            <source src={programming} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
