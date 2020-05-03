
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

document.querySelector('##addcategoryform').addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email,password);
})