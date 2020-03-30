function sleep( milliseconds){
    let e =  new Date().getTime() +  milliseconds;
    while(new Date().getTime() <=  e) {}
};

function sum(...args) {
    sleep(500);
    return args.reduce((sum, arg) => {
    return sum += arg;
    }, 0);
};

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((name, index) => name === arr2[index]);

function memorize(fn, limit){
    let memory = [];

    return function find(...numbers){
        if(memory.length > 0 && memory.some((name, index) => compareArrays(memory[index].args, numbers))){
            let indexNum = memory.findIndex((name, index, arr) => compareArrays(arr[index].args, numbers));
            let result = memory[indexNum].result;
            return result;
        }
        else{
            let result = fn(...numbers);
            memory.push({args: numbers, result: result});
            memory = memory.slice(-limit);
            return result;
        };
    };
};

const mSum = memorize(sum, 5);

function testCase(testFunction, timer){
    let testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time(timer);
    for(let i =0; i < 20; i++){
        testArray.forEach((element) => console.log(testFunction(...element)));
    };
    console.timeEnd(timer);
};

testCase(mSum, "timer");