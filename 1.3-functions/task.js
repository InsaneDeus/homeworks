//Задание 1

function getSolutions(a, b, c){

    let D = Math.pow(b,2) - 4 * (a) * (c);

    if(D < 0){
        let say = {
             D: D,
             roots: []
            };

        return say;
    }
    else if(D === 0){
        let x1 = -(b) / (2 * (a));
        let say = {
             D: D,
             roots: [x1]
            };

        return say;
    }
    else if(D > 0){
        let x1 = (-(b) + (Math.sqrt(D))) / (2 * (a));
        let x2 = (-(b) - (Math.sqrt(D))) / (2 * (a));
        let say = { 
            D: D,
            roots: [x1, x2]
        };

        return say;
    };
};

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
        
    console.log("Вычисляем корни квадратного уравнения " + a + "x² + " + b + "x + " + c);
        
    console.log("Значение дискриминанта: " + result.D);

    if(result.D < 0){
            console.log("Уравнение не имеет вещественных корней");
        }
    else if(result.D === 0){
            console.log("Уравнение имеет один корень X₁ = " + result.roots[0]);
        }
    else if(result.D > 0){
            console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
    };
};


//Задание 2


function getAverageScore(data){

    let object = {};

    function getAverageMark(marks){
        let sumNum = 0;

        for(let i = 0; i < marks.length; i++){
            sumNum = sumNum + marks[i];
        };

        return averageNum = sumNum / marks.length;
    };

    let sumData = 0

    let numData = 0

    for(let key in data){
        object[key] = getAverageMark(data[key]);

        sumData = sumData + object[key];

        numData++
    };

    object.average = sumData / numData;

    return object;
};


//Задание 3


function getPersonData(secretData){

    let object = {
        firstName: "",
        lastName: ""
    };

    function getDecodedValue(secret){

            if(secret === 0){
                return "Эмильо";
            }
            else if(secret === 1){
                return "Родриго";
            };

    };

    object.firstName = getDecodedValue(secretData.aaa)
    object.lastName = getDecodedValue(secretData.bbb)

    return object;
};