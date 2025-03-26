import React from "react";

function Footer() {
  return (
    <footer className="text-center text-light fw-bold pt-3 mt-3"style={{ backgroundColor:'rgba(2, 14, 4, 0.72)',height:'80px'}} >
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Muhammad Badhusha. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
