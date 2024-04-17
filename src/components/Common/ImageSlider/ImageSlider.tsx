"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % images.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1.5, zIndex: 5 },
    right: { x: "90%", scale: 1, zIndex: 1, opacity: 0.3 },
    left: { x: "-90%", scale: 1, zIndex: 2, opacity: 0.3 },
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <button className="absolute left-12 z-30" onClick={handleBack}>
        <Image
          className="rotate-180"
          src="/assets/static/arrow.svg"
          alt="icon"
          width={25}
          height={25}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </button>

      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        />
      ))}

      <button className="absolute right-12 z-10" onClick={handleNext}>
        <Image
          src="/assets/static/arrow.svg"
          alt="icon"
          width={25}
          height={25}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </button>
    </div>
  );
}
