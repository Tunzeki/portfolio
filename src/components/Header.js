import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: babatundeademusire@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/tunzeki",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/babatunde-ademusire-37b23119a/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollRef.current) {
        document.getElementById("outerBox").style.transform = `translateY('-200px')`;
        document.getElementById("outerBox").style.display = `none`;
      } else if (window.scrollY < scrollRef.current) {
        document.getElementById("outerBox").style.transform = "translateY(0)";
        document.getElementById("outerBox").style.display = `block`;
      }
      scrollRef.current = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [scrollRef]);

  function handleClick(anchor) {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  }


    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        ref={scrollRef}
        id="outerBox"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              {/* Add social media links based on the `socials` data */}            
              <HStack>
                {/* Email */}
                <a href={socials[0].url}>
                  <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                </a>
                {/* GitHub */}
                <a href={socials[1].url}>
                  <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                </a>
                {/* LinkedIn */}
                <a href={socials[2].url}>
                  <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                </a>
              </HStack>
            

            </nav>
            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                {/* Projects */}
                <a href="#projects" onClick={() => handleClick('projects')}>
                  Projects
                </a>
                {/* Contact me */}
                <a href="#contactme" onClick={() => handleClick('contactme')}>
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    );
};
  
export default Header;
