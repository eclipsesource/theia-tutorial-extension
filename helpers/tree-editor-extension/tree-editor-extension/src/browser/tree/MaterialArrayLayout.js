'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MaterialArrayLayout = void 0;
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
const range_1 = require('lodash/range');
const React = require('React');
const core_1 = require('@jsonforms/core');
const map_1 = require('lodash/map');
const ArrayToolbar_1 = require('@jsonforms/material-renderers/lib/layouts/ArrayToolbar');
const ExpandPanelRenderer_1 = require('./ExpandPanelRenderer');
const merge_1 = require('lodash/merge');
class MaterialArrayLayout extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      expanded: null,
    };
    this.innerCreateDefaultValue = () =>
      core_1.createDefaultValue(this.props.schema);
    this.handleChange = (panel) => (_event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      });
    };
    this.isExpanded = (index) =>
      this.state.expanded === core_1.composePaths(this.props.path, `${index}`);
  }
  render() {
    const {
      data,
      path,
      schema,
      uischema,
      errors,
      addItem,
      renderers,
      cells,
      label,
      required,
      rootSchema,
      config,
    } = this.props;
    const appliedUiSchemaOptions = merge_1.default(
      {},
      config,
      this.props.uischema.options
    );
    return (
      <div>
        <ArrayToolbar_1.ArrayLayoutToolbar
          label={core_1.computeLabel(
            core_1.isPlainLabel(label) ? label : label.default,
            required,
            appliedUiSchemaOptions.hideRequiredAsterisk
          )}
          errors={errors}
          path={path}
          addItem={addItem}
          createDefault={this.innerCreateDefaultValue}
        />
        <div>
          {data > 0 ? (
            map_1.default(range_1.default(data), (index) => {
              return (
                <ExpandPanelRenderer_1.default
                  index={index}
                  expanded={this.isExpanded(index)}
                  schema={schema}
                  path={path}
                  handleExpansion={this.handleChange}
                  uischema={uischema}
                  renderers={renderers}
                  cells={cells}
                  key={index}
                  rootSchema={rootSchema}
                  enableMoveUp={index != 0}
                  enableMoveDown={index < data - 1}
                  config={config}
                  childLabelProp={appliedUiSchemaOptions.elementLabelProp}
                />
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    );
  }
}
exports.MaterialArrayLayout = MaterialArrayLayout;
//# sourceMappingURL=MaterialArrayLayout.js.map
