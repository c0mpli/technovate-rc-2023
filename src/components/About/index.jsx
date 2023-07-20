import "./style.css";

import { MIDDLE_SECTION, RC } from "../../Module/General";

function LogoSectionAbout({ rc }) {
  return (
    <div className="LogoSectionAbout">
      {rc && (
        <>
          <h1>{RC.TITLE}</h1>
          <p>{RC.LONG_DESCRIPTION}</p>
        </>
      )}
      {!rc && (
        <>
          <h1>{MIDDLE_SECTION.TITLE}</h1>
          <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
        </>
      )}
    </div>
  );
}

function Logo({ rc }) {
  return (
    <div className="logoS">
      {rc && (
        <img className="rcaboutLogo Logo" src={RC.LOGO} alt="Limbohacks" />
      )}
      {!rc && (
        <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="Limbohacks" />
      )}
    </div>
  );
}

export { Logo, LogoSectionAbout };
