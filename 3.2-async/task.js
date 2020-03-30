class alarmCollection{
    constructor(){
        this.alarmCollection = [];
        this.timerId;
    };

    addClock(time, callback, id){
        if(id === undefined || this.alarmCollection.some((element, index) => this.alarmCollection[index].id === id)){
            return console.error();
        }
        else{
            this.alarmCollection.push({time: time, callback: callback, id: id});
        };        
    };

    removeClack(id){
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
        this.time = `${getHours()}:${getMinutes()}`;
        return this.time;
    };

    start(){
        function checkClock(clockIndex){
            if(this.alarmCollection[clockIndex].time === getCurrentFormattedTime()){
                this.say = this.alarmCollection[clockIndex].callback;
                return this.say();
            }
            else if(this.alarmCollection[clockIndex].time === undefined){
                
            }
        };
    };
};