import React from "react";
import Neo from "../assets/neo.jpg";

function Content() {
  return (
    <React.Fragment>
      <img src={Neo} />
      <div className="container-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
        minus molestiae vel beatae natus eveniet ratione temporibus aperiam
        harum alias officiis assumenda officia quibusdam deleniti eos cupiditate
        dolore doloribus!
      </div>
    </React.Fragment>
  );
}

export default Content;
