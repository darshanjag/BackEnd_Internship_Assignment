
const updateBudgetFunction= async(e)=>{
    const budget = document.getElementById('budget-input').value;
    console.log("this is budget",e.value)

  if(e.value==0){
    try{
        const res = await axios({
           method: 'POST',
           url: `http://localhost:3000/expense/api/budget`,
           data: {
               budget
           }
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }
}
else{
    try{
        const res = await axios({
           method: 'PATCH',
           url: `http://localhost:3000/expense/api/budget/${e.value}`,
           data: {
               budget
           }
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }
}
}

const addCategoryFunction= async(e)=>{
    
   


    try{
        const category = document.getElementById('add-category-input').value;
        console.log(category)
        const res = await axios({
           method: 'POST',
           url: 'http://localhost:3000/expense/api/category/',
           data: {
               name:category
           }
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }
    
}
const deleteCategory= async(e)=>{
    
   


    try{
        const id = document.getElementById('category-delete-btn').value;
        console.log(id)
        const res = await axios({
           method: 'DELETE',
           url: `http://localhost:3000/expense/api/category/${id}`,
          
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }
    
}