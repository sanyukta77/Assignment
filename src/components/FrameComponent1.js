import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`make-the-best-financial-decisi-parent ${className}`}>
      <h1 className="make-the-best">make the best financial decisions</h1>
      <p className="cum-et-convallis">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <div className="call-to-action">
        <button className="rectangle-parent3">
          <div className="frame-child7" />
          <div className="get-started">get started</div>
          <div className="vector-wrapper">
            <img className="vector-icon" alt="" src="/vector-1.svg" />
          </div>
        </button>
        <div className="watch-video-button">
          <div className="watch-video">watch video</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
