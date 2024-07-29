// console.log("Hammad")

const button = document.querySelector(".button");
const formSection = document.querySelector(".form-section"); 
const FName = document.querySelector(".fname")
const LName = document.querySelector(".lname")
const Email = document.querySelector(".email")
const Password = document.querySelector(".password")
const SignupForm = document.querySelector(".signup-form")
const RequiredFN = document.querySelector(".requiredFN")
const RequiredLN = document.querySelector(".requiredLN")
const RequiredE = document.querySelector(".requiredE")
const RequiredP = document.querySelector(".requiredP")


SignupForm.addEventListener("submit" , (e)=>{

    e.preventDefault();

    if(FName.value == ""){
        RequiredFN.style.visibility = "visible";
        setTimeout(function(){
            RequiredFN.style.visibility = "hidden";
        }, 2000)
    }

    if(LName.value == ""){
        RequiredLN.style.visibility = "visible";
        setTimeout(function(){
            RequiredLN.style.visibility = "hidden";
        }, 2000)
    }

    if(Email.value == ""){
        RequiredE.style.visibility = "visible";
        setTimeout(function(){
            RequiredE.style.visibility = "hidden";
        }, 2000)
    }

    if(Password.value == ""){
        RequiredP.style.visibility = "visible";
        setTimeout(function(){
            RequiredP.style.visibility = "hidden";
        }, 2000)
    }


    if(FName.value !== "" && LName.value !== "" && Email.value !== "" && Password.value !== ""){
        const newDiv = document.createElement("div");
        const newDivInnerHtml = `<div class="alert-box"> 
        <p class="alert"> <i class="fa-solid fa-circle-check"></i> Hi! You have Loged In</p>
      </div> `;
        newDiv.innerHTML = newDivInnerHtml;
        formSection.append(newDiv);
    
        setTimeout(function(){
          newDiv.remove();
        }, 3000)
    }
    
})








// SignupForm.addEventListener("submit" , (e)=>{

//     e.preventDefault()

//     const newDiv = document.createElement("div");
//     const newDivInnerHtml = `<div class="alert-box"> 
//     <p class="alert">Hi! You have Loged In</p>
//   </div> `;
//     newDiv.innerHTML = newDivInnerHtml;
//     formSection.append(newDiv);

//     setTimeout(function(){
//       newDiv.remove();
//     }, 3000)
    

    

    // else{
    //     const newDiv = document.createElement("div");
    //     const newDivInnerHtml = `<p class="alert">Fill all the fields.</p> `;
    //     newDiv.innerHTML = newDivInnerHtml;
    //     formSection.append(newDiv);
    
    //     setTimeout(function(){
    //       newDiv.remove();
    //     }, 2000)
    // }

// })



