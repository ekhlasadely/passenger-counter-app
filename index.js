// document.getElementById("count-el").innerText=5
// let count=0
// console.log(count)

let count=0

let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment(){
count+=1
countEl.textContent=count
}
function save(){
    let countStr = count + " - "
    console.log(saveEl.innerText)
    
   saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}
console.log("Let's count people on the subway!")