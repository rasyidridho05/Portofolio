"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { Education_data } from "../config/constants";
import { EducationTypes } from "../config/types";
import { cx } from "@config/constants";
import Pager from "./Pager";
import {
  fadeTop,
  motionStep,
  experience_1,
  experience_2,
  experience_3,
} from "@config/motion";

const lAnimation = [experience_1, experience_2, experience_3];

const Content = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [tabSidelineHeight, setTabSidelineHeight] = useState<number>(0);
  const [tabSidelineTop, setTabSidelineTop] = useState<number>(0);

  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeIndex];
      setTabSidelineTop(currentTab?.offsetTop ?? 0);
      setTabSidelineHeight(currentTab?.clientHeight ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeIndex]);

  return (
    <div className="flex-wrap lg:flex-nowrap flex gap-10">
      <motion.div
        variants={fadeTop}
        {...motionStep}
        className="relative min-w-[200px]"
      >
        <div>
          {Education_data.map((e: EducationTypes, i: number) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              ref={(el) => (tabsRef.current[i] = el)}
              className={cx(
                activeIndex === i && "bg-gray-600/10 text-gray-200",
                "tab__item"
              )}
            >
              {e.label}
            </div>
          ))}
        </div>

        <span
          className="absolute left-0 block w-1 bg-gray-400 transition-all duration-300"
          style={{ top: tabSidelineTop, height: tabSidelineHeight }}
        />
      </motion.div>

      <Pager value={activeIndex}>
        {Education_data.map(
          (
            { title, url, academy, deadline, description }: EducationTypes,
            i: number
          ) => (
            <div key={i}>
              <motion.div variants={experience_1} {...motionStep}>
                <h1 className="text-xl font-medium text-gray-300">
                  {title}
                  <Link
                    target="_blank"
                    href={url}
                    className="text-gray-300 border-b border-b-gray-300 border-dotted"
                  >
                    {" "}
                    @{academy}{" "}
                  </Link>
                </h1>
                <p className="text-gray-400 font-medium mt-1"> {deadline} </p>
              </motion.div>

              <ul className="space-y-5 mt-10 max-w-xl">
                {description.map((e: string, i: number) => (
                  <motion.li
                    key={i}
                    variants={lAnimation[i]}
                    {...motionStep}
                    className="gap-1 flex text-gray-400 select-none"
                  >
                    <span className=" min-w-10">
                      <IoMdArrowDropright className="text-gray-400 text-[1.3rem]" />{" "}
                    </span>
                    {e}
                  </motion.li>
                ))}
              </ul>
            </div>
          )
        )}
      </Pager>
    </div>
  );
};

export default Content;
