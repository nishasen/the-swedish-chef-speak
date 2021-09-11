// console.log("Hii this is my app")

// var username = prompt("enter your username")
// alert("this is your "+ username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("Error occured", error)
    alert("Something wrong with API call and server, try again after sometimes")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    //outputDiv.innerText = "abcd " + txtInput.value;
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => //console.log(json.contents.translated))
    {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}) 