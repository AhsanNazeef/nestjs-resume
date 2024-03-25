import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionFlexBox from "../components/layout/SectionFlexBox";
import { PageInfo } from "../../typing";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

const ContactMe = ({ pageInfo }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <SectionFlexBox title="contact">
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
        className="h-full w-full flex justify-center"
      >
        <div className="flex flex-col space-y-2 sm:space-y-3 2xl:space-y-5 py-5 sm:py-8 2xl:py-16">
          <h4 className="text-l sm:text-2xl 2xl:text-4xl font-semibold text-center mb-5 2xl:mb-10">
            I have got what you need.{" "}
            <span className="decoration-emerald-500 underline">Lets talk.</span>
          </h4>

          <div className="space-y-2 sm:space-y-3 2xl:space-y-5">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-emerald-500 h-4 sm:h-6 2xl:h-7 w-4 sm:w-6 2xl:w-7 animate-pulse" />
              <p className="text-sm sm:text-xl 2xl:text-2xl">
                {pageInfo.phoneNumber}
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-emerald-500 h-4 sm:h-6 2xl:h-7 w-4 sm:w-6 2xl:w-7 animate-pulse" />
              <p className="text-sm sm:text-xl 2lx:text-2xl">
                {pageInfo.email}
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-emerald-500 h-4 sm:h-6 2xl:h-7 w-4 sm:w-6 2xl:w-7 animate-pulse" />
              <p className="text-sm sm:text-xl 2xl:text-2xl">
                {pageInfo.address}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto py-10"
          >
            <div className="flex md:space-x-2 space-y-2 flex-col md:flex-row">
              <input
                {...register("name")}
                type="text"
                className="contactInput"
                placeholder="Name"
              />
              <input
                {...register("email")}
                type="text"
                className="contactInput"
                placeholder="Email"
              />
            </div>

            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button className="bg-emerald-500 py-2 sm:py-3 2xl:py-4 rounded-md text-black font-bold">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </SectionFlexBox>
  );
};

export default ContactMe;
