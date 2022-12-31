import { GoMarkGithub } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import { useContext } from "react";
import { UiContext } from "../../context";
import { urlFor } from "../../client";
import { useSanityFetch } from "../customHook/useSanityFetch";

const Work = () => {
  const { workRef } = useContext(UiContext);
  const [projects] = useSanityFetch(
    '*[_type=="work"] | order(_createdAt desc)'
  );

  return (
    <section
      ref={workRef}
      id="work"
      className="flex flex-col justify-center w-full"
    >
      <h1 className="text-6xl font-bold text-center">
        My <span className="text-amber-400">Work</span>
      </h1>
      <article className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-5 m-8 text-white">
        {projects?.map(
          ({ project, technologies, image, details, gitLink, live }, i) => (
            <article
              key={i}
              className="group h-[15rem] w-full rounded-[2rem] transition-all relative hover:scale-[1.11] hover:z-30 shadow-2xl"
            >
              <img
                src={urlFor(image)}
                alt=""
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
                loading="lazy"
              />
              <article className="no-scrollbar overflow-y-auto flex cursor-pointer justify-center flex-col absolute group-hover:h-full top-0 left-0 overflow-auto lg:overflow-hidden rounded-[2rem] bg-black/50 h-0 w-full transition-all duration-500 box-border p-5 clip-path-style2 group-hover:left-0 group-hover:clip-path-circle group-hover:transition-all group-hover:duration-500 group-hover:backdrop-blur-[4px]">
                <h1 className="text-3xl font-bold self-start drop-shadow-2xl">
                  {project}
                </h1>
                <p className="text-left font-medium drop-shadow-2xl">
                  {technologies}
                </p>
                <p className="drop-shadow-lg text-sm">{details}</p>
                <article className="flex justify-start gap-4 pt-2">
                  <a href={gitLink} target="_blank">
                    <GoMarkGithub
                      title="gitHub link"
                      className="w-9 h-9 cursor-pointer drop-shadow-2xl hover:text-amber-400 active:translate-y-1"
                    />
                  </a>
                  <a href={live} target="_blank">
                    <FaPlayCircle
                      title="See Live Demo"
                      className="w-9 h-9 cursor-pointer drop-shadow-2xl hover:text-amber-400 active:translate-y-1"
                    />
                  </a>
                </article>
              </article>
            </article>
          )
        )}
      </article>
    </section>
  );
};
export default Work;
