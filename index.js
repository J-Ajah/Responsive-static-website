
let btnSubmit = document.querySelector('#input_1_8');
let inputSubmit = document.querySelector('#input_1_4');
let navButton = document.querySelector(".nav-show");
let navContainer = $(".nav-container");

const userInputArray = [];

// window.addEventListener("resize", getWindowsSize);

// function getWindowsSize(){
//     // Get width and height of the window excluding scrollbars
//     var w = document.documentElement.clientWidth;
//     // var h = document.documentElement.clientHeight;

//     if(w >= 700){
//         navButton.style.display = "block";
//         // navButton.style.display = "none";
//     }navButton.addEventListener("click", ()=>{
//     navContainer.slideToggle();
// })


//     console.log(w)
// }




$(".nav-show").on("click", ()=>{
    $(".nav-container").toggle();

})


//formats
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const checkNumber = /^[0-9]+$/;




//Ensure that a valid phonumber is entered in the number field
inputSubmit.addEventListener('keypress',(e)=>{
   if(isNaN(e.key) || inputSubmit.value.length > 9){
       e.preventDefault();
       alert("Please enter a valid number")
   }else if(inputSubmit.value.length <= 0){
        if(e.key != 0){
           e.preventDefault();
           alert("Mobile number starts with 0-9")
        }
   }
})


btnSubmit.addEventListener('click', validateInput);
function  validateInput () {
    const userInputs = Array.from(document.querySelectorAll('.input-flip'));


    let fname = userInputs[0].value;
    let lname = userInputs[1].value;
    let email = userInputs[2].value;
    let phoneNumber = userInputs[3].value;
    let website = userInputs[4].value;
    let company = userInputs[5].value;
    let textArea = userInputs[6].value;


    //validate email
    if(!(email.match(emailFormat)) || fname == "" || lname == "" || phoneNumber == "" || website == "" || company == "" || textArea == ""){
        alert("Please enter a valid value for all fields");
    }else{
        alert("Name:  "+fname + "\n" + "Lastname:  " + lname +  "\n" +
            "Email:  "+ email +  "\n" + "PhoneNumber:  " + phoneNumber + "\n"+
            "Website:  "+ website +  "\n" + "Company:  " + company +  "\n" + "Other comments:  "+ textArea
        );
    }




}

