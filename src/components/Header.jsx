import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul id="header-menu">
       <li>
          <a href="#brand-statement-area" className="header-buttons">About Me</a>
          </li>
        <li>
          <a href="#project-area" className="header-buttons">Projects</a>
          </li>
        <li>
          <a href="#contact-form-area" className="header-buttons">Contact</a>
          </li>
       <li>
        <a href="https://www.docdroid.net/7ds4EkQ/jason-mullings-resume.pdf" target="_blank" className="header-buttons">Resume</a>
      </li>
      </ul>
      <img src="https://i.imgur.com/1cdZdfo.jpg" id="header-image"></img>
      <h1 id="first-name">Jason</h1>
      <h1 id="last-name"> Mullings</h1>
    </div>
  );
}
