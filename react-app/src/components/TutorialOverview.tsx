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
import React, { useState } from 'react';
import StepperComponent from './StepperComponent';
import { Tutorial } from '../../../schema/tutorial';
import ExercisesOverview from './ExercisesOverview';
import Button from '@material-ui/core/Button';

interface TutorialOverviewProps {
  tutorial: Tutorial;
  goBack: () => void;
}

const TutorialOverview = ({ tutorial, goBack }: TutorialOverviewProps) => {
  const [activeStep, setActiveStep] = useState(-1);
  if (
    !tutorial ||
    !tutorial.exercises ||
    activeStep >= tutorial.exercises.length
  ) {
    if (activeStep > 0) {
      setActiveStep(-1);
    }
  }
  return (
    <div>
      <h2>{tutorial.title}</h2>
      {activeStep < 0 ? (
        <div>
          <ExercisesOverview
            tutorial={tutorial}
            setActiveStep={setActiveStep}
          />
          <Button onClick={goBack} variant='contained' color='primary'>
            To Overview
          </Button>
        </div>
      ) : (
        <StepperComponent
          tutorial={tutorial}
          startStep={activeStep}
          backToOverview={setActiveStep}
        />
      )}
    </div>
  );
};

export default TutorialOverview;
