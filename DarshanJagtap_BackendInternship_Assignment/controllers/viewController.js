const Expense = require('./../models/expenseModel');
exports.dashboard =( async(req,res)=>{
    //getting all the data from collection
   
    //build template
    const user = req.user;
    let expenses;
    expenses = user.expenses.filter(c=> c.active === true)



    //render template
    res.status(200).render('dashboard',{
        user,
        expenses
          });
  })

  exports.login =( async(req,res)=>{
    
    res.status(200).render('login');
  })

  exports.settings = (async(req,res)=>{
    try{
      const user = req.user;
      const b = req.user.budget
     const budget=(b[0].budget)
      res.status(200).render('settings',{
        user,
        budget
      });

    }catch(err){
      console.log(err)
    }

  })