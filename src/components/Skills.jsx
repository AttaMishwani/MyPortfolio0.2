import React from "react";
import reactImg from "../assets/images/reactJs.png";
import reduxToolkit from "../assets/images/redux.png";
import js from "../assets/images/js.png";
import tailwindCss from "../assets/images/Tailwind_CSS_Logo.svg (1).png";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css-3.png";
import HTML from "../assets/images/HTML.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github (1).png";

export default function Skills() {
  const skills = [
    { name: "React JS", image: reactImg },
    { name: "Redux Toolkit", image: reduxToolkit },
    { name: "JavaScript", image: js },
    { name: "Tailwind CSS", image: tailwindCss },
    { name: "Bootstrap", image: bootstrap },
    { name: "CSS", image: css },
    { name: "HTML", image: HTML },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
  ];

  return (
    <div className="w-full py-[10px] px-5 ">
      <div className="max-w-[1200px] py-[10px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-box transition-transform transform hover:scale-105 duration-300 hover:border-[#0092ca] hover:shadow-lg border-2 border-transparent bg-[#242320] rounded-lg p-10 flex flex-col items-center"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
