import React from "react";

const FileUploadContext = React.createContext();

// const FileUploadProvider = (props) => {
//   const [addedFiles, setAddedFiles] = useState(props.files || []);
//   const store = {
//     files: [addedFiles, setAddedFiles],
//   }
//   return (
//     <FileUploadContext.Provider value={store}>
//       {props.children}
//     </FileUploadContext.Provider>
//   );
// }

export { FileUploadContext };
