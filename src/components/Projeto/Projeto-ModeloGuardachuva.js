import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.target.tagName === 'CANVAS') {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Spline scene="https://prod.spline.design/faDBrYbvWiuF2l0v/scene.splinecode"  style={{ height: '40vh' }} />
  );              
}