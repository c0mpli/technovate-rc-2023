import { useEffect, useRef } from "react";
import { SOCIALS, TOP_SECTION } from "../../Module/General";
import MytypedComponent from "../Typed/index.js";
import "./style.css";

const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  const devfolioRef = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    const dev = devfolioRef.current;
    dev.appendChild(script);
    return () => {
      dev.removeChild(script);
    };
  }, []);
  return (
    <div className="AboutMe" id="devfolio" ref={devfolioRef}>
      <MytypedComponent />
      <h2 style={{ marginBottom: "30px" }}>{TOP_SECTION.TITLE}</h2>
      <div
        class="apply-button"
        data-hackathon-slug="technovate"
        data-button-theme="light"
        style={{ height: "44px", width: "312px", cursor: "pointer" }}
      ></div>
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <img
        src={TOP_SECTION.IMAGE}
        alt="myimage"
        onClick={() => {
          window.open("https://technovate.devfolio.co", "_blank");
        }}
      />
      <About />
      {/* <p> {TOP_SECTION.SHORT_DESCRIPTION}</p> */}
      {/* <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div>
      <div className="buttom-group">
        <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
        </a>

        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="Hackers registration"
          />
        </a>
      </div> */}
    </div>
  );
};

export { Btn, Myinfo };
