import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const EducationSection = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  const education = [
    {
      degree: "Computer Science",
      school: "Buriram Rajabhat University",
      year: "2021-2025",
      description:
        "Pursuing a comprehensive curriculum encompassing programming, database management, software engineering, and web development. Engaged in hands-on projects and collaborative learning.",
      icon: "🎓",
    },
    {
      degree: "Front-End Developer Internship",
      school: "Depth First Co., Ltd.",
      year: "2024-2025",
      description:
        "4-month internship collaborating with UX/UI designers and automated testing team, contributing to real-world projects and enhancing front-end development skills.",
      icon: "💼",
    },
    {
      degree: "Online Restaurant Platform",
      school: "Final Project",
      year: "2024-2025",
      description:
        "A web platform for booking entire restaurants,allowing users to reserve time slots, managebookings, view history, and register newrestaurants all in one system.,",
      icon: "🏠",
    },
  ];

  return (
    <section id="education" className="py-20 bg-base-200 scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Continuous learning and growth through formal education and
            professional development
          </p>
        </div>

        <div data-aos="fade-up" className="timeline timeline-vertical">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item  ${
                index % 2 === 0 ? "timeline-start" : "timeline-end"
              }`}
            >
              <div className="timeline-middle">
                <div className="timeline-point bg-primary text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full">
                  {edu.icon}
                </div>
              </div>
              <div
                className={`card bg-base-100 shadow-xl ${
                  index % 2 === 0 ? "timeline-box-start" : "timeline-box-end"
                } hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className="card-body">
                  <h3 className="card-title text-primary">{edu.degree}</h3>
                  <p className="text-secondary font-semibold">{edu.school}</p>
                  <p className="text-sm text-base-content/60">{edu.year}</p>
                  <p className="text-base-content/80">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
