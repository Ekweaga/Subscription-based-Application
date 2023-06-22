const express = require('express')
const router = express.Router()
const stripe = require('stripe')
const publicKeys = "pk_test_51L9rxrE9S3i7xmxzQW7xEEziVUd3gEidwo8BPFnT1gxxjdyrjYLPv5P8PhAvpl5jOnEi7TxXwfzDzeTC7T4MCzsa00KTZYvXOt"
const secretKeys = "sk_test_51L9rxrE9S3i7xmxzbRv3wYc90YJ1g0Sj09LzY8QPQfXU26kELTqrk1Q9DbPoVlfJGZh9aItCh1zsYboXHfbzlC90008MKwDDu9"
const {getPrices} = require("../../stripe/index")


/**
 * @swagger
 * components:
 *   schemas:
 *     Price:
 *       type: object
 
 *      
 *     
 *        
 */


/**
 * @swagger
 * tags:
 *   name: Price
 *   description: Subscription Prices
 * /prices/priceList:
 *   get:
 *     summary: Get subscription price lists
 *     tags: [Price]
 *     
 *     responses:
 *       200:
 *         description: Subscription prices lists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Price'
 *       500:
 *         description: Some server error
 *
 */








router.get("/priceList",getPrices)


module.exports = router