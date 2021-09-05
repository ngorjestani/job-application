import React, {FunctionComponent, useEffect, useState} from 'react';
import ProgressStepper from "./Steps/ProgressStepper";
import {NavButtons} from "./Steps/NavButtons";

interface IFormProps {
    stepList: string[];
}

const Form: FunctionComponent<IFormProps> = ({stepList}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [disableNext, setDisableNext] = useState(false);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0){
            setCurrentStep(currentStep - 1);
        }
    };

    return(
        <div>
            <ProgressStepper currentStep={currentStep} stepList={stepList} />
            <NavButtons
                activeStep={currentStep}
                lastStep={stepList.length - 1}
                disableNext={disableNext}
                handleBack={handleBack}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Form;