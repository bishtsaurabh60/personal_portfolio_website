import "./App.css";
import React,{ useContext, useEffect,Suspense } from "react";
import { UiContext } from "./context";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/features/ScrollToTop";

const Work = React.lazy(() => import("./components/work/Work"));

const App = () => {
  const { state:{darkMode} } = useContext(UiContext);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main
      className={`${
        darkMode ? "bg-[#222] text-white" : "text-[#333]"
      }`}
    >
      <ScrollToTop />
      <Header />
      <Intro />
      <About />
      <Skills />
      <Services />
      <Suspense fallback={<div></div>}>
        <Work />
      </Suspense>
      <Contact />
    </main>
  );
};

export default App;
