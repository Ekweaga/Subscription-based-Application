const Stripe = require("stripe")
const publicKeys = "pk_test_51L9rxrE9S3i7xmxzQW7xEEziVUd3gEidwo8BPFnT1gxxjdyrjYLPv5P8PhAvpl5jOnEi7TxXwfzDzeTC7T4MCzsa00KTZYvXOt"
const secretKeys = "sk_test_51L9rxrE9S3i7xmxzbRv3wYc90YJ1g0Sj09LzY8QPQfXU26kELTqrk1Q9DbPoVlfJGZh9aItCh1zsYboXHfbzlC90008MKwDDu9"



const stripeConnection = new Stripe(secretKeys,{
    apiVersion:"2020-08-27"
})

module.exports = {stripeConnection}