import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`trial-background-parent ${className}`}>
      <div className="trial-background" />
      <div className="trial-background1" />
      <div className="trial-content">
        <img
          className="trial-content-child"
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className="trial-star-icon"
          loading="lazy"
          alt=""
          src="/star-7-1.svg"
        />
        <img className="trial-content-item" alt="" src="/rectangle-3.svg" />
        <div className="make-the-best1">make the best financial decisions</div>
        <b className="uifry-premium1">Uifry Premium</b>
        <a className="free-trial">free trial</a>
      </div>
      <div className="footer-background" />
      <img className="frame-child10" alt="" src="/group-35920@2x.png" />
      <img
        className="single-star-icon2"
        loading="lazy"
        alt=""
        src="/star-8.svg"
      />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
