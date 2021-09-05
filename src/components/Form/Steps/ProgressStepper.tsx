import React, {FunctionComponent, useEffect, useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

interface IProgressStepperProps {
    currentStep: number;
    stepList: string[];
}

const ProgressStepper: FunctionComponent<IProgressStepperProps> = ({currentStep, stepList}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(currentStep);
    const [steps, setSteps] = useState(stepList);

    useEffect(() => {
        setActiveStep(currentStep);
    }, [currentStep]);

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default ProgressStepper;
