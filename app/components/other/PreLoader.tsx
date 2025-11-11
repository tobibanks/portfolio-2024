import React, { useEffect, useState } from "react";
import gsap from "gsap";

const PreLoader: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensure we're on the client side
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return; // Don't run on server

        const tl = gsap.timeline();

        // Preloader Animation
        const preLoaderAnim = () => {
            tl.to(".texts-container", {
                duration: 0,
                opacity: 1,
                ease: "Power3.easeOut",
            })
                .from(".texts-container span", {
                    duration: 1.5,
                    delay: 1,
                    y: 70,
                    skewY: 10,
                    stagger: 0.4,
                    ease: "Power3.easeOut",
                })
                .to(".texts-container span", {
                    duration: 1,
                    y: 70,
                    skewY: -20,
                    stagger: 0.2,
                    ease: "Power3.easeOut",
                })
                .to("body", {
                    duration: 0.01,
                    css: { overflowY: "scroll" },
                    ease: "power3.inOut",
                })
                .from(".sub", {
                    duration: 1,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                })
                .to(
                    ".preloader",
                    {
                        duration: 1.5,
                        height: "0vh",
                        ease: "Power3.easeOut",
                        onComplete: mobileLanding,
                    },
                    "-=2"
                )
                .to(".preloader", {
                    duration: 0,
                    css: { display: "none" },
                });
        };

        const mobileLanding = () => {
            if (typeof window !== 'undefined' && window.innerWidth < 763) {
                tl.from(".landing__main2", {
                    duration: 1,
                    delay: 0,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                });
            }
        };

        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            preLoaderAnim();
        }, 100);

        return () => {
            clearTimeout(timer);
            tl.kill(); // Clean up timeline
        };
    }, [isClient]);

    // Don't render on server side
    if (!isClient) {
        return null;
    }

    return (
        <div
            className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#000000",
                color: "#e5ebf2",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <div
                className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[16px] font-bold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                    height: "60px",
                }}
            >
                <span>Tobi Odogwu</span>
                <span> / </span>
                <span className="flex items-center justify-center gap-3">Samuel Odogwu</span>
                <div className="sub hidden"></div>
            </div>
        </div>
    );
};

export default PreLoader;