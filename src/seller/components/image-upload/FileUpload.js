import React, { useState, useCallback } from "react";
// 3rd packages
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
// components
import FileList from "./FileList";
import TargetUpload from "./TargetUpload";
import ImageUpload from "./ImageUpload";
// styles
import "./styles.scss";

export default function FileUpload(props) {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const handleFileDrop = useCallback(
    (item, monitor) => {
      if (monitor) {
        const files = monitor.getItem().files;
        console.log("files:", files);
        console.log("droppedFiles1:", droppedFiles);
        setDroppedFiles(oldArray => [...oldArray, ...files]);
      }
    },
    [droppedFiles]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <TargetUpload onDrop={handleFileDrop}>
        {/* <FileList files={droppedFiles} /> */}
        <ImageUpload droppedFiles={droppedFiles}/>
      </TargetUpload>
    </DndProvider>
  );
}
