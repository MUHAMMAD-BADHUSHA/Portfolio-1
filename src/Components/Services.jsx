import React from "react";
import webDev from "src/assets/webDev.mp4";
import uiux from "../assets/uiux.mp4";
import work from "../assets/work.mp4";



function Services() {
  return (
   <div>
    
     <div className="container mt-5">
      <h6 style={{ textAlign: "center", color: "rgb(78, 73, 73)" ,paddingTop:'10px'}}>
        Services
      </h6>
      <h2
        style={{
          textAlign: "center",
          color: "rgb(78, 73, 73)",
          fontWeight: "lighter",
        }}
      >
        What I Do For You
      </h2>
      <div className="d-flex flex-wrap justify-content-center ">
        <div className=" col-md-6 col-xl-3 col-lg-4" >
              <div className="video-container">
                <video autoPlay muted style={{marginLeft:'15px'}}>
                  <source src={webDev} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>  
          <h4
            style={{
              textAlign:'center',
              color: "rgb(253, 251, 251)",
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            Web Development
          </h4>
        </div>
        <div className="col-md-6 col-xl-3 col-lg-4">
          <div className="video-container">
            <video autoPlay muted>
              <source src={uiux} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h4
            style={{
              textAlign: "center",
              color: "rgb(253, 251, 251)",
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            Web Design
          </h4>
        </div>
        <div className="col-md-6 col-xl-3 col-lg-4">
          <div className="video-container">
            <video autoPlay muted>
              <source src={work} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h4
            style={{
              textAlign: "center",
              color: "rgb(253, 251, 251)",
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            Freelance
          </h4>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Services;
