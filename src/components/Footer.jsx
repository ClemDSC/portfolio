import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FooterContent from "./FooterContent";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <footer
      className={`div8 hover:cursor-pointer bg-eggshell flex flex-col justify-center items-center p-4 ${
        open ? "footer-display" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: open ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full flex justify-center items-center px-4 py-4 hover:border-4 hover:border-feldgrau hover:rounded-xl"
        onClick={handleOpen}
      >
        <img
          className="max-h-16"
          src="../assets/logo/contact-us.png"
          alt="Contactez-nous"
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={handleOpen}
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
              key="modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                position: "fixed",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "fit-content",
                zIndex: 9999,
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <FooterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
