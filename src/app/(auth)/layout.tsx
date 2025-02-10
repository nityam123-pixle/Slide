import React from 'react';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative h-screen flex justify-center items-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/Slide-Project.jpg" // Add your image URL here
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 blur-xl opacity-50"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;