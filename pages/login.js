/*---User constructor--- */
function createUser(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}
/*---Admin users and "database" */
let admin1 = new createUser("lorena","lorena1@gmail.com","12345678");
let admin2 = new createUser("marta","marta2@gmail.com","12345678");
let allUsers=[];
allUsers.push(admin1);
allUsers.push(admin2);
/*---LogIn ---*/
function logIn(){
    let logInEmail = document.getElementById("loginemail").value;
    let logInPassword = document.getElementById("loginpassword").value;
   for(let i =0;i<allUsers.length;i++){
       if(allUsers[i].email==logInEmail){
           if(allUsers[i].password == logInPassword){
               openHome();
               return;
           }
       }else{
           document.getElementById("loginemail").value=""
       }
   }
}

/*---SignUp--- */
function signUp(){
    let signUpUsername=document.getElementById("signupusername").value;
    let signUpEmail=document.getElementById("signupemail").value;
    let signUpPassword=document.getElementById("signuppassword").value;
    for(let j=0;j<allUsers.length;j++){
        if(signUpUsername == allUsers[j].username){
            alert("User name alredy used");
            return;
        }else{
            if(signUpEmail == allUsers[j].email){
                alert("You are alredy sign with this email");
                return;
            }else{
                let newUser = new createUser(signUpUsername,signUpEmail,signUpPassword);
                allUsers.push(newUser);
                document.getElementById("signupusername").value="";
                document.getElementById("signupemail").value="";
                document.getElementById("signuppassword").value="";
                switchLogIn();
                return;
            }
        }
    }
  
}
/*---Open Home ---*/
function openHome(){
    window.location.href = 'home.html';
}
/*--- Switch to sign in */
function switchSignIn(){
    document.getElementById("signin").style.display="block"
    document.getElementById("login").style.display="none"
}
/*--- Switch to log in */
function switchLogIn(){
    document.getElementById("login").style.display="block"
    document.getElementById("signin").style.display="none"
    
}