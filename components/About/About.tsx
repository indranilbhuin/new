import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size="sm" dark className="font-extrabold">
        a marketing student passionate about data-driven strategies, 
        consumer behavior, and impactful brand messaging.
        </Heading>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            {`I am final year BBM marketing student eager to leverage creativity and analytical skills to excel in brand management.
            \n With a passion for consumer behavior and a strong academic foundation, I'm ready to make a meaningful impact in the marketing industry.`}
          </p>

          <div className="w-full md:w-1/2">
          I have developed proficiency in various key areas of expertise. On a daily basis, 
          I actively engage with <MobileTechList />
            <TechList />. By utilizing these skills, I am able to create innovative and effective marketing strategies 
            that cater to the 
            <span className="font-bold"> unique needs of different businesses and audiences.</span>.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
