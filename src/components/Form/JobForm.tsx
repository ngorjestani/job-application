import React, {FunctionComponent, useEffect, useState} from 'react';
import ProgressStepper from "./Steps/ProgressStepper";
import {NavButtons} from "./Steps/NavButtons";
import {Formik, Field, Form} from 'formik';
import {TextField} from 'formik-material-ui';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, RadioGroup, Select} from "material-ui-formik-components";

interface IJobFormProps {
    stepList: string[];
}

const JobForm: FunctionComponent<IJobFormProps> = ({stepList}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [disableNext, setDisableNext] = useState(false);

    const states = [
        {value: 'AL', label: 'AL'},
        {value: 'AK', label: 'AK'},
        {value: 'AZ', label: 'AZ'},
        {value: 'AR', label: 'AR'},
        {value: 'CA', label: 'CA'},
        {value: 'CO', label: 'CO'},
        {value: 'CT', label: 'CT'},
        {value: 'DE', label: 'DE'},
        {value: 'DC', label: 'DC'},
        {value: 'FL', label: 'FL'},
        {value: 'GA', label: 'GA'},
        {value: 'HI', label: 'HI'},
        {value: 'ID', label: 'ID'},
        {value: 'IL', label: 'IL'},
        {value: 'IN', label: 'IN'},
        {value: 'IA', label: 'IA'},
        {value: 'KS', label: 'KS'},
        {value: 'KY', label: 'KY'},
        {value: 'LA', label: 'LA'},
        {value: 'ME', label: 'ME'},
        {value: 'MD', label: 'MD'},
        {value: 'MA', label: 'MA'},
        {value: 'MI', label: 'MI'},
        {value: 'MN', label: 'MN'},
        {value: 'MS', label: 'MS'},
        {value: 'MO', label: 'MO'},
        {value: 'MT', label: 'MT'},
        {value: 'NE', label: 'NE'},
        {value: 'NV', label: 'NV'},
        {value: 'NH', label: 'NH'},
        {value: 'NJ', label: 'NJ'},
        {value: 'NM', label: 'NM'},
        {value: 'NY', label: 'NY'},
        {value: 'NC', label: 'NC'},
        {value: 'ND', label: 'ND'},
        {value: 'OH', label: 'OH'},
        {value: 'OK', label: 'OK'},
        {value: 'OR', label: 'OR'},
        {value: 'PA', label: 'PA'},
        {value: 'PR', label: 'PR'},
        {value: 'RI', label: 'RI'},
        {value: 'SC', label: 'SC'},
        {value: 'SD', label: 'SD'},
        {value: 'TN', label: 'TN'},
        {value: 'TX', label: 'TX'},
        {value: 'UT', label: 'UT'},
        {value: 'VT', label: 'VT'},
        {value: 'VA', label: 'VA'},
        {value: 'WA', label: 'WA'},
        {value: 'WV', label: 'WV'},
        {value: 'WI', label: 'WI'},
        {value: 'WY', label: 'WY'},
    ];

    const jobs = [
        {value: 'Dining Room Server Assistant', label: 'Dining Room Server Assistant'},
        {value: 'Employee Dining Room Crew', label: 'Employee Dining Room Crew'},
        {value: 'Fast Food Crew', label: 'Fast Food Crew'},
        {value: 'Kitchen Crew', label: 'Kitchen Crew'},
        {value: 'Laundry Help', label: 'Laundry Help'},
    ];

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0){
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        return;
    };

    return(
        <div>
            <ProgressStepper currentStep={currentStep} stepList={stepList} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Formik initialValues={{
                    firstName: '',
                    middleInitial: '',
                    lastName: '',
                    dateOfBirth: new Date(),
                    address: '',
                    city: '',
                    state: 'AL',
                    phone: '',
                }} onSubmit={handleSubmit}>
                    {formik => (
                        <Form>
                            <Field name="firstName" component={TextField} label="First Name"/>
                            <Field name="middleInitial" component={TextField} label="Middle Initial"/>
                            <Field name="lastName" component={TextField} label="Last Name"/>
                            <Field name="dateOfBirth" component={KeyboardDatePicker} label="Date of Birth" format="dd/MM/yyyy" />
                            <Field name="address" component={TextField} label="Street Address" />
                            <Field name="city" component={TextField} label="City" />
                            <Field wutoWidth name="state" label="State" options={states} component={Select}/>
                            <Field name="phone" component={TextField} label="Phone" />
                            <Field name="email" component={TextField} label="E-mail Address" />

                            <Field autoWidth name="jobs" label="Select Job" options={jobs} component={Select} />
                            <Field name="jobType" component={RadioGroup} label="Type of Job" options={[
                                {value: 'seasonal', label: 'Seasonal'},
                                {value: 'yearRound', label: 'Year-round'},
                            ]}
                            groupProps={{row: true}}/>
                            <Field name="startDate" component={KeyboardDatePicker} label="Start Date" format="dd/MM/yyyy" />
                            <Field name="endDate" component={KeyboardDatePicker} label="End Date" format="dd/MM/yyyy" />



                        </Form>
                    )}
                </Formik>
            </MuiPickersUtilsProvider>
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

export default JobForm;