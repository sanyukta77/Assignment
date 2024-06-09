import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`features-container-parent ${className}`}>
      <div className="features-container">
        <div className="feature-list">
          <div className="premium-feature">
            <div className="features1">features</div>
            <h1 className="uifry-premium">uifry premium</h1>
          </div>
          <div className="feature-items">
            <div className="feature-titles">
              <b className="budgeting-intervals">budgeting intervals</b>
            </div>
            <p className="cum-et-convallis1">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="feature-items1">
            <div className="budgeting-intervals-wrapper">
              <b className="budgeting-intervals1">budgeting intervals</b>
            </div>
            <p className="cum-et-convallis2">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="feature-items2">
            <div className="budgeting-intervals-container">
              <b className="budgeting-intervals2">budgeting intervals</b>
            </div>
            <p className="cum-et-convallis3">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      <div className="advantages-container-parent">
        <div className="advantages-container">
          <div className="star-cubes">
            <div className="wrapper-group-35930">
              <img
                className="wrapper-group-35930-child"
                loading="lazy"
                alt=""
                src="/group-35930.svg"
              />
            </div>
            <img className="star-icon" alt="" src="/star-icon.svg" />
            <img className="star-05-icon" alt="" src="/star05.svg" />
            <img className="cube-02-icon" alt="" src="/cube02.svg" />
            <img className="cube-04-icon" alt="" src="/cube04.svg" />
            <div className="wrapper-group-35933">
              <img
                className="wrapper-group-35933-child"
                alt=""
                src="/group-35933@2x.png"
              />
            </div>
          </div>
          <div className="advantage-list">
            <div className="advantage-items">
              <div className="advantage-details">
                <div className="advatnages">advatnages</div>
                <h1 className="why-choose-uifry">why choose Uifry?</h1>
              </div>
              <div className="notification">
                <h3 className="clever-notifications">clever notifications</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="credit-card">
          <div className="wrapper-group-35931">
            <img
              className="wrapper-group-35931-child"
              alt=""
              src="/group-35931.svg"
            />
          </div>
          <p className="arcu-at-dictum8">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
          <div className="wrapper-group-35935">
            <img
              className="wrapper-group-35935-child"
              alt=""
              src="/group-35935@2x.png"
            />
          </div>
          <div className="on-hold">
            <div className="on-hold-child" />
            <img
              className="banner-background-icon"
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="banner-content">
              <div className="from-adom-info">
                <div className="from-adom-details">
                  <div className="from-adom-label">
                    <b className="from-adom-placeholder">$560.00</b>
                  </div>
                  <div className="on-hold1">On Hold</div>
                </div>
                <div className="from-adom">From Adom</div>
              </div>
            </div>
          </div>
          <div className="credit-card-elements">
            <img className="credit-card-star" alt="" src="/star-icon.svg" />
            <div className="wrapper-group-35937">
              <img
                className="wrapper-group-35937-child"
                alt=""
                src="/group-35937@2x.png"
              />
            </div>
            <div className="card-details">
              <img
                className="card-details-child"
                alt=""
                src="/group-35932@2x.png"
              />
              <div className="card-number">
                <div className="rectangle" />
                <div className="card-number-details">
                  <div className="card-number-input">
                    <img
                      className="group-icon1"
                      loading="lazy"
                      alt=""
                      src="/group@2x.png"
                    />
                    <div className="valid-thru">
                      <b className="tm1">TM</b>
                    </div>
                  </div>
                  <div className="card-type">
                    <img
                      className="credit-cardvisa-typewhite"
                      loading="lazy"
                      alt=""
                      src="/credit-cardvisa-typewhite.svg"
                    />
                  </div>
                </div>
                <div className="card-holder">
                  <div className="card-holder-name">0000 8888 2222 3333</div>
                  <div className="expiration-date">
                    <div className="valid-thru-wrapper">
                      <div className="valid-thru1">VALID THRU</div>
                    </div>
                    <div className="expiration-date-placeholder">07/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
