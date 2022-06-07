import React from "react";
import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={style.footerPage}>
        <p className={style.footerText}>
          Ecommerce created during Wizeline's Academy React Bootcamp
        </p>
      </footer>
    </>
  );
};

export default Footer;
