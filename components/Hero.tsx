import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Anindita" />
          <SplitText text="Ghosh" />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`As a passionate BBM marketing student, I'm driven to create 
          meaningful connections and deliver impactful results. With a blend 
          of creativity and strategic thinking, I thrive on shaping compelling brand narratives.`}
        </p>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}
