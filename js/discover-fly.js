
//Code for first class tickets
let firstClassIncrease = document.getElementById("first-class-increase");
firstClassIncrease.addEventListener('click', function(){
    firstClassSeatCount(true);
});
let firstClassDecrease = document.getElementById("first-class-decrease");
firstClassDecrease.addEventListener('click', function(){
    firstClassSeatCount(false);
});

function firstClassSeatCount(isIncrease){
    let inputFirstClass = document.getElementById("input-first-class").value;
    let inputFirstClassCount = parseInt(inputFirstClass);
    
    if(isIncrease == true){
        inputFirstClassCount++;
        
    }
    else if(isIncrease == false && inputFirstClassCount > 0){
        inputFirstClassCount--;
    }

    document.getElementById("input-first-class").value = inputFirstClassCount;
    document.getElementById("first-class-count").innerText = inputFirstClassCount;
    let firstclassTotalPrice = inputFirstClassCount * 150;
    document.getElementById("firstclass-total-price").innerText ='$ ' + firstclassTotalPrice;
    calculateTotal();  
}


//Code for economy class tickets
let economyClassIncrease = document.getElementById("economy-class-increase");
economyClassIncrease.addEventListener('click', function(){
    economyClassSeatCount(true);
});

let economyClassDecrease = document.getElementById("economy-class-decrease");
economyClassDecrease.addEventListener('click', function(){
   economyClassSeatCount(false);
});

function economyClassSeatCount(isIncrease){
    let inputEconomyClass = document.getElementById("input-economy-class").value;
    let inputEconomyClassCount = parseInt(inputEconomyClass);
    
    if(isIncrease == true){
        inputEconomyClassCount++;
    }
    else if(isIncrease == false && inputEconomyClassCount > 0){
        inputEconomyClassCount--;
    }
    document.getElementById("input-economy-class").value = inputEconomyClassCount;
    document.getElementById("economy-class-count").innerText = inputEconomyClassCount;
    let economyClassTotalPrice = inputEconomyClassCount*100;
    document.getElementById("economy-class-total-price").innerText ='$ ' + economyClassTotalPrice;
    calculateTotal();
}


//Total price calculation
function calculateTotal(){
    let inputFirstClass = document.getElementById("input-first-class").value;
    let inputFirstClassCount = parseInt(inputFirstClass);
    let inputEconomyClass = document.getElementById("input-economy-class").value;
    let inputEconomyClassCount = parseInt(inputEconomyClass);
    let subtotalAmount = inputFirstClassCount * 150 + inputEconomyClassCount * 100;
    document.getElementById("subtotal-amount").innerText = subtotalAmount;
    let vat = subtotalAmount * 0.1;
    document.getElementById("vat").innerText = vat;
    let totalAmount = subtotalAmount + vat;
    document.getElementById("total-amount").innerText = totalAmount;
}

//Confirmation
let bookNow = document.getElementById("bookNow");
bookNow.addEventListener('click', function(){
    document.getElementById("mainDiv").style.display = "none";
    document.getElementById("confirm").style.display = "block";
});

