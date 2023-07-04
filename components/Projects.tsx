import React from "react";
import gsap from "gsap";
import { CSSProperties, useEffect, useRef } from "react";
import useShapes from "../components/Float/useShapes";
import { SectionLayout } from "./Layout";
import Float from "./Float/Float";
import { projects } from "./Float/config";

export const data = [
  {
    image: "image-url-1",
    title: "Xavier School of Commerce",
    description: "Operation (Marketing) core member of UG Career Advisory Services School of Commerce",
    link: "https://www.linkedin.com/in/aninditaghosh01/",
    linkText: "Learn More"
  },
  {
    image: "image-url-2",
    title: "NBTC Engineering Works Pvt.Ltd",
    description: "Digital Marketing Specialist",
    link: "https://www.linkedin.com/in/aninditaghosh01/",
    linkText: "Learn More"
  },
  {
    image: "image-url-3",
    title: "Asiana Times",
    description: "Social Media Marketing Intern",
    link: "https://www.linkedin.com/in/aninditaghosh01/",
    linkText: "Learn More"
  },
  {
    image: "image-url-4",
    title: "IFORTIS WORLDWIDE",
    description: "Marketing & Sales Intern",
    link: "https://www.linkedin.com/in/aninditaghosh01/",
    linkText: "Learn More"
  },
  {
    image: "image-url-5",
    title: "INAYAT",
    description: "Digital Marketing Intern",
    link: "https://www.linkedin.com/in/aninditaghosh01/",
    linkText: "Learn More"
  },
];

export default function Experiences() { // Renamed the component to Experiences
  const ref = useRef<HTMLDivElement>(null);
  const items = useShapes({ config: [] }); // Pass an empty config for now since it's not used

  useEffect(() => {
    const timeline = gsap.timeline();
  
    timeline.fromTo(
      ".card-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
    );
  
    return () => {
      timeline.kill();
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const container = ref.current;

    if (!container) {
      return;
    }

    const shapes = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll(".shape")
    );

    shapes.forEach((shape, i) => {
      const depth = 60;
      const moveX = (e.pageX - window.innerWidth / 2) / depth;
      const moveY = (e.pageY - window.innerHeight / 2) / depth;
      i++;

      let lag = shape.dataset.lag ?? `${i}`;

      gsap.to(shape, {
        x: moveX * parseInt(lag, 10),
        y: moveY * parseInt(lag, 10),
      });
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <SectionLayout className="w-full items-start">
      <Float config={projects} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg shadow-md p-4 border-2 border-blue-500 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 card-container aspect-w-1 aspect-h-1"
            >
              <div className="card-overlay absolute inset-0 bg-orange opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              <div className="card-content">
                <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 underline mt-2"
                >
                  {project.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={ref}
        className="-z-10 overflow-hidden opacity-80 dark:opacity-50"
      >
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="shape absolute hidden"
            style={{ ...(item as CSSProperties) }}
            data-lag={item.lag}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
