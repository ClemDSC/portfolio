import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDivClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`div4 p-4 cursor-pointer bg-ash-grey hover:bg-eggshell  ${isExpanded ? "expanded" : ""}`}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full flex justify-center items-center px-4 py-4 hover:border-4 hover:border-feldgrau hover:rounded-xl"
        onClick={handleDivClick}
      >
        <img
          className="max-h-16"
          src="../assets/logo/connaissances.png"
          alt="Knowledges"
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              onClick={handleDivClick}
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9998,
                backgroundColor: "#3C5142",
                filter: "grayscale(0.6)",
              }}
            />

            <motion.div
              key="expanded-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                cursor: "default",
                position: "fixed",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                zIndex: 9999,
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div>
                Contenu masqué au départ, à afficher quand on clique sur la div
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;
