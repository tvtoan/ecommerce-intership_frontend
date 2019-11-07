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

export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFiles: props.files || []
    };
  }

  setAddedFiles = files => {
    this.setState({ addedFiles: files });
  };

  handleListFile = files => {
    // convert FileList to File array
    let convertedFiles = files;
    if (files instanceof FileList) {
      convertedFiles = Array.from(files);
    }
    let listFiles = [];
    for (let [i, file] of convertedFiles.entries()) {
      let fileObj = { location: this.state.addedFiles.length + i, file: file };
      listFiles.push(fileObj);
    }
    return listFiles;
  };

  handleFileDrop = (item, monitor) => {
    if (monitor) {
      let dragFiles = [];
      if (this.props.multiple) {
        dragFiles = monitor.getItem().files;
      } else {
        dragFiles = [monitor.getItem().files[0]];
      }
      const listFiles = this.handleListFile(dragFiles);
      this.setAddedFiles([...this.state.addedFiles, ...listFiles]);
      if (this.props.onChangeFiles) {
        this.props.onChangeFiles([...this.state.addedFiles, ...listFiles]);
      }
    }
  };

  handleAddFile = files => {
    const listFiles = this.handleListFile(files);
    this.setAddedFiles([...this.state.addedFiles, ...listFiles]);
    if (this.props.onChangeFiles) {
      this.props.onChangeFiles([...this.state.addedFiles, ...listFiles]);
    }
  };

  // Reset files upload to reset form
  handleResetUpload = () => {
    this.setAddedFiles([]);
  };

  render() {
    const store = {
      files: [this.state.addedFiles, this.setAddedFiles],
      handleAddFile: this.handleAddFile
    };
    return (
      <FileUploadContext.Provider value={store}>
        {this.props.isDrag ? (
          <DndProvider backend={HTML5Backend}>
            <TargetUpload onDrop={this.handleFileDrop}>
              <ImageUpload />
            </TargetUpload>
          </DndProvider>
        ) : (
          <ImageUpload />
        )}
      </FileUploadContext.Provider>
    );
  }
}

// export default function FileUpload({ files, onChangeFiles, ...restProps }) {
//   const [addedFiles, setAddedFiles] = useState(files || []);

//   const handleListFile = useCallback(files => {
//     // convert FileList to File array
//     let convertedFiles = files;
//     if (files instanceof FileList) {
//       convertedFiles = Array.from(files);
//     }
//     let listFiles = [];
//     for (let [i, file] of convertedFiles.entries()) {
//       let fileObj = { location: addedFiles.length + i, file: file };
//       listFiles.push(fileObj);
//     }
//     return listFiles;
//   });

//   const handleFileDrop = useCallback(
//     (item, monitor) => {
//       if (monitor) {
//         let dragFiles = [];
//         if (restProps.multiple) {
//           dragFiles = monitor.getItem().files;
//         } else {
//           dragFiles = [monitor.getItem().files[0]];
//         }
//         const listFiles = handleListFile(dragFiles);
//         setAddedFiles(oldLists => [...oldLists, ...listFiles]);
//         if (onChangeFiles) {
//           onChangeFiles([...addedFiles, ...listFiles]);
//         }
//       }
//     },
//     [addedFiles, onChangeFiles, handleListFile, restProps.multiple]
//   );

//   const handleAddFile = files => {
//     const listFiles = handleListFile(files);
//     setAddedFiles(oldArray => [...oldArray, ...listFiles]);
//     if (onChangeFiles) {
//       onChangeFiles([...addedFiles, ...listFiles]);
//     }
//   };

//   // Reset files upload to reset form
//   const handleResetUpload = () => {
//     setAddedFiles([]);
//   };

//   const store = {
//     files: [addedFiles, setAddedFiles],
//     handleAddFile
//   };

//   useEffect(() => {
//     console.log("Files:", addedFiles);
//   }, [addedFiles]);

//   return (
//     <FileUploadContext.Provider value={store}>
//       {restProps.isDrag ? (
//         <DndProvider backend={HTML5Backend}>
//           <TargetUpload onDrop={handleFileDrop}>
//             <ImageUpload />
//           </TargetUpload>
//         </DndProvider>
//       ) : (
//         <ImageUpload />
//       )}
//     </FileUploadContext.Provider>
//   );
// }

FileUpload.propsTypes = {
  isDrag: PropTypes.bool,
  files: PropTypes.array,
  multiple: PropTypes.bool,
  maxUpload: PropTypes.number,
  filterType: PropTypes.string,
  // function
  onChangeFiles: PropTypes.func,
  resetFiles: PropTypes.func
};

FileUpload.defaultProps = {
  isDrag: true,
  multiple: false,
  // function
  onChangeFiles: () => {},
  resetFiles: () => {}
};
