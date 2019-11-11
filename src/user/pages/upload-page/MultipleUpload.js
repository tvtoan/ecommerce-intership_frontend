import React, {useState, useEffect} from 'react';

function MultipleUpload() {
  const [selectedFiles, setSelectedFiles] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFiles) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFiles);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFiles]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFiles(e.target.files);
  };

  return (
    <div>
      <form>
      <input 
        ref="file" 
        type="file"
        multiple="true"
        onChange={this._onChange}/>
    </form>

    {/* Display all selected images. */}        
    {selectedFiles && [...selectedFiles].map((file)=>(
      <img src={URL.createObjectURL(file)} />
    ))}
    </div>
  );
}

export default MultipleUpload;
