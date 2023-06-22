
const {stripeConnection} = require("../stripe/stripeSession")
const asyncHandler = require("express-async-handler")
const publicKeys = "pk_test_51L9rxrE9S3i7xmxzQW7xEEziVUd3gEidwo8BPFnT1gxxjdyrjYLPv5P8PhAvpl5jOnEi7TxXwfzDzeTC7T4MCzsa00KTZYvXOt"
const secretKeys = "sk_test_51L9rxrE9S3i7xmxzbRv3wYc90YJ1g0Sj09LzY8QPQfXU26kELTqrk1Q9DbPoVlfJGZh9aItCh1zsYboXHfbzlC90008MKwDDu9"
const stripe = require("stripe")(secretKeys)

const getPrices = asyncHandler(async(req,res)=>{
    const products= await stripe.prices.list({
        apiKey:secretKeys
    })
      

        return res.send({message:products})

})


const subscriptionSession = asyncHandler(async(req,res)=>{
    const {priceId} = req.body
    const session = await stripe.checkout.sessions.create({
        mode:"subscription",
        payment_method_types:["card"],
        line_items:[
            {
                price:req.body.priceId,
                quantity:1
            }
        ],
        success_url:"http://localhost:3000/articles",
        cancel_url:"http://localhost:3000/articles",
        customer:""
    },
    {
        apiKey:secretKeys
    }
    
    )

})


module.exports = {getPrices,subscriptionSession}