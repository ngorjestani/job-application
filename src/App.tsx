import React from 'react';
import './scss/app.scss';
import {AppNavbar} from "./components/AppNavbar";
import {AlertModal} from "./components/AlertModal";
import ProgressStepper from './components/Form/Steps/ProgressStepper';
import Form from "./components/Form/Form";

function App() {
    const modalTitle = "Please Read Before Proceeding With Application";
    const modalMessage = "If you are an individual with disabilities who needs accommodation or you are having difficulty using our web site to apply for employment, please contact the Human Resources team at (307) 344-5324.\n\n" +
        "Xanterra Parks & Resorts (Authorized Concessioner of the National Park Service) is an equal opportunity employer and does not discriminate against any individual in any phase of employment on the basis of race, color, creed, religion, sexual orientation, national origin, ancestry, veteran status, age, disability or any other legally protected status under applicable law. AA/EOE M/F/D/V\n" +
        "\nPLEASE DO NOT APPLY MORE THAN ONCE PER SEASON. You may email application changes to info@yellowstonejobs.com."
    const steps = ['Personal Information', 'Job Selection & Eligibility', 'Work Experience', 'Education', 'Xanterra Information', 'Demographic Information'];

    return (
        <div className="App">
            <AlertModal modalTitle={modalTitle} modalMessage={modalMessage} showModal={true} />
            <AppNavbar/>
            <Form stepList={steps} />
        </div>
    );
}

export default App;