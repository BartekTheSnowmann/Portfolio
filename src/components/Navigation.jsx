import React from "react";
import { RxDot, RxDotFilled, RxEnvelopeClosed } from "react-icons/rx";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";

function Navigation({ currentSection, setCurrentSection }) {
  const sectionsArray = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Projects",
    },
  ];

  return (
    <div className="hidden lg:block">
      <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
        {sectionsArray.map((item) =>
          item.name === currentSection ? (
            <div
              key={`navlink-${item.id}`}
              className="mx-4 flex flex-row-reverse items-center shadow-primary drop-shadow-lg"
            >
              <RxDotFilled
                key={`dot-${item.id}`}
                size={50}
                className="text-primary"
              />
              <motion.div
                className="p-2 order-1 bg-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h4 className="font-bold">{currentSection}</h4>
              </motion.div>
            </div>
          ) : (
            <div
              key={`navlink-${item.id}`}
              className="mx-4 flex justify-end drop-shadow-lg"
            >
              <RxDot
                key={`dot-${item.id}`}
                size={50}
                className="text-primary"
              />
            </div>
          )
        )}
      </div>
      <a href="#Footer">
        <div className="z-50 fixed bottom-10 right-4 bg-white rounded-full shadow-lg p-6">
          <AiFillPhone size={25} />
        </div>
      </a>
    </div>
  );
}

export default Navigation;
