var email = document.getElementById("input");
var form = document.getElementById("emailCheck");
var paragraph = document.getElementById("validation");

form.addEventListener('submit',function(event){
    var re = /\S+@\S+\.\S+/;
if(!email.value){
    paragraph.innerHTML = "<p id ='validation'> <img src = 'icon-error.svg'>The field is empty!</p>";
    event.preventDefault();
}
else if(!re.test(email.value)){
    paragraph.innerHTML = "<p id ='validation'> <img src = 'icon-error.svg'>The email is not valid</p>";
    event.preventDefault();
}
});