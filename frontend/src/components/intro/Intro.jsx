import TypingEffect from "../features/TypingEffect";
import { urlFor } from "../../client";
import { useSanityFetch } from "../customHook/useSanityFetch";

const Intro = () => {
  const [profile] = useSanityFetch(
    '*[_type=="profile"] | order(_createdAt desc)'
  );
  return (
    <section
      id="intro"
      className="flex flex-col md:flex-row h-screen md:h-full md:mt-12 lg:h-screen lg:mt-5"
    >
      <article
        id="bio"
        className="flex-1 translate-y-8 self-center md:translate-y-0"
      >
        <article className="flex flex-col flex-1 justify-between py-12 md:p-12 gap-8">
          <h2 className="text-center text-3xl md:text-left">
            Hello There, I'm
          </h2>
          <h1 className="text-center font-extrabold text-6xl tracking-widest md:text-start drop-shadow-2xl">
            <span className="text-amber-400 drop-shadow-lg">SAURABH</span> BISHT
          </h1>
          <article className="text-center flex text-4xl font-semibold flex-col md:text-left">
            <h2 className="mr-2.5">I am a</h2>
            <TypingEffect />
          </article>

          <p className="font-normal hidden md:block text-lg">
            {profile && profile[0].description}
          </p>
        </article>
      </article>

      <article id="person_image" className="flex-1 relative">
        <article className="clip-path-style bg-amber-400 absolute w-full h-full"></article>
        <img
          src={profile && urlFor(profile[0].image)}
          alt=""
          className="w-full h-full object-cover object-top absolute"
          loading="lazy"
        />
        <p className="backdrop-opacity-95 backdrop-brightness-90 bg-black/30 drop-shadow-lg font-normal w-5/6 m-2 p-2 absolute top-1/2 text-white right-0 md:hidden rounded-2xl">
          {profile && profile[0].description}
        </p>
      </article>
    </section>
  );
};
export default Intro;
