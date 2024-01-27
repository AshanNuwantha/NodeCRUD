const express = require('express')
const services = express.Router()
const Student = require('../models/student') // handel


module.exports = services

services.get('/',async function(req,res){
    try{
        const student =  await Student.find()
        res.json(student)
    }catch(err){
        res.send('error '+err)
    }
    
})

services.get('/:id',async function(req,res){
    try{
        const student =  await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        res.send('error '+err)
    }
    
})

services.patch('/:id',async function(req,res){
    try{
        const student =  await Student.findById(req.params.id)
        student.gradeofexaam = req.body.gradeofexaam
        res.json(await student.save())
    }catch(err){
        res.send('error '+err)
    }
    
})

services.delete('/:id',async function(req,res){
    try{
        const student =  await Student.findById(req.params.id)
        await Student.deleteOne({_id:student._id})
        res.status(200).json(student)
    }catch(err){
        res.status(503).send('error '+err)
    }
    
})

services.post('/',async function(req,res){
        const student =  new Student({
            name: req.body.name,
            subject: req.body.subject,
            school: req.body.school,
            gradeofexaam: req.body.gradeofexaam
        })

        try{
            const studentresult = await student.save()
            res.json(studentresult)
        }catch(err){
            res.send('error'+students)
        }
})