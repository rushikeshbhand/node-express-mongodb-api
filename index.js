const express = require('express')
// import user model
const userModel = require('./models/userModel')
const app = express()
const port = 3000
const mongoose = require('mongoose');

// mongodb connection 
mongoose.connect('mongodb://127.0.0.1:27017/RushiDB');


// get all users 
app.get('/select', async (req, res) => {
    const allUsers = await userModel.find();
    res.send(allUsers)
})

// get user by id 
app.get('/user/:id', async (req, res) => {
    const userId = await userModel.findById(req.params.id)
    if (userId != null) {
        res.status(200).send("following user is find" + userId)
    } else {
        res.status(404).send("user is not in our database")
    }
})

// create user 
app.get('/create', async (req, res) => {
    try {
        const newUser = {
            name: "anil bhange",
            email: "rushi@gmail.com",
            phone: 7720917206
        };

        const data = await userModel.create(newUser);
        res.status(201).send(data);
    } catch (error) {
        console.error('Error inserting data:', error.message);
        res.status(500).send('Error inserting data');
    }
})

// update one user 
app.put('/updateUser', async (req, res) => {
    const updatedUser = await userModel.updateOne({
        name: "anil bhange", //old user name
        name: "sunil bhange", //new user name
        email: "sunil@gmailcom" //new email id
    })
    res.send(updatedUser); //send res 
})

// update many 
app.put('/updateMany', async (req, res) => {
    try {
        const filter = { name: "sunil bhange" }
        const updateUser = {
            name: "vijay shrivastav",
            email: "vijay@gmail.comm"
        }
        const updatedUsers = await userModel.updateMany(filter, updateUser)

        if (updatedUsers === null && 0) {
            res.send("user not found")
        } else {
            res.send(updatedUsers).status(200)
        }
    }
    catch (error) {
        res.status(error.message)
    }
})

// delete one user 
app.delete('/deleteUser', async (req, res) => {
    try {
        const deletedUser = await userModel.deleteOne({ name: "vijay shrivastav" })
        if (deletedUser === 0 || null) {
            res.send("user not found to delete")
        } else {
            res.send(deletedUser)
        }
    }
    catch(error){
        res.send("error to delete user is : " + error.message)
    }
})

// app is running on 
app.listen(port, () => { console.log("app is running"); })