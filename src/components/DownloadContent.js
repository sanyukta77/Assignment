import PropTypes from "prop-types";
import "./DownloadContent.css";

const DownloadContent = ({ className = "" }) => {
  return (
    <div className={`download-content ${className}`}>
      <h1 className="ready-to-get">ready to get started?</h1>
      <div className="ready-description">
        <p className="risus-habitant-leo">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
      </div>
      <div className="download-buttons">
        <img className="download-buttons-child" alt="" src="/group-35905.svg" />
        <button className="rectangle-parent4">
          <div className="frame-child8" />
          <div className="download-app-wrapper">
            <div className="download-app">download app</div>
          </div>
          <img className="download-icon" alt="" src="/download-icon.svg" />
        </button>
      </div>
      <div className="frame-parent2">
        <img className="frame-child9" alt="" src="/group-35905.svg" />
        <div className="phone-rating">
          <img
            className="phone-rating-child"
            loading="lazy"
            alt=""
            src="/group-35932-1@2x.png"
          />
          <img className="iphone-13-pro" alt="" src="/iphone-13-pro@2x.png" />
          <img
            className="single-star-icon"
            loading="lazy"
            alt=""
            src="/star-7.svg"
          />
        </div>
      </div>
      <img
        className="single-star-icon1"
        loading="lazy"
        alt=""
        src="/star-6-1.svg"
      />
    </div>
  );
};

DownloadContent.propTypes = {
  className: PropTypes.string,
};

export default DownloadContent;
