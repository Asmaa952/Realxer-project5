 //============================= step 1 ==========================
 let nameInput =document.getElementById('signName');
 let emailInput =document.getElementById('signEmail');
 let passwordInput =document.getElementById('signPassword');
 let signUpBtn =document.getElementById('signUpBtn');
 //=========================== step 6 ==========================
 let alertMessage =document.getElementById('alertMessage');
//============================= step 3 ========================
  var arr=[] ;
//============================= step 5 ========================
 if (localStorage.getItem("users") != null) {
    arr = JSON.parse(localStorage.getItem("users"));
 } else {
     arr = [];
 }
//============================= step 2 =========================
 function signUp(){
        let data = {
            name : nameInput.value,
            email : emailInput.value,
            password : passwordInput.value,
        }
//============================ step 12 ========================
   if(confirmMessageEmpty()==true){
        getAlertMessage('Please enter all inputs','red');
   }else{
        if(checkEmailExist()==true){
                getAlertMessage('Email Already Exist','red');
        }else{
                arr.push(data);
//============================== step 4 ========================
                localStorage.setItem("users",JSON.stringify(arr));
//========================= step 10 ===========================
                clearMassage()
//========================== step 8 ================================
                getAlertMessage('success','green');
                // console.log(arr);     
        }
   }
        
 }
 //============================ step 7 ===================
 function getAlertMessage(text,color){
        alertMessage.classList.replace('d-none','d-block');
        alertMessage.innerHTML=text;
        alertMessage.style.color=color;
 }
 //=========================== step 9 ===============================
 function clearMassage(){
        nameInput.value='';
        emailInput.value='';
        passwordInput.value='';
 }
 //========================== step 11 ============================
 function confirmMessageEmpty(){
    if( nameInput.value ==''|| emailInput.value ==''|| passwordInput.value ==''){
        return true;   
    }else{
        return false;
        }

  }
  //======================== step 13 =============================
  function checkEmailExist(){
        for(let i=0 ;i<arr.length;i++){
                if(arr[i].email== emailInput.value){
                        return true;
                }
        }
  }
        signUpBtn.addEventListener('click',signUp);
        console.log(arr);
   
 
 
 


















 