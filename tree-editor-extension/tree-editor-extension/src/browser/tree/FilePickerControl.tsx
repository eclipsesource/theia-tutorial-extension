/* eslint-disable @typescript-eslint/naming-convention */
import * as React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { FilePicker } from './FilePicker';
import { rankWith, scopeEndsWith, OwnPropsOfControl } from '@jsonforms/core';

interface FilePickerControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

export const imageTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith('src')
);

export const htmlTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith('html')
);

export const filePickerControlTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith('openFile')
);

export const FilePickerControl: React.ComponentType<OwnPropsOfControl> = withJsonFormsControlProps(
  ({ data, handleChange, path }: FilePickerControlProps) => (
    <FilePicker
      value={data}
      updateValue={(newValue: string) => handleChange(path, newValue)}
      inputAcceptType='.ts,.js'
      label='Upload Code (.js or .ts)'
    />
  )
);

export const ImagePickerControl: React.ComponentType<OwnPropsOfControl> = withJsonFormsControlProps(
  ({ data, handleChange, path }: FilePickerControlProps) => (
    <FilePicker
      value={data}
      updateValue={(newValue: string) =>
        handleChange(path, '.tutorial/assets/' + newValue)
      }
      inputAcceptType='image/*'
      label='Upload Image File'
    />
  )
);
