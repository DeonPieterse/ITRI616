function sendImageToAPI(){
    var ip;

    ip += document.getElementById('firsOct').value + '.';
    ip += document.getElementById('secondOct').value + '.';
    ip += document.getElementById('thirdOct').value + '.';
    ip += document.getElementById('fourthOct').value;

    console.log(ip);
}