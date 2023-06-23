import React, { useEffect, useRef } from "react";
import { Avatar } from "../assets/Index";
import { motion, useInView } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Home({ setCurrentSection }) {
  const ContainerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const ItemVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.4,
      },
    },
  };

  const ItemVariant2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };

  const myref = useRef();
  const isInView = useInView(myref, { once: false, amount: 0.5 });

  useEffect(() => {
    function sele() {
      if (isInView) {
        setCurrentSection("Home");
      }
    }
    sele();
  }, [isInView]);

  const linksArray = [
    {
      id: 1,
      icon: AiFillGithub,
      color: "#fff",
      link: "https://github.com/bartekthesnowmann",
    },
    {
      id: 2,
      icon: AiFillLinkedin,
      color: "#0072b1",
      link: "https://www.linkedin.com/in/bartosz-mr%C3%B3z-536710274",
    },
  ];

  return (
    <motion.div
      ref={myref}
      className="min-h-[100vh] flex items-center justify-center"
    >
      <div className="absolute top-40 left-40 w-40 h-40 md:w-60 md:h-60 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10 animation-delay-2000"></div>

      <div className="absolute top-1/2 right-40 w-40 h-40 md:w-60 md:h-60 bg-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
      <div className="max-w-[1240px]  mx-auto" id="Home">
        <div className="flex flex-wrap items-center justify-center py-12 md:py-24 px-4 gap-10">
          <div className="md:flex-1">
            <motion.div
              variants={ContainerVariant}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl"
                variants={ItemVariant}
              >
                Hello, Im{" "}
                <span className="text-primary drop-shadow-lg">Bartek</span>
              </motion.h1>
              <motion.div className="text-xl" variants={ItemVariant2}>
                <p className="font-bold uppercase mt-5">
                  - FrontEnd Developer -
                </p>
                <div className="flex gap-x-1 mb-5 mt-1">
                  {linksArray.map((item) => (
                    <div key={`link-${item.id}`}>
                      <a target="_blank" href={item.link}>
                        <item.icon
                          size={40}
                          className={`text-[${item.color}] cursor-pointer`}
                        />
                      </a>
                    </div>
                  ))}
                </div>

                <a href="#Projects" className="group">
                  <button className="font-bold bg-primary text-white px-4 py-2 flex items-center gap-x-2">
                    My Work
                    <div className="group-hover:rotate-90 duration-300">
                      <AiOutlineArrowRight size={25} />
                    </div>
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:flex-1">
            <img src={Avatar} alt="" className="rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
