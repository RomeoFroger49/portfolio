import Skills from "./Skills";
import image from "../../assets/profil_picture.webp";

export default function Me() {
  return (
    <section id="me" className="pb-24">
      <div className="flex justify-center">
        <h1 className="xl:text-4xl lg:text-4xl sm:text-2xl text-xl px-1 font-satoshiBlack">
          About Me
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col pt-4 sm:p-12 z-[-1]">
        <img className="sm:w-1/2 sm:mx-auto" src={image} alt="" />

        <div className="px-6 relative h-auto text-justify " id="container">
          <div className="flex flex-col sticky gap-8 top-0 sm:mt-12">
            <h2 className="font-satoshiMedium text-md">
              I'm <i className="text-primary">Roméo Froger</i>, a software
              engineering student specializing in{" "}
              <i className="bg-primary">Software and Information Systems</i> at{" "}
              <i className="font-satoshiBlack">EFREI</i>, a program I started in{" "}
              <i className="bg-primary">2025</i>. I previously studied
              Information Sciences at the{" "}
              <i className="font-satoshiBlack">Catholic University of Lille</i>,
              where I built strong foundations in web and software development.
            </h2>

            <h2 className="font-satoshiMedium text-md">
              I am currently working as an{" "}
              <i className="bg-primary">AI Engineer</i> in a work-study program
              at <i className="font-satoshiBlack">Thales</i>, where I contribute
              to applied artificial intelligence projects in a demanding
              industrial environment. Previously, I completed an internship year
              at <i className="font-satoshiBlack">SNCF Connect & Tech</i> as a{" "}
              <i className="text-primary">Full-Stack Developer</i>, working on
              real-world web applications.
            </h2>

            <h2 className="font-satoshiMedium text-md">
              Alongside my professional experience, I worked on a project for{" "}
              <i className="font-satoshiBlack">World Safety Power</i>,
              developing both the <i className="text-primary">front-end</i> and{" "}
              <i className="text-primary">back-end</i> of their corporate
              website. Passionate about{" "}
              <i className="bg-primary">web development</i> and{" "}
              <i className="bg-primary">artificial intelligence</i>, I enjoy
              taking on new technical challenges and continuously expanding my
              skill set, including <i className="bg-primary">Ops and DevOps</i>.
            </h2>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
