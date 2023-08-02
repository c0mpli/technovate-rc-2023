import { UseMedia } from "../../hooks/useMedia";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Logo, LogoSectionAbout } from "../../components/About/index.jsx";
import { Accordion } from "../../components/Accordian/index.jsx";
import Birds from "../../components/Animation";
import Footer from "../../components/Footer/index.jsx";
import { Myinfo } from "../../components/Landing/index.jsx";
import { FirstPrize, PrizeHeading } from "../../components/Prizes/index.jsx";
import Media from "../../components/Socials/index.jsx";
import {
  Sponsor,
  SponsorsHead,
  SponsorUS,
} from "../../components/Sponsors/sponsors.jsx";
import { JoinTeam, Member } from "../../components/Team";
import {
  aboutData,
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION,
} from "../../Module/General";
import MyCalender from "../calender";
import "./about.css";
import pattern from "./assets/pattern4.png";

const SponsorGroup = (props, index) => {
  return (
    <>
      {props.title && (
        <h2>
          <span style={{ color: "#0c7ee1" }}>[</span>
          {props.title}
          <span style={{ color: "#0c7ee1" }}>]</span>
        </h2>
      )}
      <Row
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {props.images.map((s, i) => (
          <Col key={i} className="" sm={12} lg={4} md={6}>
            {" "}
            <Sponsor srcx={s.src} alt={s.alt} link={s.link} />{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia("min-width", 1000, setMedia);

  return (
    <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info ">
            <Col
              className="info-div hero-content-wrapper"
              sm={12}
              lg={7}
              md={7}
            >
              <Myinfo />
            </Col>
          </Row>

          {/* <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row> */}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout rc={true} />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo rc={true} />
          </Col>
        </Row>
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        <Row className="aboutSection">
          {aboutData.map((data, index) => {
            return (
              <Col className="info-div" sm={12} lg={3.5} md={3}>
                <div className=" LogoSectionBullets">
                  <img
                    src={data.icon}
                    alt="icon"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      // filter:
                      //   "invert(97%) sepia(2%) saturate(301%) hue-rotate(304deg) brightness(117%) contrast(100%)",
                    }}
                  />
                  <div className="BulletsSectionContent">
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          <h1>FAQs</h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row> */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          {/* <SponsorUS /> */}
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        {/* <h1 id="team">Our Team</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )}
        {TeamInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}
        {/* 
        <h1 id="team">Judges</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={TOP_SECTION.JUDGES_FORM_LINK}
            content="Interested in being judge"
          />
        )}
        {JudgesInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
