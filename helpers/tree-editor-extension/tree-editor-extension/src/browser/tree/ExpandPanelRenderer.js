'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.withJsonFormsExpandPanelProps = exports.withContextToExpandPanelProps = exports.ctxDispatchToExpandPanelProps = void 0;
// @ts-nocheck
const merge_1 = require('lodash/merge');
const react_1 = require('react');
const React = require('React');
const react_2 = require('@jsonforms/react');
const core_1 = require('@jsonforms/core');
const ExpansionPanelDetails_1 = require('@material-ui/core/ExpansionPanelDetails');
const IconButton_1 = require('@material-ui/core/IconButton');
const ExpansionPanel_1 = require('@material-ui/core/ExpansionPanel');
const find_1 = require('lodash/find');
const ExpansionPanelSummary_1 = require('@material-ui/core/ExpansionPanelSummary');
const core_2 = require('@material-ui/core');
const ExpandMore_1 = require('@material-ui/icons/ExpandMore');
const Avatar_1 = require('@material-ui/core/Avatar');
const Delete_1 = require('@material-ui/icons/Delete');
const ArrowUpward_1 = require('@material-ui/icons/ArrowUpward');
const ArrowDownward_1 = require('@material-ui/icons/ArrowDownward');
const v1_1 = require('uuid/v1');
const iconStyle = { float: 'right' };
const ExpandPanelRenderer = (props) => {
  const [labelHtmlId] = react_1.useState(`id${v1_1.default()}`);
  const {
    childLabel,
    childPath,
    index,
    expanded,
    moveDown,
    moveUp,
    enableMoveDown,
    enableMoveUp,
    handleExpansion,
    removeItems,
    path,
    rootSchema,
    schema,
    uischema,
    uischemas,
    renderers,
    cells,
    config,
  } = props;
  const foundUISchema = core_1.findUISchema(
    uischemas,
    schema,
    uischema.scope,
    path,
    undefined,
    uischema,
    rootSchema
  );
  const appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
  return (
    <ExpansionPanel_1.default
      aria-labelledby={labelHtmlId}
      expanded={expanded}
      onChange={handleExpansion(childPath)}
    >
      <ExpansionPanelSummary_1.default expandIcon={<ExpandMore_1.default />}>
        <core_2.Grid container alignItems={'center'}>
          <core_2.Grid item xs={7} md={9}>
            <core_2.Grid container alignItems={'center'}>
              <core_2.Grid item xs={2} md={1}>
                <Avatar_1.default aria-label='Index'>
                  {index + 1}
                </Avatar_1.default>
              </core_2.Grid>
              <core_2.Grid item xs={10} md={11}>
                <span id={labelHtmlId}>{childLabel}</span>
              </core_2.Grid>
            </core_2.Grid>
          </core_2.Grid>
          <core_2.Grid item xs={5} md={3}>
            <core_2.Grid container justify={'flex-end'}>
              <core_2.Grid item>
                <core_2.Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'
                >
                  {appliedUiSchemaOptions.showSortButtons ? (
                    <react_1.Fragment>
                      <core_2.Grid item>
                        <IconButton_1.default
                          onClick={moveUp(path, index)}
                          style={iconStyle}
                          disabled={!enableMoveUp}
                          aria-label={`Move up`}
                        >
                          <ArrowUpward_1.default />
                        </IconButton_1.default>
                      </core_2.Grid>
                      <core_2.Grid item>
                        <IconButton_1.default
                          onClick={moveDown(path, index)}
                          style={iconStyle}
                          disabled={!enableMoveDown}
                          aria-label={`Move down`}
                        >
                          <ArrowDownward_1.default />
                        </IconButton_1.default>
                      </core_2.Grid>
                    </react_1.Fragment>
                  ) : (
                    ''
                  )}
                  <core_2.Grid item>
                    <IconButton_1.default
                      onClick={removeItems(path, [index])}
                      style={iconStyle}
                      aria-label={`Delete`}
                    >
                      <Delete_1.default />
                    </IconButton_1.default>
                  </core_2.Grid>
                </core_2.Grid>
              </core_2.Grid>
            </core_2.Grid>
          </core_2.Grid>
        </core_2.Grid>
      </ExpansionPanelSummary_1.default>
      <ExpansionPanelDetails_1.default>
        <react_2.ResolvedJsonFormsDispatch
          schema={schema}
          uischema={foundUISchema}
          path={childPath}
          key={childPath}
          renderers={renderers}
          cells={cells}
        />
      </ExpansionPanelDetails_1.default>
    </ExpansionPanel_1.default>
  );
};
/**
 * Maps state to dispatch properties of an expand pandel control.
 *
 * @param dispatch the store's dispatch method
 * @returns {DispatchPropsOfArrayControl} dispatch props of an expand panel control
 */
const ctxDispatchToExpandPanelProps = (dispatch) => ({
  removeItems: (path, toDelete) => (event) => {
    event.stopPropagation();
    dispatch(
      core_1.update(path, (array) => {
        toDelete
          .sort()
          .reverse()
          .forEach((s) => array.splice(s, 1));
        return array;
      })
    );
  },
  moveUp: (path, toMove) => (event) => {
    event.stopPropagation();
    dispatch(
      core_1.update(path, (array) => {
        core_1.moveUp(array, toMove);
        return array;
      })
    );
  },
  moveDown: (path, toMove) => (event) => {
    event.stopPropagation();
    dispatch(
      core_1.update(path, (array) => {
        core_1.moveDown(array, toMove);
        return array;
      })
    );
  },
});
exports.ctxDispatchToExpandPanelProps = ctxDispatchToExpandPanelProps;
const getFirstPrimitiveProp = (schema) => {
  if (schema.properties) {
    return find_1.default(Object.keys(schema.properties), (propName) => {
      const prop = schema.properties[propName];
      return (
        prop.type === 'string' ||
        prop.type === 'number' ||
        prop.type === 'integer'
      );
    });
  }
  return undefined;
};
/**
 * Map state to control props.
 * @param state the JSON Forms state
 * @param ownProps any own props
 * @returns {StatePropsOfControl} state props for a control
 */
const withContextToExpandPanelProps = (Component) => ({ ctx, props }) => {
  const dispatchProps = exports.ctxDispatchToExpandPanelProps(ctx.dispatch);
  const { childLabelProp, schema, path, index, uischemas } = props;
  const childPath = core_1.composePaths(path, `${index}`);
  const childData = core_1.Resolve.data(ctx.core.data, childPath);
  let childLabel = '';
  if (childData.html) {
    childLabel = 'Html';
  }
  if (childData.image) {
    childLabel = 'Image';
  }
  if (childData.hint) {
    childLabel = 'Hint';
  }
  if (childData.button) {
    childLabel = 'Command Button';
  }
  return (
    <Component
      {...props}
      {...dispatchProps}
      childLabel={childLabel}
      childPath={childPath}
      uischemas={uischemas}
    />
  );
};
exports.withContextToExpandPanelProps = withContextToExpandPanelProps;
const withJsonFormsExpandPanelProps = (Component) =>
  react_2.withJsonFormsContext(
    exports.withContextToExpandPanelProps(
      React.memo(Component, (prevProps, nextProps) =>
        react_2.areEqual(prevProps, nextProps)
      )
    )
  );
exports.withJsonFormsExpandPanelProps = withJsonFormsExpandPanelProps;
exports.default = exports.withJsonFormsExpandPanelProps(ExpandPanelRenderer);
//# sourceMappingURL=ExpandPanelRenderer.js.map
