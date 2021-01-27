import { mapStateToLayoutProps, rankWith, uiTypeIs } from "@jsonforms/core";
import { MaterialLayoutRenderer } from "@jsonforms/material-renderers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{uischema.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLayoutRenderer {...layoutProps} />
        </AccordionDetails>
      </Accordion>
    </Hidden>
  );
};

export default connect(mapStateToLayoutProps)(MyGroupRenderer);
