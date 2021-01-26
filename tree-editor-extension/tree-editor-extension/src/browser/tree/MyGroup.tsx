import { mapStateToLayoutProps, rankWith, uiTypeIs } from "@jsonforms/core";
import { MaterialLayoutRenderer } from "@jsonforms/material-renderers";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Hidden,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import { connect } from "react-redux";

export const myGroupTester = rankWith(1000, uiTypeIs("Group"));

const MyGroupRenderer = (props: any) => {
  const { uischema, schema, path, visible, renderers } = props;

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    direction: "column",
    visible: visible,
    uischema: uischema,
    renderers: renderers,
  };
  return (
    <Hidden xsUp={!visible}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{uischema.label}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MaterialLayoutRenderer {...layoutProps} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Hidden>
  );
};

export default connect(mapStateToLayoutProps)(MyGroupRenderer);
