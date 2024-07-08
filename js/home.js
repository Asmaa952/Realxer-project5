let welcomeMassage =document.createElement('welcomeMassage');
let logOutBtn =document.getElementById('logOutBtn');

if(localStorage.getItem('userName') != null)
    {
         document.getElementById('welcomeMassage').innerHTML="welcome    "  + localStorage.getItem('userName');
    }

    //console.log( welcomeMassage.innerHTML);

 function logOut(){

    //navigate login page
    //remove userName from localstorage
    window.location.href='signIn.html';
    localStorage.removeItem('userName');
}
logOutBtn.addEventListener('click',logOut);

var allData=[];
async function getPizza(){
var response =  await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
var data =await response.json();
allData =data.recipes;
console.log(data.recipes);
displayData();
}

getPizza();


var row =document.getElementById('rowData');
function displayData(){
 var str ="";
 for(var i=0; i<allData.length; i++){
    str +=`<div class="col-md-3">
                <div class="text-white">
                    <img src="${allData[i].image_url}" class="w-100" alt="">
                    <h4>Title:${allData[i].title}</h4>
                    <p>Publisher:${allData[i].publisher}</p>
                    <p>Id:${allData[i].recipe_id}</p>
                </div>
            </div>`
 }
 row.innerHTML =str;
}
