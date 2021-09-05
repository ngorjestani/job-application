import React, {FunctionComponent, MouseEventHandler, useEffect, useState} from "react";
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        nextButton: {
            marginRight: theme.spacing(4),
        },
    }),
);

interface INavButtonsProps {
    activeStep: number;
    lastStep: number;
    disableNext: boolean;
    handleBack: MouseEventHandler;
    handleNext: MouseEventHandler;
}

export const NavButtons: FunctionComponent<INavButtonsProps> =
    ({
         activeStep,
         lastStep,
         disableNext,
         handleBack,
         handleNext
     }) => {
        const classes = useStyles();
        const [currentStep, setCurrentStep] = useState(activeStep);
        const [nextIsDisabled, setNextIsDisabled] = useState(disableNext);

        useEffect(() => {
            setCurrentStep(activeStep);
        }, [activeStep]);

        return (
            <Grid container justify="flex-end">
                <Button
                    onClick={handleBack}
                    className={classes.backButton}
                    disabled={currentStep < 1}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={nextIsDisabled}
                    onClick={handleNext}
                    className={classes.nextButton}
                >
                    {currentStep === lastStep ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        );
    };