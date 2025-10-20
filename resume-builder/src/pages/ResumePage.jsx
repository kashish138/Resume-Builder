
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../components/Header";
import SidebarOptions from "../components/SidebarOptions";
import ResumePreview from "../components/ResumePreview";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ProfileSection from "../components/ProfileSection";

export default function ResumePage() {
  const [theme, setTheme] = useState("blue");
  const [selected, setSelected] = useState("All"); // Default: show full resume

  const componentRef = useRef();

  const resumeData = {
    name: "Kashish Bhatia",
    title: "Frontend Developer | React • Three.js • UI/UX Enthusiast",
    summary:
      "Creative and detail-oriented Frontend Developer with hands-on experience in crafting modern, responsive, and immersive web applications. Skilled in building interactive 3D experiences using React Three Fiber, and passionate about design-driven development that blends aesthetics with performance.",
    education: [
      {
        degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
        institution: "XYZ Institute of Technology",
        year: "2022 - 2026",
        details:
          "Focused on software development, data structures, and full-stack web technologies. Engaged in projects involving AI, IoT, and 3D web applications.",
      },
      {
        degree: "Higher Secondary Education",
        institution: "ABC Senior Secondary School",
        year: "2020 - 2022",
        details:
          "Completed PCM stream with focus on problem-solving, programming fundamentals, and design thinking.",
      },
    ],
    experience: [
      {
        position: "Frontend Developer Intern",
        company: "CVNT (Fashion Startup)",
        year: "May 2024 - July 2024",
        details: [
          "Developed the official e-commerce website from scratch using React and Tailwind CSS.",
          "Integrated dynamic product galleries, cart system, and Stripe payment gateway.",
          "Collaborated with design and marketing teams to ensure a modern, user-friendly interface.",
        ],
      },
      {
        position: "Freelance Web Developer",
        company: "Self-Employed",
        year: "2023 - Present",
        details: [
          "Designed and deployed responsive websites for local businesses and personal portfolios.",
          "Implemented animations using Framer Motion and GSAP for interactive visual experiences.",
          "Explored 3D integration using Blender models and React Three Fiber.",
        ],
      },
    ],
    projects: [
      {
        title: "WearCVNT - Fashion E-Commerce Website",
        description:
          "Developed a complete e-commerce platform for a women’s clothing startup, featuring dynamic product pages, real-time cart management, and secure payment flow.",
        tech: ["React", "TailwindCSS", "Node.js"],
        link: "https://wearcvnt.com",
      },
      {
        title: "3D Interactive ID Badge",
        description:
          "Built a realistic, physics-based 3D ID badge animation using React Three Fiber and Rapier physics.",
        tech: ["React Three Fiber", "Rapier", "Blender"],
        link: "https://yourportfolio.com/idbadge",
      },
    ],
    skills: [
      "React",
      "Three.js",
      "React Three Fiber",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
      "GSAP",
      "Git & GitHub",
      "Figma",
    ],
  };

  // Print handler
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resumeData.name}-Resume`,
  });

  const renderSection = () => {
    switch (selected) {
      case "Profile":
        return <ProfileSection data={resumeData} theme={theme} />;
      case "Education":
        return <EducationSection theme={theme} />;
      case "Experience":
        return <ExperienceSection theme={theme} />;
      case "Projects":
        return <ProjectsSection data={resumeData.projects} theme={theme} />;
      case "Skills":
        return <SkillsSection data={resumeData.skills} theme={theme} />;
      default:
        return (
          <>
            {/* <div className="flex justify-end mb-4 print:hidden">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download as PDF
              </button>
            </div>
          
            <ResumePreview
              ref={componentRef}
              data={resumeData}
              theme={theme}
              showProjects
            /> */}

            <div className="flex justify-end mb-4">
  <button
    onClick={handlePrint}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    Download as PDF
  </button>
</div>

<div ref={componentRef}>
  <ResumePreview data={resumeData} theme={theme} showProjects />
</div>

              
          </>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarOptions selected={selected} setSelected={setSelected} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 transition-all duration-300">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}




