document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-value');
    const email = emailField.value;
    const passwordField = document.getElementById('password-value');
    const password = passwordField.value;
    if(email === 'admin@gmail.com' && password === 'admin'){
        location.href = 'home-page.html';
    }
    else{
        alert('password worng');
    }
})
