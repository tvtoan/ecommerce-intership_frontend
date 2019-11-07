import React, { useState, useCallback } from "react";
// 3rd packages
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PropTypes from "prop-types";
// context
import {FileUploadContext} from "./context/FileUploadContext";
// components
import TargetUpload from "./TargetUpload";
import ImageUpload from "./ImageUpload";
// styles
import "./styles.scss";

export default function FileUpload({ files, onChangeFiles, ...restProps }) {
  const [addedFiles, setAddedFiles] = useState(files || []);
  
  const handleFileDrop = useCallback(
    (item, monitor) => {
      if (monitor) {
        const listFiles = monitor.getItem().files;
        setAddedFiles(oldArray => [...oldArray, ...listFiles]);
        onChangeFiles([...addedFiles, ...listFiles]);
      }
    },
    [addedFiles, onChangeFiles]
  );

  const handleAddFile = files => {
    setAddedFiles(oldArray => [...oldArray, ...files]);
  };

  const store = {
    files: [addedFiles, setAddedFiles],
    handleAddFile,
  }

  return (
    <FileUploadContext.Provider value={store}>
      {restProps.isDrag ? (
        <DndProvider backend={HTML5Backend}>
          <TargetUpload onDrop={handleFileDrop}>
            <ImageUpload />
          </TargetUpload>
        </DndProvider>
      ) : (
        <ImageUpload />
      )}
    </FileUploadContext.Provider>
  );
}

FileUpload.propsTypes = {
  isDrag: PropTypes.bool,
  files: PropTypes.array,
  // function
  onChangeFiles: PropTypes.func
};

FileUpload.defaultProps = {
  isDrag: true,
  // function
  onChangeFiles: () => {}
};
