const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')
const UserModel =require('./Model/Db')
const app=express()
mongoose.connect('mongodb://localhost:27017/curd');
app.use(bodyParser.json())
app.use(cors())
app.get('/',(req,res)=>{
    UserModel.find({})
    .then(details=>res.json(details))
    .catch(err=>res.json(err))
})
app.post('/user',(req,res)=>{
    UserModel.create(req.body)
    .then(details=>res.json(details))
    .catch(err=>res.json(err))
})
app.get('/getaUser/:id',(req,res)=>{
    const id= req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
  })
app.put('/user/:id',(req,res)=>{
    const id =req.params.id;
    const {name, email, age , Dob , mobile , course ,city}=req.body
    UserModel.findByIdAndUpdate(id,{name, email, age , Dob , mobile , course ,city},{new:true})
    .then(updateuser=>{
        if(!updateuser){
            return res.status(400).json({error:'user not found'}) 
        }
        res.json(updateuser)
    })
        .catch (err=>res.status(500).json({error:"server error"}))
    })
    app.delete('/delete/:id', (req, res) => {
        const id = req.params.id;
      
        UserModel.findByIdAndDelete(id)
          .then(deletedUser => {
            if (!deletedUser) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
          })
          .catch(error => res.status(500).json({ error: error.message }));
      });

app.listen(3002,()=>{
    console.log("server is running on 3002")
})