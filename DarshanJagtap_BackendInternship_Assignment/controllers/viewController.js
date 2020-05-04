const Expense = require('./../models/expenseModel');
exports.dashboard =( async(req,res)=>{
    //getting all the data from collection
   let budget =0;
   let amounts ='';
   let total = '';
   let labels ='';
   let l='';
   let per ='';
   let path = req.url;
   
    //build template
    const user = req.user;
    let expenses='';
    expenses = user.expenses.filter(c=> c.active === true)
    l = expenses.map(e=> e.name);
     labels = l.length
     if(user.budget[0]){
      budget = user.budget[0].budget;
     }
     
     amounts = expenses.map(e=> e.amount);
    total = amounts.reduce(function(a, b) { return a + b; }, 0)
    
  
     per =Math.round((total/budget)*100);
     
 

      
     if(isNaN(per) || !(isFinite(per))){
       per = 0;
     }

    //render template
    res.status(200).render('dashboard',{
        user,
        expenses,
        labels,
        per,
        budget,
        path
          });
  })

  exports.login =( async(req,res)=>{
    
    res.status(200).render('login');
  })

  exports.settings = (async(req,res)=>{
    try{
      let budget =0;
      let amounts ='';
      let total = '';
      let labels ='';
      let id= '';
   
      let l='';
      let per ='';
       //build template
       const user = req.user;
       if(user.budget[0]===undefined){
         id= 0 ;
       }else{
         id=user.budget[0]._id
       }
       let expenses='';
       expenses = user.expenses.filter(c=> c.active === true)
       l = expenses.map(e=> e.name);
        labels = l.length
      
        if(user.budget[0]){
         budget = user.budget[0].budget;
        }
       
        
        amounts = expenses.map(e=> e.amount);
       total = amounts.reduce(function(a, b) { return a + b; }, 0)
     const categories = req.user.categories;

    
      res.status(200).render('settings',{
        user,
        budget,
        categories,
        id
      });

    }catch(err){
      console.log(err)
    }

  })

  exports.signup = ((req,res)=>{
      res.status(200).render('signup')
  })

  exports.profile =(req,res)=>{

    const user = req.user;

    const name = user.name;
    const email = user.email
     
    res.status(200).render('profile',{
      user,
      name,
      email

    })
  }