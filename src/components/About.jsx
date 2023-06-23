import React, { useRef } from "react";
import { FaReact, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion, useInView } from "framer-motion";

function About({ setCurrentSection }) {
  const ContainerRef = useRef();
  const isInView = useInView(ContainerRef, { once: true, amount: 0.5 });

  const ContainerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const ItemVariant = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };

  const techStackArray = [
    {
      id: 1,
      name: "Html",
      icon: SiHtml5,
      size: 50,
      class: "text-orange-400",
    },
    {
      id: 2,
      name: "Css",
      icon: SiCss3,
      size: 50,
      class: "text-blue-600",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: FaJs,
      size: 50,
      class: "text-[#f0db4f]",
    },
    {
      id: 4,
      name: "React",
      icon: FaReact,
      size: 50,
      class: "text-[#61dbfb] hover:animate-spin",
    },
    {
      id: 5,
      name: "TypeScript",
      icon: SiTypescript,
      size: 50,
      class: "text-blue-400",
    },
    {
      id: 6,
      name: "Redux",
      icon: SiRedux,
      size: 50,
      class: "text-[#512987]",
    },
    {
      id: 7,
      name: "Taiwlind",
      icon: SiTailwindcss,
      size: 50,
      class: "text-[#3490dc]",
    },
    {
      id: 8,
      name: "FramerMotion",
      icon: TbBrandFramerMotion,
      size: 50,
      class: "text-[#683da3]",
    },
  ];

  return (
    <div className="bg-secondary text-white relative">
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#"
          fillOpacity="1"
          d="M0,32L720,288L1440,32L1440,320L720,320L0,320Z"
        ></path>
      </svg>
      <motion.div
        className="max-w-[1240px] py-20 px-4 mx-auto flex flex-col items-center"
        id="About"
        onViewportEnter={() => setCurrentSection("About")}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="">
          <div>
            <h1 className="text-3xl">About me</h1>
          </div>

          <motion.div
            className="max-w-[500px] text-gray-200 z-30"
            variants={ContainerVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.p className="py-10" variants={ItemVariant}>
              Im a{" "}
              <span className="font-bold text-white">
                Self-Taught Developer
              </span>
              . I try to learn new things everyday, because all that work will
              eventually lead to me being more experienced and efficient at what
              i do. The main goal of my work is to create Projects that are as
              simple as possible with a look that is pleasing to one's eye
              although i'm open for new ideas ⭐
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-4 justify-items-center gap-4 bg-white p-6 relative"
              ref={ContainerRef}
              variants={ItemVariant}
            >
              <div className="absolute bg-white p-4 -translate-y-1/2 h-16 right-0 -top-8">
                <p className="text-black font-bold">What i mostly use</p>
              </div>

              {techStackArray.map((item) => (
                <item.icon
                  key={`icon-${item.name}`}
                  size={item.size}
                  className={`${item.class} drop-shadow-md`}
                  alt={`${item.name}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
