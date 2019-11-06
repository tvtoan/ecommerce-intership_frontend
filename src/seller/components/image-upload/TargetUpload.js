import React from "react";
// 3rd packages
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
// components
// styles
import "./styles.scss";

export default function ImageUpload(props) {
  const {onDrop} = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (item, monitor) => {
      if (onDrop) {
        onDrop(props, monitor)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  return (
    <div ref={drop}>
      {props.children}
      {isActive ? "Release to drop" : "Drag file here"}
    </div>
  );
}
