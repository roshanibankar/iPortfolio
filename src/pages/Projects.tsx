import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

interface Project {
  id: number;
  title: string;
  location: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    location: "Earth",
    images: ["/iPortfolio/logos/home-bg.jpg", "/iPortfolio/logos/home-bg.jpg", "/iPortfolio/logos/home-bg.jpg"],
  },
  {
    id: 2,
    title: "Project Two",
    location: "Earth",
    images: ["/iPortfolio/logos/home-bg.jpg", "/iPortfolio/logos/home-bg.jpg", "/iPortfolio/logos/home-bg.jpg"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="projects-container">
      {projects.map((project) => {
        const isActive = activeProject === project.id;

        return (
          <div key={project.id} className="project-item">

            {/* Preview */}
            {!isActive && (
              <motion.div
                className="project-preview"
                onClick={() => setActiveProject(project.id)}
                layoutId={`project-${project.id}`}
              >
                <img src={project.images[0]} alt={project.title} />
                <div className="project-meta">
                  <h2>{project.title}</h2>
                  <p>{project.location}</p>
                </div>
              </motion.div>
            )}

            {/* Horizontal Scroll */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="project-expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layoutId={`project-${project.id}`}
                >
                  <div className="horizontal-scroll">

                    {/* First block: Project title/text */}
                    <motion.div
                      className="scroll-block text-block title-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0 }}
                    >
                      <h2>{project.title}</h2>
                      <p>{project.location}</p>
                    </motion.div>

                    {/* Second block: clicked image */}
                    <motion.div
                      className="scroll-block image-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <img src={project.images[0]} alt={project.title} />
                    </motion.div>

                     {/* Additional text blocks */}
                    <motion.div
                      className="scroll-block text-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3>Project Overview</h3>
                      <p>
                        Placeholder architectural description, materials, urban integration.
                      </p>
                      <a href="#">View Case Study →</a>
                    </motion.div>

                    {/* Remaining images */}
                    {project.images.slice(1).map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="scroll-block image-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <img src={img} alt={`Gallery ${idx}`} />
                      </motion.div>
                    ))}

                   

                    <motion.div
                      className="scroll-block text-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3>Design Strategy</h3>
                      <p>
                        Integrates landscape and city movement, layered spatial rhythm.
                      </p>
                      <a href="#">Download PDF →</a>
                    </motion.div>

                  </div>

                  <button
                    className="close-btn"
                    onClick={() => setActiveProject(null)}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        );
      })}
    </div>
  );
}
