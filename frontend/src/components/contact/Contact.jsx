import { useContext, useRef, useState } from "react";
import { IconContext } from "react-icons/lib";
import { BsLinkedin, BsFillCheckCircleFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { GrTwitter } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { UiContext } from "../../context";
import emailjs from "@emailjs/browser";
import { urlFor } from "../../client";
import { useSanityFetch } from "../customHook/useSanityFetch";

const Contact = () => {
  const formRef = useRef(null);
  const {
    state: { darkMode },
    contactRef,
  } = useContext(UiContext);
  const [done, setDone] = useState(false);
  const [details] = useSanityFetch('*[_type=="info"]');
  const [socialContacts] = useSanityFetch('*[_type=="socialContacts"]');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      ref={contactRef}
      className="flex h-full flex-col items-center justify-center border-l-[1.25rem] border-amber-400 p-10 md:pb-0 lg:my-0 lg:h-screen lg:flex-row lg:py-0"
    >
      <section className="flex flex-1 items-center justify-center">
        <article>
          <h1 className="p-4 text-6xl font-extrabold">
            Let's <span className="text-amber-400">Discuss</span> About Your{" "}
            <span className="text-amber-400">Project</span>
          </h1>
          {details?.map(({ icon, detail, hrefTo }, i) => (
            <article key={i} className="w-full">
              <a
                href={`${hrefTo}:${detail}`}
                className="flex items-center justify-start gap-4 p-3 bg-red-100/[0.3] rounded-xl m-1"
              >
                <img
                  src={urlFor(icon)}
                  alt=""
                  className="h-8 w-8 drop-shadow-2xl"
                />
                <p className="text-sm">{detail}</p>
              </a>
            </article>
          ))}
          <article className="flex justify-start gap-6 pt-8 pl-3">
            <IconContext.Provider value={{}}>
              <a
                href={socialContacts && socialContacts[0].social}
                target="_blank"
              >
                <GoMarkGithub className="social transition-all duration-300" />
              </a>

              <a
                href={socialContacts && socialContacts[1].social}
                target="_blank"
              >
                <BsLinkedin className="social transition-all duration-300" />
              </a>

              <a
                href={socialContacts && socialContacts[2].social}
                target="_blank"
              >
                <GrTwitter className="social transition-all duration-300" />
              </a>
            </IconContext.Provider>
          </article>
          <article className="flex justify-start flex-col pt-8 pl-3 text-[0.8rem]">
            <p>@2022 SAURABH BISHT</p>
            <p>ALL RIGHTS ARE RESERVED</p>
          </article>
        </article>
      </section>
      <section className="flex-1">
        {!done ? (
          <article className="flex flex-col justify-center pt-8 pb-0 sm:p-8 lg:pb-0">
            <p>
              <strong className="text-amber-400">What’s your story?</strong> Get
              in touch. Always available, if the right project comes along me.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-4 p-8 pl-0 pt-4 pb-0"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Name*"
                className={`input ${darkMode && "bg-[#333]"}`}
                minLength={3}
                maxLength={20}
                required
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Subject*"
                className={`input ${darkMode && "bg-[#333]"}`}
                minLength={3}
                maxLength={20}
                required
              />
              <input
                type="Email"
                name="user_email"
                placeholder="Email*"
                className={`input ${darkMode && "bg-[#333]"}`}
                required
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message*"
                className={`my-[14px] w-full border-b-[1px] border-black pl-[10px] font-[1.1rem] ${
                  darkMode && "bg-[#333]"
                }`}
                required
              />
              <article className="flex items-center gap-4">
                <button
                  type="submit"
                  className="group flex h-12 w-52 items-center justify-center gap-2 rounded-[2rem] bg-amber-400 text-lg font-medium shadow-2xl drop-shadow-2xl transition-all hover:bg-amber-400 active:translate-y-1"
                >
                  <span>Send Message</span>
                  <RiSendPlaneFill className="h-6 w-6 transition-all duration-500 group-hover:rotate-45" />
                </button>
              </article>
            </form>
          </article>
        ) : (
          <div className="flex flex-col flex-1 gap-4 text-center align-center h-full py-[12rem]">
            <BsFillCheckCircleFill className="h-20 w-20 text-green-700 transition-all self-center" />
            <h1 className="font-extrabold text-4xl">
              ...ThankYou For{" "}
              <span className="text-amber-400">Reaching Us...</span>
            </h1>
          </div>
        )}
      </section>
    </section>
  );
};
export default Contact;
