
// let numberofFrnds = 4
// let maincource = 500
// let desert = 200
// let drink = 60

// function perpersonBill(numberofFrnds,maincource,desert,drink);{
//     let totalbill = maincource + desert + drink;
//     let perpersonBill = totalbill / frnds ;
//     console.log (`${totalbill}}your total bill is${perpersonBill}`);
// }
//     document.getElementById('demo').innerHTML = `your totalbill is ${perpersonBill}tk`;
// }
// let numberoffrnds = Number(prompt(`Enter Nubber of frnds`));
// Number(prompt(`Enter maincource`));
// Number(prompt(`Enter desert`));
// Number(prompt(`Enter drink`));

// perpersonBill(300,200,120,numberoffrnds)

    // let user = userName;
    // let math = mathValue;
    // let bng = bngValue;
    // let ict = ictValue;

// function resultcall(mathValue,bngValue,ictValue,userName){
//     let result = math + bng + ict;
//     let avg = result;
//     console.log (`${userName}your result is ${avg}`);
// }
 
//  resultcall(70,70,60,`userName`);



// function fullname(fName,lName){
//     document.write(fName + lName+`<br>`)
// }
// let fName = prompt("enter yuor fname")
// let lName = prompt("enter your lname")


// fullname(fName,lName)

// document.getElementById(`btn`) 

document.getElementById(`btn`).addEventListener(`click`, function(){
    document.getElementById(`btn`).classList.toggle(`btn`);
})

document.getElementById(`sidebar`).addEventListener(`mouseenter`, function(){
    document.getElementById(`sidebar`).classList.add(`sidebar`);
})

document.getElementById(`main-content`).addEventListener(`click`, function(){
    document.getElementById(`main-content`).classList.toggle(`main-content`);
})

