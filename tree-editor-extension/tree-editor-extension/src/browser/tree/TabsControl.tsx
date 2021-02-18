import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { TabsComp } from "./Tabs";
import { rankWith, scopeEndsWith } from "@jsonforms/core";

interface RatingControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
}

export const tabsControlTester = rankWith(
  1000, //increase rank as needed
  scopeEndsWith("tabs")
);

const TabsControl = ({ data, handleChange, path }: RatingControlProps) => {
  console.log("data: ", data);

  return (
    <TabsComp
      val={data}
      updateValue={(ev: any) => handleChange(path, Number(ev.value))}
    />
  );
};

export default withJsonFormsControlProps(TabsControl);
