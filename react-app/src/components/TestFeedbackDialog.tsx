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
import {
  createStyles,
  makeStyles,
  IconButton,
  Theme,
  Typography,
  Grid,
} from '@material-ui/core';
import React from 'react';
import { Test } from './Test';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { vsTheme } from '../VsTheme';
import CompareIcon from '@material-ui/icons/Compare';
import { VSCodeAPI } from '../VSCodeAPI';
import { CheckIfFilesExist, TerminalCommands } from '../../../schema/tutorial';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: vsTheme.text.color,
    },
  })
);

interface Test {
  testName: string;
  command: CheckIfFilesExist | TerminalCommands;
}

interface TestParagraph {
  tests: Test[];
  fileName?: string | undefined;
  solution?: string | undefined;
}

interface TestFeedbackDialog {
  test: TestParagraph[] | undefined;
  exerciseFolder: string;
  closeModal: () => void;
}

export const TestFeedbackDialog = (props: TestFeedbackDialog) => {
  const classes = styles();

  return (
    <div>
      <Dialog
        PaperProps={{
          style: { backgroundColor: vsTheme.Background.backgroundColor },
        }}
        onClose={props.closeModal}
        aria-labelledby='customized-dialog-title'
        open={true}
        maxWidth={'lg'}
        fullWidth={true}
      >
        <MuiDialogTitle disableTypography={true} className={classes.root}>
          <Typography className='text' variant='h5'>
            {'Test Results'}
          </Typography>
          <IconButton
            aria-label='close'
            style={{ color: vsTheme.icons.color }}
            className={classes.closeButton}
            onClick={props.closeModal}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers={true}>
          {props.test !== undefined &&
            createTestParagraph(props.test, props.exerciseFolder)}
        </MuiDialogContent>
      </Dialog>
    </div>
  );
};

const createTestParagraph = (
  tests: TestParagraph[],
  exerciseFolder: string
) => {
  return tests.map((testParagraph, index) => {
    return (
      <div key={index}>
        <Grid
          container={true}
          direction='row'
          justify='flex-start'
          alignItems='center'
        >
          <Typography className='text' variant='h6'>
            {testParagraph.fileName
              ? testParagraph.fileName.split('/')[
                  testParagraph.fileName.split('/').length - 1
                ]
              : 'General'}
          </Typography>
          {testParagraph.solution !== undefined &&
            testParagraph.fileName !== undefined && (
              <IconButton
                aria-label='compare to Solution'
                style={{ color: vsTheme.icons.color }}
                onClick={() => {
                  VSCodeAPI.postMessage({
                    commands: [
                      {
                        fileDiff: {
                          fileName: testParagraph.fileName,
                          solution: testParagraph.solution,
                        },
                      },
                    ],
                    ids: [],
                    exerciseFolder,
                  });
                }}
              >
                <CompareIcon />
              </IconButton>
            )}
        </Grid>
        {createTests(testParagraph.tests, exerciseFolder)}
      </div>
    );
  });
};

const createTests = (tests: Test[], exerciseFolder: string) => {
  return tests.map((test, index) => {
    return <Test test={test} exerciseFolder={exerciseFolder} key={index} />;
  });
};
