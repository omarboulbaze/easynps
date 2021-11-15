//importing react
import { useState, useEffect} from "react";
//importing components
import Banner from '../components/banner/banner';
import ProgressBar from '../components/progressBar/progressBar';
import Form from '../components/form/form';
import Footer from '../components/footer/footer';
import Alert from "../components/alert/alert";
//importing form components
import Introduction from '../components/form/questions/introduction/introduction';
import Ltr from '../components/form/questions/ltr/ltr'
import Availability from '../components/form/questions/availability/availability';
import Skills from '../components/form/questions/skills/skills';
import Store from '../components/form/questions/store/store';
import Personal from "../components/form/questions/personal/personal";
import Overall from "../components/form/questions/overall/overall";
import Sweepstake from "../components/form/questions/sweepstake/sweepstake";
import Thanks from "../components/form/questions/thanks/thanks";
//importing text
import translations from "../translations/text.json";
//importing axios
const axios = require('axios');
//fetch URL paramaters
const params = new URLSearchParams(window.location.search);




function App() {

    //dynamic language for the web application
    const [text,setText] = useState(translations.french);

    //determining which language to be displayed using the GET parameters provided in the URL
    useEffect(()=>{
     
    if(params.get('l')==="eng"){ 
      setText(translations.english) 
      document.title = "Easy NPS | Rate your experience!"
    }else{ 
      setText(translations.french)
      document.title = "Easy NPS | Notez votre expérience!"
    }
    },[])

    const [alertVisible, setAlertVisible] = useState(false);
    const [formCompleted, setFormCompleted] = useState(false);

//Setting all the data that I want to retrieve from the user as a state
        const [ltr, setLtr] = useState(); const [ltrComment, setLtrComment] = useState(); const [availability, setAvailability] = useState(); const [caringAboutYou, setCaringAboutYou] = useState();
        const [expertAdvice, setExpertAdvice] = useState(); const [varietyOfProducts, setVarietyOfProducts] = useState(); const [productInStock, setProductInStock] = useState();
        const [demos, setDemos] = useState(); const [friendliness, setFriendliness] = useState(); const [pricesCompetition, setPricesCompetition] = useState();
        const [storeAppearence, setStoreAppearence] = useState(); const [safeToShop, setSafeToShop] = useState(); const [easeOfShopping, setEaseOfShopping] = useState(); 
        const [cleaning, setCleaning] = useState(); const [gender, setGender] = useState("Prefer not to answer"); const [age, setAge] = useState("Prefer not to answer");
        const [feedback, setFeedback] = useState(); const [firstName, setFirstName] = useState(); const [lastName, setLastName] = useState(); const [address, setAddress] = useState();
        const [app, setApp] = useState(); const [city, setCity] = useState(); const [province, setProvince] = useState(); const [postal, setPostal] = useState(); const [phoneNumber, setPhoneNumber] = useState();
        const [email, setEmail] = useState();
        

    const questionTab = [
                        <Introduction text={text} setFormCompleted={setFormCompleted}/>,
                        <Ltr text={text} setFormCompleted={setFormCompleted} setLtr={setLtr} setLtrComment={setLtrComment}/>,
                        <Availability text={text} setFormCompleted={setFormCompleted} setAvailability={setAvailability}/>,
                        <Skills text={text} setFormCompleted={setFormCompleted} setCaringAboutYou={setCaringAboutYou} setExpertAdvice={setExpertAdvice} />,
                        <Store text={text} setFormCompleted={setFormCompleted} setVarietyOfProducts={setVarietyOfProducts} setProductInStock={setProductInStock} setDemos={setDemos} setFriendliness={setFriendliness}
                        setPricesCompetition={setPricesCompetition} setStoreAppearence={setStoreAppearence} setSafeToShop={setSafeToShop} setEaseOfShopping={setEaseOfShopping} setCleaning={setCleaning} />, 
                        <Personal text={text} setFormCompleted={setFormCompleted} setGender={setGender} setAge={setAge} />, 
                        <Overall text={text} setFormCompleted={setFormCompleted} setFeedback={setFeedback}/>, 
                        <Sweepstake text={text} setFormCompleted={setFormCompleted} setFirstName={setFirstName} setLastName={setLastName} setAddress={setAddress} setApp={setApp} setCity={setCity} 
                        setProvince={setProvince} setPostal={setPostal} setPhoneNumber={setPhoneNumber} setEmail={setEmail}/>,
                        <Thanks text={text}/>
                        ]
    const [question, setQuestion] = useState(0);

    const percentage = parseInt(( (question + 1 )/questionTab.length) * 100);

    const [nextBtnVisible, setNextBtnVisible] = useState(true);
  

    //Using dotenv variable dynamically depending on the status of the app (developement or production)
    const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

    //One the form is completed, store the review in the database
    useEffect(() => {
        if(percentage>=100){
            setNextBtnVisible(false);
            axios.post(apiUrl + `/addReview`, {
                language: params.get('l'),
                productType: params.get('pt'),
                groupA: params.get('a'),
                groupB: params.get('b'),
                groupC: params.get('c'),
                date: new Date().toISOString(),
                ltr: ltr,
                ltrComment: ltrComment,
                availability: availability,
                caringAboutYou: caringAboutYou,
                expertAdvice: expertAdvice,
                varietyOfProducts: varietyOfProducts,
                productInStock: productInStock,
                demos: demos,
                friendliness: friendliness,
                pricesCompetition: pricesCompetition,
                storeAppearence: storeAppearence,
                safeToShop: safeToShop,
                easeOfShopping: easeOfShopping,
                cleaning: cleaning,
                gender: gender,
                age: age,
                feedback: feedback,
                firstName: firstName,
                lastName: lastName,
                address: address,
                app: app,
                city: city,
                province: province,
                postal: postal,
                phoneNumber: phoneNumber,
                email: email
              })
              .then(function (response) {
                console.log(response);
                window.location.href = `/thanks?l=${params.get('l')}`;
              })
              .catch(function (error) {
                console.log(error);
                window.location.href = `/404?l=${params.get('l')}`;
              });

        }
        setAlertVisible(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[question]);

    return (
        <>
           <Alert text={text} alertVisible={alertVisible} setAlertVisible={setAlertVisible}/>
           <Banner link="./scan"/>
           <ProgressBar max={questionTab.length} percentage={percentage}/>
           <Form question={question} questionTab={questionTab} setQuestion={setQuestion} setAlertVisible={setAlertVisible} formCompleted={formCompleted} nextBtnVisible={nextBtnVisible}/>
           <Footer/>
        </>
        
            )
        }

export default App;