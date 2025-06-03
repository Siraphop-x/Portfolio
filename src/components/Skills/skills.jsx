import React, { useState, useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Database,
  Settings,
  Globe,
  GitBranch,
  Palette,
  Languages,
} from "lucide-react";

const SkillsSection = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    setIsVisible(true);
    // Animate skill bars with delay
    const timer = setTimeout(() => {
      setAnimatedSkills({ animate: true });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      skills: [
        { name: "HTML", level: 95, icon: Globe, color: "text-orange-500" },
        { name: "JavaScript", level: 90, icon: Code, color: "text-yellow-500" },
        { name: "React (JSX)", level: 85, icon: Code, color: "text-blue-500" },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: Palette,
          color: "text-cyan-500",
        },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      skills: [
        { name: "PHP", level: 70, icon: Code, color: "text-purple-600" },
        { name: "MySQL", level: 75, icon: Database, color: "text-blue-600" },
      ],
    },
    {
      title: "Tools & Languages",
      icon: Settings,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      skills: [
        { name: "Git", level: 85, icon: GitBranch, color: "text-orange-600" },
        { name: "daisyUI", level: 85, icon: Palette, color: "text-green-500" },
        { name: "Thai", level: 100, icon: Languages, color: "text-red-500" },
        { name: "English", level: 60, icon: Languages, color: "text-blue-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20  min-h-screen scroll-mt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="relative w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div
          data-aos="zoom-in-down"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2  overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  animation: isVisible
                    ? `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                    : "none",
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0  transition-opacity duration-500`}
                ></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full opacity-20 animate-float`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`relative p-4 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent"></div>
                    </div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <SkillIcon
                                className={`w-5 h-5 ${skill.color} group-hover/skill:scale-125 transition-transform duration-300`}
                              />
                              <span className="font-semibold text-white group-hover/skill:text-gray-900">
                                {skill.name}
                              </span>
                            </div>
                            <span
                              className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white shadow-sm`}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                            <div
                              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                              style={{
                                width: animatedSkills.animate
                                  ? `${skill.level}%`
                                  : "0%",
                                transitionDelay: `${
                                  index * 200 + skillIndex * 100
                                }ms`,
                              }}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>

                            {/* Glow Effect */}
                            <div
                              className={`absolute top-0 h-full bg-gradient-to-r ${category.gradient} rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out`}
                              style={{
                                width: animatedSkills.animate
                                  ? `${skill.level}%`
                                  : "0%",
                                transitionDelay: `${
                                  index * 200 + skillIndex * 100
                                }ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
