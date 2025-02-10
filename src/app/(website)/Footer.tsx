"use client";
import Button from "@/components/global/FooterButton";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimations";
import { useInView } from "motion/react";
import { FC, useEffect } from "react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Project",
  },
  {
    href: "#",
    label: "Pricing",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const { scope, entrance } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entrance();
    }
  }, [inView, entrance]);
  return (
    <footer className="text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] animate-pulse"></div>
            <span className="uppercase">
            Automate with Slide Like Never Before.
            </span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl  mt-8 font-extralight"
                ref={scope}
              >
                Enough Talk. Let’s Automate Engagement Smartly Together.
              </h2>
              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300  group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                Slide@gmail.com
              </Button>
            </div>
            <div>
              <nav className="flex flex-col md:items-end  gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Nityam Suchak &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
