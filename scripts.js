let availableOption = 3;

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}

document.getElementById('generateBtn').addEventListener("click", function (event) {
    document.getElementById("pinBox").value = rand(1000,9000);
});

const keyPadbtn = document.getElementsByClassName('button');
document.getElementById('userSubmittedPin').value = "";
for(let i = 0; i < keyPadbtn.length; i++){
    keyPadbtn[i].addEventListener("click", function (event) {

        keyPadData = event.target.innerText;

        if(keyPadData == 'C'){
            document.getElementById('userSubmittedPin').value = "";
        }else if(keyPadData == '<'){
            document.getElementById('userSubmittedPin').value = document.getElementById('userSubmittedPin').value.substring(0, document.getElementById('userSubmittedPin').value.length-1);
        }else{
            document.getElementById('userSubmittedPin').value += keyPadData;
        }

    });
}

document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault();



    let originalPin = document.getElementById("pinBox").value;
    let userPin = document.getElementById("userSubmittedPin").value;

    //validation for empty input field
    if(originalPin == ""){
        alert("Please generate pin!");
        return;
    }

    if(userPin == ""){
        alert("Please enter pin!");
        return;
    }

    availableOption = availableOption - 1;
    if(availableOption < 0 ){
        document.getElementById("submitBtn").disabled = true;
        return;
    }else {
        document.getElementById("availableTry").innerText = availableOption;
    }

    //match & show result
    if(originalPin.localeCompare(userPin) == 0){
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("errorMsg").style.display = "none";
    }else{
        document.getElementById("successMsg").style.display = "none";
        document.getElementById("errorMsg").style.display = "block";
    }

});




