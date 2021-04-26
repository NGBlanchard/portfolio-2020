import React from "react";
import nathan from "../../img/ngb.png";
import { Link } from "react-scroll";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero-cont">
      <section className="image-cropper">
        <img className="me" src={nathan} alt="TK" />
      </section>
      <div className="bio-cont">
        <header className="header-content">
          Writer | Product Developer | Teacher | Multimodal Designer
        </header>
        <Link
          id="contact-btn"
          smooth="easeInOutQuart"
          duration={1000}
          to="contact"
          className="btn btn-outline btn-xl js-scroll-trigger"
        >
          CONTACT ME
        </Link>
      </div>
    </header>
  );
}
