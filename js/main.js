console.log('main.js sourced');


// Append a <div> element when clicking GENERATE
$(document).ready(function(){

//var genButton = document.getElementById('gen'), count = 0;    
$('button').on('click', function() { 
$('.inner').append('<div class="generated red"></div>');
$('.generated').innerHTML('<p>' + (count + 1) + '</p>');

});
// Create <p> inside the <div> that counts #generateBtn clicks

// Create two button elements in that same div
// Buttons should read SWAP and DELETE

// Add event listeners for the buttons

// SWAP button changes parent element, the <div> from red to yellow
// Clicking SWAP again will toggle this back

// Use .toggleClass() to achieve this

// DELETE button will remove parent <div> and all contents
});