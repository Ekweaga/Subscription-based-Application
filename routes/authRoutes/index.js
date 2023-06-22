const express = require('express')
const router = express.Router()
const publicKeys = "pk_test_51L9rxrE9S3i7xmxzQW7xEEziVUd3gEidwo8BPFnT1gxxjdyrjYLPv5P8PhAvpl5jOnEi7TxXwfzDzeTC7T4MCzsa00KTZYvXOt"
const secretKeys = "sk_test_51L9rxrE9S3i7xmxzbRv3wYc90YJ1g0Sj09LzY8QPQfXU26kELTqrk1Q9DbPoVlfJGZh9aItCh1zsYboXHfbzlC90008MKwDDu9"
const {login,signup,logout,forgotPassword,localVariables,confirmOTP,resetPassword} = require("../../authentication/index")
const validateToken = require("../../authentication/verifyUser")
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         
 *         username:
 *           type: string
 *           description: User name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: 
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         
 *         username: Charles
 *         email: hikay133@gmail.com
 *         password: xxxxxxx
 *        
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Authentication
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: login user
 * /auth/login:
 *   post:
 *     summary: login a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: You are logged in.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Get user details
 * /auth/authme:
 *   post:
 *     summary: Getting user details
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Logout
 * /auth/logout:
 *   post:
 *     summary: Logout
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User logged out
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: This endpoints generates an OTP when you input user email
 * /auth/forgotpassword:
 *   post:
 *     summary: This endpoints generates an OTP when you input user email
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Otp has been sent to email
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */



/**
 * @swagger
 * tags:
 *   name: User
 *   description: This endpoints verify OTP sent to user email
 * /auth/confirmotp:
 *   post:
 *     summary: This endpoints verify OTP sent to user email
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Otp has been verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */



/**
 * @swagger
 * tags:
 *   name: User
 *   description: This endpoints reset your password to new password
 * /auth/resetpassword:
 *   post:
 *     summary: This endpoints reset your password to new password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Reset password successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */










router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",logout)
router.post("/forgotpassword",validateToken,forgotPassword)
router.post("/confirmotp",validateToken,localVariables,confirmOTP)
router.post("resetpassword",validateToken,resetPassword)

module.exports = router;