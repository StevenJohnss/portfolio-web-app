import React, { Suspense, useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isPowerfulDevice =
      navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4;

    if (!prefersReducedMotion && isPowerfulDevice) {
      setLoad3D(true);
    }
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Suspense fallback={<div>Loading 3D Content...</div>}>
            {load3D && <BallCanvas icon={technology.icon} />}
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
