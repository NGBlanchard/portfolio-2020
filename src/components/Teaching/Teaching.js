import React from "react";
import "./Teaching.css";
export default function Teaching() {
  return (
    <section className="teaching-cont" id="teaching">
      <section>
        <div className="sectionTitle">
        <header className="projects-header">Teaching</header>
        </div>
        <div className="resume-cont">
        <div className="sectionContent">
        <article className="teach">
            <h2>New Jersey Institute of Technology</h2>
            <p className="subDetails">March 2021 - Present</p>
            <p>
            Introduction to Full-Stack Development <br />
            HTML & Web Accessibility <br />
            CSS & CSS Frameworks <br />
            JavaScript & Front-End Web Development <br />
            Milestone Project 1: Browser Game <br />
            React & Redux
            </p>
          </article>

          <article className="teach">
            <h2>Montgomery County Public Schools</h2>
            <p className="subDetails">June 2020 - Present</p>
            <p>
              Foundations of Engineering & Technology <br />
              AP Computer Science Principles <br />
              Web Design
            </p>
          </article>

          <article  className="teach">
            <h2>Saint John's College Prep</h2>
            <p className="subDetails">June 2018 - June 2020</p>
            <p>
              American Literature <br />
              Podcasting <br />
              Creative Writing
            </p>
          </article>

          <article  className="teach">
            <h2>University of Alabama</h2>
            <p className="subDetails">June 2014 - June 2018</p>
            <p>
              Special Topics Writing: Techniques of Audio Storytelling <br />
              American Literature II <br />
              Prose Tour <br />
              Intro to Creative Writing <br />
              Advanced English Composition: Illness in Popular Culture <br />
              English Composition 101/102 (multiple sections)
            </p>
          </article>

          <article  className="teach">
            <h2>Alabama Prison Arts & Education Project</h2>
            <p className="subDetails">August 2016 - December 2016</p>
            <p>American Literature 1965-2015</p>
          </article>

          <article  className="teach">
            <h2>Saint Timothy's School</h2>
            <p className="subDetails">October 2012 - June 2014</p>
            <p>
              American Literature <br />
              Music Appreciation <br />
              Associate Dean of Students
            </p>
          </article>

          <article  className="teach">
            <h2>Other</h2>
            Graduate Writing Consultant
            <p className="subDetails">August 2014 - August 2015</p>
            Athletic Tutor<br/>
            <p className="subDetails">June 2015 - August 2015</p>
            Creative Writing Camp Instructor
            <p className="subDetails">June 2016</p>
            
          </article>
        </div>
        <div className="clear"></div>
        </div>
      </section>
    </section>
  );
}
