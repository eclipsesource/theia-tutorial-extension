import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FilePicker } from "./FilePicker";
import { rankWith, scopeEndsWith } from '@jsonforms/core';


interface FilePickerControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

const FilePickerControl = ({ data, handleChange, path }: FilePickerControlProps) => (
  <FilePicker
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
  />
);

export default withJsonFormsControlProps(FilePickerControl);


export const filePickerControlTester = rankWith(
    31234123, //increase rank as needed
    scopeEndsWith('openFile')
);