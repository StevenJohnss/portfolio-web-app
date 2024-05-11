import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }) => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={icon} />
      </div>
    </Suspense>
  );
};

export default BallCanvas;
