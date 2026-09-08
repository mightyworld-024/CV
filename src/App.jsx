import Navbar from "./Components/Navbar";
import CustomCursor from "./Components/CustomCursor";
import PageLoader from "./Components/PageLoader";
import ScrollProgress from "./Components/ScrollProgress";
import SmoothScroll from "./Components/SmoothScroll.jsx";

import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <div className="noise" />
      <Navbar />

      <main className="rgb-background">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;