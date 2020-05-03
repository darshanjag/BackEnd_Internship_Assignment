const updateBudget= async(name,amount,category)=>{
    try{
    const res = await axios({
       method: 'POST',
       url: 'http://localhost:3000/expense/api/',
       data: {
         name,
         amount,
         category
       }
      
   })

   console.log(res);
}catch(err){
    console.log(err.response.data);
}
}
document.querySelector('#addcategoryform').addEventListener('submit', e=>{
    e.preventDefault();
 
   
})


$("#expense-submit").click(function(){
    const name = document.getElementById('expense-name-input').value;
    const amount = document.getElementById('expense-amount-input').value;
    const category = document.getElementById('expense-category-input').value;
    if(category===''){
        category ===undefined;
    }
    submitExpense(name,amount,category)
    setTimeout(function(){ location.reload(true); }, 1000);
  });