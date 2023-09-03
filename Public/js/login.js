const submit = document.querySelector("#Submit");
const username= document.querySelector('#Username');
const password= document.querySelector('#Password');
submit.onclick=(e)=>{
e.preventDefault();

fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            Name: username.value, Password: password.value
        })
    }).then(()=>{
        username.value="";
        password.value="";
        passwordconfirm.value="";
        email.value="";
    }
    );
}