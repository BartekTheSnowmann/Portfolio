import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  AnimeWebsitePreview,
  eCommerceSitePreview,
  FitnessWebsitePreview,
  FoodAppPreview,
  LandingWebsitePreview,
  PorftolioWebsitePreview,
} from "../assets/Index";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";

function Work({ setCurrentSection }) {
  const ItemVariant = {
    initial: {
      opacity: 0,
      y: 120,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
      },
    },
  };

  const projectsArray = [
    {
      id: 1,
      heading: "ANIMEWEB",
      img: AnimeWebsitePreview,
      category: "Api",
      description:
        "Goal of the Project was to make a solid website using API.The Website will help u to find various anime. You can see the current list of the most popular ones with option to add them to ur list",
    },
    {
      id: 2,
      heading: "Kanon Clothing",
      img: eCommerceSitePreview,
      category: "E-Commerce",
      description:
        "Goal of the Project was to learn React-Redux. Kannon Clothing allows u to search through different categories of products, adding them to cart...etc",
    },
    {
      id: 3,
      heading: "Landing Page",
      img: LandingWebsitePreview,
      category: "Landing Page",
      description:
        "Goal of the Project was to learn basic animations with Framer-Motion and how to make a good Ux Design. The website has both of those. Check it out.",
    },
    {
      id: 4,
      heading: "Food App",
      img: FoodAppPreview,
      category: "Api",
      description:
        "Goal of the project was to learn more about Api. The app allows u to browse through many different recipes.",
    },
    {
      id: 5,
      heading: "Fitness Website",
      img: FitnessWebsitePreview,
      category: "Landing Page",
      description:
        "Goal of the project was to learn more about making good Landing Pages. It is a simple website with animations and other features.",
    },
    {
      id: 6,
      heading: "Portfolio Website",
      img: PorftolioWebsitePreview,
      category: "Landing Page",
      description:
        "Goal of the project was nearly the same as in the previous one. I learned more concepts which i think will be useful in the future.",
    },
  ];

  const [projectCategories, setProjectCategories] = useState([]);
  const [currentCategories, setCurrentCategories] = useState("All");

  const findCategories = () => {
    let categories = ["All"];
    projectsArray.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    setProjectCategories(categories);
  };

  useEffect(() => {
    findCategories();
  }, []);

  return (
    <div className="bg-yellow" id="Projects">
      <motion.div
        className="max-w-[1240px] mx-auto flex flex-col py-10 md:py-20 px-4"
        onViewportEnter={() => setCurrentSection("Projects")}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="BorderImg pb-4">
          <h1 className="text-3xl font-bold text-primary drop-shadow-lg">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          {projectCategories.map((item) => (
            <div
              key={item}
              className={`${
                currentCategories.includes(item) ? "bg-primary text-white" : ""
              } drop-shadow-lg border-2 border-primary py-2 px-4 font-bold cursor-pointer hover:bg-primary hover:text-white`}
              onClick={() => setCurrentCategories(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Projects */}
        <div className="pt-6 md:pt-16 grid justify-items-center gap-5 md:gap-10">
          {projectsArray.map((item) =>
            item.category === currentCategories ||
            currentCategories === "All" ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                layout
                key={item.heading}
                className="bg-white group relative flex flex-col md:flex-row gap-4 shadow-lg p-4 md:p-0"
              >
                <div className="flex-1">
                  <img src={item.img} className="h-full object-cover" alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-2">
                  <h1 className="text-xl tracking-normal pb-5">
                    {item.heading}
                  </h1>
                  <p className="text-lg md:text-xl">{item.description}</p>
                  <div className="pt-5 uppercase font-bold flex gap-x-2">
                    <a
                      href="https://animeweb-bysnowmann.netlify.app"
                      className="Button"
                    >
                      Live <AiOutlineEye size={25} />
                    </a>
                    <a
                      href="https://github.com/BartekTheSnowmann/anime-website.git"
                      className="Button"
                    >
                      Code <AiOutlineGithub size={25} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Work;
