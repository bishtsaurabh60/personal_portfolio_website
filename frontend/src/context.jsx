import { createContext, useReducer, useRef } from "react";

export const UiContext = createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  return action.type === "TOGGLE" ? { darkMode: !state.darkMode } : state;
};

function ThemeUiProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollOnClick = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - (elementRef !== contactRef ? 45 : 0),
      behavior: "smooth",
    });
  };

  return (
    <UiContext.Provider
      value={{
        state,
        dispatch,
        homeRef,
        aboutRef,
        skillsRef,
        servicesRef,
        workRef,
        contactRef,
        scrollOnClick,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}
export default ThemeUiProvider;
