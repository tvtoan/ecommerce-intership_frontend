import React from "react";
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
      addedFiles: props.files || [],
      isTouched: false
    };
  }

  setAddedFiles = files => {
    this.setState({ addedFiles: files });
  };

  setIsTouched = touched => {
    this.setState({ isTouched: touched });
  };

  handleFilterFile = types => {
    return types.reduce((acc, cur, idx) => {
      // example: (\\.jpg|\\.jpeg|\\.png|\\.gif)
      if (idx === types.length - 1) {
        return acc
          .concat("\\.")
          .concat(cur)
          .concat(")");
      }
      return acc
        .concat("\\.")
        .concat(cur)
        .concat("|");
    }, "(");
  };

  handleListFile = files => {
    // convert FileList to File array
    let convertedFiles = files;
    if (files instanceof FileList) {
      convertedFiles = Array.from(files);
    }
    let listFiles = [];
    let limitFiles = 0;
    // check maxUpload
    if (this.props.maxUpload) {
      // get number files can drag/select
      let canUpload = this.props.maxUpload - this.state.addedFiles.length;
      limitFiles =
        convertedFiles.length > canUpload ? canUpload : convertedFiles.length;
    } else {
      limitFiles = convertedFiles.length;
    }
    for (let i = 0; i < limitFiles; i++) {
      let fileObj = {
        location: this.state.addedFiles.length + i,
        file: convertedFiles[i]
      };
      if (this.props.filterType) {
        let regexType = new RegExp(
          this.handleFilterFile(this.props.filterType),
          "i"
        );
        if (regexType.test(convertedFiles[i].name)) {
          listFiles.push(fileObj);
        }
      } else {
        listFiles.push(fileObj);
      }
    }
    return listFiles;
  };

  handleFileDrop = (item, monitor) => {
    if (item) {
      this.handleBlur();
    }
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
        // this.props.onChangeFiles([...this.state.addedFiles, ...listFiles]);
        this.props.onChangeFiles(listFiles);
      }
      // control change value formik
      if (this.props.onChangeFormik) {
        this.props.onChangeFormik(this.props.name, [
          ...this.state.addedFiles,
          ...listFiles
        ]);
      }
    }
  };

  handleAddFile = files => {
    this.handleBlur();
    const listFiles = this.handleListFile(files);
    this.setAddedFiles([...this.state.addedFiles, ...listFiles]);
    if (this.props.onChangeFiles) {
      // this.props.onChangeFiles([...this.state.addedFiles, ...listFiles]);
      this.props.onChangeFiles(listFiles);
    }
    // control change value formik
    if (this.props.onChangeFormik) {
      this.props.onChangeFormik(this.props.name, [
        ...this.state.addedFiles,
        ...listFiles
      ]);
    }
  };

  // Reset files upload to reset form
  handleResetUpload = () => {
    this.setAddedFiles([]);
  };

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.name, true);
    }
  };

  render() {
    const store = {
      files: [this.state.addedFiles, this.setAddedFiles],
      handleAddFile: this.handleAddFile,
      multiple: this.props.multiple,
      filterType: this.props.filterType,
      handleBlur: this.handleBlur,
      info: {
        note: this.props.note,
        validateMessage: this.props.validateMessage,
      },
      removeFile: this.props.onRemoveFile,
      maxUpload: this.props.maxUpload
    };
    return (
      <FileUploadContext.Provider value={store}>
        {this.props.isDrag ? (
          <DndProvider backend={HTML5Backend}>
            <TargetUpload onDrop={this.handleFileDrop}>
              <ImageUpload onTouched={this.handleBlur} />
            </TargetUpload>
          </DndProvider>
        ) : (
          <ImageUpload />
        )}
      </FileUploadContext.Provider>
    );
  }
}

FileUpload.propsTypes = {
  isDrag: PropTypes.bool,
  files: PropTypes.array,
  multiple: PropTypes.bool,
  maxUpload: PropTypes.number,
  filterType: PropTypes.array,
  note: PropTypes.string,
  validateMessage: PropTypes.string,
  // function
  onChangeFiles: PropTypes.func,
  onChangeFormik: PropTypes.func,
  onRemoveFile: PropTypes.func,
  resetFiles: PropTypes.func
};

FileUpload.defaultProps = {
  isDrag: true,
  multiple: false,
  // function
  onChangeFiles: () => {},
  onRemoveFiles: () => {},
  resetFile: () => {}
};
