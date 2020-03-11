function getAnimalSound(animal) {
    if(animal === undefined){
        return null;
    };

    let sound = animal.sound;

    return sound;
}

function getAverageMark(marks) {

    let sumNum = 0;

   for(let i = 0; i < marks.length; i++){
        sumNum = sumNum + Number(marks[i]);
    };

    let roundedAverage = Math.round(sumNum / marks.length);

    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / 31556952000;

    console.log(age);

    return (age >= 18);
}