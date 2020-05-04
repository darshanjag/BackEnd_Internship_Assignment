const signupFunction= async(e)=>{
    const name = document.getElementById('sign-up-name').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-p').value;
    const cpassword = document.getElementById('sign-up-cp').value;

     
    try{
        const res = await axios({
           method: 'POST',
           url: `http://localhost:3000/expense/api/users/signup`,
           data: {
               name,
               email,
               password,
               passwordConfirm: cpassword
           }
        })
        setTimeout(function(){ location.href = "/dashboard"; }, 1000);
       console.log(res);
     
    }catch(err){
        console.log(err.response.data);
    }
    
}