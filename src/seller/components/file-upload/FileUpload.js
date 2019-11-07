import React, { useState, useCallback, useEffect } from "react";
// 3rd packages
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PropTypes from "prop-types";
// context
import { FileUploadContext } from "./context/FileUploadContext";
// components
import TargetUpload from "./TargetUpload";
import ImageUpload from "./ImageUpload";
// styles
import "./styles.scss";

export default function FileUpload({ files, onChangeFiles, ...restProps }) {
  const [addedFiles, setAddedFiles] = useState(files || []);

  const handleListFile = useCallback(files => {
    // convert FileList to File array
    let convertedFiles = Array.from(files);
    let listFiles = [];
    for (let [i, file] of convertedFiles.entries()) {
      let fileObj = { location: addedFiles.length + i, file: file };
      listFiles.push(fileObj);
    }
    return listFiles;
  });

  const handleFileDrop = useCallback(
    (item, monitor) => {
      if (monitor) {
        const dragFiles = monitor.getItem().files;
        const listFiles = handleListFile(dragFiles);
        setAddedFiles(oldLists => [...oldLists, ...listFiles]);
        if (onChangeFiles) {
          onChangeFiles([...addedFiles, ...listFiles]);
        }
      }
    },
    [addedFiles, onChangeFiles, handleListFile]
  );

  const handleAddFile = files => {
    const listFiles = handleListFile(files);
    setAddedFiles(oldArray => [...oldArray, ...listFiles]);
  };

  // Reset files upload to reset form
  const handleResetUpload = () => {
    setAddedFiles([]);
  };

  const store = {
    files: [addedFiles, setAddedFiles],
    handleAddFile
  };

  useEffect(() => {
    console.log("Files:", addedFiles);
  }, [addedFiles]);

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
  onChangeFiles: PropTypes.func,
  resetFiles: PropTypes.func
};

FileUpload.defaultProps = {
  isDrag: true,
  // function
  onChangeFiles: () => {},
  resetFiles: () => {}
};
