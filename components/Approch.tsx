"use client";
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/EvervaultCard";

const Approch = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My{' '}
        <span className="text-purple">
          approach
        </span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">

        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard 
            title="Cutting-Edge Technology Integration" 
            description="Incorporating the latest web technologies to deliver innovative solutions. From ReactJS to Express, I leverage cutting-edge tools to keep your project ahead of the curve."
        />


        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard 
                title="Responsive and Accessible Design" 
                description="Dedicated to creating inclusive and accessible digital experiences. I develop responsive interfaces that adapt to all devices and ensure everyone can access your content."
            />
        </div>
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard 
                title="Agile Development Methodologies" 
                description="Utilizing agile practices to deliver results efficiently. With iterative development and constant feedback, I ensure your project evolves dynamically, meeting your evolving needs."
            />
        </div>
      </div>
    </section>
  );
};

export default Approch;
