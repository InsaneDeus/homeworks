//Задание №1

class Weapon{
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        
        this.maxDurability = durability;
    };
    takeDamage(damage){
        this.durability = this.durability - damage;
        if(this.durability < 0){
            this.durability = 0;
        };
    };
    getDamage(){
        if(this.durability >= this.maxDurability / 100 * 30){
            return this.attack;
        }
        else if(this.durability === 0){
            return 0;
        }
        else if(this.durability < this.maxDurability / 100 * 30){
            return this.attack / 2;
        };
    };
    isBroken(){
        if(this.durability > 0){
            return false;
        }
        else{
            return true;
        };
    };
};

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const stick = new Weapon("Посох", 8, 300, 2);

const longBow = new Weapon("Длинный лук", 15, 200, 4);
const axe = new Weapon("Секира", 27, 800, 1);
const stormStick = new Weapon("Посох бури", 10, 300, 3);

sword.takeDamage(20);
console.log(sword.durability);
console.log(sword.getDamage());
console.log(sword.isBroken());

knife.takeDamage(300);
console.log(knife.durability);
console.log(knife.getDamage());
console.log(knife.isBroken());

stick.takeDamage(400);
console.log(stick.durability);
console.log(stick.getDamage());
console.log(stick.isBroken());

arm.takeDamage(100);
console.log(arm.durability);
console.log(arm.getDamage());
console.log(arm.isBroken());

//Задание №2

class Arm extends Weapon{
    constructor(){
        super("Рука", 1, Infinity, 1);
    };
};

class Bow extends Weapon{
    constructor(){
        super("Лук", 10, 200, 3);
    };
};

class Sword extends Weapon{
    constructor(){
        super("Меч", 25, 500, 1);
    };
};

class Knife extends Weapon{
    constructor(){
        super("Нож", 5, 300, 1);
    };
};

class Stick extends Weapon{
    constructor(){
        super("Посох", 8, 300, 2);
    };
};



class LongBow extends Bow{
    constructor(){
        super("Длинный лук", 15, 200, 4);
    };
};

class Axe extends Sword{
    constructor(){
        super("Секира", 27, 800, 1);
    };
};

class StormStick extends Stick{
    constructor(){
        super("Посох бури", 10, 300, 3);
    };
};

const arm2 = new Arm();

console.log(arm2.name);
console.log(arm2.attack);
console.log(arm2.durability);
console.log(arm2.range)

const stormStick2 = new StormStick();

console.log(stormStick2.name);
console.log(stormStick2.attack);
console.log(stormStick2.durability);
console.log(stormStick2.range)

//Задание №3

class StudentLog{
    constructor(name){
        this.name = name;

        this.sub = {
            algebra: [],
            math: [],
            geometry: [],
        };
        
    };
    getName(){
        return this.name;
    };
    addGrade(grade, subject){
        this.grade = grade;
        this.subject = subject;
        if(this.sub[this.subject] != undefined){
            if(this.grade <= 5 && this.grade > 0){
                this.sub[this.subject].push(this.grade);
            }
            else{
                console.log(`Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5.`);
            };
        }
        else{
            console.log(`Вы вытались выбрать предмет "${this.subject}". Такого предмета нет в списке.`)
        }
        return this.sub[this.subject].length;
    };
    getAverageBySubject(subject){
        this.average
        if(this.sub[subject][0] != undefined){
            let sum = 0;
            for(let i = 0; i < this.sub[subject].length; i++){
                sum = sum + this.sub[subject][i];
            };
            this.average = sum / this.sub[subject].length;
            return this.average;
        }
        else{
            this.average = 0
            return this.average;
        };
    };
    getTotalAverage(){
        this.sumSub = 0;
        this.longSubObj = 0
        for(let key in this.sub){
            if(this.getAverageBySubject(key) != 0){
                this.sumSub = this.sumSub + this.getAverageBySubject(key);
                this.longSubObj = this.longSubObj + 1;
            }
        };
        this.averageSub = this.sumSub / this.longSubObj;
        if(this.averageSub === NaN){
            return 0;
        }
        return this.averageSub;
    };
};

const log = new StudentLog("Олег Никифоров");
console.log(log.getName());

log.addGrade(2, "algebra");
log.addGrade(4, "algebra");
log.addGrade(5, "geometry");
log.addGrade(4, "geometry");

console.log(log.addGrade(5, "geometry"));
console.log(log.getAverageBySubject("geometry"));
console.log(log.getTotalAverage());