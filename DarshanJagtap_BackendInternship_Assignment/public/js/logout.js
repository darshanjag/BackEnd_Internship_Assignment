document.querySelector('#logout-button').addEventListener('click',async(e)=>{
    try{
        const res = await axios({
           method: 'Get',
           url: 'http://localhost:3000/expense/api/users/logout'
    
       })
    
       console.log(res);
       setTimeout(function(){ location.href = "/login"; }, 1000);
    }catch(err){
        console.log(err.response.data);
    }
})