
// eslint-disable-next-line no-new
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
const SomeDeleteRowFunction= async(e)=>{
    try{
        const res = await axios({
           method: 'PATCH',
           url: `http://localhost:3000/expense/api/${e.value}`
        })
    
       console.log(res);
       location.reload();
    }catch(err){
        console.log(err.response.data);
    }
    
}

const submitExpense= async(name,amount,category)=>{
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
   

