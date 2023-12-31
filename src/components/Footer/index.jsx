import { useEffect, useState } from "react";
import { FOOTER, SOCIALS, TOP_SECTION } from "../../Module/General";
import { Btn } from "../Landing/index.jsx";
import cross from "./assets/cross.svg";
import Insta from "./assets/icons8-instagram.svg";
import Youtube from "./assets/icons8-youtube.svg";
import PrivacyPolicy from "./assets/Privacy policy.pdf";
import TermsOfUse from "./assets/Terms of use.pdf";
//------------------------------------------------------------------
import "./style.scss";

const GithubTemplate = ({ hideTemplate }) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{" "}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.youtube}>
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>
        {/* <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div> */}
        <div className="footer_info">
          <p>
            Contact us{" "}
            <a href={SOCIALS.email} target="__blank">
              <em>{SOCIALS.mail}</em>
            </a>{" "}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )}
          <p>
            Made with ❤️ by{" "}
            <a href="https://techthree.vercel.app/" target="__blank">
              TechThree
            </a>
          </p>
        </div>
        {/* {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )} */}
      </div>
    </div>
  );
};

export default Footer;
