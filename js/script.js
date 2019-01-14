/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Hail to the King","Enter Sandman","Devil in I","The Fight Song"];
var images = ["https://upload.wikimedia.org/wikipedia/en/thumb/4/46/A7XHailtotheKing.png/220px-A7XHailtotheKing.png", "http://www.custompresets.com/uploads/8/1/9/6/81965082/s908774473352204050_p189_i18_w480.jpeg", "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/The_Devil_In_I.jpg/220px-The_Devil_In_I.jpg", "https://i.ytimg.com/vi/KUgR7KdJUUk/maxresdefault.jpg"];
var artists = ["Avenged Sevenfold","Metallica","Slipknot","Marilyn Manson"];
var songLength = ["5:14","5:31","5:55","2:25"];
var links = [];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
