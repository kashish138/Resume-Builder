
import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

const ResumePreview = forwardRef(({ data, theme, showProjects }, ref) => {
  const themeColors = {
    blue: "#3b82f6",
    green: "#10b981",
    rose: "#f43f5e",
    slate: "#64748b",
  };

  const [currentTheme, setCurrentTheme] = useState(theme || "blue");
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference for dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <motion.div
      ref={ref} // <-- Important for react-to-print
      className={`p-8 shadow-lg rounded-xl max-w-3xl mx-auto mt-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Theme Controls */}
      <div className="flex justify-end gap-2 mb-4 print:hidden">
        {Object.keys(themeColors).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 ${
              currentTheme === t ? "ring-2 ring-offset-1 ring-gray-400" : ""
            }`}
            style={{ backgroundColor: themeColors[t] }}
          ></button>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-500"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* Name */}
      <motion.h1
        style={{ color: themeColors[currentTheme] }}
        className="text-3xl font-bold"
        animate={{ color: themeColors[currentTheme] }}
        transition={{ duration: 0.5 }}
      >
        {data.name}
      </motion.h1>

      {/* Title */}
      <motion.p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        {data.title}
      </motion.p>

      {/* Summary */}
      <motion.section className="mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
        <h2 className="text-lg font-semibold border-b pb-1">Summary</h2>
        <p className="text-sm mt-2">{data.summary}</p>
      </motion.section>

      {/* Skills */}
      <motion.section className="mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
        <h2 className="text-lg font-semibold border-b pb-1">Skills</h2>
        <motion.div className="flex flex-wrap gap-2 mt-2" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}>
          {data.skills.map((s, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 rounded-md text-sm transition-colors duration-500"
              style={{ backgroundColor: darkMode ? "#1f2937" : "#f3f4f6" }}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects */}
      {showProjects && (
        <motion.section className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.projects.map((project, i) => (
              <motion.div
                key={i}
                className={`p-4 rounded-lg border shadow-sm transition-all duration-300 ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
              >
                <h3 className="font-semibold text-base mb-1" style={{ color: themeColors[currentTheme] }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                {project.tech && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-blue-500">
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Experience */}
      <motion.section
  className="mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.0, duration: 0.6 }}
>
  <h2 className="text-lg font-semibold border-b pb-1 mb-3">Experience</h2>

  <div className="mb-4">
    <h3 className="text-blue-600 font-semibold">
      Frontend Developer Intern — CVNT (Startup)
    </h3>
    <p className="text-gray-600 text-sm">
      <strong>May 2024 – July 2024</strong> | Remote
    </p>
    <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1">
      <li>Built and deployed the company’s official fashion e-commerce website using React and Node.js.</li>
      <li>Collaborated on responsive product pages, shopping cart logic, and payment flow integration.</li>
      <li>Focused on improving page load performance and maintaining cross-browser compatibility.</li>
    </ul>
  </div>

  <div>
    <h3 className="text-blue-600 font-semibold">Freelance Web Designer</h3>
    <p className="text-gray-600 text-sm">
      <strong>2023 – Present</strong> | Remote
    </p>
    <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1">
      <li>Designed and developed portfolio and business websites for clients using React, GSAP, and Framer Motion.</li>
      <li>Delivered projects with a focus on animation, modern aesthetics, and high usability.</li>
    </ul>
  </div>
</motion.section>
    </motion.div>
  );
});

export default ResumePreview;





