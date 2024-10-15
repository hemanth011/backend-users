const express = require('express');
const app = express()
const cor = require("cors")

app.use(cor())
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];
app.get("/user",(req,res)=>{
    res.json({users})
})

app.get("/user/:id",(req,res)=>{
    const id = req.params.id
    const user = users.find((rel)=>rel.id == id)
    if (!user) {
        return res.send("user not find ")
    }else{
        return res.send(user)
    }
})

app.listen(311,()=>{
    console.log("server is running");
    
})