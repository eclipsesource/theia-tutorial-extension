import React from 'react';
import {Button} from '@material-ui/core';
import {VSCodeAPI} from '../../../VSCodeAPI';




interface autoImportState {
  info: string
};


export class AutomaticImport extends React.Component<any, autoImportState> {

  constructor(props: any) {
    super(props);
    console.log(this.props);
    console.log(this.props);

    //VSCodeAPI.postMessage({command: 'addImports', autoImportData: {imports: this.props.imports, path: this.props.path}})} variant="contained" color="primary">
    //{this.props}
  }
  render() {
    return (
      <div className="Box-margin">
        <Button onClick={() => VSCodeAPI.postMessage({command: 'addImports', autoImportData: {imports: this.props.data.imports, path: this.props.data.path}})} variant="contained" color="primary">
          {this.props.data.text}
        </Button>
      </div>
    );
  }
}