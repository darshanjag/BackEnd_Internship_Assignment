const updateUserNmaeFunction= async(e)=>{
    const name = document.getElementById('user-name-input').value;
   

    try{
        const res = await axios({
           method: 'PATCH',
           url: `http://localhost:3000/expense/api/users/${e.value}`,
           data: {
               name
           }
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }

}

const updateUserEmailFunction= async(e)=>{
    const email = document.getElementById('user-email-input').value;
   

    try{
        const res = await axios({
           method: 'PATCH',
           url: `http://localhost:3000/expense/api/users/${e.value}`,
           data: {
               email
           }
        })
        location.reload();
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }

}