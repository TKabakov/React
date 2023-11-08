import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Button, HStack, Slide, useDisclosure } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
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

const Header = ({home, projects, contactMe}) => {

  const [scrollDirection, setScrollDirection] = useState(null);
  
  function useScrollDirection() {
    
    useEffect(() => {
        let lastScrollY = window.scrollY;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? true : false;
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return scrollDirection;
};

  return (
    <>
    <Slide in={useScrollDirection(scrollDirection)} direction="top" style={{ zIndex: 10 }}>
    <Box
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={4}>
            {/* Add social media links based on the `socials` data */}
            <a href={socials[0].url}>
              <FontAwesomeIcon icon={socials[0].icon} size="2x"/>
            </a>
            <a href={socials[1].url}>
              <FontAwesomeIcon icon={socials[1].icon} size="2x"/>
            </a>
            <a href={socials[2].url}>
              <FontAwesomeIcon icon={socials[2].icon} size="2x"/>
            </a>
            <a href={socials[3].url}>
              <FontAwesomeIcon icon={socials[3].icon} size="2x"/>
            </a>
            <a href={socials[4].url}>
              <FontAwesomeIcon icon={socials[4].icon} size="2x"/>
            </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                onClick={() => home.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })}>
                Home
              </a>
              <a
                onClick={() => projects.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })}>
                Projects
              </a>
              <a
                onClick={() => contactMe.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </Slide>

    </>
  );
};
export default Header;
