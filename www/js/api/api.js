function sendImageToAPI(){
    var ip = document.getElementById('firstOct').value + '.';
    ip += document.getElementById('secondOct').value + '.';
    ip += document.getElementById('thirdOct').value + '.';
    ip += document.getElementById('fourthOct').value + ':';
    ip += document.getElementById('port').value;

    var request = ip + "/image/";
    console.log(request);

    var image = document.getElementById("fileInput").files[0];
    console.log(image);

    var formData = new FormData();

    //HTML file input, chosen by user or taken by camera
    formData.append("image", image, "image.jpg");
    console.log(formData.get("image"));


    //This code sends via AJAX the image through a formData Post Request to the server.
    //
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onload = function() {
        var serverResponse = document.getElementById('json');
        serverResponse.innerHTML = this.responseText;
    };

    xmlHttp.open( "POST", request, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", 'multipart/form-data');
    xmlHttp.send(formData);
    console.log(ip);

}
