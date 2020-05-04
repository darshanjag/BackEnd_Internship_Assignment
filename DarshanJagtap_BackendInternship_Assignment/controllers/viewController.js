const Expense = require('./../models/expenseModel');
exports.dashboard =( async(req,res)=>{
    //getting all the data from collection
   
    //build template
    const user = req.user;
    let expenses;
    expenses = user.expenses.filter(c=> c.active === true)
    let l = expenses.map(e=> e.name);
    let labels = l.length
    let budget = user.budget[0].budget;
    let amounts = expenses.map(e=> e.amount);
    let total = amounts.reduce(function(a, b) { return a + b; }, 0)
    
    console.log(req.url)
    let per =Math.round(100 * total/budget);

    //render template
    res.status(200).render('dashboard',{
        user,
        expenses,
        labels,
        per
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
     const categories = req.user.categories;

    
      res.status(200).render('settings',{
        user,
        b,
        categories
      });

    }catch(err){
      console.log(err)
    }

  })

  exports.signup = ((req,res)=>{
      res.status(200).render('signup')
  })