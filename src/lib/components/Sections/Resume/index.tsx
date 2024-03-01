import { useRef } from "react";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";
import Publications from "./Publications";
import {
  AnimatePresence,
  motion,
  useInView,
  useWillChange,
} from "framer-motion";
import Skills from "./Skills";
import Intro from "./Intro";
import HoverLink from "../../motion/View/HoverLink";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Logo from "../../motion/Menu/Logo";

const Resume = () => {
  const resume = useRef(null);
  const isInView = useInView(resume);
  const willChange = useWillChange();

  return (
    <motion.section
      id="resume"
      ref={resume}
      layoutScroll
      style={{
        willChange,
        display: "block",
        padding: "10vh 0",
        maxWidth: "100vw",
        overflow: "hidden",
        height: "1000vh",
      }}
    >
      <AnimatePresence initial={false}>
        {isInView && (
          <>
            <div
              style={{
                position: "absolute",
                width: "80px",
                top: "-20px",
                left: "10px",
              }}
            >
              <Logo light />
            </div>
            <Intro />

            <Experience />
            <Education />
            <Certificates />
            <Publications />

            <Skills />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 5,
              }}
              style={{
                marginTop: "180vh",
                textTransform: "uppercase",

                textAlign: "center",
              }}
            >
              <h2>Projects</h2>
              <HoverLink title="check out my portfolio" url="/projects" />
              <ArrowForwardIcon />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Resume;
