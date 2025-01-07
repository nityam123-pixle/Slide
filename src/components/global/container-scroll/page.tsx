'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[50rem] sm:h-[80rem] flex items-center justify-center relative p-8 sm:p-20"
      ref={containerRef}
    >
      <div
        className="py-20 sm:py-40 w-full relative"
        style={{
          perspective: '800px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-2xl sm:max-w-5xl mx-auto text-center px-4 sm:px-0"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any
  scale: any
  translate: any
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-xl sm:max-w-5xl mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] w-full p-4 sm:p-6 bg-[#222222] rounded-[20px] sm:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full rounded-2xl gap-4 overflow-hidden p-2 sm:p-4 transition-all">
        <Image
          src="/Slide-Project.jpg"
          fill
          alt="bannerImage"
          className="object-contain border-4 sm:border-8 rounded-2xl"
        />
      </div>
    </motion.div>
  )
}