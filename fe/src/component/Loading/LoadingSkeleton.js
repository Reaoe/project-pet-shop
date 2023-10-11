import React from 'react';
import './LoadingSkeleton.css';
const LoadingSkeleton = ({ className = '' }) => {
  return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
