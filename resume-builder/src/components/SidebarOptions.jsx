// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaCogs } from "react-icons/fa";

// const options = [
//   { id: 1, name: "Profile", icon: <FaUser /> },
//   { id: 2, name: "Education", icon: <FaGraduationCap /> },
//   { id: 3, name: "Experience", icon: <FaBriefcase /> },
//   { id: 4, name: "Projects", icon: <FaProjectDiagram /> },
//   { id: 5, name: "Skills", icon: <FaCogs /> },
// ];

// export default function SidebarOptions({ selected, setSelected }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <motion.div
//       initial={{ x: -80, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="flex flex-col bg-white shadow-xl rounded-2xl p-5 w-60 gap-3 border border-gray-100"
//     >
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Sections</h2>

//       {options.map((opt) => (
//         <motion.div
//           key={opt.id}
//           onClick={() => setSelected(opt.name)}
//           onMouseEnter={() => setHovered(opt.id)}
//           onMouseLeave={() => setHovered(null)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
//             selected === opt.name
//               ? "bg-blue-500 text-white shadow-lg"
//               : "bg-gray-50 text-gray-700 hover:bg-blue-100"
//           }`}
//         >
//           <motion.span
//             initial={{ opacity: 0, x: -10 }}
//             animate={{
//               opacity: hovered === opt.id || selected === opt.name ? 1 : 0.8,
//               x: 0,
//             }}
//             transition={{ duration: 0.3 }}
//             className="text-lg"
//           >
//             {opt.icon}
//           </motion.span>

//           <motion.span
//             initial={{ x: -10, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.1 }}
//             className="font-medium"
//           >
//             {opt.name}
//           </motion.span>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaCogs,
  FaLayerGroup,
} from "react-icons/fa";

const options = [
  { id: 0, name: "All", label: "Resume", icon: <FaLayerGroup /> },
  { id: 1, name: "Profile", icon: <FaUser /> },
  { id: 2, name: "Education", icon: <FaGraduationCap /> },
  { id: 3, name: "Experience", icon: <FaBriefcase /> },
  { id: 4, name: "Projects", icon: <FaProjectDiagram /> },
  { id: 5, name: "Skills", icon: <FaCogs /> },
];

export default function SidebarOptions({ selected, setSelected }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col bg-white shadow-xl rounded-2xl p-5 w-60 gap-3 border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Sections</h2>

      {options.map((opt) => (
        <motion.div
          key={opt.id}
          onClick={() => setSelected(opt.name)}
          onMouseEnter={() => setHovered(opt.id)}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
            selected === opt.name
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-50 text-gray-700 hover:bg-blue-100"
          }`}
        >
          <motion.span className="text-lg">{opt.icon}</motion.span>
          <motion.span className="font-medium">
            {opt.label || opt.name}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
}

