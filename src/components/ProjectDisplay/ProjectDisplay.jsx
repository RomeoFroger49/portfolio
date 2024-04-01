import ProjectComponent from "./ProjectComponent";
import portfolioImg from "../../assets/portfolio.png";
import websiteImg from "../../assets/worldsafetypower.png";

const projects = [
  {
    title: "worldsafetypower.com",
    description:
      "A website for a World Safety Power, I worked on it on my own with a friend.",
    image: websiteImg,
    link: "https://worldsafetypower.com/",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website",
    image: portfolioImg,
    link: "https://romeofroger.com/",
  },
];

export default function ProjectDisplay() {
  return (
    <section id="projects" className="pb-12">
      <div className="flex justify-center pb-4">
        <h1 className="xl:text-4xl lg:text-4xl sm:text-2xl text-xl px-1 font-satoshiBlack">
          Projects
        </h1>
      </div>

      <div>
        <h6 className="xl:text-md lg:text-md sm:text-md  px-1 font-satoshiBlack text-center pb-6 md:pb-14">
          Below, you can find some of the projects I have worked on:
        </h6>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-6 md:gap-0 p-12">
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
