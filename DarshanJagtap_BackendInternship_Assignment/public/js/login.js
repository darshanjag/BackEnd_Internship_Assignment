const login= async(email,password)=>{
    try{
    const res = await axios({
       method: 'POST',
       url: 'http://localhost:3000/expense/api/users/login',
       data: {
           email,
           password
       }

   })

   console.log(res);
   setTimeout(function(){ location.href = "/dashboard"; }, 1000);
}catch(err){
    console.log(err.response.data);
}
}

document.querySelector('.form-container').addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email,password);
})