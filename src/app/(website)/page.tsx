import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/global/3d-card/page";
import { HeroParallax } from "@/components/global/connect-parallax/page";
import { ContainerScroll } from "@/components/global/container-scroll/page";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards/page";
import { LampComponent } from "@/components/global/lamp-component/page";
import Navbar from "@/components/global/navbar/page";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import { CheckIcon } from "lucide-react";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main className="flex items-center justify-center flex-col overflow-x-hidden">
      <Navbar />
      <section className="min-h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-8 md:mt-[-50px] space-y-8">
          {/* Added `mt-8` */}
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col text-center">
                <Button
                  size="lg"
                  className="p-8 mb-8 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] group flex items-center justify-center gap-4 transition-all duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7a7a7a] to-[#3352CC] font-sans group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#3352CC] group-hover:to-[#1C2D70] transition-all">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-[#7a7a7a] to-[#3352CC] font-bold">
                  Transform Your Instagram Engagement with Slide
                </h1>
              </div>
            }
          />
        </div>
      </section>

      {/* Infinite Moving Cards Section */}
      <InfiniteMovingCards
        className="md:mt-48 mt-20"
        items={clients}
        direction="right"
        speed="slow"
      />

      {/* Hero Parallax Section */}
      <section id="features" className="relative">
        <HeroParallax products={products} />
      </section>

      {/* Pricing Section */}
      <section className="relative">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {/* Free Plan */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative mt-36  group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Free Plan
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Perfect for getting started
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Boost engagement with target responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Automate comment replies to enhance audience interaction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Turn followers into customers with targeted messaging
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Smart AI Plan */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 mt-36 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Smart AI Plan
                <h2 className="text-6xl">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Advanced features for power users
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    All features from Free Plan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    AI-powered response generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Advanced analytics and insights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Priority customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Custom branding options
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Upgrade Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
};

export default Home;
