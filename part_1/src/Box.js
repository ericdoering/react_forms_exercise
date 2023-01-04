import React from "react";

function Box({
  id, 
  handleRemove, 
  backgroundcolor = "red",
  height = 100, 
  width = 100, 
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div 
        style={{
        backgroundcolor,
        height: `${height}px`,
        width: `${width}px`
      }}
      />
        <button onClick={remove}>Delete Box</button>
    </div>
  );
}

export default Box;