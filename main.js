// // loop linken

// const myparent = document.createElement("div");
// const mylinke = document.createElement("ul");
// const myHead = document.createElement("main");
// const myH2 = document.createElement("h2");


// const myLogo = document.createTextNode("Travel");
// myH2.appendChild(myLogo);
// myH2.style.cssText = "font-size :2rem;text-transform: uppercase;text-algin:center"

// myHead.appendChild(myH2)

// myparent.id = "testting";
// myparent.appendChild(mylinke);

// const names = ["email", " constler", "Images", "contact"];
// names.forEach((el) => {
//   let myLI = document.createElement("li");
//   mylinke.appendChild(myLI);

//   const testLi = document.createTextNode(el);
//   myLI.appendChild(testLi);

//   myLI.style.cssText = "padding-left:1rem;"
//  mylinke.style.cssText = "display:flex;list-style:none;flex-wrap:wrap;color:#fff;text-transform: capitalize;";
// });
// myHead.appendChild(mylinke);
// myparent.appendChild(myHead);

// myHead.style.cssText = "width:80%;display:flex;justify-content: space-between;align-items: center;margin:auto;flex-wrap:wrap;"

// myparent.style.cssText =
//   "padding:2rem 0; background-color:green;margin: auto;align-items: center;flex-direction: column;overflow: auto;flex-wrap:wrap;";
// document.body.appendChild(myparent);


// //content-------------------------------------------------------

// const contTow = document.createElement("div");
// contTow.style.cssText =
//   "margin:auto;background-color:red;display:flex;box-sizing:border-box;flex-wrap:wrap;gap:2px;justify-content:center;";

// for (let i = 0; i < 8; i++) {
//   let test = document.createElement("div");
//   test.style.cssText =
//     "padding:20px;border:2px solid;background-color:green;margin:20px;border-radius:10px;";

//   let nums = document.createElement("span");
//   let numbers = document.createTextNode(`${i + 1}`);
//   nums.style.cssText = "color:white;font-weight:bold;font-size:30px";

//   let pargh = document.createElement("p");
//   let parghText = document.createTextNode("Product");
//   pargh.style.cssText = "color:#000;";

//   nums.appendChild(numbers);
//   pargh.appendChild(parghText);
//   test.appendChild(nums);
//   test.appendChild(pargh);

//   contTow.appendChild(test);
// }

// document.body.appendChild(contTow);

// //footer

// const myfooters = document.createElement("footer");
// const myFoottext = document.createTextNode("hier is my footer");
// myfooters.appendChild(myFoottext);
// myfooters.style.cssText =
//   "background-color:green; color: #ffff;padding:10px;text-align: center;";

// document.body.appendChild(myfooters);




// const myUl = document.getElementById("menuUl");




// let navChildern = Array.from(myUl.children)
// console.log(navChildern)

// for(let i = 0; i <= navChildern.length;i++){
//     navChildern[i].onmouseenter = function() {
//         this.style.backgroundColor = "red";
   
//     }   
//     navChildern[i].onmouseleave = function() {
//         this.style.backgroundColor = "blue";
   
//     }   
 
  
// }

let mybtn = document.getElementById("btnscroll");
window.onscroll = function (){
    if(window.scrollY >= 600){
        mybtn.style.cssText = "dispaly:block; ";
    }else{
         this.style.cssText = "dispaky:none";
    }
}

