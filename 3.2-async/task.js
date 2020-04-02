class alarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id){
        if(id === undefined || this.alarmCollection.some((element, index) => this.alarmCollection[index].id === id)){
            return console.error("Ошибка");
        };
        
        return this.alarmCollection.push({time, callback, id});
    };

    removeClock(id){
        this.alColsave = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter((element, index) => this.alarmCollection[index].id != id);
        return this.alColsave === this.alarmCollection;
    };

    getCurrentFormattedTime(){
        let worldTime = new Date();
        return `${("0" + worldTime.getHours()).slice(-2)}:${("0" + worldTime.getMinutes()).slice(-2)}`;
    };

    checkClock(clockIndex){
        if(this.alarmCollection[clockIndex].time === this.getCurrentFormattedTime()){
            return this.alarmCollection[clockIndex].callback();
        };
    };

    start(){
        //function 
        if(this.timerId === null){
            this.timerId = setInterval(this.alarmCollection.forEach((element, index) => {
                this.checkClock(index);
            }), 60000);
        };
    };

    stop(){
        if(this.timerId != underfined){
            clearInterval(timerId);
            this.timerId = null;
        }
    };

    printAlarms(){
        this.alarmCollection.forEach((name, index) => console.log(`Будильник ${this.alarmCollection[index].id} заведён на ${this.alarmCollection[index].time}`));
    };

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    };
};

let testCase = new alarmClock();

testCase.addClock("20:58", () => console.log("Скоро спать"), 1);
testCase.addClock("20:59", () => { console.log("Пора готовиться ко сну!"); testCase.removeClock(2)}, 2);
testCase.addClock("21:00", () => console.log("Иди умываться"), 3);
testCase.addClock("21:01", () => {
    console.log("Иди спать, завтра рано на работу!");
    testCase.clearAlarms();
    testCase.printAlarms();
},4);
//testCase.addClock("20:30", () => console.log("Иди спать, завтра рано на работу!"), 1);
testCase.printAlarms();
testCase.start();