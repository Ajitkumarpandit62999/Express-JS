const express = require("express");
const app = express();


const port = 8080;
const path = require("path")

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname ,"/views"))
app.use(express.static(path.join(__dirname , "public/js")))
app.use(express.static(path.join(__dirname , "public/css")))



app.get("/" , (req , res)=>{
    res.render("home.ejs");
})
app.get("/rolldice" , (req , res)=>{
    let diceVal =  Math.floor(Math.random() *6 ) + 1 ;
    res.render("rolldice.ejs" , {num : diceVal});
})
app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
})

// <---------------- Interpolation syntax ------------------>

//  Interpolation refers to embedding expressions into marked up text 
// we can pass whole file in the templte literals ... 


// <------------------- Instagrame EJS ---------------->

//  create a basic template for instagram page based on following route 

app.get ("/ig/:username" , (req , res)=>{
    let {username } = req.params;
    let instaData = require("./data.json")
    let data = instaData[username];

    if(data){
        res.render("instagrame.ejs",{data});
    } else{
        res.render("error.ejs");
    }

 
})

app.get("/babu" , (req , res)=>{
    res.render("babu.ejs")
})

// <------------------ conditional statement in EJS ------------->

// <---------- Get & post Requests --------------->

/* GET :- used to get some response  ,   data sent in query strings (limited , strings data & visible url ) 

post : - used to post something  (for create  / write / update )  , data sent via request body (any type of data  )*/