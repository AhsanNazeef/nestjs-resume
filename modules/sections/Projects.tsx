import React from "react";
import { motion } from "framer-motion";
import SectionFlexBox from "../components/layout/SectionFlexBox";
import { Project } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <SectionFlexBox title="Projects">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="section-container"
      >
        <div className="relative h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500 scrollbar-thin">
          {projects.map((project, i) => (
            <a
              href={project.linkToBuild}
              key={project._id}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 snap-center flex flex-col space-y-2 items-center  w-full"
            >
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                src={urlFor(project?.image).url()}
                className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
              />
              {/* <img className="md:block hidden md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"/> */}

              <div className="space-y-8 px-0 md:px-10 md:max-w-6xl">
                <h4 className="text-xl sm:text-2xl 2xl:text-4xl font-semibold text-center">
                  <span className="underline decoration-emerald-500">
                    Project {i + 1}:
                  </span>{" "}
                  {project?.title}
                </h4>
                <div className="flex items-center space-x-1 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-10 w-10 rounded-full object-cover"
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
                </div>
                <p className="h-28 mx-5 md:mx-0 text-base lg:text-lg text-center md:text-left px-5 text-gray-400 overflow-y-scroll snap-y snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500 scrollbar-thin bg-slate-600/20 rounded-lg">
                  {project?.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full absolute top-[30% bg-emerald-500/10 left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </SectionFlexBox>
  );
};

export default Projects;
