function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(this.onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onPhotoURISuccess(imageURI) {
    console.log(imageURI);
}

function sendImageToAPI(){
    var ip = document.getElementById('firstOct').value + '.';
    ip += document.getElementById('secondOct').value + '.';
    ip += document.getElementById('thirdOct').value + '.';
    ip += document.getElementById('fourthOct').value + ':';
    ip += document.getElementById('port').value;

    var request = "http://" + ip + "/image";
    console.log(request);

    var image = document.getElementById("fileInput").src;
    console.log(image);

    this.getPhoto(image);

    // var fileInput = document.getElementById('fileInput');
    // console.log(image);




    // This code sends a GET request via AJAX to API containing the URI of the image that is either
    // captured or uploaded
    //
    // var xmlHttp = new XMLHttpRequest();

    // xmlHttp.onload = function() {
    //     var serverResponse = document.getElementById('json');
    //     serverResponse.innerHTML = this.responseText;
    // };

    // xmlHttp.open( "GET", request, false ); // false for synchronous request
    // xmlHttp.setRequestHeader("Content-Type", 'multipart/form-data');

    // console.log(fileInput);

    // xmlHttp.send(fileInput);
    // console.log(ip);

}
