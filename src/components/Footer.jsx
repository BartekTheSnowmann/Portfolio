import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

function Footer() {
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
    <div className="bg-secondary text-white" id="Footer">
      <div className="max-w-[400px] mx-auto py-20 flex flex-col items-center gap-6">
        <div>
          <h1 className="text-3xl">Lets Talk</h1>
        </div>
        <motion.div
          className="flex gap-x-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.6 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
