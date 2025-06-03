import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          <div className="avatar mb-8">
            <div
              data-aos="zoom-out-down"
              className="w-38 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-4xl text-white">
                  <img src="src\assets\eeeee.jpg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Siraphop Prawdaeng
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold">
            WEB DEVELOPER
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-base-content/60">
            I am a computer science graduate with a deep passion for coding,
            software development, and web design. I thrive on exploring new
            technologies and solving complex problems through programming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
