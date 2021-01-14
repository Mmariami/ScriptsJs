 // 5 Task //

    var person = {
        name : "john" ,
        lastname : "doe",
        age : 50,
        eyecolour : "blue"
    };
    console.log(person.eyecolour)
// 4 task //
 let names = ['name', 25, 50, 'age', 'surname' , [50,500] ];
 console.log(names[5][1]);

// task 6//
var dates = [11,27,8,31,9,24,30];
for (let i = 0; i< dates.length; i++) {
    console.log(dates[i]);
}
// 1 task //
 let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche'];
 var x = 1;
 while (x<cars.length){
     console.log(cars[x]);
     x++;
 }

//  task 2 // 

var saxeli = ['mariami', 'nata', 'kristina', 'ana', 'gio'];
for (let y =0; y <saxeli.length; y++) if (saxeli[y].length > 3) {
    console.log (saxeli[y]);
}

// task 3 //

let NumbersMassive = [2,3,55,109,708,48,11,79];
for (let n = 0; n < NumbersMassive.length; n++) {
    if (NumbersMassive[n] % 2 == 0) {
        console.log(NumbersMassive[n]);
    } 
}
// 3.2 // 

for (let n = 0; n < NumbersMassive.length; n++) {
    if (NumbersMassive[n] % 2 == 1) {
        console.log(NumbersMassive[n]);
    } 
}
// task 7 //
var massive = [5,25,89,120,36];
massive.push('javascript', 'python');
console.log(massive); 
massive.unshift('html','css');
console.log(massive);
console.log(massive.length);
massive.shift();
massive.pop();
console.log(massive);
