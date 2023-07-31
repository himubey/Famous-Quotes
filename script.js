const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
speakBtn = document.querySelector(".speak"),
copyBtn = document.querySelector(".copy");


// function randomQuote(){
// const header = new Headers({ "Access-Control-Allow-Origin": "*" });
// const api_url ="https://zenquotes.io/api/random";

// async function getapi(url)
// {
   
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);

// }

// random quote function

function randomQuote(){
   const header = new Headers({ "Access-Control-Allow-Origin": "*" });
   mode:'no-cors'
   quoteBtn.classList.add("loading");
   quoteBtn.innerText = "Loading Quote...";
 // fetching random quotes/data from API and parsing it into JavaScript object
    fetch("https://zenquotes.io/api/random").then(res => res.json()).then(result =>{
    console.log(result)
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading")
 });
}


speakBtn.addEventListener("click", ()=>{
   // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
});

   // copying the quote text on copyBtn click
   // getting the text content that we want to copy
copyBtn.addEventListener("click", ()=>{
   // loading the content into our clipboard
   navigator.clipboard.writeText(quoteText.innerText); 
})

quoteBtn.addEventListener("click", randomQuote);