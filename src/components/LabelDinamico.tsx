import { useRef } from "react";
import { useInView } from "framer-motion";
import "../App.css";

export default function LabelDinamico({ 
    children, 
    backgroundColor = "#0092CE", 
    translateX = -200,
    delay = "0s"  }) {
  const width = window.innerWidth;  
  const height = window.innerHeight;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="label-dinamico"
        style={{
            backgroundColor: backgroundColor,
            width: width * 0.5,
            display: "inline-block",
            transform: isInView ? "translateX(0)" : `translateX(${translateX}px)`,
            opacity: isInView ? 1 : 0,
            transition: `transform 1s ${delay}, opacitys 1s ${delay}`,
            overflow: 'hidden'
        }}
      >
        {children}
    </div>
  );
}
