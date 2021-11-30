import { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
//importing axios
const axios = require('axios');



function Reviews(){


const [reviews, setReviews] = useState();

useEffect(()=>{
  //Using dotenv variable dynamically depending on the status of the app (developement or production)
  const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;
  axios.get(apiUrl+'/')
  .then(res => {
    if(res.data.length > 0){
   setReviews(res.data);
    }
  }).catch(e => console.log(e));
},[])

function ptToString(productType){
  switch (productType) {
    case "large_appliances" || "small_appliances":
      return "Appliances";

    case "phone":
      return "Mobile Phones";

    case "computer":
      return "Computers";

    case "gaming":
      return "Gaming";

    case "speaker":
      return "Earbuds, Headphones/Portable Speakers";

    case "mp3":
      return "MP3 Players";

    case "office":
      return "Office & School Supplies";

    case "smart":
      return "Smart Home";

    case "tablet":
      return "Tablets & eReaders";

    case "tv":
      return "TVs/Home Theatre";

    case "wearable":
      return "Wearable Technology";

    case "toys":
    return "Toys";

  case "other":
    return "Other";

  default:
    return "-";
  }
}
function listReviews(){
  if(reviews){
    return (
    reviews.map((review, i) => 
    <tr key={review._id}>
      <th scope="row">{i+1}</th>
        <td>Promoter</td>
        <td>{new Date(Date.parse(review.date)).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric', second:'numeric'})}</td>
        <td>East</td>
        <td>District 13 (BB)</td>
        <td>Magasin 962- Marché Central</td>
        <td>{ptToString(review.productType) === ("-" || "Other" || "Toys" ) ? ptToString(review.productType) : <><b>{ptToString(review.productType)}</b> and related accessories</>  }</td>
        <td>{review.ltrComment ? review.ltrComment : "-"}</td>
        <td>{review.feedback ? review.feedback : "-"}</td> 
        <td>-</td> 
    </tr>
              )
    )

  }else{
    console.log("reviews unavailable")
  }
  }

    return(
        <>
        <Banner/>
<div className="form-body"> 
  <table className="table table-striped table-hover table-responsive">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">NPS Descriptor</th>
        <th scope="col">Survey Date</th>
        <th scope="col">Region</th>
        <th scope="col">District</th>
        <th scope="col">Store</th>
        <th scope="col">Department</th>
        <th scope="col">LTR Comment</th>
        <th scope="col">Overall Comments</th>
        <th scope="col">Safety Comments</th>
      </tr>
    </thead>
    <tbody>

      {reviews ? listReviews() : 
      <tr>
        <th scope="row">-</th>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td> 
        <td>-</td> 
      </tr>}

    </tbody>
  </table>
</div>
        <Footer/>
        </>
    )
}

export default Reviews;