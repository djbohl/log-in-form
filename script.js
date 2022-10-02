//login and register buttons

function buttonFunction() {
    let loginBttn = document.getElementById('log-in');
    let registerBttn = document.getElementById('register');
    if (registerBttn.onclick) {
        location.assign("register.html");
    } else if (loginBttn.onclick) {
        location.assign("index.html");
    }
}
