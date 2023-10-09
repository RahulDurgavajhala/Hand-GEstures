Webcam.set({
    width:350,
    height:300,
    img_format : 'png',
png_quality:90
});

prediction_1 = ""
prediction_2 = ""

camera=document.getElementById("camera")

Webcam.attach('#camera');
  
function TakeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 
console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KjW_A2wrY/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function IdentifyImage(){
   img = document.getElementById("captured_image")
   classifier.classify(img, gotResults)
  
}
function gotResults(error , results){
  if (error) {
   console.log(error) 
  } else {
    console.log(results)
    prediction_1 = results[0].label 
    prediction_2 = results[1].label
  document.getElementById("result_emoji_name").innerHTML = prediction_1
  document.getElementById("result_emoji_name2").innerHTML = prediction_2
  if(prediction_1=="amazing"){
    document.getElementById("update_emoji").innerHTML = "&#128076"
  }
  if(prediction_1=="best"){
    document.getElementById("update_emoji").innerHTML = "&#128077"
  }
  if(prediction_1=="victory"){
    document.getElementById("update_emoji").innerHTML = "&#9996;"
  }



  }
  if(prediction_2=="amazing"){
    document.getElementById("update_emoji2").innerHTML = "&#128512"
  }
  if(prediction_2=="best"){
    document.getElementById("update_emoji2").innerHTML = "&#128077;"
  }
  if(prediction_2=="victory"){
    document.getElementById("update_emoji2").innerHTML = "&#128076;"
  }

  }



