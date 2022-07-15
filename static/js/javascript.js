function next(){
    const part1 = document.getElementsByClassName("part1")[0];
    const part2 = document.getElementsByClassName("part2")[0];

    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let Rpassword = document.getElementById("repeatPassword");
    
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(userName.value === "") return userName.style.border="2px solid red";
    else userName.style.border="2px solid rgb(93, 93, 255)";
    if(!emailRegex.test(email.value)) return email.style.border="2px solid red";
    else email.style.border="2px solid rgb(93, 93, 255)";
    if(password.value.length < 8) return password.style.border="2px solid red";
    else password.style.border="2px solid rgb(93, 93, 255)";
    if(password.value != Rpassword.value) return Rpassword.style.border="2px solid red";
    else Rpassword.style.border="2px solid rgb(93, 93, 255)";

    part1.style.display = 'none';
    part1.style.opacity = '0';
    part2.style.display = 'block';
    part2.style.opacity = '1';

}
function back(){
    const part1 = document.getElementsByClassName("part1")[0];
    const part2 = document.getElementsByClassName("part2")[0];

    part2.style.display = 'none';
    part2.style.opacity = '0';
    part1.style.display = 'block';
    part1.style.opacity = '1';
}
function register(){
    let sexSelected = document.getElementsByName("sex")[0];
    let edoSelected = document.getElementById("edo");
    let age = document.getElementById("age");

    if(!sexSelected.checked) return document.getElementById("sexText").style.color="red";
    else document.getElementById("sexText").style.color="black";
    if(edoSelected.value=="") return edoSelected.style.border="2px solid red";
    else edoSelected.style.border="2px solid rgb(93, 93, 255)";
    if(age.value<10 || age.value>120) return age.style.border="2px solid red";
    else age.style.border="2px solid rgb(93, 93, 255)";
    location.href="/";
}
function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value != "jaime@gmail.com" || password.value!="12345678") return document.getElementById("error").style.display="block";
    else document.getElementById("error").style.display="none";

    document.getElementById("success").style.display="block";
}