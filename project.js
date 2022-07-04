Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_qaulity:90
});
 
 camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot() 
{
   Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

   })
};

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VGiZV31N0/model.json', modelLoaded());

function modelLoaded() {
    console.log('model loaded!');
}

function speak() {
    var synth = widow.speechDynthesis;
    speak_dat_1 = "The first prediction is " + prediction_1;
    speak_dat_1 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_dat_1 + speak_data_2);
    synth.speak(utterThis);
}

