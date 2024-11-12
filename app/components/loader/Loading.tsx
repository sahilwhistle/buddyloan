import React from 'react';
const Loading = () => {
  // Array of dot sizes in ascending and descending order
  const dotSizes = [4, 6, 8, 10, 8, 6, 4];
  const totalDots = dotSizes.length;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col items-center justify-center z-10">
        <div className="flex items-center justify-center relative w-16 h-16 animate-spin duration-[400000ms] rounded-full">
          {/* Dotted Spinner */}
          {dotSizes.map((dotSize, index) => {
            const angle = (index / totalDots) * 360; // Angle for positioning each dot
            const positionStyle = {
              transform: `rotate(${angle}deg) translate(30px) rotate(-${angle}deg)`,
            };

            return (
              <div
                key={index}
                // style={positionStyle}
                className={`absolute bg-white rounded-full`}
                style={{
                  width: `${dotSize}px`,
                  height: `${dotSize}px`,
                  transform: `rotate(${angle}deg) translate(30px) rotate(-${angle}deg)`,
                }}
              ></div>
            );
          })}
        </div>
        <p className="mt-4 text-xl font-semibold text-white">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
