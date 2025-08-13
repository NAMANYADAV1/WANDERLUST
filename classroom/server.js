const express = require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("Hi, I am root!");
});
app.get("/",(req,res)=>{
    res.send("Hi, I am root!");
});
app.get("/users", (req,res)=>{
    res.send("GET for users");
})

//Show - users
app.get("/users/:id", (req,res)=>{
    res.send("GET for users id");
})

//POST - users
app.post("/users", (req,res)=>{
    res.send("POST for users");
})

//DELETE - users
app.delete("/users/:id", (req,res)=>{
    res.send("DELETE for user id");
})


//posts
//Index - users
app.get("/posts", (req,res)=>{
    res.send("GET for posts");
})

//Show - users
app.get("/posts/:id", (req,res)=>{
    res.send("GET for post id");
})

//POST - users
app.post("/posts", (req,res)=>{
    res.send("POST for posts");
})

//DELETE - users
app.delete("/posts/:id", (req,res)=>{
    res.send("DELETE for posts id");
})

app.listen(3000, ()=>{
    console.log("server is listening to 3000");
})