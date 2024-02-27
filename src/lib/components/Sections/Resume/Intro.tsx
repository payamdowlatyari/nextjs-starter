import { useRef } from "react";
import { intro } from "./data";
import { motion, useTransform, useWillChange, useScroll } from "framer-motion";
import TextReveal from "../../motion/TextReveal";
import StaggerText from "react-stagger-text";

export default function Intro() {
  const ref = useRef(null);
  const willChange = useWillChange();

  const { scrollY } = useScroll({ target: ref });
  const x = useTransform(scrollY, [0, 800], [-15, 15]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.7]);

  return (
    <motion.div
      layout
      style={{
        padding: "0.5em",
        display: "flex",
        alignItems: "end",
        justifyContent: "space-between",
        willChange,
        maxWidth: "850px",
        margin: "auto",
        height: "90vh",
      }}
      ref={ref}
    >
      <motion.div
        style={{
          backgroundImage: `url(${intro.image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionX: "right",
          height: "50vh",
          width: "45%",
          minWidth: "250px",
          right: "0",
          top: "0",
          position: "absolute",
          scale,
        }}
      />
      <motion.div
        layout
        style={{
          width: "500px",
          padding: "10px",
          willChange,
          x,
        }}
      >
        <h1>
          <StaggerText
            staggerType="letter"
            staggerEasing="cubic-bezier(0.4, 0, 0.2, 1)"
            staggerDuration={1}
            startDelay={0.5}
          >
            About
          </StaggerText>
        </h1>
        <p>
          <TextReveal text={intro.text} />
        </p>
      </motion.div>
    </motion.div>
  );
}
