
document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('Btn clicked');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(password);

    if (email === 'ami@ark.com' && password === '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Email and password are not matched !!!!!!');
    }
})