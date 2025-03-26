import React from "react";
import calculator from "../assets/Calculator.mp4";
import ecommerce from "../assets/Ecommerce.mp4";
import todo from "../assets/todo.mp4";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div>
      <Navbar/>
      <div className="container" style={{ marginTop: "70px" }}>
        <h6 style={{ textAlign: "center", color: "rgb(158, 156, 156)" }}>
          Projects
        </h6>
        <div
          ref={ref}
          className="d-flex flex-wrap gap-2 justify-content-center mt-5"
        >
          <div className="border rounded-4 col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <video autoPlay muted style={{ width: "200px" }}>
                <source src={calculator} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div
              initial={{ opacity: 0, y: +50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
              transition={{ duration: 1 }}
            >
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#fff",
                  border: "none",
                }}
              />
              <h4 className="text-light text-center"> Calculator</h4>
              <p className="text-light text-center">
                A Basic calculator with html,css,javascript
              </p>
              <h6 className="text-light text-center">
                <a href="https://muhammad-badhusha.github.io/Calculator.js/" target='_blank' style={{ color: "rgba(23, 207, 23, 0.94)" }}>
                 Live
                </a>
              </h6>
            </motion.div>
          </div>
          <div className="border rounded-4 col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <video autoPlay muted style={{ width: "200px" }} className="">
                <source src={todo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div
              initial={{ opacity: 0, y: +50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
              transition={{ duration: 1 }}
            >
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#fff",
                  border: "none",
                }}
              />
              <h4 className="text-light text-center">Todo</h4>
              <p className="text-light text-center">
                Developed a full-stack todo application with React, MongoDB,
                Node.js, and Express.Implemented CRUD operation
              </p>
              <h6 className="text-light text-center">
                <a href="https://github.com/MUHAMMAD-BADHUSHA/TodoList" target='_blank' style={{ color: "rgba(23, 207, 23, 0.94)" }}>
                  GitHub
                </a>
              </h6>
            </motion.div>
          </div>
          <div className="border rounded-4 col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <video autoPlay muted style={{ width: "200px" }}>
                <source src={ecommerce} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div
              initial={{ opacity: 0, y: +50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
              transition={{ duration: 1 }}
            >
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#fff",
                  border: "none",
                }}
              />
              <h4 className="text-light text-center">Ecommerce</h4>

              <p className="text-light text-center">
                Created a basic e-commerce website using React.js for the
                frontend, Node.js and Express for the backend, and MongoDB for
                the database. 
              </p>
              <h6 className="text-light text-center">
                <a href="https://github.com/MUHAMMAD-BADHUSHA/DemoEcommerce" target="_blank"  style={{ color: "rgba(23, 207, 23, 0.94)" }}>
                  GitHub
                </a>
              </h6>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
