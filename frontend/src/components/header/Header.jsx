import { useState, useContext, useEffect } from "react";
import { RiMenuFill, RiMenu4Line } from "react-icons/ri";
import Toggle from "../darkMode/Toggle";
import { UiContext } from "../../context";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const {
    state,
    homeRef,
    aboutRef,
    skillsRef,
    servicesRef,
    workRef,
    contactRef,
    scrollOnClick,
  } = useContext(UiContext);

  const navi = [
    { link: "HOME", scroll: homeRef },
    { link: "ABOUT", scroll: aboutRef },
    { link: "SKILLS", scroll: skillsRef },
    { link: "SERVICES", scroll: servicesRef },
    { link: "WORK", scroll: workRef },
    { link: "CONTACT", scroll: contactRef },
  ];

  const changeNavBg = () => {
    window.scrollY > 1 ? setShowColor(true) : setShowColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  const showColorSm = () =>
    showColor
      ? state.darkMode
        ? "sm:bg-[#222]/[0.2] sm:backdrop-blur-[8px]  sm:text-white"
        : "sm:bg-[#fff]/[0.3] sm:backdrop-blur-[12px]"
      : "";

  return (
    <>
      <header ref={homeRef} id="header" className="relative">
        <section
          className={`fixed z-50  top-0 left-0 right-0 flex justify-between item-center text-xl font-semibold ${showColorSm()}
            
          ${
            menu
              ? state.darkMode
                ? "bg-[#222]/[0.2] backdrop-blur-[8px]"
                : "bg-[#fff]/[0.3] backdrop-blur-[12px]"
              : ""
          }`}
        >
          <article
            className="ml-1 p-1 flex items-center md:hidden active:text-amber-400"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <RiMenu4Line className="w-7 h-7 cursor-pointer" />
            ) : (
              <RiMenuFill className="w-7 h-7 cursor-pointer" />
            )}
          </article>

          <article
            className={`${
              menu ? "ml-[calc(100%-6.25rem)]" : ""
            } md:justify-start md:ml-3 m-1 p-1 md:mt-[0.35rem] cursor-pointer z-50`}
          >
            <Toggle />
          </article>

          <nav className={`${menu ? "block" : "hidden"} mr-5 z-50 md:flex`}>
            <ul
              className={`${
                state.darkMode
                  ? "bg-[#222]/[0.6] text-white"
                  : "bg-[#fff]/[0.6]"
              }
              
               md:bg-transparent
               absolute w-full translate-y-[20%] left-0 md:flex drop-shadow-lg md:translate-y-0 md:static -top-[0.55rem] text-center group`}
            >
              {navi.map(({ link, scroll }, i) => (
                <li
                  onClick={(e) => {
                    scrollOnClick(scroll);
                    setMenu(false);
                  }}
                  key={i}
                  className={`ml-3 p-1 m-1 underline-offset-8 decoration-4 hover:underline hover:text-amber-400 cursor-pointer`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};
export default Header;
