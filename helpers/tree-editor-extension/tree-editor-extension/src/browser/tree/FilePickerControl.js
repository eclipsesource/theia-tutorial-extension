'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ImagePickerControl = exports.FilePickerControl = exports.filePickerControlTester = exports.htmlTester = exports.imageTester = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const React = require('react');
const react_1 = require('@jsonforms/react');
const FilePicker_1 = require('./FilePicker');
const core_1 = require('@jsonforms/core');
exports.imageTester = core_1.rankWith(
  1000, //increase rank as needed
  core_1.scopeEndsWith('src')
);
exports.htmlTester = core_1.rankWith(
  1000, //increase rank as needed
  core_1.scopeEndsWith('html')
);
exports.filePickerControlTester = core_1.rankWith(
  1000, //increase rank as needed
  core_1.scopeEndsWith('openFile')
);
exports.FilePickerControl = react_1.withJsonFormsControlProps(
  ({ data, handleChange, path }) => (
    <FilePicker_1.FilePicker
      value={data}
      updateValue={(newValue) => handleChange(path, newValue)}
      inputAcceptType='.ts,.js'
      label='Upload Code (.js or .ts)'
    />
  )
);
exports.ImagePickerControl = react_1.withJsonFormsControlProps(
  ({ data, handleChange, path }) => (
    <FilePicker_1.FilePicker
      value={data}
      updateValue={(newValue) =>
        handleChange(path, '.tutorial/assets/' + newValue)
      }
      inputAcceptType='image/*'
      label='Upload Image File'
    />
  )
);
//# sourceMappingURL=FilePickerControl.js.map
