// start--HERE

//All elements Selected here 

const bill = document.querySelector('.showBill');





//const button5 = document.querySelector('.button5');
const button10 = document.querySelector('.button10');
const button15 = document.querySelector('button15');
const button25 = document.querySelector('button25');
const button50 = document.querySelector('button50');
//const buttonCustom = document.querySelector('.buttonCustom');

//const noOfPeople = document.querySelector('.noOfPeople');*/

//const tipAmount = document.querySelector('.tipAmount');
//const totalCost = document.querySelector('.totalCost');


const resetButt = document.querySelector('.resetButt');






//END--- HERE 












//number of people paying
const noOfPeople = document.querySelector('.noOfPeople');

//but for 5% tip
let button5 = document.querySelector('.button5');

//selecting element with a class that removes/adds the warning message
let warningMsg = document.querySelector('.warningMsg')

//Tip amount field
const tipAmount = document.querySelector('.tipAmount');

//Total amount field
const totalCost = document.querySelector('.totalCost');

const myAnonFunc = function(){
    let inputV = document.querySelector(".myVal").value
    let buttonCustom = document.querySelector('.buttonCustom')
   if(noOfPeople.value >= 1){
    total = inputV/noOfPeople.value
    inputV = inputV/noOfPeople.value
    warningMsg.classList.add('warningMsg')
    }else{
        warningMsg.classList.remove('warningMsg')

    }
    if(buttonCustom.value > 0){
       custo = inputV*buttonCustom.value / 100
        console.log(custo)
        
    }
   /*inputV = (inputV/10)/2;*/
   inputV = inputV/10;
   inputV = 

   tipAmount.innerHTML = inputV
   totalCost.innerHTML = total


    //console.log(inputV)
    //console.log(total)
    
    //const buttonCustom = document.querySelector('.buttonCustom');





}




    


    button5.addEventListener('click', myAnonFunc)







//when you enter a .value on the custom buttton and its >0

//i want the cursor to go back to pointer


//when its clicked then do the calculations









































//const noOfPeople = document.querySelector('.noOfPeople');

//let button5 = document.querySelector('.button5');

//let warningMsg = document.querySelector('.warningMsg')


/*so named the function and put it as one of the arguments in eventlistener function in order to stop the func calling/firing on page load. */
//const myAnonFunc = function(){
//    let inputV = document.querySelector(".myVal").value
//   if(noOfPeople.value >= 1){
//    inputV = inputV/noOfPeople.value
//    warningMsg.classList.add('warningMsg')
//    }else{
//        warningMsg.classList.remove('warningMsg')

//    }
//   inputV = (inputV/10)/2;
    
//    console.log(inputV)
//}








/*differenc ebetween calling and passing a reference */
//button5.addEventListener('click', //myAnonFunc) 














//looks like i might be invoking the function



//const noOfPeople = document.querySelector('.noOfPeople');

//let button5 = document.querySelector('.button5');

//let warningMsg = document.querySelector('.warningMsg')

//button5 = addEventListener('click', function(){
//    let inputV = document.querySelector(".myVal").value
//   if(noOfPeople.value >= 1){
//    inputV = inputV/noOfPeople.value
//    warningMsg.classList.add('warningMsg')
//    }else{
//        warningMsg.classList.remove('warningMsg')

 //       remove the class .warning msg from h3 and add the class '.redBord' to.noOfPeple so basically a red border to the input element with a class of noOfPeople 
 //   }
 //  inputV = (inputV/10)/2;
    
 //   console.log(inputV)

//})



//why does the button function get called automaticallly  the moment i click on the input field to enter a numer? 





//just realised we didnt need a click class and probs had to use let keyword instead of const for buttons cos the value of the var will change? */


//const noOfPeople = document.querySelector('.noOfPeople');

//let button5 = document.querySelector('.button5');



//button5 = addEventListener('click', function(){
//    let inputV = document.querySelector(".myVal").value
//   if(noOfPeople.value >= 1){
//    inputV = inputV/noOfPeople.value
//    }
//   inputV = (inputV/10)/2;
    
//    console.log(inputV)

//})



















//if noOfPeople.value >=1 then inputV / noOfPeople.value

//put the result in a variable then display it/inject it 
//using innerhtml or innertext thats the final part

//maybe we dont have to create another variable, we can
//we can just do:
//input = input/noOfPeople (do it the shorthand way if there is like so input+= im sure theres a version for division)
//now that i think about it, maybe thats why the let keyword was invented, creating another var inside/outside the function could cause prolems but due to the let keywords special behaviour (i believe the variable created using the let keyword is scopped based? or function based? either one is good for this case scenario but i will research it later tmo morning) it makes it possible to create a variable without causing any problems, i will test this tmoro


//'noOfPeople.value' might not work cos idk if the .value property works on a variable, it should do but lets see, if it dont then we'll do it like line 65 and then set the var */


// it works th results are below, i didnt know that i could access the value of the input field with 'variableName.value', i think i can rebuild this whole function without the clickME variable cos its redundant, i knew at the back of my mind somehow that it wasnt making sense, let me try it out first:


//const button5 = document.querySelector('.button5');


//clickME = document.querySelector('.clicked');

//clickME = addEventListener('click', function(){
//    let inputV = document.querySelector(".myVal").value
//   if(noOfPeople.value >= 1){
//    inputV = inputV/noOfPeople.value
//    }
//   inputV = (inputV/10)/2;
    
//    console.log(inputV)

//})






























// here im thinking i need to write a condition if no of ppl is 0
//const button5 = document.querySelector('.button5');


//clickME = document.querySelector('.clicked');

//clickME = addEventListener('click', function(){
//   let inputV = document.getElementById("myVal").value
//   inputV = (inputV/10)/2;
//    console.log(inputV)

//})










































// how i first did it
//const button5 = document.querySelector///('.button5');

//let inputV = document.getElementById("myVal").value

//button5 = addEventListener('click', function(){
//    console.log(50);
//})






//sfter thinking and waching a few vids is how i did it next 
//const button5 = document.querySelector('.button5');


//clickME = document.querySelector('.clicked');

//clickME = addEventListener('click', function(){
//   let inputV = document.getElementById("myVal").value
//    console.log(inputV)

//})






//const getInputValue = function(){
//     inputVal = document.getElementById("myInput").value;
//}


//let inputValue = document.getElementById*/






//Testing 
//button5 = addEventListener('click', //function(){
 //   button5.classList.add('borderDec')
//});
//
