import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Card = ({ title, description, imageSrc, link }) => {
  const [underlineLink, setUnderlineLink] = useState(false);

  let classStyles = underlineLink ? "text-size-80 text-underline" : "text-size-80";
  return (
    <>
      <div>
        <div style={{ backgroundColor: "white", borderRadius: "1%" }}>
          <img src={imageSrc} alt="Project" style={{ borderRadius: "1%" }} />
          <div className="bold" style={{ color: "#000", marginLeft: "10px" }}>{title}</div>
          <div className="text-size-80 ml-10 mr-10" style={{ color: "gray", }}>{description}</div>
          <a href={link} target="_blank" className={classStyles} onMouseEnter={() => setUnderlineLink(true)} onMouseLeave={() => setUnderlineLink(false)} style={{ color: "black", margin: "10px 0 10px 10px" }}>
            See more <FontAwesomeIcon icon={faExternalLink} size="1x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
