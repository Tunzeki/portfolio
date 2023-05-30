import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./../index.css";

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
        document.getElementById("container").style.transform = `translateY('-200px')`;
        document.getElementById("container").style.display = `none`;
      } else if (window.scrollY < scrollRef.current) {
        document.getElementById("container").style.transform = "translateY(0)";
        document.getElementById("container").style.display = `flex`;
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
      <nav className="bg-black text-white flex space-evenly pt-3 pb-3" id="container" ref={scrollRef}>

        {/* Add social media links based on the `socials` data */}
        <div className="flex space-around w-50vw">
          {/* Email */}
          <a href={socials[0].url}>
            <FontAwesomeIcon icon={socials[0].icon} size="1x" />
          </a>
          {/* GitHub */}
          <a href={socials[1].url}>
            <FontAwesomeIcon icon={socials[1].icon} size="1x" />
          </a>
          {/* LinkedIn */}
          <a href={socials[2].url}>
            <FontAwesomeIcon icon={socials[2].icon} size="1x" />
          </a>
        </div>
        
        {/* Projects */}
        <a href="#projects" onClick={() => handleClick('projects')}>
          Projects
        </a>
        {/* Contact me */}
        <a href="#contactme" onClick={() => handleClick('contactme')}>
          Contact Me
        </a>
      </nav>
    );
};
  
export default Header;
