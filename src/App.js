//importing react
import { useState } from "react";
//importing style
import "./App.css";
//importing components
import Banner from './components/banner/banner';
import ProgressBar from './components/progressBar/progressBar';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Alert from "./components/alert/alert";
//importing form components
import Introduction from './components/form/questions/introduction/introduction';
import Ltr from './components/form/questions/ltr/ltr'
import Availability from './components/form/questions/availability/availability';
import Skills from './components/form/questions/skills/skills';
import Store from './components/form/questions/store/store';
import Personal from "./components/form/questions/personal/personal";
import Overall from "./components/form/questions/overall/overall";
import Sweepstake from "./components/form/questions/sweepstake/sweepstake";
import Thanks from "./components/form/questions/thanks/thanks";
//importing text
import translations from "./translations/text.json";

const text = translations.english;

function App() {
    
    const [alertVisible, setAlertVisible] = useState(false);

    const [formCompleted, setFormCompleted] = useState(false);

    const questionTab = [
                        <Introduction text={text} setFormCompleted={setFormCompleted}/>,
                        <Ltr text={text} setFormCompleted={setFormCompleted} />,
                        <Availability text={text} setFormCompleted={setFormCompleted}/>,
                        <Skills text={text} setFormCompleted={setFormCompleted}/>,
                        <Store text={text} setFormCompleted={setFormCompleted}/>, 
                        <Personal text={text} setFormCompleted={setFormCompleted}/>, 
                        <Overall text={text} setFormCompleted={setFormCompleted}/>, 
                        <Sweepstake text={text} setFormCompleted={setFormCompleted}/>, 
                        <Thanks text={text}/>
                        ]
    const [question, setQuestion] = useState(0);
    const percentage = parseInt(( (question + 1 )/questionTab.length) * 100);
    
    

    return (

        <>
           <Alert text={text} alertVisible={alertVisible} setAlertVisible={setAlertVisible}/>
           <Banner/>
           <ProgressBar max={questionTab.length} percentage={percentage}/>
           <Form question={question} questionTab={questionTab} setQuestion={setQuestion} setAlertVisible={setAlertVisible} formCompleted={formCompleted}/>
           <Footer/>
        </>
        
            )
        }

export default App;