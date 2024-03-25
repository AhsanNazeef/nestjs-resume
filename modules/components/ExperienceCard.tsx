import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { Experience } from "../../typing";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="items-center flex-shrink-0 w-full sm:w-[500px] 2xl:w-[600px] snap-center flex justify-center">
      <div className="h-full w-full items-center flex flex-col rounded-lg bg-neutral-700 opacity-50 hover:opacity-100 cursor-pointer py-5 sm:py-8 px-5">
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
          className="w-28 h-28 rounded-full object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
        />
        <div className="py-5">
        <p className="font-bold text-2xl 2xl:text-2xl mt-1 text-emerald-500">
            {experience?.company}
          </p>
          <h4 className="text-l font-light">
            {experience?.jobTitle.toUpperCase()}
          </h4>
          
          <div className="flex space-x-1 my-1">
            {experience?.technologies.map((technology) => (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full object-cover"
                src={urlFor(technology?.image).url()}
                alt=""
              />
            ))}
          </div>
          <p className="uppercase py-2 text-gray-300 text-sm">
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(experience?.dateStarted))} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(experience?.dateEnded))}
          </p>
          <ul className="h-[6rem] border-r-3 border-solid list-disc space-y-1 sm:space-y-2 ml-5 text-sm sm:text-base overflow-y-scroll snap-y snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500 scrollbar-thin">
          {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
