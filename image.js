let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let final = await image();
    console.log(result);
    let img = document.querySelector("#result");
    img.setAttribute("src",final);
})

let url = "https://dog.ceo/api/breeds/image/random";
async function image(){
    let res = await fetch(url);
    let data = await res.json();
    return data.message;
}