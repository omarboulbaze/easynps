//importing react
import { useState } from "react";
//importing style
import "./App.css";
//importing components
import Banner from './components/banner/banner';
import ProgressBar from './components/progressBar/progressBar';
import Form from './components/form/form';
import Footer from './components/footer/footer';
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
    
    const questionTab = [
                        <Introduction text={text}/>,
                        <Ltr text={text}/>,
                        <Availability text={text}/>,
                        <Skills text={text}/>,
                        <Store text={text}/>, 
                        <Personal text={text}/>, 
                        <Overall text={text}/>, 
                        <Sweepstake text={text}/>, 
                        <Thanks text={text}/>
                        ]
    const [question, setQuestion] = useState(0);
    const percentage = parseInt(( (question + 1 )/questionTab.length) * 100);
    
    return (

        <>
           <Banner/>
           <ProgressBar max={questionTab.length} percentage={percentage}/>
           <Form question={question} questionTab={questionTab} setQuestion={setQuestion}/>
           <Footer/>
        </>
        
            )
        }

export default App;