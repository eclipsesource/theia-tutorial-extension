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

interface TutorialOverviewProps {
    tutorial: Tutorial;
}

const TutorialOverview = ({ tutorial }: TutorialOverviewProps) => {

    const [activeStep, setActiveStep] = useState(-1);
    return (
        activeStep < 0 ?
            <ExercisesOverview tutorial={tutorial} setActiveStep={setActiveStep}></ExercisesOverview>
            :
            <StepperComponent tutorial={tutorial} startStep={activeStep} />
    );
};

export default TutorialOverview;