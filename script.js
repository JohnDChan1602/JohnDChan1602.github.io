// Counter
let countNumber = 0;

// Achievement List
const ach = [
    {number: 1, message: "And so, a clicker is born"},
    {number: 10, message: "The beginning of curiosity"},
    {number: 25, message: "Making good progress"},
    {number: 50, message: "Halfway to perfection"},
    {number: 100, message: "Full marks"}
];

// Text Popup
function updateCounter(){

    document.getElementById("count").textContent = countNumber;

    // Achievement Popup
    const achPopUp = ach.find(achievement =>ach.number === countNumber);

    if(achPopup){
        // Slight Delay after Reaching Target Number
        setTimeout(() => {
            window.alert(achPopUp.message);
        }, 100);
    }
}

function increaseCounter(){
    countNumber++;
    updateCounter();
}



