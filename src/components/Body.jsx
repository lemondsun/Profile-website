import React from "react";

import { Route } from "react-router-dom";

function Body() {
  return (
    <div>
      <div id="brand-area">
      
        <h1 id="software">Software</h1>
        <h1 id="engineer">Engineer</h1>
        <p id="brand-statement"> I am a flexible and energetic software engineer with a passion to help create the engines that will drive the world of tomorrow. My values for team work have been fostered and polished for over a decade working in the field of hospitality growing from entry level positions to management teams. Preparing me for a position working with groups of like minded individuals from all walks of life on projects that we can be proud of.
        </p>
        
      </div>
      
    <div className="parallax">.</div>
      <p className="text">
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </p>
      
      

 
      <div className="parallax">.</div>
      </div>
  );
}

export default Body;
