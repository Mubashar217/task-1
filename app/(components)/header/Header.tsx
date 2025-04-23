"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopImage = "/frontimg1.png";
  const mobileImage = "/mobile1.jpg";

  return (
    <header className="relative w-full h-80 md:h-[500px]">
      <Image
        src={isMobile ? mobileImage : desktopImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
    </header>
  );
}
