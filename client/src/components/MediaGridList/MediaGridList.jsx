import React from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import MusicCard from "../MusicCard/MusicCard";
import "./style.css";

const GridList = () => {
  return (
    <div className="container">
      <div data-uk-slider>
        <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="/"
          data-uk-slidenav-previous
          data-uk-slider-item="previous">
          <i className="fas fa-arrow-left" />
        </a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="/"
          data-uk-slidenav-next
          data-uk-slider-item="next">
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default GridList;
