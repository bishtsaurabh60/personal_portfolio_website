import { urlFor } from "../../client";
const Card = ({ service, details, image, i }) => {
  return (
    <section
      className={`flex-1 group relative flex justify-center items-center hover:scale-110 transition-all rounded-[2rem] bg-white h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] w-full
              hover:before:opacity-100 hover:z-[20]

             before:content-[''] before:absolute
             before:top-0 before:left-0 before:flex 
             before:w-full before:h-full before:rounded-[2rem]
             before:bg-black/30 before:z-20
             before:duration-500 
             before:opacity-0 before:hover:backdrop-blur-[2px]
             
             ${i > 0 ? "grayscale hover:grayscale-0" : ""}
             `}
    >
      <img
        src={urlFor(image)}
        alt=""
        className="w-full h-full absolute top-0 left-0 object-cover shadow-2xl drop-shadow-2xl rounded-[2rem]"
        loading="lazy"
      />
      <article className="flex flex-col justify-center relative z-[30] text-white opacity-0 translate-y-8 duration-500 p-2 md:p-8 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-2xl text-left w-full h-full">
        <h1 className="text-3xl font-bold self-start p-4">{service}</h1>
        <p className="text-xl p-4 pt-0">{details}</p>
      </article>
    </section>
  );
};
export default Card;