import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DownloadContent from "../components/DownloadContent";
import GroupComponent from "../components/GroupComponent";
import FooterContent from "../components/FooterContent";
import "./AppLandingPage.css";

const AppLandingPage = () => {
  return (
    <div className="app-landing-page">
      <FrameComponent2 />
      <div className="hero-description">
        <b className="a">a</b>
        <FrameComponent1 />
      </div>
      <FrameComponent />
      <div className="customization">
        <div className="customization-details">
          <div className="customization-highlight">
            <h3 className="fully-customizable">fully customizable</h3>
          </div>
          <p className="arcu-at-dictum">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className="testimonial-container-wrapper">
        <div className="testimonial-container">
          <div className="testimonial-content">
            <div className="testimonial-title">
              <div className="testimonial">testimonial</div>
            </div>
            <h1 className="what-our-users">what our users say about us?</h1>
          </div>
          <div className="testimonial-quote">
            <div className="quote-content">
              <h3 className="the-best-financial">
                the best financial accounting app ever!
              </h3>
              <blockquote className="arcu-at-dictum1">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </blockquote>
            </div>
          </div>
          <div className="author">
            <b className="nick-jonas">nick jonas</b>
          </div>
        </div>
      </div>
      <div className="f-a-q-content-parent">
        <div className="f-a-q-content">
          <div className="faq">faq</div>
          <h1 className="frequently-asked-questions">
            Frequently asked questions
          </h1>
        </div>
        <div className="frame-parent">
          <div className="frame-group">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <h3 className="the-best-financial1">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum2">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rectangle-group">
              <div className="frame-item" />
              <h3 className="the-best-financial2">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum3">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <h3 className="the-best-financial3">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum4">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="frame-container">
            <div className="group-div">
              <div className="rectangle-div" />
              <h3 className="the-best-financial4">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum5">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rectangle-parent1">
              <div className="frame-child1" />
              <h3 className="the-best-financial5">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum6">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rectangle-parent2">
              <div className="frame-child2" />
              <h3 className="the-best-financial6">
                the best financial accounting app ever!
              </h3>
              <p className="arcu-at-dictum7">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="download-content-wrapper">
        <DownloadContent />
      </div>
      <main className="footer-top">
        <div className="wrapper-group-35897">
          <img
            className="wrapper-group-35897-child"
            loading="lazy"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <div className="wrapper-group-1000002356">
          <img
            className="wrapper-group-1000002356-child"
            alt=""
            src="/group-1000002356.svg"
          />
        </div>
        <img className="footer-top-child" alt="" src="/rectangle-4.svg" />
        <GroupComponent />
        <div className="wrapper-group-35899">
          <img
            className="wrapper-group-35899-child"
            loading="lazy"
            alt=""
            src="/group-35899.svg"
          />
        </div>
        <div className="wrapper-group-35896">
          <img
            className="wrapper-group-35896-child"
            loading="lazy"
            alt=""
            src="/group-35896.svg"
          />
        </div>
        <img
          className="placeholder-shape-icon"
          alt=""
          src="/placeholder-shape@2x.png"
        />
        <img className="footer-top-item" alt="" src="/group-3.svg" />
        <img
          className="footer-top-content"
          loading="lazy"
          alt=""
          src="/star-8.svg"
        />
        <div className="phone-container">
          <div className="wrapper-phone-screen">
            <img
              className="phone-screen-icon"
              alt=""
              src="/phone-screen@2x.png"
            />
          </div>
          <img
            className="iphone-13-pro-front-icon"
            alt=""
            src="/iphone13profront@2x.png"
          />
        </div>
        <img
          className="iphone-13-pro-front-icon1"
          alt=""
          src="/iphone13profront-1@2x.png"
        />
        <img
          className="footer-top-content1"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="footer-top-content2"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="footer-top-inner"
          loading="lazy"
          alt=""
          src="/group-28@2x.png"
        />
        <div className="frame-parent1">
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-27@2x.png"
          />
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src="/group-29@2x.png"
          />
          <img
            className="frame-child4"
            loading="lazy"
            alt=""
            src="/group-30@2x.png"
          />
          <img
            className="frame-child5"
            loading="lazy"
            alt=""
            src="/group-31@2x.png"
          />
        </div>
        <div className="social-links">
          <div className="wrapper-group-10000023561">
            <img
              className="wrapper-group-1000002356-item"
              loading="lazy"
              alt=""
              src="/group-1000002356-1.svg"
            />
          </div>
          <div className="wrapper-group-1000002332">
            <img
              className="wrapper-group-1000002332-child"
              alt=""
              src="/group-1000002332.svg"
            />
          </div>
        </div>
        <img
          className="footer-top-content3"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="footer-top-content4"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="footer-top-content5"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="footer-top-content6"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img className="footer-top-content7" alt="" src="/star-icon.svg" />
        <img
          className="footer-top-content8"
          loading="lazy"
          alt=""
          src="/star-icon.svg"
        />
        <img
          className="footer-top-child1"
          loading="lazy"
          alt=""
          src="/group-35899-1.svg"
        />
        <img
          className="footer-top-child2"
          loading="lazy"
          alt=""
          src="/group-35899-2.svg"
        />
        <img
          className="footer-top-content9"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="footer-top-content10"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="footer-top-content11"
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
        <img
          className="footer-top-content12"
          loading="lazy"
          alt=""
          src="/frame-3.svg"
        />
      </main>
      <div className="footer-bottom">
        <FooterContent />
        <footer className="frame-wrapper">
          <div className="frame">
            <div className="copyright-2022-uifrycom">
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLandingPage;
