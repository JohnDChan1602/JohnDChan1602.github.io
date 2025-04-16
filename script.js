// Counter
let countNumber = 0;

// Invisible Images
var img = document.getElementById("puppy");
img.style.visibility = 'hidden';

// Achievement List
const ach = [
    {number: 1, message: "And so, a clicker is born"},
    {number: 10, message: "The beginning of curiosity"},
    {number: 25, message: "Making good progress"},
    {number: 50, message: "Halfway to perfection"},
    {number: 100, message: "Full marks"},
    {number: 125, message: "Wait, there's more?"},
    {number: 150, message: "Keep going"},
    {number: 175, message: "Where does this go?"},
    {number: 200, message: "Here! Have a puppy!"}
];

// Text Popup
function updateCounter(){

    document.getElementById("count").textContent = countNumber;

    // Achievement Popup
    const achPopUp = ach.find(ach => ach.number === countNumber);

    if(achPopUp){
        // Slight Delay after Reaching Target Number
        setTimeout(() => {
            window.alert(achPopUp.message);
        }, 100);
    }

    if(number = 200){
        showImage();
    }   
}

// Increasing COunter
function increaseCounter(){
    countNumber++;
    updateCounter();
}

// Showing Image
function showImage(){
    var img = document.getElementById("puppy");
    img.style.visibility = 'visible';
}