var express= require('express');
var path=require('path');

var router=express.Router();  //router object

module.exports=router;
// route our home app
router.get('/',function(req, res){
  res.render('pages/home');
});

// route our about app
router.get('/about',function(req, res){
  var users=[
    {name:'Avani', email:'avani@avani.jo', avatar:'http://placekitten.com/g/300/300'},
    {name:'Apoo', email:'aani@avani.jo', avatar:'http://placekitten.com/g/400/400'},
    {name:'Ani', email:'ani@avani.jo', avatar:'http://placekitten.com/g/500/500'},
    {name:'Ai', email:'ani@avani.jo', avatar:'http://placekitten.com/g/600/600'},
  ];
  res.render('pages/about',{users:users});
});

// route our contact app
router.get('/contact',function(req, res){
  res.render('pages/contact');
});
router.post('/contact',function(req, res){
  // console.log(req.body.message);
  res.send('Thanks for contacting us, '+req.body.name+'! We will respond shortly!');
});