let labels;
let data;

const getData = async()=>{
  try{
    const res = await axios({
       method: 'GET',
       url: `http://localhost:3000/expense/api/`
    })

  return res;
   
}catch(err){
    console.log(err);
}

}

const setData =async()=>{
  const userdata = await getData();
  allexpenses = userdata.data.data.expenses.filter(c=> c.active === true);
  data = allexpenses.map(e=> e.amount); 
  labels =  allexpenses.map(e=> e.name);
 
 
  // eslint-disable-next-line no-new
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'expense pie-chart'
      }
    }
});
 
}
setData();


// eslint-disable-next-line no-new

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
    setTimeout(function(){ window.location.reload(true); }, 500);
    setTimeout(function(){ window.location.reload(true); }, 1000);

  });
   

