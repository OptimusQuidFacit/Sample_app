const submit = document.querySelector("#Submit");
const username= document.querySelector('#Username');
const password= document.querySelector('#Password');
const passwordconfirm= document.querySelector('#confirmpassword');
const email= document.querySelector('#Email');
submit.onclick=(e)=>{
e.preventDefault();
try{
    if(password.value == passwordconfirm.value){
fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            Name: username.value, Password: password.value, Email: email.value
        })
    }).then(()=>{
        username.value="";
        password.value="";
        passwordconfirm.value="";
        email.value="";
    }
    )}
    else{
        throw err;
    }

}
catch (err){
alert(`Passwords don't match`);
}
}