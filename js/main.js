let userName=document.querySelector("#logname")
let userEmail=document.querySelector("#logemail")
let userPassword=document.querySelector("#logpassword")
let accountList = []
let currentindex 
let namme=""
if(localStorage.getItem("datalist")!=null){
    accountList = JSON.parse(localStorage.getItem("datalist"))
}
function IsnullSignUp(){
    if((userEmail.value=="")||(userPassword.value==""||(userName.value==""))){
        document.querySelector("#required").style.display="block"
    }
    else{
        document.querySelector("#required").style.display="none"
        let checkk=check()
        if(checkk==true){
          signup();
       }
    }
}

function signup(){
    if((check()==true)){
        let count = 0
        let person ={
            name:userName.value,
            email:userEmail.value,
            passwodr:userPassword.value
            }
            for(let i=0;i<accountList.length;i++){
                if(accountList[i].email==person.email){
                    count=1
                }
                else count =0
            }
            if (count == 0){
                accountList.push(person)
                localStorage.setItem("datalist",JSON.stringify(accountList)) 
                document.querySelector("#Exist").style.display="none";
                document.querySelector("#logname").value=""
                document.querySelector("#logemail").value=""
                document.querySelector("#logpassword").value=""

                   }
 else {
    document.querySelector("#Exist").style.display="block";
}
}
}


function check(){
    let regexName = /^[A-Za-z]{3,10}[0-9]{0,}$/
    resultName = regexName.test((userName.value))
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    resultEmail = regexEmail.test((userEmail.value))
    let regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    resultpassword = regexpassword.test((userPassword.value))
    if ((resultName == true)&&(resultEmail == true)&&(resultpassword==true)){
        document.querySelector("#checkout").style.display="none"
        return true;
    }
    else{
        document.querySelector("#checkout").style.display="block"
        return false;
    }
}
function IsnulllogIn(){
    if((userEmail.value=="")||(userPassword.value=="")){
        document.querySelector("#required").style.display="block"
    }
    else{
        document.querySelector("#required").style.display="none"
          LogIn();
    }
}

function LogIn(){
        
    let count = 0
            for(let i=0;i<accountList.length;i++){
                if((accountList[i].email==userEmail.value) && (accountList[i].passwodr==userPassword.value)){
                    count++
                    localStorage.setItem("user",JSON.stringify(accountList[i].name))
                    let a = document.querySelector("#welcome");
                    a.setAttribute("href", "welcome.html");
                   document.querySelector("#wrong").style.display="none";
        
            }}
            if (count == 0){
                document.querySelector("#wrong").style.display="block";
              }
        }
function addname(){
    let username = JSON.parse(localStorage.getItem("user"))
    document.querySelector("#welcomeName").innerHTML ="Welcome " + username
}
function logout() {
    localStorage.removeItem("user")
}
