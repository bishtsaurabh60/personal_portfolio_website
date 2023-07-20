import {useContext } from "react";
import { UiContext } from "../../context";
import { useSanityFetch } from "../customHook/useSanityFetch";
import Card from "./Card";
const Services = () => {
  const { servicesRef } = useContext(UiContext);
  const [services] = useSanityFetch('*[_type == "services"]');
  
  return (
    <section
      id="services"
      ref={servicesRef}
      className="flex place-items-center h-full flex-col md:flex-row cursor-pointer my-[5rem] lg:my-[10rem]"
    >
      <article className="flex-1 flex justify-center items-center flex-col">
        <h1 className="font-bold text-6xl mb-6 drop-shadow-lg tracking-wide">
          Services
        </h1>
        <article className="flex justify-evenly items-center gap-6 m-8 sm:mx-14 lg:m-8 flex-col sm:flex-wrap md:flex-wrap lg:flex-row">
          {services?.map(({ service, details, image }, i) => (
            <Card
              key={i}
              service={service}
              details={details}
              image={image}
              i={i}
            />
          ))}
        </article>
      </article>
    </section>
  );
};
export default Services;