//Import from pacakages here
const express = require('express');
const mongoose = require('mongoose');

//Import from other files here
const authRouter = require('./routes/auth'); //import:'/packages/routes/auth' ese kaam kre ga ye//


//INIT here
const Port = 3000;
const app = express();
const DB = "mongodb+srv://asif:asif123@cluster0.bjwyloj.mongodb.net/?retryWrites=true&w=majority";

//midleWare
app.use(express.json());
app.use(authRouter);



// DATABASE CONNECTION
mongoose.connect(DB).then(() => {
    console.log("connection succesful");
}).catch((e) => {
    console.log(e);
});

app.listen(Port, "192.168.0.105/32", () => {
    console.log(`connected at PORT ${Port}`);
});