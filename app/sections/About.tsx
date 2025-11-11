/* eslint-disable no-use-before-define */

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
                        <AnimatedBody text="Hi, I'm Samuel Odogwu — a software developer in Lagos building web solutions that actually solve problems." />

                        <AnimatedBody
                            delay={0.1}
                            text="I work with JavaScript, C#, HTML, and CSS, and spend most of my time with React, Angular, and Node.js. What drives me isn't just writing code — it's creating experiences that make people's lives easier."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I'm resourceful when problems get tricky, innovative when solutions need fresh thinking, and always learning because technology never stops moving. Right now, I'm looking to join a team where I can contribute meaningfully while growing alongside other driven developers."
                        />

                        <AnimatedBody
                            delay={0.3}
                            text="If you're working on something interesting, let's talk."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;