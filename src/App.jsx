import "./App.css";
import Header from "./components/Header/header.jsx";
import HeroSection from "./components/Hero/heroSection.jsx";
import AboutSection from "./components/About/aboutSection.jsx";
import Education from "./components/Education/education.jsx";
import Skill from "./components/Skills/skills.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
function App() {
  return (
    <>
   
        <Header />
        <HeroSection />
        <AboutSection />
        <Education />
        <Skill />
        <Contact />
        <Footer />

    </>
  );
}

export default App;
