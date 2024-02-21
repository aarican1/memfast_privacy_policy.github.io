// window.onload = function() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("metin").innerHTML = this.responseText;
//         }
//     };
//     xhr.open("GET", "privacypolicy.txt", true);
//     xhr.send();
// };

$("document").ready(function(){
    $.get("privacypolicy.txt", function(data) {
        $("p").text(data);
    });
})