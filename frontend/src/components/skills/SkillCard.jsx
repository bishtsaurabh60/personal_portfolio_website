const SkillCard = ({ stack, skills, isAnimate }) => {
  return (
    <article className="w-full flex-1 flex place-items-center flex-col">
      <article className="rounded-br-[2rem] rounded-tl-[2rem] border-r-[1.5rem] border-l-[1.5rem] border-amber-400 w-4/5 flex mb-4 flex-col justify-center items-center pt-2 customBoxShadow drop-shadow-2x">
        <h1 className="font-bold text-3xl drop-shadow-lg tracking-wide">
          {skills}
        </h1>
        <section className="w-4/5 rounded-[30px] p-4">
          <article className="">
            {stack?.map(({ skill, expertise }, i) => (
              <div className="py-1" key={skill + i}>
                <article className="m-0">
                  <span className="text-1xl font-[500] my-5">{skill}</span>
                </article>
                <article
                  className={`h-[10px] w-full bg-gray-200 shadow-2xl relative rounded-xl scale-x-0 origin-left ${
                    isAnimate &&
                    "animate-[skills_1s_cubic-bezier(1,0,0.5,1)_forwards]"
                  }`}
                >
                  <span
                    exp={expertise}
                    className={`text-white drop-shadow-lg
                                h-full bg-amber-400 absolute 
                                rounded-xl border-r-0
                               border-t-black
                                
                                before:absolute 
                                before:border-orange-500
                                before:content-[''] before:right-0
                                before:-top-[10px] before:h-0 before:w-0
                                before:border-[7px] before:border-transparent before:border-b-0
                                before:border-r-0 before:border-t-orange-500

                                after:absolute after:drop-shadow-lg
                                after:content-[attr(exp)] after:right-0
                                after:-top-[25px] after:text-xs after:bg-orange-500 
                                after:py-[1px] after:px-0 after:w-7 after:text-center 

                                scale-x-0 origin-left ${
                                  isAnimate &&
                                  "animate-[skills_1s_cubic-bezier(1,0,0.5,1)_forwards]"
                                }                          
                               `}
                    style={{ width: `${expertise}` }}
                  ></span>
                </article>
              </div>
            ))}
          </article>
        </section>
      </article>
    </article>
  );
};
export default SkillCard;
