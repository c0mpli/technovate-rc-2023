import hackathonLogo from "./Assets/logo_coloured.png";
import rcLogo from "./Assets/rc_logo.png";
import tcLogo from "./Assets/technovate.png";
// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import userIcon from "./Assets/user.png";
import codingIcon from "./Assets/coding.png";
import calenderIcon from "./Assets/calendar.png";
import pinIcon from "./Assets/pin.png";
import first from "./Assets/gold.png";
import second from "./Assets/silver2.png";
import third from "./Assets/third.png";
import boy from "./Assets/boy.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import ll from "./Assets/sponsorsLogos/ll.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import Replit from "./Assets/sponsorsLogos/replit.png";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import lyin from "./Assets/teami/lyin.jpg";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import zoha from "./Assets/teami/zoha.png";

const TOP_SECTION = {
  TITLE: "16th - 17th September",
  Typed_effect: ["Innovate", "Iterate", "Inspire"],
  SHORT_DESCRIPTION:
    "Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u",
  IMAGE: tcLogo,
};

const SOCIALS = {
  instagram: "https://instagram.com/rotaract3141?igshid=MzRlODBiNWFlZA== ",
  youtube: "https://www.youtube.com/@RotaractDistrict-jd5gd",
  website: "https://rotaract3141.org/",
  email: "https://wa.me/+918369470976",
  mail: "Rachit - 83694 70976 | Bhushan - 88284 41824",
};

const MIDDLE_SECTION = {
  TITLE: "What is Technovate?",
  LONG_DESCRIPTION:
    "Welcome to Technovate, where we turn caffeine into code and creativity into solutions. Our logo represents our core values: Innovate, Iterate, Inspire. We're not your average hackathon; we hack for good and make a positive impact. With a team of tech enthusiasts and dreamers, we gather bright minds, wild ideas, and strong coffee to tackle social challenges head-on. Join us for a weekend of coding frenzy, discussions, and the chance to shape a better future. Technovate: Where innovation meets social change. Let's hack away at challenges and build a world where technology drives positive transformation.",
  LOGO: hackathonLogo,
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u",
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u",
  },
  Privacy_policy: {
    required: false,
    src: "",
  },
  Terms_of_use: {
    required: false,
    src: "",
  },
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2023,
};

const schedule = [
  {
    day: "8-11-2021",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "5-12-2021",
    events: [
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "3-12-2021",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "1-12-2021",
    events: [
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "1-1-2022",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
];

const aboutData = [
  {
    icon: pinIcon,
    title: "Mode of Conduct",
    content: "Offline",
  },
  {
    icon: calenderIcon,
    title: "Date & Time",
    content: "16th September, 2023 at 11AM",
  },
  {
    icon: userIcon,
    title: "Team Size",
    content: "2 to 4 members",
  },
  {
    icon: codingIcon,
    title: "Domain",
    content: "Social Cause.",
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: (
        <img
          src={first}
          alt="first"
          style={{ width: "18rem", height: "18rem", textAlign: "center" }}
        />
      ),
      type: "First Prize",
      content: "INR 25,000",
    },
    {
      icon: (
        <img
          src={second}
          alt="second"
          style={{ width: "16.5rem", height: "16.5rem", textAlign: "center" }}
        />
      ),
      type: "Second Prize",
      content: "INR 15,000",
    },
    {
      icon: (
        <img
          src={third}
          alt="third"
          style={{ width: "15rem", height: "15rem", textAlign: "center" }}
        />
      ),
      type: "Third Prize",
      content: "INR 10,000",
    },
  ],
  // [
  //   //Array 2
  //   {
  //     icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
  //     type: "Best Solo",
  //     content:
  //       "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team",
  //   },
  //   {
  //     icon: <i className="first fas fa-4x fa-trophy"></i>,
  //     type: " Best Beginner",
  //     content: "Your project will qualify for this category if atleast 50% ",
  //   },
  //   {
  //     icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
  //     type: "Best UI/UX",
  //     content: "Project with most creative designs will be UI/UX track",
  //   },
  // ],
  // [
  //   //Array 3
  //   {
  //     icon: <i className="fas fa-4x sixth fa-male"></i>,
  //     type: "Best Web App with Qoom",
  //     content: "Must use qoom in your project to win this category",
  //   },
  //   {
  //     icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
  //     type: "More prizes",
  //     content: "More prizes will be revealed later",
  //   },
  // ],
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "https://github.com/Limbo-Hacks/Hackathon-website-template",
      linkedin: "",
      img: me,
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon,
    },
    {
      Name: "Erika",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah,
    },
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin,
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha,
    },
  ],
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me,
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon,
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah,
    },
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin,
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha,
    },
  ],
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  [{ src: egg }, { src: ll }, { src: ACF }], //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "Who can participate?",
        content:
          "The hackathon is open for Students from all over India. It is the right place for anyone who's interested in learning and innovating with their ideas.",
      },
      {
        label: "How much will it cost?",
        content:
          "Registration for Technovate is completely free, Accomodation and food is completely free for shortlisted teams as well.",
      },
      {
        label: "How can I apply?",
        content: `The registration would be simply done by just clicking the register button and filling up the Devfolio form in which you would have to mention you and your team details. Registrations end on 20th January 2023`,
      },
    ],
    [
      {
        label: "What if I don't know how to code?",
        content:
          "No worries, Interest in learning and working with technology is much more important than your current experience level.",
      },
      {
        label: "What are the prizes to be won?",
        content:
          "We are going to announce some really exciting prizes and incentives soon. Stay tuned for further updates!",
      },
      {
        label: "Can we apply as a team?",
        content:
          "Yes! We believe that you’re stronger as a team than apart. You can form teams of 2-4 people. Most teams aim to have a mix of people with both design and development skills.",
      },
    ],
  ],
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  aboutData,
};
