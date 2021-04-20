import * as React from 'react';

interface FilePickerProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  inputAcceptType: string;
  label: string;
}

export const FilePicker: React.FC<FilePickerProps> = ({
  id,
  value,
  updateValue,
  inputAcceptType,
  label,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        getFileFromInput(file)
          .then((binary: any) => {
            manageUploadedFile(binary, file);
          })
          .catch(function (reason: any) {
            console.log(`Error during upload ${reason}`);
            event.target.value = ''; // to allow upload of same file if error occurs
          });

        if (file) {
          let data = new FormData();
          data.append('file', file);
          console.log('data: ', data);
          // axios.post('/files', data)...
        }

        console.log('file', file);
        updateValue(file.name);
      }
    }
  };

  // function to read file as binary and return
  const getFileFromInput = (file: File): Promise<any> => {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.readAsBinaryString(file);
    });
  };

  const manageUploadedFile = (binary: String, file: File) => {
    console.log(`The file size is ${binary.length}`);
    console.log(`The file name is ${file.name}`);
  };

  return (
    <div id='#/properties/openFile' className='openFile'>
      <p>{label}</p>
      {/* <input type="file" onChange={handleChange}/> */}
      <input
        accept={inputAcceptType}
        id='file'
        multiple={true}
        type='file'
        onChange={handleFileChange}
      />
    </div>
  );
};
