var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var sendImage;

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    console.log(imageData);

    sendImage = imageData;

    var json = document.getElementById('json'); 

    json.innerHTML = imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log(imageURI);

    sendImage = imageData;

    var json = document.getElementById('json'); 

    json.innerHTML = imageData;
}

function capturePhoto() {
    console.log('Capturing image!');
    //Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });

    permissions.hasPermission(permissions.CAMERA, function( status ){
    if ( status.hasPermission ) {
        console.log("Obtained Permission!");
    }
    else {
        console.warn("Denied Permission!");
    }

    });
}

function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function sendImageToAPI(sendImage){

    if (sendImage != null)
    {
        var ip = document.getElementById('firstOct').value + '.';
        ip += document.getElementById('secondOct').value + '.';
        ip += document.getElementById('thirdOct').value + '.';
        ip += document.getElementById('fourthOct').value + ':';
        ip += document.getElementById('port').value;

        var request = "http://" + ip + "/image";
        console.log(request);

        console.log(image);

        // var fileInput = document.getElementById('fileInput');
        console.log(image);

        // This code sends a GET request via AJAX to API containing the URI of the image that is either
        // captured or uploaded
        //
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onload = function() {
            var serverResponse = document.getElementById('json');
            serverResponse.innerHTML = this.responseText;
        };

        xmlHttp.open( "GET", request, false ); // false for synchronous request
        console.log(fileInput);
        xmlHttp.send(fileInput);
        console.log(ip);

    }
    else
    {
        var json = document.getElementById('json'); 

        json.innerHTML = "No image to send, take a picture or upload one.";
    }

    

}