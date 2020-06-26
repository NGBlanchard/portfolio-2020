import React from "react";
import nathan from "../../img/ngb.png";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero-cont">
      <section className="image-cropper">
        <img className="me" src={nathan} alt="TK" />
      </section>
      <header className="header-content">
        I'm a web developer, writer, and teacher. I design and teach classes in computer science, literature, writing, and podcasting.
      </header>
      <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">
        CONTACT ME
      </a>
    </header>
  );
}
