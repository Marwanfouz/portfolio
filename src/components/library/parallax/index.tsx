// credit to: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxProps = {
  children: React.ReactElement;
  offset?: number;
  customClass?: string;
};

const Parallax: React.FC<ParallaxProps> = ({
  children,
  offset = 50,
  customClass,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  // start animation when in view
  const initial = elementTop - clientHeight;

  // end animation when past offset
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        //@ts-ignore
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div className={customClass} ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
