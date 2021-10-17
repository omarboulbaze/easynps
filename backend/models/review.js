
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    language:String,
    date:Date,
    ltr:Number,
    ltrComment:String,
    availability:Number,
    caringAboutYou:Number,
    expertAdvice:Number,
    varietyOfProducts:Number,
    productInStock:Number,
    demos:Number,
    friendliness:Number,
    pricesCompetition:Number,
    storeAppearence:Number,
    safeToShop:Number,
    easeOfShopping:Number,
    cleaning:Number,
    gender:String,
    age:String,
    feedback:String,
    firstName:String,
    lastName:String,
    address:String,
    app:String,
    city:String,
    province:String,
    postal:String,
    phoneNumber:String,
    email:String
});

module.exports = mongoose.model('Review', ReviewSchema );

