import React from "react";
// 3rd packages
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
// components
// styles
import "./styles.scss";

export default function ImageUpload(props) {
  const {onDrop} = props;
  const [, drop] = useDrop({
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
  return (
    <div ref={drop}>
      {props.children}
    </div>
  );
}
