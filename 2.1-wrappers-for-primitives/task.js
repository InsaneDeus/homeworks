"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    let check = {
        percent: percent,
        contribution: contribution,
        amount: amount,
        date: (date)
    };
    
    for(let key in check){
        if(isNaN(check[key])){
            let sayError = `Параметр ${key} содержит неправильное значение ${check[key]}.`;
        
            console.log(sayError);
            return sayError;
        };
    }; 
    
    let bodyCredit = Number(amount) - Number(contribution); 

    let numPercent = Number(percent) / 100;

    let dateNow = new Date();
    let yearDate = date.getFullYear() - dateNow.getFullYear();
    let monthDate = 12 + ((date.getMonth() + 1) - (dateNow.getMonth() + 1));
    let month = (yearDate * 12) + (monthDate);

    let monthPercent = numPercent / 12;

    let monthlyFee = bodyCredit * (monthPercent + monthPercent / (Math.pow((1 + monthPercent), month) - 1));

    let totalFee = monthlyFee * month;
    totalFee = totalFee.toFixed(2);

    console.log(totalFee);

    return totalFee;
};

function getGreeting(name) {
    if(Boolean(name) == false){
        name = "Аноним";
    };

    let massage = `Привет, мир! Меня зовут ${name}.`;
    
    console.log(massage);
    return massage;
};