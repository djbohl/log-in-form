//login and register buttons

function buttonFunction() {
    let loginBttn = document.getElementById('log-in');
    let registerBttn = document.getElementById('register');
    if (registerBttn.onclick) {
        location.assign("register.html");
    } else if (loginBttn.onclick) {
        location.assign("main.html");
    }
}

/*

//disable log in automatically
document.getElementById("log-in").disabled = true;

when register button is clicked 
remove disabled and disable register 


document.getElementById('register').addEventListener('change', function() {
    if (document.getElementById('register').clicked) {
      document.getElementById('log-in').removeAttribute("disabled"),
        document.getElementById('register').addAttribute("disabled");
    }
  });
  
  when register button is clicked 
remove disabled and disable register 

document.getElementById('log-in').addEventListener('change', function() {
    if (document.getElementById('log-in').clicked) {
      document.getElementById('register').removeAttribute("disabled"),
        document.getElementById('log-in').addAttribute("disabled");
    }
  });
  
  */