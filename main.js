const login =() =>{
    if(userInput.value=="" || pswd1Input.value=="" ||  pswd2Input.value=="" || emailInput.value==""){
        alert("PLEASE FILL THE FORM COMPLETELY")
    }else{
        user =userInput.value
        localStorage.setItem("user",user)
        window.location ="dashboard.html"
        alert("login successfully")
    }
}