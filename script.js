var emailEl=document.getElementById("useremail");
var passwordEl=document.getElementById("userpassword");
var buttonEl=document.getElementById("signinbutton");
var signupEl=document.getElementById("signinpart");
var welcomeEl=document.getElementById("welcomecontainer");

var user={
  name:"Grand Chirpus",
  password:"ILoveCoffee",
  email:"coolguy@gmail.com"
};

  function checkLogin()
  {
     if(emailEl.value===user.email && passwordEl.value===user.password)
     {
       signupEl.classList.add("hidden");
       welcomeEl.classList.remove("hidden");
     }
     else
     {
         alert("Password or Email does not match! ")
     }
  }
buttonEl.onclick=checkLogin;
