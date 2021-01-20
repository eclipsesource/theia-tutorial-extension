/********************************************************************************
 * Copyright (c) 2020-2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
import {Button} from '@material-ui/core';
import {SnackbarProvider} from 'notistack';
import * as React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import TutorialOverview from './components/TutorialOverview';
import {VSCodeAPI} from './VSCodeAPI';
import {Tutorial} from '../../schema/tutorial';

export default function App() {

  const [tutorials, setTutorials] = useState<Array<Tutorial>>([]);
  const [selectedTutorial, selectTutorial] = useState(-1);
  useEffect(() => {
    return VSCodeAPI.onMessage((message) => {

      switch (message.data.command) {
        case 'setTutorials':
          setTutorials(message.data.tutorials);
          break;
      }
    });
  });

  const createTutorialList = () => {
    return tutorials.map(tutorial => {
      return <div className="Box-margin">
        <Button onClick={() => selectTutorial(tutorials.indexOf(tutorial))} variant="contained" color="primary">
          {
            tutorial.title}
        </Button>
      </div>;
    });
  }

  return (
    <div className="App">
      {(selectedTutorial < 0)
        ? <p><header className="App-header">
          <h1 className="App-title">Overview</h1>
        </header>
          <p className="App-intro">
            Current Tutorials in the workspace:
          {createTutorialList()}
          </p></p>
        :
        <SnackbarProvider maxSnack={3}>
          <TutorialOverview tutorial={tutorials[selectedTutorial]} />
        </SnackbarProvider>
      }
    </div>



  );
}