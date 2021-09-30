import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Design and Develop by <a href="http://geghair.com">Geghair Mahmoudi</a>
      </p>
      <style jsx>{`
        footer {
          padding: 5px;
          background-color: #000;
          color: #fff;
          text-align: center;
        }
        footer a {
          text-decoration: none;
          color: #fff;
          
        }
      `}</style>
    </footer>
  );
};

export default Footer;