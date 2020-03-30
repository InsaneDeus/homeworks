

function sleep( milliseconds){
    let e =  new Date().getTime() +  milliseconds;
    while(new Date().getTime() <=  e) {}
   }
   
   function sum( ...args) {
       //sleep(500);
       return args.reduce((sum, arg) => {
       return sum += arg;
       }, 0);
      }
   
   //console.log(sum(3, 4))
   
   function compareArrays( arr1, arr2 ){
       if(arr1.length === arr2.length){
           return arr1.every((name, index) => name === arr2[index]);
       }
       else{
           return false;
       };
   };
   
   //console.log(compareArrays([1,2,4], [1,2,3]));
   
   function memorize(fn, limit) {
       let memory = [];
   
       function find(...arguments){
   
           if(memory.length === 0){
                   let result = fn(arguments);
                   memory.push({args: arguments, result: result});
                   return result;
           }
           else{
               for(let i = 0; i < memory.length; i++){
                   if(compareArrays(arguments, memory[i].args) === true && memory.length > 0){
                       let result = memory[i].args;
                       return result;
                   }
                   else if(compareArrays(arguments, memory[i].args) === false){
                       
                       let result = fn(arguments);
                       memory.push({args: arguments, result: result});
                       memory = memory.slice(-limit);
                       return result;
                   };
               };
           };
       };
   
      return find;
    };
   
   
   
   const mSum = memorize(sum, 5);
   
   //console.log(mSum(3, 7, 6));
   //console.log(mSum(3, 7, 6));
   //console.log(mSum(1, 7, 1));
   //console.log(mSum(1, 7, 2));
   //console.log(mSum(1, 7, 3));
   //console.log(mSum(1, 7, 4));
   //console.log(mSum(1, 7, 5));
   //console.log(mSum(1, 7, 6));
   //console.log(mSum(1, 7, 7));
   
   function testCase(testFunction, timer){
       let testArray = [ [1,2,3], [1,2], [1,2], [1,2,3], [9,5,2,4] ];
       console.time(timer);
       for(let i =0; i < 20; i++){
           testArray.forEach((element) => console.log(testFunction(...element)));
           if(i === 19){
               console.timeEnd(timer);
           };
       };
   }
   
   testCase(mSum, "timer");
   
   /*При простом вызове функции скорость выше
    у оптимизированной версии на 10 000 мс 
    (40 000 у mSum и 50000 у sum), тогда как при
     вызове функции без замедления ситуация 
     обратная(минимальное значение mSum 31, а sum 27)  */