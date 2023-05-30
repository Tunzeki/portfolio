import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Babatunde!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <div className="center special-blue text-center bold pt-20 pb-20">
    <h1 className="text-size-200">{greeting}</h1>
    <h2 className="text-size-180">{bio1}</h2>
    <h3 className="text-size-160">{bio2}</h3>
  </div>
);

export default LandingSection;
