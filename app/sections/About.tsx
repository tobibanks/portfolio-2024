import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
      <section
        className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
        id="about"
      >
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <AnimatedTitle
            text={"About my Tech Career"}
            className={
              "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />

          <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
              <AnimatedBody text="Hello! I'm Samuel Odogwu, a passionate software developer based in Lagos, Nigeria. I thrive on creating web solutions that tackle user challenges and am always eager to work on new and exciting projects... " />

              <AnimatedBody
                delay={0.1}
                text="I am highly motivated and result-oriented, constantly seeking opportunities to enhance my skills and contribute to innovative projects. I specialize in programming languages such as C#, JavaScript, HTML, and CSS, and have experience with frameworks like React, Angular, and Node.js. My goal is to join a dynamic organization where I can leverage my skills, continue to grow professionally, and make a meaningful impact. I am resourceful, innovative, and flexible, always looking for ways to solve problems effectively."
              />

              {/* <AnimatedBody
                delay={0.2}
                text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
              /> */}
            </div>
          </div>
        </div>
      </section>
    )
};

export default About;
