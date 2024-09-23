const express = require('express');
const Studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.urlencoded({extended: false }));
router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student',(req,res)=>{
Studentcontroller.addStudent(req, res)
})
router.get('/students',(req,res)=>{
Studentcontroller.getStudents(req,res)
})
module.exports = router