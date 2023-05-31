import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";

const greeting = "Hello, I am Babatunde!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React.";
const bio3 = "Download CV";
const bio4 = "Hire Me";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {

  return (
    <div className="center special-blue text-center bold pt-20 pb-20">
      <h1 className="text-size-140">{greeting}</h1>
      <h2 className="text-size-120">{bio1}</h2>
      <h3 className="text-size-100">{bio2}</h3>
      <h3>
        <Link href="/files/ademusire-cv.pdf"
          target="_blank" download="ademusire-cv.pdf">
          {bio3}
        </Link>
      </h3>
      <h3>
        <Link href="mailto:babatundeademusire@gmail.com">
          {bio4} <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </Link>
      </h3>
    </div>);
}

export default LandingSection;
