/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Hail to the King","Enter Sandman","Devil in I","The Fight Song"];
var images = ["https://upload.wikimedia.org/wikipedia/en/thumb/4/46/A7XHailtotheKing.png/220px-A7XHailtotheKing.png", "http://www.custompresets.com/uploads/8/1/9/6/81965082/s908774473352204050_p189_i18_w480.jpeg", "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/The_Devil_In_I.jpg/220px-The_Devil_In_I.jpg", "https://i.ytimg.com/vi/KUgR7KdJUUk/maxresdefault.jpg"];
var artists = ["Avenged Sevenfold","Metallica","Slipknot","Marilyn Manson"];
var songLength = ["5:14","5:31","5:55","2:25"];
var link= ["https://www.youtube.com/watch?v=DelhLppPSxY", "https://www.youtube.com/watch?v=CD-E-LDc384", "https://www.youtube.com/watch?v=XEEasR7hVhA&has_verified=1", "https://www.youtube.com/watch?v=9GFI6Rf-IkI"]; 



function displaySongInfo(){
 songs.forEach(function(element){
    $("#songs").append("<li>"+element+"</li>");
    
});
images.forEach(function(element2){
    $("#images").append("<img src="+ element2+">");
});
artists.forEach(function(element3){
    $("#artists").append("<li>"+element3+"</li>");
    
});
songLength.forEach(function(element4){
    $("#lengths").append("<li>"+element4+"</li>");
    
});
link.forEach(function(element5){
    $("#links").append("<a href="+element5+">"+"Listen to this bop!"+"</a");
    
});

}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
 var userInput = $("#song").val();
         songs.push(userInput);
    var userInput2 = $("#artist").val();
         artists.push(userInput2);
    var userInput3 = $("#lengths").val();
        songLength.push(userInput3);
    var userInput4 = $("#image").val();
         images.push(userInput4);
    var userInput5 = $("#link").val();
         link.push(userInput5);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
  console.log(songs[0]);  
    displaySongInfo();
});

displaySongInfo();
