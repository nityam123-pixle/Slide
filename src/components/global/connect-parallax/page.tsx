"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Create a MotionValue for mobile compatibility
  const zeroMotionValue = useMotionValue(0);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX: isMobile ? zeroMotionValue : rotateX,
          rotateZ: isMobile ? zeroMotionValue : rotateZ,
          translateY: isMobile ? zeroMotionValue : translateY,
          opacity: isMobile ? 1 : opacity,
        }}
        className="space-y-12 md:space-y-20"
      >
        {/* First Row */}
        <motion.div className="grid grid-cols-1 md:flex md:flex-row-reverse md:space-x-reverse md:space-x-20 mb-12 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={isMobile ? zeroMotionValue : translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="grid grid-cols-1 md:flex md:space-x-20 mb-12 md:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={isMobile ? zeroMotionValue : translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div className="grid grid-cols-1 md:flex md:flex-row-reverse md:space-x-reverse md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={isMobile ? zeroMotionValue : translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full">
      <h1 className="text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#7a7a7a] to-[#3352CC] font-bold text-center md:text-left">
        The Ultimate <br className="hidden md:block" /> Instagram <br className="hidden md:block" /> Automation Platform
      </h1>
      <p className="max-w-xl md:max-w-2xl text-sm md:text-xl mt-4 md:mt-8 mx-auto md:mx-0 text-neutral-800 dark:text-neutral-200">
        Slide revolutionizes how you connect with your audience on Instagram.
        Automate responses and boost engagement effortlessly, turning
        interactions into valuable business opportunities.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-full md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center md:object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-2 left-2 md:bottom-4 md:left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm md:text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};