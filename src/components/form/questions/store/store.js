
import {useState, useEffect} from 'react'

function Store(props){

    const [rating1, setRating1] = useState();
    const [rating2, setRating2] = useState();
    const [rating3, setRating3] = useState();
    const [rating4, setRating4] = useState();
    const [rating5, setRating5] = useState();
    const [rating6, setRating6] = useState();
    const [rating7, setRating7] = useState();
    const [rating8, setRating8] = useState();
    const [rating9, setRating9] = useState();

    function ratingOnClick1(num){
        setRating1(num);
    }

    function ratingOnClick2(num){
        setRating2(num);
    }

    function ratingOnClick3(num){
        setRating3(num);
    }

    function ratingOnClick4(num){
        setRating4(num);
    }

    function ratingOnClick5(num){
        setRating5(num);
    }

    function ratingOnClick6(num){
        setRating6(num);
    }

    function ratingOnClick7(num){
        setRating7(num);
    }

    function ratingOnClick8(num){
        setRating8(num);
    }

    function ratingOnClick9(num){
        setRating9(num);
    }

    useEffect(() => {
        if(rating1 && rating2 && rating3 && rating4 && rating5 && rating6 && rating7 && rating8 && rating9 ){
            props.setFormCompleted(true)
        }else{
            props.setFormCompleted(false)
        }
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9]);

       useEffect(() => {
        props.setVarietyOfProducts(rating1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating1]);

       useEffect(() => {
        props.setProductInStock(rating2)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating2]);

       useEffect(() => {
        props.setDemos(rating3)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating3]);

       useEffect(() => {
        props.setFriendliness(rating4)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating4]);

       useEffect(() => {
        props.setPricesCompetition(rating5)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating5]);

       useEffect(() => {
        props.setStoreAppearence(rating6)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating6]);

       useEffect(() => {
        props.setSafeToShop(rating7)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating7]);

       useEffect(() => {
        props.setEaseOfShopping(rating8)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating8]);

       useEffect(() => {
        props.setCleaning(rating9)
        // eslint-disable-next-line react-hooks/exhaustive-deps
       },[rating9]);


    return(
        <>
            <p className="form-text">
                {props.text.aspects}
            </p>


            <div className="rating">

                <p className="form-subtext">
                {props.text.products}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating1 === num ? "checked" : ""}`} onClick={() => ratingOnClick1(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.productsAvailability}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating2 === num ? "checked" : ""}`} onClick={() => ratingOnClick2(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.demos}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating3 === num ? "checked" : ""}`} onClick={() => ratingOnClick3(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.kindness}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating4 === num ? "checked" : ""}`} onClick={() => ratingOnClick4(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.price}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating5 === num ? "checked" : ""}`} onClick={() => ratingOnClick5(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.clean}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating6 === num ? "checked" : ""}`} onClick={() => ratingOnClick6(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.safe}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating7 === num ? "checked" : ""}`} onClick={() => ratingOnClick7(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.easyShopping}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating8 === num ? "checked" : ""}`} onClick={() => ratingOnClick8(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>

            <div className="rating">

                <p className="form-subtext">
                {props.text.covid}
                </p>

                
                <div className="rating-text">
                    <span>{props.text.poor}</span>
                    <span>{props.text.excellent}</span>
                </div>

                <div className="rating-buttons">
                    {
                       [0,1,2,3,4,5,6,7,8,9,10].map( num => { 
                        return <div className={`radio ${rating9 === num ? "checked" : ""}`} onClick={() => ratingOnClick9(num)} key={num}>{num}</div>
                    })
                    }
                </div>
               
            </div>
        </>
    )
}

export default Store;