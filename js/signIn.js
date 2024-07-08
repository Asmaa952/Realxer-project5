 //================================== step 1 =========================
 let loginEmail =document.getElementById('loginEmail');
 let loginPassword =document.getElementById('loginPassword');
 let alertMessage =document.getElementById('alertMessage');
 let loginBtn =document.getElementById('loginBtn');
 //================================== step 3 =========================
 let arr=[];
 //================================== step 4 =========================
  if(localStorage.getItem('users') != null){
    arr = JSON.parse(localStorage.getItem("users"));
}  
 //=============================== step 2 ============================
 function logIn(){
   if(confirmMessageEmpty() == true){
      //alert
      getAlertMessage('Please enter all inputs','red');
   }else{
    if( checkEmailPassword() == true){
        //navigate home 
        window.location.href='home.html';
    }else{
        getAlertMessage('Email or Password not correct','red') ; 
    }
  }
 }
 //================================ step 5 ============================
 function checkEmailPassword(){
    for(let index=0 ; index<arr.length;index++){
        if(arr[index].email == loginEmail.value && arr[index].password == loginPassword.value){
             //localStorage.setItem('userName',arr[index].nameInput)
            console.log(localStorage.setItem('userName',arr[index].name) );
            return true;
        }
        
}
 }
 //================================ step 6 =============================
 function getAlertMessage(text,color){
    alertMessage.classList.replace('d-none','d-block');
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
}
function confirmMessageEmpty(){
    if( loginEmail.value ==''|| loginPassword.value ==''){
        return true;   
    }else{
        return false;
        }

  }

 loginBtn.addEventListener('click', logIn);