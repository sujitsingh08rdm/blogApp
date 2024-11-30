import React from "react";
import "./App.css";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://pixlr.com/images/generator/photo-generator.webp"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>AN AI GENERATED IMAGE</h2>
        <p className="info">
          <a className="author">Sujit</a>
          <time>2024-11-08 21:03</time>
        </p>
        <p className="summary">
          rtificial Intelligence (AI) is a rapidly advancing field that focuses
          on creating machines and systems capable of performing tasks that
          typically require human intelligence. These tasks include
          problem-solving, decision-making, learning, natural language
          processing, and visual perception.
        </p>
      </div>
    </div>
  );
}
