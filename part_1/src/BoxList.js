import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

function BoxList(){
  const [boxes, setBoxes] = useState([]);
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  };
  const remove = id => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  const boxComponents = boxes.map(box => (
    <Box 
    key={box.id}
    id={box.id}
    BackgroundColor={box.backgroundcolor}
    Height={box.height}
    Width={box.width}
    handleRemove={remove}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}


export default BoxList;
