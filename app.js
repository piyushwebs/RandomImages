let url = "https://dog.ceo/api/breeds/image/random";
let url2= "https://api.thecatapi.com/v1/images/search";
let dogDiv = document.querySelector(".dogImgCont");
let catDiv = document.querySelector(".catImgCont");
let catBtn = document.querySelector(".cat_btn");
let dogBtn = document.querySelector(".dog_btn");


let dogImg = document.createElement("img");
async function getImg(){
  try{
    let imgGen = await axios.get(url);
    let imgSrc = imgGen.data.message;
    if(dogImg.src == "")
    {
      dogImg.src = imgSrc;
      dogDiv.appendChild(dogImg);
      dogImg.classList.add("dogImg");
    }
    else
    {
      dogImg.src = imgSrc;
    }
   console.log(url);  
  }
  catch(err)
  {
    console.log(err);
  }
}


dogBtn.addEventListener("click",()=>{
  getImg();
});



// For cat
let catImg = document.createElement("img");
async function getImgCat(){
  try{
    let imgGen1 = await axios.get(url2);
    console.dir(imgGen1);
    let imgSrc1 = imgGen1.data[0].url;
    if(catImg.src == "")
    {
      catImg.src = imgSrc1;
      catDiv.appendChild(catImg);
  
      catImg.classList.add("catImg");
    }
    else  
    {
      catImg.src = imgSrc1;
    }
   
  }
  catch(err)
  {
    console.log(err);
  }
}
catBtn.addEventListener("click",()=>{
  getImgCat();
});

