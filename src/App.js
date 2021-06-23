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

function App() {
    
    const questionTab = [<Introduction/>, <Ltr/>, <Availability/>, <Skills/>]
    const [question, setQuestion] = useState(0);
    const percentage = (question/questionTab.length) * 100;

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