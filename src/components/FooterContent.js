import PropTypes from "prop-types";
import "./FooterContent.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={`footer-content ${className}`}>
      <div className="brand-info">
        <div className="brand-logo">
          <div className="brand-name">
            <div className="tm2">TM</div>
          </div>
          <div className="brand-contact">
            <div className="helpfrybixcom">help@frybix.com</div>
            <div className="contact-details">+1 234 456 678 89</div>
          </div>
        </div>
      </div>
      <div className="navigation-links">
        <h2 className="links">links</h2>
        <div className="navigation-items">
          <div className="home1">home</div>
        </div>
        <div className="navigation-items1">
          <div className="about-us1">about us</div>
        </div>
        <div className="navigation-items2">
          <div className="bookings">bookings</div>
        </div>
        <div className="navigation-items3">
          <div className="blog">blog</div>
        </div>
      </div>
      <div className="footer-links">
        <h2 className="legal">legal</h2>
        <div className="terms-of-use">terms of use</div>
        <div className="privacy-policy">privacy policy</div>
        <div className="cookie-policy">cookie policy</div>
      </div>
      <div className="footer-links1">
        <h2 className="product">product</h2>
        <div className="take-tour">take tour</div>
        <div className="live-chat">live chat</div>
        <div className="reveiws">reveiws</div>
      </div>
      <div className="newsletter-signup">
        <h2 className="newsletter">Newsletter</h2>
        <div className="stay-up-to">Stay up to date</div>
        <div className="rectangle-parent5">
          <div className="rectangle1" />
          <div className="email-field">
            <div className="your-email">{`Your email `}</div>
          </div>
          <button className="group">
            <div className="rectangle2" />
            <div className="subscribe">Subscribe</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
