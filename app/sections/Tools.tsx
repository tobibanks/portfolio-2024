// File: ./app/sections/Tools.tsx

/* eslint-disable no-use-before-define */

// 1. Import ComponentType from react
import React, { ComponentType } from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiGit,
    SiGithub,
    SiPostgresql,
    SiMysql,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiMongodb,
    SiAngular,
    SiNodedotjs,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

// 2. Type-cast the imported icons to a safe component type
// This resolves the Type error
const TypescriptIcon = SiTypescript as ComponentType<any>;
const JavascriptIcon = SiJavascript as ComponentType<any>;
const ReactIcon = SiReact as ComponentType<any>;
const AngularIcon = SiAngular as ComponentType<any>;
const NextjsIcon = SiNextdotjs as ComponentType<any>;

const PostgresqlIcon = SiPostgresql as ComponentType<any>;
const MysqlIcon = SiMysql as ComponentType<any>;
const MongodbIcon = SiMongodb as ComponentType<any>;
const NodejsIcon = SiNodedotjs as ComponentType<any>;

const GithubIcon = SiGithub as ComponentType<any>;
const GitIcon = SiGit as ComponentType<any>;


const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS I USE.."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.2}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                {/* 3. Use the new type-casted variables */}
                                <TypescriptIcon size={50} />
                                <JavascriptIcon size={50} />
                                <ReactIcon size={50} />
                                <AngularIcon size={50} />
                                <NextjsIcon size={50} />
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.3}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                {/* 3. Use the new type-casted variables */}
                                <PostgresqlIcon size={50} />
                                <MysqlIcon size={50} />
                                <MongodbIcon size={50} />
                                <NodejsIcon size={50} />
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.4}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                {/* 3. Use the new type-casted variables */}
                                <GithubIcon size={50} />
                                <GitIcon size={50} />
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;