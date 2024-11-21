import React from "react";
import aboutImg from "../assets/images/aboutImg.webp";

export default function About() {
  return (
    <div className="w-full py-[50px] px-[10px]">
      <div className="about-content max-w-[1200px] flex flex-col items-center mx-auto justify-center px-[10px]  ">
        <h2 className="text-5xl font-bold mb-10">About me</h2>
        <div className="about-left-right flex flex-wrap gap-10">
          <div className="about-right w-full sm:w-[100%] overflow-hidden rounded-lg">
            <img src={aboutImg} className="w-[100%]" alt="" />
          </div>
          <div className="about-left w-full sm:w-[65%] grid items-center">
            <p className="about-text text-[18px]">
              Hi, I'm Atta Ur Rehman, a frontend developer from Pakistan. I
              specialize in building responsive websites using HTML, CSS,
              JavaScript, and React.js. As a self-taught developer, I’m
              constantly learning and pushing myself to take on new challenges
              to improve my skills.
              <br /> <br />I focus on writing clean, efficient code and creating
              user-friendly, visually appealing web applications. My goal is to
              keep growing as a developer and contribute to building innovative
              solutions that make a real impact in the world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
