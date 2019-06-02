function sendImageToAPI(){
    var ip = document.getElementById('firstOct').value + '.';
    ip += document.getElementById('secondOct').value + '.';
    ip += document.getElementById('thirdOct').value + '.';
    ip += document.getElementById('fourthOct').value + ':';
    ip += document.getElementById('port').value;

    var image = document.getElementById('json').innerHTML;

    var request = ip + '/image/' + image;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", request, false ); // false for synchronous request
    xmlHttp.send( null );
    document.getElementById('json').innerHTML =  xmlHttp.responseText;

    console.log(ip + '/image/' + image);
}