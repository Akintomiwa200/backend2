const express = require("express");
const dotenv = require('dotenv');
const userRoute = require("./routers/UserRoute");
dotenv.config({path: "./secret.env"})

const app = express();
app.use(express.json())
const PORT = process.env.PORT ;


//route middleware
app.use(userRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
}

)

