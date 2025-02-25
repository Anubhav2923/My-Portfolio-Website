import resumeBuilder from "@/assets/images/resumeBuilder.png";
import watchPokemon from "@/assets/images/watchPokemon.png";
import uzumakiStore from "@/assets/images/uzumakiStore.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "Build your Resume",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Ats friendly Resume templates" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://resumesimplified.netlify.app/",
    image: resumeBuilder,
  },
  {
    title: "Watch your Pokemon",
    results: [
      { title: "Search your pokemon" },
      { title: "watch your pokemon stats and type " },
      { title: "" },
    ],
    link: "https://watchyourpokemon.netlify.app/",
    image: watchPokemon,
  },
  {
    title: "Uzumaki Store",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://uzumakistore.netlify.app/",
    image: uzumakiStore,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p
            className="uppercase font-semibold 
        tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent
      "
          >
            Real-world-Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6  max-w-md mx-auto">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 lg:text-xl">
          See how I transform concepts into engaging digital experiences.
        </p>

        <div className=" flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
          
              <Card 
                key={project.title}
                className=" px-8 pt-8 md:pt-12 md:px-10
              lg:pt-16 lg:px-20 sticky top-16
              "
                style={{
                  top: `calc(64px + ${projectIndex * 50}px `,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <h3 className="bg-gradient-to-r from-emerald-300 to-sky-400 font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-transparent font-bold bg-clip-text ">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li className="flex gap-2 text-sm md:text-base  text-white/50">
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button
                        className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 
                  md:w-auto px-6
                "
                      >
                        <span> Vist live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>

                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full rounded-xl lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
         
          ))}
        </div>
      </div>
    </section>
  );
};
