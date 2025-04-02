// Counter
let countNumber = 0;

// Text Popup
function updateCounter(){

    document.getElementById("count").textContent = countNumber;

    if(countNumber === 1){
        // Slight Delay after Reaching Target Number
        setTimeout(() => {
            window.alert("And so, a clicker is born");
        }, 100);
    }
    else if(countNumber === 10){
        // Slight Delay after Reaching Target Number
        setTimeout(() => {
            window.alert("The beginning of curiosity");
        }, 100);
    }
    else if(countNumber === 25){
        // Slight Delay after Reaching Target Number
        setTimeout(() => {
            window.alert("Making good progress");
        }, 100);
    }
}

function increaseCounter(){
    countNumber++;
    updateCounter();
}

function decreaseCounter(){
    countNumber--;
    updateCounter();
}

function resetCounter(){
    countNumber = 0;
    updateCounter();
}

