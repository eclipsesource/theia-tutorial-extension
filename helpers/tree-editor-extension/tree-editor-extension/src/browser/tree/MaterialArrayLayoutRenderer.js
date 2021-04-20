'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.materialArrayLayoutTester = exports.MaterialArrayLayoutRenderer = void 0;
/*
  The MIT License
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
// @ts-nocheck
const react_1 = require('react');
const React = require('React');
const core_1 = require('@jsonforms/core');
const core_2 = require('@material-ui/core');
const MaterialArrayLayout_1 = require('./MaterialArrayLayout');
const react_2 = require('@jsonforms/react');
const MaterialArrayLayoutRenderer = ({
  visible,
  enabled,
  id,
  uischema,
  schema,
  label,
  rootSchema,
  renderers,
  cells,
  data,
  path,
  errors,
  addItem,
}) => {
  const addItemCb = react_1.useCallback((p, value) => addItem(p, value), [
    addItem,
  ]);
  return (
    <core_2.Hidden xsUp={!visible}>
      <MaterialArrayLayout_1.MaterialArrayLayout
        label={label}
        uischema={uischema}
        schema={schema}
        id={id}
        rootSchema={rootSchema}
        errors={errors}
        enabled={enabled}
        visible={visible}
        data={data}
        path={path}
        addItem={addItemCb}
        renderers={renderers}
        cells={cells}
      />
    </core_2.Hidden>
  );
};
exports.MaterialArrayLayoutRenderer = MaterialArrayLayoutRenderer;
exports.materialArrayLayoutTester = core_1.rankWith(
  10,
  core_1.isObjectArrayWithNesting
);
exports.default = react_2.withJsonFormsArrayLayoutProps(
  exports.MaterialArrayLayoutRenderer
);
//# sourceMappingURL=MaterialArrayLayoutRenderer.js.map
