import { useState, useEffect } from "react";
import { TbArrowBigTop } from "react-icons/tb";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState();

  const onScroll = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton ? (
        <article
          className="w-12 h-12 flex justify-center items-center cursor-pointer rounded-full bg-amber-400 text-white drop-shadow-2xl shadow-2xl fixed bottom-8 right-8 z-50"
          onClick={scrollToTop}
        >
          <TbArrowBigTop className="w-6 h-8 drop-shadow-2xl shadow-2xl" />
        </article>
      ) : (
        <></>
      )}
    </>
  );
};
export default ScrollToTop;
