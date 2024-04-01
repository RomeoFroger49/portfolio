import { Popover, Snackbar } from "@mui/material";
import image from "../../assets/cv.webp";
import cv from "../../assets/romeo_froger_cv.pdf";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const skills = [
  {
    title: "Front-End",
    ref: "front",
    skills: [
      {
        name: "HTML/CSS",
        progress: 90,
        id: "htmlProgressBar",
      },
      {
        name: "Javascript",
        progress: 80,
        id: "jsProgressBar",
      },
      {
        name: "React",
        progress: 65,
        id: "reactProgressBar",
      },
      {
        name: "VueJs",
        progress: 50,
        id: "tailwindProgressBar",
      },
    ],
  },
  {
    title: "Back-End",
    skills: [
      {
        name: "PHP",
        progress: 60,
        id: "phpProgressBar",
      },
      {
        name: "MySQL",
        progress: 70,
        id: "mysqlProgressBar",
      },
      {
        name: "Symfony",
        progress: 65,
        id: "symfonyProgressBar",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        progress: 85,
        id: "gitProgressBar",
      },
      {
        name: "Figma",
        progress: 80,
        id: "figmaProgressBar",
      },
      {
        name: "Node.js",
        progress: 70,
        id: "nodeProgressBar",
      },
      {
        name: "Agile methods",
        progress: 80,
        id: "agileProgressBar",
      },
    ],
  },
];

export default function Skills() {
  const [download, setDownload] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionFrontRef = useRef(null);

  useEffect(() => {
    const sectionFront = sectionFrontRef.current;

    const observerFront = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        for (let j = 0; j < skills.length; j++) {
          for (let i = 0; i < skills[j].skills.length; i++) {
            gsap.to(`#${skills[j].skills[i].id}`, {
              width: `${skills[j].skills[i].progress}%`,
              duration: 1,
              delay:
                j === 0 ? i * 0.2 : j === 1 ? (4 + i) * 0.2 : (7 + i) * 0.2,
            });
          }
        }
      }
    });

    observerFront.observe(sectionFront);

    return () => observerFront.disconnect();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 2000);
    setOpen(true);
  };

  return (
    <>
      <div className="flex justify-center mt-36">
        <h2 className="xl:text-2xl lg:text-2xl sm:text-xl text-xl px-1 font-satoshiBlack">
          Skills
        </h2>
      </div>

      <div className="w-full h-auto flex flex-col lg:flex-row lg:justify-between lg:gap-4 lg:p-12">
        <div className="lg:w-1/2 w-full flex flex-col p-4 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 pb-4"
              ref={index === 0 ? sectionFrontRef : null}
            >
              <h1 className="xl:text-xl lg:text-xl sm:text-lg text-base font-satoshiBlack text-center">
                {skill.title}
              </h1>
              {skill.skills.map((skill, index) => (
                <div key={index} className=" flex flex-col ">
                  <h1 className="xl:text-lg lg:text-md sm:text-sm text-xs font-satoshiMedium ">
                    {skill.name}
                  </h1>
                  <div className="relative w-full">
                    <div className="w-full h-2 bg-grey rounded-full" />
                    <div
                      id={skill.id}
                      className={`absolute top-0 h-2 bg-primary rounded-full`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="xl:px-12 w-full md:w-1/2 p-4  pt-6 flex flex-col  items-center justify-center mx-auto">
          <div className="flex flex-col items-center gap-4">
            <img src={image} alt="cv de romeo froger" />
            <a
              onClick={handleDownload}
              href={cv}
              download=""
              className="text-center font-satoshiMedium border-2 :w-1/3 w-1/2 border-primary hover:bg-primary hover:text-white py-2 px-4 rounded-full md:text-md text-sm"
            >
              {download ? <CircularProgress size={28} /> : "Download"}
            </a>
            <Snackbar
              open={open}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={2000}
              onClose={handleClose}
              message="Download started"
            />
          </div>
        </div>
      </div>
    </>
  );
}
