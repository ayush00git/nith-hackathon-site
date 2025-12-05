import React from "react";

export default function SimpleCarousel() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex gap-6 animate-scroll whitespace-nowrap">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="carousel"
            className="w-80 h-64 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* Animation */}
      <style>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}