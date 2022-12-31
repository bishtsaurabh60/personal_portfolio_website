import { useContext } from "react";
import { UiContext } from "../../context";
import { IconContext } from "react-icons/lib";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { urlFor } from "../../client";
import { useSanityFetch } from "../customHook/useSanityFetch";

const About = () => {
  const { aboutRef } = useContext(UiContext);
  const [aboutMySelf] = useSanityFetch(
    '*[_type=="about"] | order(_createdAt desc)'
  );
  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex justify-center items-center h-full my-[9rem] flex-col md:flex-row text-center"
    >
      <article className="flex-1 relative flex justify-center items-center w-full h-full mb-8 ">
        <article className="hidden absolute top-12 left-12 w-3/4 h-[30vh] rounded-[30px] overflow-hidden md:h-[70vh] bg-amber-400 md:flex shadow-2xl"></article>

        <article className="w-3/4 h-[30vh] rounded-[30px] overflow-hidden relative md:h-[70vh] shadow-2xl">
          <img
            src={aboutMySelf && urlFor(aboutMySelf[0].image)}
            alt="aboutImg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </article>
      </article>
      <article className="flex-1 w-full">
        <h1 className="font-bold text-6xl mb-8 tracking-wide">
          About <span className="text-amber-400">Me</span>
        </h1>
        <p className="font-semibold">
          I strive for progress over{" "}
          <span className="text-amber-400 drop-shadow-lg">PERFECTION!</span>
        </p>
        <p className="text-justify mx-12 py-3">
          {aboutMySelf && aboutMySelf[0].aboutMe}
        </p>
        <button className="inline-flex justify-center items-center w-60 mt-2 mb-10 md:mb-0 text-xl font-semibold h-14 bg-amber-400 drop-shadow-2xl rounded-full hover:scale-110 hover:bg-amber-400 active:translate-y-[6px] transition-all">
          <a
            href={aboutMySelf && aboutMySelf[0].resume}
            download
            target="_blank"
            className="inline-flex items-center gap-2 drop-shadow-lg"
          >
            <span>Download CV</span>
            <IconContext.Provider value={{}}>
              <BsFileEarmarkRichtext />
            </IconContext.Provider>
          </a>
        </button>
      </article>
    </section>
  );
};
export default About;
