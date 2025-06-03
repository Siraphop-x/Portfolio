import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

aos.init();



const AboutSection = () => {

  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <section id="about" className="py-20 bg-base-100 scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="space-y-6">
            <div className="card bg-base-200 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-base-content/80 leading-relaxed">
                I'm a computer science student fueled by a deep passion for
                coding, software development, and web design. I thrive on
                exploring new technologies and solving complex problems through
                programming. For me, it's not just about writing code—it's about
                the excitement of creating innovative solutions and continuously
                learning in this ever-evolving field.
              </p>
            </div>

            <div className="card bg-base-200 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                What I Do
              </h3>
              <p className="text-base-content/80 leading-relaxed">
                Whether it’s building interactive websites with React and
                Next.js, developing projects using PHP, or creating restaurant
                booking platforms, I find joy in every challenge and opportunity
                to grow. I specialize in front-end development and enjoy
                collaborating with UX/UI designers to bring ideas to life.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            <div className="stat bg-gradient-to-br from-primary to-primary/80 text-white rounded-box p-6">
              <div className="stat-value text-3xl">4+</div>
              <div className="stat-title text-white/80">Years Study</div>
            </div>
            <div className="stat bg-gradient-to-br from-secondary to-secondary/80 text-white rounded-box p-6">
              <div className="stat-value text-3xl">3</div>
              <div className="stat-title text-white/80">Projects Done</div>
            </div>
            <div className="stat bg-gradient-to-br from-accent to-accent/80 text-white rounded-box p-6">
              <div className="stat-value text-3xl">4M</div>
              <div className="stat-title text-white/80">Internship</div>
            </div>
            <div className="stat bg-gradient-to-br from-info to-info/80 text-white rounded-box p-6">
              <div className="stat-value text-3xl">2</div>
              <div className="stat-title text-white/80">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
