import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="skills"ref={ref} >
      
      <div className="container mt-5">
        <motion.h6
        
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: .8 }}
          whileHover={{ scale: 1.07 }}
          
          style={{
            textAlign: "center",
            color: "rgb(78, 73, 73)",
            fontWeight: "lighter",
            paddingTop: "20px",
          }}
        >
          Skills
        </motion.h6>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.07 }}
          style={{
            textAlign: "center",
            color: "rgb(78, 73, 73)",
            fontWeight: "lighter",
          }}
        >
          Technical Skills
        </motion.h2>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
          <motion.div
          
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3  skillhover"
          >
            
            <div><img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              width="50"
            /></div>
            

            <div><h5 className="text-light fw-bold">HTML</h5></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              width="50"
            />
            <h5 className="text-light fw-bold">CSS</h5>
          </motion.div>
         
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="50"
            />

            <h5 className="text-light fw-bold">Java Script</h5>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              width="50"
            />

            <h5 className="text-light fw-bold">MongoDB</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js"
              width="50"
              style={{backgroundColor:'white',borderRadius:'50%'}}
            />

            <h5 className="text-light fw-bold">Express JS</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React.js"
              width="50"
            />

            <h5 className="text-light fw-bold">React JS</h5>
          </motion.div>
         
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              width="50"
            />

            <h5 className="text-light fw-bold">Node JS</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Node.js"
              width="50"
            />

            <h5 className="text-light fw-bold">Git</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: +50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: +50 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.07 }}
            className="col-4 col-sm-4 col-md-3 col-lg-3 
                         d-flex flex-column align-items-center 
                         justify-content-center text-center border border-secondary rounded-5 p-3 skillhover"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Node.js"
              width="50"
            />

            <h5 className="text-light fw-bold">Git Hub</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
