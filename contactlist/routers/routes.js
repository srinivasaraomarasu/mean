const express=require('express');
const router=express.Router();
const Contact =require('../models/contacts');

router.get('/contacts',function(req,res){
	//res.send('Rtrieving the contact list');
	Contact.find(function(err,contacts){
	res.json(contacts);
	
	});
});
router.post('/contact',function(req,res,next){
	//res.send('Rtrieving the contact list');
	let newContact=new Contact({
	first_name:'SRINIVAS',
	last_name:'RAO',
	phone:'9915909739'
	
	});
	newContact.save(function(err,contact){
	if(err)
	{
res.json({msg:'failed to add contact'});
	}
	else
	{
res.json({msg:'added successfully'});
	}
	});
});

router.delete('/contact/:id',function(req,res,next){
	//res.send('Rtrieving the contact list');
	Contact.remove({_id:req.params.id},function(err,result){
	if(err)
	{
res.json({msg:'failed to delete contact'});
	}
	else
	{
res.json({msg:'contact deleted successfully'});
	}	
		
	});
});

module.exports=router;