import React from "react";
import Rightcarcontent from "./Rightcarcontent";

const Rightcard = (dets) => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        src={dets.img}
        className="object-cover h-full w-full "
      ></img>
     <Rightcarcontent id={dets.id} tag={dets.tag} />
    </div>
  );
};

export default Rightcard;
