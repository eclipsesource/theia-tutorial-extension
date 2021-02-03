import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FilePicker } from "./FilePicker";
import { rankWith, scopeEndsWith } from "@jsonforms/core";

interface FilePickerControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

export const imageTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith("src")
);

export const htmlTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith("html")
);

export const FilePickerControl = withJsonFormsControlProps(
  ({ data, handleChange, path }: FilePickerControlProps) => (
    <FilePicker
      value={data}
      updateValue={(newValue: string) => handleChange(path, newValue)}
      inputAcceptType=".ts,.js"
      label="Upload Code"
    />
  )
);

export const ImagePickerControl = withJsonFormsControlProps(
  ({ data, handleChange, path }: FilePickerControlProps) => (
    <FilePicker
      value={data}
      updateValue={(newValue: string) => handleChange(path, newValue)}
      inputAcceptType="image/*"
      label="Upload Image File"
    />
  )
);

export const HtmlPickerControl = withJsonFormsControlProps(
  ({ data, handleChange, path }: FilePickerControlProps) => (
    <FilePicker
      value={data}
      updateValue={(newValue: string) => handleChange(path, newValue)}
      inputAcceptType=".html"
      label="Upload Html File"
    />
  )
);
