const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
 const swaggerUi = require("swagger-ui-express");
 const authRoutes = require("../routes/authRoutes")
 const pricesRoutes = require("../routes/priceRoutes")
 const subRoutes = require("../routes/subROutes")
app.use(cors())
app.use(express.json())
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Subscription App ExpressJS",
        version: "0.1.0",
        description:
          "This is a subscription payment application with Stripe",
        license: {
          name: "",
          url: "https://spdx.org/licenses/MIT.html",
        },
     
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./routes/authRoutes/*.js","./routes/priceRoutes/*.js","./routes/subROutes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

  app.use("/auth",authRoutes)
  app.use("/prices",pricesRoutes)
  app.use("sub",subRoutes)
app.listen(5000,()=>{
    console.log("Port Connected")
})