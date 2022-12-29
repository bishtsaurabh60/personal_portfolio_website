import { useContext } from "react";
import { UiContext } from "../../context";
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

const Toggle = () => {
    const { state,dispatch } = useContext(UiContext);
    const handleClick = () => {
        dispatch({ type: 'TOGGLE' });
    }
  return (
    <section
      onClick={handleClick}
      className="w-12 h-6 rounded-3xl bg-[#999] top-3 right-3 z-50 flex items-center justify-around"
    >
      <img src={sun} alt="sun" className="w-4 h-4" />
      <img src={moon} alt="moon" className="w-4 h-4" />
      <div
        className={`${
          state.darkMode
            ? "right-[0.30rem] md:left-[2.35rem]"
            : "right-8 md:left-[0.8rem]"
        } w-7 h-7 rounded-full absolute bg-white cursor-pointer border border-gray-300 transition-all`}
      ></div>
    </section>
  );
}
export default Toggle;