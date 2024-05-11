import React, { Suspense, lazy, useState, useEffect } from 'react';
const {BallCanvas} = lazy(() => import('./canvas'));

const Tech = () => {
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    const isPowerfulDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4;
    setLoad3D(isPowerfulDevice);
  }, []);

  return (
    <div>
      {load3D ? (
        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <BallCanvas />
        </Suspense>
      ) : (
        <div>3D Model not supported on this device.</div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
