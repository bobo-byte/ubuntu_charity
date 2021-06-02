import React from "react";
import "./assets/css/donation.css";

const DonationWidget = ({ url, title, progress, current, target }) => {
  return (
    <div
      id="gfm-campaign-widget"
      className="o-campaign-embed o-campaign-embed--tile"
      data-view-id="pg_widget"
    >
      <div
        className="a-link a-link--unstyled"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href =
            "https://www.gofundme.com/f/thk4h-ubuntu?utm_source=widget&amp;utm_medium=referral&amp;utm_campaign=p_cp+share-sheet";
        }}
      >
        <div
          className="o-campaign-embed-image a-image a-image--background"
          style={{ backgroundImage: url }}
        ></div>
        <div className="o-campaign-embed-content">
          <h1 className="o-campaign-embed-heading">{title}</h1>
          <div className="m-progress-meter">
            <progress
              className="a-progress-bar a-progress-bar--green"
              value={progress}
              max="100"
            ></progress>
            <h2 className="m-progress-meter-heading">
              {current}{" "}
              <span className="text-stat text-stat-title">
                raised of {target} goal
              </span>
            </h2>
          </div>
          <div className="o-campaign-embed-cta">
            <a
              className="o-campaign-embed-button exp-gradient-gfm exp-gradient-gfm--donate ml0 mr0 a-button a-button--max-full a-button--large a-button--solid-yellow a-link"
              href="https://www.gofundme.com/f/thk4h-ubuntu/donate?utm_source=widget&amp;utm_medium=referral&amp;utm_campaign=p_cp+share-sheet"
              target="_blank"
              rel="noreferrer"
            >
              Donate now
            </a>
            <div className="o-campaign-embed-logo ml">
              <svg
                className="a-logo color-green"
                height="69"
                viewBox="0 0 129 69"
                width="129"
              >
                <use
                  href="/static/media/logos.f967d9c38c4460c8a52d2f8a8375931c.svg#logo-GoFundMe"
                  xlinkHref="/static/media/logos.f967d9c38c4460c8a52d2f8a8375931c.svg#logo-GoFundMe"
                ></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationWidget;
