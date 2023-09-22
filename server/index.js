const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://kaushalvaghela2004:1LDzb2uMROQd1wal@cluster0.ea13whs.mongodb.net/crud")

app.post("/createUser", async (req,res) => {
    try{
       const users = await UserModel.create(req.body);
       res.json(users);
    }catch{
        res.json(err); 
    }
})

app.get('/',(req,res) => {
  UserModel.find({})
  .then(users =>  res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then(users =>  res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateUser/:id' , (req, res) =>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age 
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id}) 
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

app.listen(3003, () =>{
    console.log('Server is running on part 3003')
})
