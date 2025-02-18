import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  const content = [
    "Hello! I'm Rasyid, a UI/UX Designer and Front-end web developer who enjoys learning new things. Currently, I am pursuing my education at Telkom University, Bachelor of Software Engineering study program. My interest and talent in the fields of Design and Front-End Development began when I attended Telkom Malang Vocational High School, and they will continue to grow over time.",
    "Let's collaborate and turn your ideas into remarkable digital experiences!",
    "Here are some technologies and skills that I always use:",
  ];

  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-gray-400">
        {content.map((e: string, i: number) => (
          <p key={i}> {e} </p>
        ))}

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-gray-200"
              >
                {" "}
                <IoMdArrowDropright className="text-gray-200 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
