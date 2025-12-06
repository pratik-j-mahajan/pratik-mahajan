import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";
import ParticleBackground from "./ParticleBackground";

function Projects({ onBack }) {
  const projects = [
    {
      title: "Paisa+ A Finance & Management App",
      img: "/paisa+.webp",
      desc: "An all-in-one AI-powered platform for personal finance management featuring expense tracking, budget planning, investment insights, and automated financial reporting with smart analytics.",
      link: "https://github.com/pratik-j-mahajan/AI-based-SAAS",
      skills: ["/react.png", "/nodejs.png", "/tailwind1.png", "/sql.png", "/figma.png"]
    },
    {
      title: "Krishi Mitra",
      img: "/krishi mitra.webp",
      desc: "Comprehensive agricultural platform connecting farmers with markets, equipment rentals, expert advice, and logistics. Features AI-powered crop recommendations and real-time marketplace for buying and selling produce.",
      link: "#",
      skills: ["/react.png", "/js.png", "/typescript.png", "/nodejs.png", "/mongodb.png", "/next.png", "/gemini.png"],
      className: "contain-image"
    },
    {
      title: "Genora One",
      img: "/realty1.png",
      desc: "Modern real estate platform with intuitive property search, virtual tours, and seamless user experience. Built with responsive design and smooth animations for enhanced property browsing.",
      link: "#",
      skills: ["/react.png", "/js.png", "/css.png", "/html.png", "/figma.png"]
    },
    {
      title: "Earthquake In-depth Analysis",
      img: "/earth.png",
      desc: "Comprehensive data analysis and visualization of earthquake patterns from 1900-2014.",
      link: "https://public.tableau.com/views/EarthquakeIndepthAnalysis/EarthquakeFrom1900-2014",
      skills: ["/tableau.png", "/sql.png"]
    },
    {
      title: "Pareto Based Optimization",
      img: "/pareto.webp",
      desc: "Advanced optimization algorithm implementation using Pareto principles.",
      link: "https://pareto-based-analysis-app.streamlit.app/",
      skills: ["/react.png", "/js.png", "/python.png", "/css.png", "/html.png"],
      className: "pareto-card"
    },
  ];

  return (
    <div className="projects-page">
      <ParticleBackground variant="connect" colorTheme="gray" />
      {/* 🔹 Only Back Button (No Top Bar). Use callback to avoid URL change */}
      <button
        type="button"
        className="back-button"
        onClick={() => {
          if (onBack) onBack();
        }}
      >
        ← Back
      </button>

      {/* Header */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Scroll down to explore — Projects that reflect my journey from idea to implementation.
        </p>
      </div>

      {/* Project Cards */}
      <div className="projects-container">
        {projects.map((project, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { margin: "-35% 0px -35% 0px" });

          return (
            <motion.div
              ref={ref}
              key={idx}
              className={`project-card ${project.className || ''}`}
              initial={{ opacity: 0.5, scale: 0.92, rotateX: -18, y: 10 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotateX: 0, y: 0, z: 0 }
                  : { opacity: 0.3, scale: 0.92, rotateX: -20, y: 10, z: -120 }
              }
              transition={{ duration: 0.7, ease: [0.36, 0.66, 0.36, 1] }}

            >
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="skills-row">
                  {project.skills.map((s, i) => (
                    <img key={i} src={s} alt="skill" />
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  View Project →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* More projects coming */}
      <div className="more-projects-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  );
}

export default Projects;
