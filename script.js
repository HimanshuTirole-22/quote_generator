const quotes=document.getElementById("quote");
const author=document.getElementById("author");
const newQ=document.getElementById("new-quote");
const tweetMe=document.getElementById("twitter");


let realData="";
let quotesData="";


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const getNewQuotes=()=>{
  // let rnum = Math.floor(Math.random()*10);
  const rnum = randomIntFromInterval(1, 1500);
  quotesData=realData[rnum];
  quotes.innerText=`${quotesData.text}`;
  author.innerText=`${quotesData.author}`;
  if (quotesData.author==null) {
    author.innerText="UnKnown";
  }
  else{
    author.innerText=`By ${quotesData.author}`;
  }
};

const tweetNow=()=>{
  let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(tweetPost);
}

const getQuotes= async () => {
  const api= "https://type.fit/api/quotes";
  try {
    let data= await fetch(api);
    realData=await data.json();
    getNewQuotes();
  }catch (error){}
};

tweetMe.addEventListener("click",tweetNow);
newQ.addEventListener("click",getNewQuotes);

getQuotes();