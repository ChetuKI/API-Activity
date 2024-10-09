let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector(".pic");

btn.addEventListener("click",getPics);

async function getPics(){
    try {
        let res = await axios.get(url);
        img.setAttribute("src",res.data.message);
    } catch (e) {
        console.log(err);
        img.setAttribute("alt","photo unavailable");
    }
}