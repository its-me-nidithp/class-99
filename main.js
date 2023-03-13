var SpeechRecognition = window.webkitSpeechRecognition;
//A high level scripting language built into browers that allows you to implement functionallity in webpages.

var recognition = new SpeechRecognition();
//Web Speech API is used to recognise what we are speacking and convert it into text. New Keyword will ensure that there is a new API every time the page loads.

function startbutton(){

document.getElementById("textbox").innerHTML = "";
recognition.start();


}
// To automate the process of speaking the text as soon as we give the voice command;

recognition.onresult = function(event){


    
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
console.log(content);

if( content == "take my selfie"){

console.log("taking selfie in 5 seconds...");
speak();


} 

}

camera = document.getElementById("camera");

Webcam.set({

width:360,
height:250,
image_format: 'png',
png_quality: 90


});


function speak(){

var synth = window.speechSynthesis;
//window.speechSynthesis will convert the text into speech 

speakdata = "taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speakdata);
//SpeechSynthesisUtterance represents a speech request to the interface it contains the content which the system has to speak


synth.speak(utterThis);

Webcam.attach(camera);
// to display the webcan live view in an exsisting HTML Element. it activates the user webcam asks for the appropriate permition and begins show the live camera image.

setTimeout(function(){

take_snapshot();
save();


},5000);


}

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img id="selfie" src=" '+data_uri+' " >';


});



}

function save(){

link = document.getElementById("link");
img = document.getElementById("selfie").src;
link.href = img;
link.click();
//click() is a pre-defined function that will automaticaly click the anchor tag;



}