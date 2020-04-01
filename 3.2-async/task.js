class alarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId;
    };

    addClock(time, callback, id){
        if(id === undefined || this.alarmCollection.some((element, index) => this.alarmCollection[index].id === id)){
            return console.error("Ошибка");
        }
        else{
            this.alarmCollection.push({time: time, callback: callback, id: id});
        };
    };

    removeClock(id){
        this.alColsave = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter((element, index) => this.alarmCollection[index].id != id);
        if(this.alColsave === this.alarmCollection){
            return false;
        }
        else{
            return true;
        };
    };

    getCurrentFormattedTime(){
        let worldTime = new Date()
        this.time = `${worldTime.getHours()}:${worldTime.getMinutes()}`;
        return this.time;
    };

    start(){
        this.checkClock = (clockIndex) => {
            console.log(clockIndex.time)
            if(clockIndex.time === getCurrentFormattedTime()){
                let say = clockIndex.callback;
                return say;
            };
        };
        if(this.timerId === undefined){
            this.timerId = setInterval(this.alarmCollection.forEach((element, index) => {
                this.checkClock(this.alarmCollection[index]);
            }), 60000);
        };
    };

    stop(){
        if(this.timerId != underfined){
            clearInterval();
            this.timerId = "";
        }
    };

    printAlarms(){
        this.alarmCollection.forEach((name, index) => console.log(`Будильник ${this.alarmCollection[index].id} заведён на ${this.alarmCollection[index].time}`));
    };

    clearAlarms(){
        clearInterval;
        this.alarmCollection = [];
    };
};

let testCase = new alarmClock();

testCase.addClock("16:58", () => console.log("Скоро спать"), 1);
testCase.addClock("16:59", () => { console.log("Пора готовиться ко сну!"); testCase.removeClock(2)}, 2);
//testCase.addClock("15:11", () => console.log("Иди умываться"), 3);
//testCase.addClock("15:50", () => {
//    console.log("Иди спать, завтра рано на работу!");
 //   testCase.clearAlarms();
//    testCase.printAlarms();
//},3);
//testCase.addClock("14:05", () => console.log("Иди спать, завтра рано на работу!"), 1);
testCase.printAlarms();
testCase.start();


console.log(testCase.alarmCollection);