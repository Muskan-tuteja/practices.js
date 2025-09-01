// function sayHello(){
//   alert("me to thik hu ")
// }

// function changetext(){
//   let h1 = document.querySelector("#mytext")
//   h1.innerText = "Text change is successful"
//   document.body.style.backgroundColor = "lightblue"
//   console.log("h1")
// }

// function changecolor(){
//  let randomColor = "#" +Math.floor(Math.random()*16777215).toString(16)

//  document.body.style.backgroundColor = randomColor

//  let h1 = document.querySelector(".color")
//  h1.innerText = "background color:" + randomColor 
// }


// let count = 0 
//  function increase(){
//   count++
//   let p = document.querySelector("#count")
//   p.innerText = count
//  }
//  function decrease(){
//   count--
//   let p = document.querySelector("#count")
//   p.innerText = count
//  }
//  function reset(){
//   count = 0
//   let p = document.querySelector("#count")
//   p.innerText = count
//  }

function clickSubmit() {
  // id exactly same honi chahiye
  let text = document.querySelector(".mytext");
  let buttons = document.querySelector("button");

  if (text.style.display === "none") {
    text.style.display = "block";
    buttons.innerText = "Hide";
  } else {
    text.style.display = "none";
    buttons.innerText = "Show";
  }
}


