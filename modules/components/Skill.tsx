import React from 'react'
import { motion } from 'framer-motion';
import { Skill as mySkill } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
    skill: mySkill;
};

const Skill = ({ skill } : Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <img
                src={urlFor(skill?.image).url()}
                className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:h-24 md:w-24 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='md:text-3xl text-sm font-bold text-black opacity-100'>
                    {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Skill; 