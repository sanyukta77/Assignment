import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "mimi" }) => {
  return (
    <header className={`app-landing-page-inner ${className}`}>
      <div className="frame-div">
        <div className="frame-wrapper1">
          <div className="hero-content-parent">
            <div className="hero-content">
              <a className="tm">TM</a>
            </div>
            <nav className="navigation">
              <a className="home">home</a>
              <a className="about-us">about us</a>
              <a className="pricing">pricing</a>
              <a className="features">features</a>
            </nav>
          </div>
        </div>
        <button className="group-button">
          <div className="frame-child6" />
          <a className="download">download</a>
        </button>
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
