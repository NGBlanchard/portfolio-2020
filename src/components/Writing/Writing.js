import React from "react";
import "./Writing.css";

export default function Writing() {
  return (
    <section className="writing-cont">
      <header className="writing-header">
        Writing
      </header>
      {/* <p className="writing-content">
       MFA in Creative Writing • University of Alabama
      </p> */}
      <section className="writing-grid">
      <div className="writing-card">
          Bek Mekkages
        </div>
        <div className="writing-card">
          Tough Sledding
        </div>
        <div className="writing-card">
          Marlene Invented a Search Engine
        </div>
        <div className="writing-card">
          When I Drink from the Fox's Head
        </div>
        <div className="writing-card">
          Pop Fly
        </div>
        <div className="writing-card">
          Pop Art Pop Tarts
        </div>
        <div className="writing-card">
          Whispers from the Capital Beltway
        </div>
        <div className="writing-card">
          Misc. Reviews
        </div>
      </section>
    </section>
  );
}
