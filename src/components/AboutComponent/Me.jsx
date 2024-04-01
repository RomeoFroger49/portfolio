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
        <img className="sm:w-1/2 h-1/2 mx-auto" src={image} alt="" />

        <div className="px-6 relative h-auto text-center " id="container">
          <div className="flex flex-col sticky gap-8 top-0">
            <h1 className=" text-xl font-satoshiBold">About Me</h1>
            <h2 className="font-satoshiMedium text-md">
              Hello I'm <i className="text-primary">Roméo Froger</i>, I am a
              third-year information sciences student at the{" "}
              <i className="font-satoshiBlack">Catholic University of Lille</i>.
              I'm going to start my first year of ingeneering school,{" "}
              <i className="font-satoshiBlack">Esiea</i>,{" "}
              <i className="bg-primary">in September 2024</i>.
            </h2>

            <h2 className="font-satoshiMedium text-md">
              Also, this year was an internship year for me, I worked at the
              company <i className="font-satoshiBlack">Sncf Connect & Tech</i>{" "}
              as a fullstack developer. I also worked on a project with a
              friend, a website for a company called{" "}
              <i className="font-satoshiBlack">World Safety Power</i>.
            </h2>

            <h2 className="font-satoshiMedium text-md">
              That includes working on the{" "}
              <i className="text-primary">front-end</i> and{" "}
              <i className="text-primary">back-end</i> of the website. I am
              passionate about <i className="bg-primary">web development</i> and
              I am always looking for new challenges. That's why after
              discovering the world of fullstack development, I decided to start
              learning <i className="bg-primary">Ops and DevOps</i>.
            </h2>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
