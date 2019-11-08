import React from "react";
// 3rd packages
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
// styles
import "./styles.scss";

export default function TargetUpload({onDrop, ...restProps}) {
  const [, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (item, monitor) => {
      if (onDrop) {
        onDrop(item, monitor)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  return (
    <div ref={drop}>
      {restProps.children}
    </div>
  );
}

TargetUpload.propsTypes = {
  // function
  onDrop: PropTypes.func,
}