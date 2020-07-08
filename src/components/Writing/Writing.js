import React from "react";
import "./Writing.css";
import decomp from "../../img/decomp.png";
import missouri from "../../img/missouri.png";
import epigraph from "../../img/epigraph.png";
import atticus from "../../img/atticus.png";
import mcsweeneys from "../../img/mcsweeneys.png";
import singunburied from "../../img/singunburied.png";
import swingtime from "../../img/swingtime.png";
import grass from "../../img/grass.png";

export default function Writing() {
  return (
    <section className="writing-cont" id="writing">
      <header className="writing-header">Writing</header>
      <section className="writing-grid">
        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={missouri} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>Bek Mekkages</h1>
              <p>The Missouri Review, May 2016</p>
              <a href="https://www.missourireview.com/2016-audio-contest-runner-up-in-humor-nathan-blanchard/">
                Listen
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={decomp} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>
                Marlene Invented <br />a Search Engine
              </h1>
              <p>decomP, February 2015</p>
              <a href="http://www.decompmagazine.com/marleneinventedasearchengine.htm">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={epigraph} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>
                When I Drink <br />
                from the Fox's Head
              </h1>
              <p>Epigraph, Issue 8, December 2014</p>
              <a href="http://www.epigraphmagazine.com/uploads/1/5/6/7/15676572/epigraph_issue_008.pdf">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={atticus} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>Pop Fly</h1>
              <p>The Atticus Review, July 2014</p>
              <a href="https://atticusreview.org/pop-fly/">Read</a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={mcsweeneys} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>Pop Art Pop Tarts</h1>
              <p>McSweeney’s Internet Tendency, May 2013</p>
              <a href="https://www.mcsweeneys.net/articles/pop-art-pop-tarts">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={singunburied} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>
                Review: Sing, Unburied,
                <br /> Sing
              </h1>
              <p>
                Washington Independent Review of Books <br />
                October 2017
              </p>
              <a href="https://bookmarks.reviews/reviewer/nathan-blanchard/">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={swingtime} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>Review: Swing Time</h1>
              <p>
                Washington Independent Review of Books <br />
                December 2016
              </p>
              <a href="https://bookmarks.reviews/reviewer/nathan-blanchard/">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="block_holder">
          <div className="hover_block card">
            <img className="writing-img" src={grass} alt="TK" />
            <div className="circle_over"></div>
            <div className="circle_in"></div>
            <div className="hover_info">
              <h1>Review: The Dying Grass</h1>
              <p>
                Washington Independent Review of Books <br />
                August 2015
              </p>
              <a href="https://bookmarks.reviews/reviewer/nathan-blanchard/">
                Read
              </a>
            </div>
          </div>
        </div>
      </section>
      <p className="writing-content">
        MFA in Creative Writing • University of Alabama 2018
      </p>
    </section>
  );
}
