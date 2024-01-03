import React from 'react';
import {Oval} from 'react-loader-spinner';


const LoaderOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent white background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(1px)', // adjust the blur effect
        zIndex: 9999, // ensure it's on top of other elements
      }}
    >
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderOverlay;
