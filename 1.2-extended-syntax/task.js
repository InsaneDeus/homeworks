function getResult(a,b,c){

    let d = Math.pow(b,2) - 4 * (a) * (c);
    let xOne
    let x
    if(d < 0){
        x = [];
        return x;
    }
    else if(d === 0){
        x = [-((b) / (2 * (a)))];

        return x;
    }

    else if(d > 0){
        let xTwo

        xOne = (-(b) + (Math.sqrt(d))) / (2 * (a));
        xTwo = (-(b) - (Math.sqrt(d))) / (2 * (a));

        x = [xOne, xTwo];

        return x;
    };
};

function getAverageMark(marks){

    let sumNum = 0;
    if(marks.length === 0){
        console.log("Колличество оценок равно нулю");
        return 0;
    }
    else if(marks.length > 5){
        console.log("Колличество оценок больше 5");
        marks.splice(5);
    };

    for (let i = 0; i < marks.length; i++){
        sumNum = sumNum + marks[i];
    };

    let num = sumNum / marks.length;

    return num;
};

function askDrink(name,dateOfBirthday){
    
    let date = new Date();
    let age = date.getFullYear() - dateOfBirthday.getFullYear();

    if(age < 18){
        let young = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!"
        return young;
    }
    else{
        let old = "Не желаете ли олд-фэшн, " + name + "?"
        return old;
        };
};