import React from "react";
import demoScreen from "../../img/demo-screen-2.png";
import phone from "../../img/iphone_6_plus_black_port.png";
import macbook from "../../img/macbook.png";
import hitch from "../../img/hitch-screen2.png";
import demoScreen2 from "../../img/demo-screen-1.png";
import alcove from "../../img/alcove-screen.png";
import demoScreen3 from "../../img/demo-screen-3.png";
import medmix from "../../img/medmixhomepage.png";

import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-cont">
      <header className="projects-header">Full-Stack Projects</header>
      <section className="project-grid">
        <div className="project">
          <h2 className="project-title">Alcove Reads</h2>
          <div className="device">
            <img src={phone} alt="iphone 6" className="phone" />
            <img src={demoScreen2} alt="app screenshot" className="screen" />
          </div>
          <div className="device">
            <img src={macbook} alt="iphone 6" className="computer" />
            <img src={alcove} alt="app screenshot" className="comp-screen" />
          </div>
          <p className="projects-content">React, Node/Express, MongoDB,</p>
          <p className="app-desc">
            A tool for book clubs who wish to exchange ideas, discussions, and
            keep up with reading progress.
          </p>
          <a className="links" href="https://bookclub-client.now.sh/">
            Live Demo /{" "}
          </a>
          <a
            className="links"
            href="TK"
          >
            Client Repo /{" "}
          </a>
          <a
            className="links"
            href="TK"
          >
            Server Repo
          </a>
        </div>
        <div className="project">
          <h2 className="project-title">Hitchcocktober</h2>
          <div className="device">
            <img src={phone} alt="iphone 6" className="phone" />
            <img src={demoScreen} alt="app screenshot" className="screen" />
          </div>
          <div className="device">
            <img src={macbook} alt="iphone 6" className="computer" />
            <img src={hitch} alt="app screenshot" className="comp-screen" />
          </div>
          <p className="projects-content">React, Node/Express, PostgreSQL,</p>
          <p className="app-desc">
            Every October, use this app to celebrate the films of Alfred
            Hitchcock. Browse a list of his movies and schedule them across your
            own personalized month.
          </p>
          <a className="links" href="https://hitchcocktober.now.sh/">
            Live Demo /{" "}
          </a>
          <a
            className="links"
            href="https://github.com/NGBlanchard/hitchcocktober-2"
          >
            Client Repo /{" "}
          </a>
          <a
            className="links"
            href="https://github.com/NGBlanchard/hitchcocktober-api-2"
          >
            Server Repo
          </a>
        </div>
        <div className="last-project">
          <h2 className="project-title">MedMix</h2>
          <div className="device">
            <img src={phone} alt="iphone 6" className="phone" />
            <img src={demoScreen3} alt="app screenshot" className="screen" />
          </div>
          <div className="device">
            <img src={macbook} alt="iphone 6" className="computer" />
            <img src={medmix} alt="app screenshot" className="comp-screen" />
          </div>
          <p className="projects-content">HTML5/CSS3, JavaScript, jQuery,</p>
          <p className="app-desc">
            MedMix is a tool to find and identify potentially harmful and unsafe
            combinations of prescription and over-the-counter medications.
          </p>
          <a className="links" href="https://ngblanchard.github.io/medmix/">
            Live Demo /{" "}
          </a>
          <a className="links" href="https://github.com/NGBlanchard/medmix">
            Client Repo
          </a>
        </div>
      </section>
    </section>
  );
}
