import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar({ currentSection, setCurrentSection }) {
  const [NavbarOffset, setNavbarOffset] = useState(0);

  useEffect(() => {
    function CalculateYOffset() {
      setNavbarOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", CalculateYOffset);
    return () => window.removeEventListener("scroll", CalculateYOffset);
  });

  const WithoutShadow =
    "z-10 fixed h-20 text-secondary w-full flex justify-center items-center px-4";
  const WithShadow =
    "drop-shadow-lg z-10 fixed h-20 bg-white text-secondary w-full flex justify-center items-center px-4";

  return (
    <div className="h-20 lg:hidden">
      <motion.div
        className={NavbarOffset > 80 ? WithShadow : WithoutShadow}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6, type: "tween" }}
      >
        <ul className="flex gap-x-4 text-lg">
          {["Home", "About", "Projects"].map((item) => (
            <li
              key={`link-${item}`}
              className={`${item === currentSection ? "link__current" : ""}`}
              onClick={() => setCurrentSection(item)}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
