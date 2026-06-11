import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({ decimals = 0, suffix = "", value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => `${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!isInView) return undefined;

    const controls = animate(count, value, {
      duration: 1.6,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, isInView, value]);

  return <motion.strong ref={ref}>{displayValue}</motion.strong>;
}
