import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
        new SplitType(scope.current, {
            types: "lines,words", // Correct syntax without spaces
            tagName: "span",
          });
    }
  }, [scope]);

  const entrance = () => {
    if (scope.current) {
      animate(
        scope.current.querySelectorAll(".word"),
        { transform: ["translateY(30px)", "translateY(0)"], opacity: [0, 1] },
        { duration: 0.5, delay: stagger(0.2) }
      );
    }
  };

  return { scope, entrance };
};

export default useTextRevealAnimation;