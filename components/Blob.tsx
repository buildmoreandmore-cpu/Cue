import React from 'react';
import { BlobProps } from '../types';

export const Blob: React.FC<BlobProps> = ({ color, className = '', delay = false }) => {
  const fill = color === 'coral' ? '#E07A5F' : '#81B29A';
  const animationClass = delay ? 'animate-float-delayed' : 'animate-float-slow';

  return (
    <div className={`${animationClass} ${className} blob-shape`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0px 10px 20px rgba(61, 64, 91, 0.1))' }}
      >
        {color === 'coral' ? (
           <path
            fill={fill}
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.2C59.6,42.9,48.3,51.4,36.4,58.3C24.5,65.2,12,70.5,-1.3,72.7C-14.6,74.9,-29.9,74,-42.9,67.6C-55.9,61.2,-66.6,49.3,-74.6,35.8C-82.6,22.3,-87.9,7.2,-85.6,-6.8C-83.3,-20.8,-73.4,-33.7,-61.9,-43.3C-50.4,-52.9,-37.3,-59.2,-24.1,-67.2C-10.9,-75.2,2.4,-84.9,15.6,-84.8C28.8,-84.7,41.9,-74.8,44.7,-76.4Z"
            transform="translate(100 100) scale(1.1)"
          />
        ) : (
          <path
            fill={fill}
            d="M39.6,-65.3C51.6,-57.4,62,-47.9,70.4,-36.4C78.8,-24.9,85.2,-11.4,83.1,1.1C81,13.6,70.4,25.1,60.1,34.8C49.8,44.5,39.8,52.4,28.8,58.7C17.8,65,5.8,69.7,-5.7,69.4C-17.2,69.1,-29.7,63.8,-41.2,56.1C-52.7,48.4,-63.2,38.3,-70.3,25.9C-77.4,13.5,-81.1,-1.2,-77.8,-14.8C-74.5,-28.4,-64.2,-40.9,-52.3,-48.9C-40.4,-56.9,-26.9,-60.4,-14.1,-62.1C-1.3,-63.8,11.5,-63.7,24.1,-63.6C36.7,-63.5,51.3,-63.4,39.6,-65.3Z"
            transform="translate(100 100) scale(1.1)"
          />
        )}
      </svg>
    </div>
  );
};