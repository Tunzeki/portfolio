import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Expense Manager",
    description:
      "Expense Manager is a React application that helps employees of a company track their expenses over time. It is searchable in real-time and the data, displayed in a table, is sortable.",
    getImageSrc: () => require("../images/expensemanagerScreenshot.png"),
    link: "https://melodic-melba-c0c5a9.netlify.app/",
  },
  {
    title: "Little Lemon",
    description:
      "LittleLemon is a restaurant that serves culture-rich and delicious delicacies. You can view the menu and reserve a table for an unforgettable dining experience.",
    getImageSrc: () => require("../images/littlelemonScreenshot.png"),
    link: "https://tunzeki.pythonanywhere.com/",
  },
  {
    title: "easyGo",
    description:
      "easyGo is a company that provides tourists in Ghana with the services they need to make their tour enjoyable and stress-free.",
    getImageSrc: () => require("../images/easyGoScreenshot.png"),
    link: "https://helpful-bombolone-42270f.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
