import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FilePicker } from "./FilePicker";

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

