import React from "react";

import { Slide } from "react-slideshow-image";

export default function Projects() {
  const slideImages = [
    "https://media.giphy.com/media/duLrxdbtlDABbsRZo8/giphy.gif",
    "https://i.imgur.com/TpbW1qN.jpg",
    "https://media.giphy.com/media/mBptyFCBPUSMBewxk2/giphy.gif"
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {}
  };
  return (
    <div id="project-area">
      <div id="extra-box">
        <h1 id="moblie-projects-header-first">Recent</h1>
        <h1 id="moblie-projects-header-second">Projects:</h1>

        <div className="slide-container">
          <p id="click-directions">Click image to visit site</p>
          <Slide {...properties}>
            <div className="each-slide">
              <a href="http://wisewords.surge.sh/" target="_blank">
                <div
                  style={{ backgroundImage: `url(${slideImages[0]})` }}
                ></div>
                <h3 className="project-title">Wise Words</h3>
              </a>
            </div>
            <div className="each-slide">
              <a href="http://chuckedout.surge.sh/" target="_blank">
                <div
                  style={{ backgroundImage: `url(${slideImages[1]})` }}
                ></div>
                <h3 className="project-title">Get Chucked</h3>
              </a>
            </div>
            <div className="each-slide">
              <a href="https://tartinenyc.surge.sh/" target="_blank">
                <div
                  style={{ backgroundImage: `url(${slideImages[2]})` }}
                ></div>
                <h3 className="project-title">Tartine</h3>
              </a>
            </div>
          </Slide>
        </div>

        {/*-------------- full screen ----------------*/}

        <h1 id="project-header">Recent Projects:</h1>

        <div id="project-row">
          <div className="project-area">
            <a href="http://wisewords.surge.sh/" target="_blank">
              <h3 className="projects-titles">Wise-words</h3>
            </a>
            <p>
              A web app designed to answer simple questions with the use of the
              React framework and an external API.
            </p>
            <img
              className="project-images"
              src="https://media.giphy.com/media/duLrxdbtlDABbsRZo8/giphy.gif"
            />
            <hr></hr>
            <img
              className="project-languages-images"
              src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
            />
            <img
              className="project-languages-images"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
            />
            <hr className="projects-bottom-divider"></hr>
            <a href="https://github.com/lemondsun/Wise-Words" target="_blank">
              <img
                className="github-link"
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
              />
            </a>
          </div>
          <div className="project-area">
            <a href="http://chuckedout.surge.sh/" target="_blank">
              <h3 className="projects-titles">Chucked Out</h3>
            </a>
            <p>
              A fun dive into the world of API's. Made with vanilla Javascript
              and two seperate API's.
            </p>
            <img
              className="project-images"
              src="https://i.imgur.com/TpbW1qN.jpg"
            />
            <hr></hr>
            <img
              className="project-languages-images"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
            />
            <img
              className="project-languages-images"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            />
            <img
              className="project-languages-images"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            />
            <hr className="projects-bottom-divider"></hr>
            <a
              href="https://github.com/lemondsun/could-chuck-game"
              target="_blank"
            >
              <img
                className="github-link"
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
              />
            </a>
          </div>
          <div className="project-area">
            <a href="https://coquito143.github.io/" target="_blank">
              <h3 className="projects-titles">Tartine</h3>
            </a>
            <p>
              A remodeled website developed with a team of UX designers and
              other Software Engineers.
            </p>
            <img
              className="project-images"
              src="https://media.giphy.com/media/mBptyFCBPUSMBewxk2/giphy.gif"
            />
            <hr></hr>
            <img
              className="project-languages-images"
              src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
            />
            <img
              className="project-languages-images"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
            />
            <hr className="projects-bottom-divider"></hr>
            <a href="https://tartinenyc.surge.sh" target="_blank">
              <img
                className="github-link"
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
