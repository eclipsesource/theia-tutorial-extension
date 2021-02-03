import * as React from "react";


interface FilePickerProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
}

export const FilePicker: React.FC<FilePickerProps> = ({ id, value, updateValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if(files){
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        getFileFromInput(file)
        .then((binary: any) => {
            manageUploadedFile(binary, file);
        }).catch(function (reason: any) {
            console.log(`Error during upload ${reason}`);
            event.target.value = ''; // to allow upload of same file if error occurs
        });
        console.log(file.name)
        updateValue(file.name)
      }
    }
  } 
  
  // function to read file as binary and return
  const getFileFromInput = (file: File): Promise<any> => {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = function () { resolve(reader.result); };
        reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
    });
  }
  
  const manageUploadedFile = (binary: String, file: File) => {
    // do what you need with your file (fetch POST, ect ....)
    console.log(`The file size is ${binary.length}`);
    console.log(`The file name is ${file.name}`);


  
  }

  return (
    <div id='#/properties/openFile' className='openFile'>
      <p>Upload Files:</p>
      {/* <input type="file" onChange={handleChange}/> */}
      <input accept="image/*,.ts,.doc,.docx,.xls,.xlsx" id="file" multiple={true} type="file"
        onChange={handleFileChange} />
    </div>
    
  );
};

